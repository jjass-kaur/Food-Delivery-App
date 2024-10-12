import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jaskiratkaur:0987654321@cluster0.mozyw.mongodb.net/food-del').then(() => console.log("DB Connected"));
}