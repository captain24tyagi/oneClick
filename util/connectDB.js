import mongoose from "mongoose"
const DB_URI = process.env.DB_URI

const connectDB = () => mongoose.connect(DB_URI, () => console.log("connected to mongo!"))
export default connectDB
