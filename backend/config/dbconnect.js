const mongoose = require('mongoose');
const { mongoURI } = require('./keys.ignore');

mongoose
  .connect(mongoURI, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Error connecting to database', err));
