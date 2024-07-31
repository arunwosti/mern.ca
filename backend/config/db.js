// ------- logics for connecting to the database  -------
import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ostiarun55:Myfoodorder123@cluster0.qwgvfc2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("Database Connected"))
}