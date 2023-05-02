const mongoose=require('mongoose');
const HospitalSchema=new mongoose.Schema({
    Name:String,
    ContactNumber:Number,
    email:String,
    password:String,
    website:String,
    
    city:String,
    address:String
});
module.exports=mongoose.model('Hospitals',HospitalSchema);
