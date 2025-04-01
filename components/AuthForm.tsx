"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/Input";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { useForm } from "react-hook-form";
import Toast from "./ui/Toast";
import { useRouter } from "next/navigation";
type FormType = "sign-up" | "sign-in";
type toastType = "success" | "error" | "info" | "warning";

const AuthForm = ({ type }: { type: FormType }) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const router = useRouter();
  const [toastMSG, setToastMSG] = useState<string>("");
  const [toastColor, setToastColor] = useState<toastType>("success");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const AuthSubmit = async (data: any) => {
    if (type === "sign-up") {
    } else {
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log("Errors:", errors);
      setToastMSG("Please fix the errors in the form.");
      setToastColor("error");
      setShowToast(true);
    }
  }, [errors]);

  return (
    <>
      <div className="p-8 w-1/3 flex flex-col justify-center items-center gap-y-3 bg-gradient-to-b from-[#1A1C20] to-[#08090D] border border-[#4B4D4F] rounded-[10px] shadow-[0px_0px_70px_0px_#00000033]">
        {/* Header */}
        <header className="flex w-full justify-center text-white gap-x-2">
          <Image src="/assets/logo.svg" alt="logo" height={32} width={38} />
          <h3 className="text-[#DDDFFF] font-semibold">PrepWise</h3>
        </header>
        <p className="w-full text-center text-white font-semibold">
          Practice job interviews with AI
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(AuthSubmit)}
          className="flex flex-col gap-y-5 text-white w-full"
        >
          {/* Full Name (Only for Sign-Up) */}
          {type === "sign-up" && (
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#D6E0FF]" htmlFor="fullname">
                Full Name
              </label>
              <Input
                {...register("name", {
                  required: "Full name cannot be empty.",
                })}
                id="fullname"
                placeholder="Enter your full name"
                type="text"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {String(errors.name.message)}
                </span>
              )}
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[#D6E0FF]" htmlFor="email">
              Email
            </label>
            <Input
              {...register("email", {
                required: "Email cannot be empty.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address.",
                },
              })}
              id="email"
              placeholder="Enter your email"
              type="email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {String(errors.email.message)}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[#D6E0FF]" htmlFor="password">
              Password
            </label>
            <Input
              {...register("password", {
                required: "Password cannot be empty.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
                validate: {
                  hasUpperCase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must contain at least one uppercase letter.",
                  hasLowerCase: (value) =>
                    /[a-z]/.test(value) ||
                    "Password must contain at least one lowercase letter.",
                  hasNumber: (value) =>
                    /[0-9]/.test(value) ||
                    "Password must contain at least one number.",
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*]/.test(value) ||
                    "Password must contain at least one special character (!@#$%^&*).",
                },
              })}
              id="password"
              placeholder="Enter your password"
              type="password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {String(errors.password.message)}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit">
            {type === "sign-up" ? "Create an account" : "Login to my account"}
          </Button>

          {/* Link to Switch Forms */}
          <Link
            className="w-full text-center text-sm text-[#D6E0FF] hover:underline"
            href={`/${type === "sign-up" ? "sign-in" : "sign-up"}`}
          >
            {type === "sign-up" ? "Have an account?" : "Don't have an account?"}
          </Link>
        </form>
      </div>

      {/* Toast Notification */}
      {showToast && <Toast message={toastMSG} type={toastColor} />}
    </>
  );
};

export default AuthForm;
