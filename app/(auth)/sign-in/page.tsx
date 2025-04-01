import React from "react";
import AuthForm from "@/components/AuthForm";
const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <AuthForm type="sign-in" />
    </div>
  );
};

export default page;
