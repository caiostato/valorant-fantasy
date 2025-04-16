"use client";
import React from "react";
import { Button } from "./ui/button";
// #FF4655
const AuthButtons = () => {
  const onClickSignIn = () => {};
  const onClickSignUp = () => {};

  return (
    <div className="w-fit h-fit flex flex-row gap-4">
      <Button
        onClick={onClickSignIn}
        size={"lg"}
        variant={"ghost"}
        className=" text-base cursor-pointer duration-150 ease-in hover:bg-neutral-200"
      >
        Sign In
      </Button>
      <Button
        onClick={onClickSignUp}
        size={"lg"}
        variant={"default"}
        className="bg-[#FF4655] text-base cursor-pointer hover:bg-[#FF4655] duration-150 ease-in"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default AuthButtons;
