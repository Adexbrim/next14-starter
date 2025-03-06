const { default: mongoose } = require("mongoose")

const connection = {};

export const connectToDb = async () => {
    try {
        if(connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        console.log("Creating new connection to MongoDB...");
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB successfully");
        // Add this to your connectToDb function temporarily
        //console.log("MongoDB URI:", process.env.MONGO.replace(/:[^:]*@/, ':****@')); // Logs URI safely
    } catch (error) {
        console.log("MongoDB connection error:", error);
        throw error;
    }
};