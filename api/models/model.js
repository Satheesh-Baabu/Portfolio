const mongoose = require('mongoose')

const sampleschema = mongoose.Schema({
    name:String,
    pass:String
})

const samplemodel = mongoose.model("sample",sampleschema);
module.exports = samplemodel;