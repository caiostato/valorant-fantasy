"use client";
import { Button } from "@/components/ui/button";
import { Radio } from "lucide-react";
import React from "react";

const LiveButton = () => {
  const onClickNavToLiveMatch = () => {
    const element = document.getElementById("live");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Add offset after smooth scroll
    }
  };
  return (
    <Button
      onClick={onClickNavToLiveMatch}
      variant={"default"}
      className="text-base cursor-pointer flex flex-row justify-center items-center"
    >
      Go to live match
      <Radio />
    </Button>
  );
};

export default LiveButton;
