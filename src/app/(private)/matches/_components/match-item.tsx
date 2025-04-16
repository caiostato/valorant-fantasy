import { Card, CardContent } from "@/components/ui/card";
import { formatTimeLeft } from "@/lib/utils";
import { Match } from "@/types/match";
import { Radio } from "lucide-react";
import Image from "next/image";
import React from "react";

interface MatchItemProps {
  match: Match;
}

const MatchItem = ({ match }: MatchItemProps) => {
  const matchTime = formatTimeLeft(match.dateTime);
  return (
    <Card
      className="hover:shadow-md cursor-pointer"
      id={`${matchTime === "Live" ? "live" : ""}`}
    >
      <CardContent className="w-full h-full flex items-center justify-between gap-4  ">
        <div className="flex-1 flex flex-row gap-2 items-center justify-start ">
          <Image
            src={match.logoUrl}
            alt={`${match.externalId} match`}
            width={40}
            height={40}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <p className=" text-sm font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
              {match.eventName}
            </p>
            <p className=" text-xs font-medium text-neutral-500 whitespace-nowrap text-ellipsis overflow-hidden">
              {match.eventStage}
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center gap-4">
          {match.teams && (
            <div className="flex-1 h-fit flex flex-col gap-2 items-center">
              <Image
                src={`https://${match.teams[0]?.logo}`}
                alt={`${match.teams[0]?.name} logo`}
                width={30}
                height={30}
              />
              <p className="text-sm font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
                {match.teams[0]?.name}
              </p>
            </div>
          )}
          <p className=" w-12">VS</p>
          {match.teams && (
            <div className="flex-1 h-fit flex flex-col gap-2 items-center">
              <Image
                src={`https://${match.teams[1]?.logo}`}
                alt={`${match.teams[1]?.name} logo`}
                width={30}
                height={30}
              />
              <p className="text-sm font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
                {match.teams[1]?.name}
              </p>
            </div>
          )}
        </div>
        <div
          className={`flex-1 flex justify-end items-center text-sm font-semibold whitespace-nowrap gap-2 ${
            matchTime === "Live"
              ? "text-red-500"
              : matchTime === "Completed"
              ? "text-neutral-700"
              : "text-green-700"
          }`}
        >
          {matchTime}
          {matchTime === "Live" && (
            <Radio className="text-red-500 animate-pulse" />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchItem;
