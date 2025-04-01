import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDB } from "@/database/db";
import User from "@/database/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { success: false, message: "Email and password are required" },
      { status: 500 }
    );
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate a JWT token
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7 days",
    });
    // Set the token in an HTTP-only cookie
    const response = NextResponse.json(
      { success: true, user, token },
      { status: 200 }
    );
    response.headers.set(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=604800;`
    );
    return response;
  } catch (error) {
    console.error("Error during sign-in:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
