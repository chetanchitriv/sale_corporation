const mongoose = require("mongoose")



// var database = mongoose.connect("mongodb://127.0.0.1/ARsecurity",
var database = mongoose.connect("mongodb+srv://shank:shank@cluster0.4ws36.mongodb.net/arsec?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.log(err);
    }
    console.log('connected to database')

});