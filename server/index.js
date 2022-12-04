const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./configs/config');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => {
        console.log('Successfully connected to the database');
},
    (error) => {
        console.log('Could not connect to the database: ' + error);
    }
);

app.listen(process.env.port || 4000, function () {
    console.log('Server is listening on port 4000');
});