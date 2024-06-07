import mongoose from "mongoose";

const connection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (err) {
        console.log("Error while Connecting to Database", err.message);
    }
}

export default connection;  