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
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;
      const newMessage = new Message({
        name,
        email,
        subject,
        message
      });
      
      await newMessage.save();
      res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).json({ error: 'Error sending message. Please try again.' });
    }
  } else if (req.method === 'GET') {
    try {
      const messages = await Message.find().sort({ createdAt: -1 });
      res.json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Error fetching messages' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 