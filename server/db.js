// db.js

const mongoose = require('mongoose');

// Async function to connect to MongoDB Atlas
const connectDB = async () => {
  try {
    // Connection string: Replace with your actual username, password, and database name if different
    const conn = await mongoose.connect(
      'mongodb+srv://User:User123@cluster0.pta72ov.mongodb.net/Linkedin_clone?retryWrites=true&w=majority&appName=Cluster0'
    );

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

// Exporting the function to use it in index.js
module.exports = connectDB;


//*****************************************************older version of code ******************************** */
/*const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://User:User123@cluster0.pta72ov.mongodb.net/Linkedin_clone?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB
*/
// mongodb+srv://User:User123@cluster0.pta72ov.mongodb.net/Linkedin_clone?retryWrites=true&w=majority&appName=Cluster0