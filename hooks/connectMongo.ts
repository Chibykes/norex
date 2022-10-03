import mongoose from 'mongoose';
const connectMongo = async () => mongoose.createConnection(process.env.MONGO_URI!);

export default connectMongo;