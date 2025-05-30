import mongoose from "mongoose";
import validator from "validator";


const appointmentSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name must Contain atleast three Characters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name must Contain atleast three Characters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number must Contain exact 10 digits"],
        maxLength:[10,"Phone number must Contain exact 10 digits"]
    },
    aadhar:{
        type:String,
        required:true,
        minLength:[12,"AAdhar Must Contain 12 Digits"],
        maxLength:[12,"AAdhar Must Contain 12 Digits"]
    },
    dob:{
        type:Date,
        required:[true,"DOB is Required!"],
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"],
    },
    appointment_date:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    doctor:{
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        }
    },
    hasVisited:{
        type:Boolean,
        default:false,
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending",
    },
  


});

export const Appointment=mongoose.model("Appointment",appointmentSchema);