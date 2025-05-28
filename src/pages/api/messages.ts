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
  try {
    console.log('Checking MongoDB connection...');
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    if (mongoose.connections[0].readyState) {
      console.log('Using existing MongoDB connection');
      return;
    }

    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    console.log('API Route accessed, method:', req.method);
    await connectDB();

    if (req.method === 'POST') {
      console.log('Received message data:', {
        ...req.body,
        email: req.body.email ? '***@***.***' : 'missing'
      });

      if (!req.body.name || !req.body.email || !req.body.message) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          details: {
            name: !req.body.name ? 'Name is required' : null,
            email: !req.body.email ? 'Email is required' : null,
            message: !req.body.message ? 'Message is required' : null
          }
        });
      }

      try {
        const newMessage = new Message({
          name: req.body.name,
          email: req.body.email,
          subject: req.body.subject,
          message: req.body.message
        });
        
        console.log('Attempting to save message...');
        await newMessage.save();
        console.log('Message saved successfully');
        
        return res.status(201).json({ message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error saving message:', error);
        return res.status(500).json({ 
          error: 'Error sending message. Please try again.',
          details: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    } else if (req.method === 'GET') {
      try {
        console.log('Fetching messages...');
        const messages = await Message.find().sort({ createdAt: -1 });
        console.log(`Found ${messages.length} messages`);
        return res.status(200).json(messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
        return res.status(500).json({ error: 'Error fetching messages' });
      }
    } else {
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error('Top level error:', error);
    return res.status(500).json({ 
      error: 'Server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 