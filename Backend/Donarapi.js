const mongoose=require('mongoose');

const DonarSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    age:Number,
    gender:String,
    bloodGroup:String,
    city:String,
    address:String,
    isChecked:String,
    organ:String
});
module.exports=mongoose.model('Donar',DonarSchema);