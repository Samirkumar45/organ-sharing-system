const mongoose=require('mongoose');
const PatientSchema=new mongoose.Schema({
        firstName:String,
        lastName:String,
        email:String,
        password:String,
        age:Number,
        gender:String,
        bloodGroup:String,
        city:String,
        address:String
});
module.exports=mongoose.model('Patient',PatientSchema);


