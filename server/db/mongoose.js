var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<himani.shroff>:<Pas$word99>@ds121262.mlab.com:21262/nodejs-mongoose-deployment' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};