import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required : true,
        unique: true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default:"https://imgs.search.brave.com/Ry2fy8CytH8SGqU3Ku5VOn_jSzXCvvGl6Zjgrqu-96M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYXJh/ZGUuY29tLy5pbWFn/ZS9jX2xpbWl0LGNz/X3NyZ2IsZmxfcHJv/Z3Jlc3NpdmUscV9h/dXRvOmdvb2Qsd183/MDAvTVRrd05UZ3hN/VEExTmpZNU5URTBN/elkxL2Z1bm55LXBp/Y3R1cmVzLmpwZw"
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;