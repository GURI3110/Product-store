import mongoose from "mongoose";
 const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`gurpreeet: ${error.message}`);
		process.exit(1); // process code 1 code means exit with failure, 0 means success
	}
};
export default connectDB;
// $env:MONGO_URI="mongodb+srv://gs3008516:gs3008516@cluster0.lgqb9ar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; npm run start