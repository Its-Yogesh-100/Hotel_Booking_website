
const mongoose = require("mongoose");

const connectionURI = "mongodb+srv://yogesh:root@cluster0.obzycwr.mongodb.net/mern-rooms";

mongoose.connect(connectionURI);

var connection = mongoose.connection;

connection.on('error', (err) => {
    console.error('Mongo DB connection failed:', err);
});

connection.on('connected', () => {
    console.log('MongoDB connection connected');
});

module.exports = mongoose;



