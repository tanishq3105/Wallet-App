const mongoose=require("mongoose")
const dotenv=require('dotenv')
dotenv.config();

try{
    
    mongoose.connect(process.env.MONGO_URL)
    console.log("database connected successfully");
}catch{
    console.log("database connection failed")
}


const Userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User=mongoose.model("User",Userschema)
const Account=mongoose.model("Account",accountSchema)

module.exports={
    User,Account
}