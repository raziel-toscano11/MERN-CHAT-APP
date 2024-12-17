import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('>>> DB is connected');
    } catch (error) {
        console.log("Error connecting to MongoDB, error.message");
    }
}

export default connectToMongoDB;