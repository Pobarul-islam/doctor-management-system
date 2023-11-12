const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// routes
app.use('/api/v1/user', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// port
const port = process.env.PORT || 5000;

// listen on port 5000
app.listen(port, () => {
  console.log(
    `server running in ${process.env.DEV_MODE} on port http://localhost:${process.env.PORT}`
  );
});
