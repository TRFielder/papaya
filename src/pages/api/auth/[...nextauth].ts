import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/utils/dbConnect";
import { Users } from "@/utils/apiHandler";
import userSchema, { IUser } from "@/models/user";

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OAUTH_ID!,
			clientSecret: process.env.GOOGLE_OAUTH_SECRET!,
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 12 * 60 * 60, // twelve hours
	},
	callbacks: {
		async signIn({ user, profile }) {
			// Create an object for this user
			const newUser: IUser = {
				name: user.name!, // Non-null assertion
				email: profile?.email!, // Non-null assertion
			};
			await dbConnect();
			console.warn("Attempting to query the database");

			const dbResp: Array<any> = await userSchema.find({ email: newUser.email });

			if (dbResp.length === 0) {
				const userResponse = await Users.addUser(newUser);
				console.log(userResponse);
			} else {
				console.log("The user already exists, you can just log in");
			}
			return true;
		},
	},
};

export default NextAuth(authOptions);
