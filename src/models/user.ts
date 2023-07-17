import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "All users must have a name"],
	},
	email: {
		type: String,
		required: [true, "All users must have an email"],
	},
});

export interface IUser {
	name: string;
	email: string;
}

export default mongoose.models.user || mongoose.model<IUser>("user", userSchema);
