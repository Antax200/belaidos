const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['https://belaidos.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// Routes
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const newMessage = new Message({
      name,
      email,
      subject,
      message
    });

    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      error: 'Server error', 
      message: error.message || 'Unknown error'
    });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 