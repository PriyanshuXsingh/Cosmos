import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    email: String,
    password: {
        type:String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

export { User };