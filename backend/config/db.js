const mongoose = require('mongoose')

const connectDB = async () => {
  console.log(process.env.MONG_URI)
    try {
        const conn = await mongoose.connect(process.env.MONG_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
      console.log(`Error: ${error.message}`.red.underline.bold);
      process.exit(1)
    }
}

module.exports = connectDB