import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://1032220097:krsnasakhaa@krsnasakhaa.lk4h0.mongodb.net/blog-app');
    console.log("DB Connected");
}