"use server";
import axios from "axios";
import { cookies } from "next/headers";

// Function to login a user
export const SignIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/auth/signin`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log("the full response: " + response.headers);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

// Function to register a new user
export const SignUp = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`/api/auth/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const isAuthenticated = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    return !!token;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};
