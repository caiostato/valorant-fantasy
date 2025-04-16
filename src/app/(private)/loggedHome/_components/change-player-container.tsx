import { Card, CardHeader } from "@/components/ui/card";
import { MoveLeft } from "lucide-react";
import React from "react";

const ChangePlayerContainer = () => {
  return (
    <Card
      className={`w-full flex flex-col justify-center items-start border border-neutral-300 transition-all hover:shadow-md rounded-md p-4   relative`}
    >
      <CardHeader className="w-full flex flex-row gap-2 items-center">
        <MoveLeft className="hover:bg-neutral-200 rounded-full cursor-pointer p-1" />
        <p className="font-semibold text-base">Player List</p>
      </CardHeader>
    </Card>
  );
};

export default ChangePlayerContainer;
