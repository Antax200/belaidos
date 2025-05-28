import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

// Message Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Prevent multiple model compilations
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Using existing MongoDB connection');
    return;
  }

  try {
    console.log('Attempting to connect to MongoDB...');
    console.log('MongoDB URI:', process.env.MONGODB_URI ? 'URI exists' : 'URI is missing');
    
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error; // Re-throw to handle it in the handler
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API Route accessed, method:', req.method);
  
  try {
    await connectDB();

    if (req.method === 'POST') {
      console.log('Received message data:', {
        ...req.body,
        email: req.body.email ? '***@***.***' : 'missing' // Hide email for privacy
      });

      try {
        const { name, email, subject, message } = req.body;
        const newMessage = new Message({
          name,
          email,
          subject,
          message
        });
        
        console.log('Attempting to save message...');
        await newMessage.save();
        console.log('Message saved successfully');
        
        res.status(201).json({ message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ 
          error: 'Error sending message. Please try again.',
          details: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    } else if (req.method === 'GET') {
      try {
        console.log('Fetching messages...');
        const messages = await Message.find().sort({ createdAt: -1 });
        console.log(`Found ${messages.length} messages`);
        res.json(messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Error fetching messages' });
      }
    } else {
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Top level error:', error);
    res.status(500).json({ 
      error: 'Server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 