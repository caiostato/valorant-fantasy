"use client";
import { formatTimeLeft } from "@/lib/utils";
import { Match } from "@/types/match";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

interface MatchesBarItemProps {
  match: Match;
}
const MatchesBarItem = ({ match }: MatchesBarItemProps) => {
  const matchTime = formatTimeLeft(match.dateTime);

  const onClickCard = () => {
    redirect(`/match/${match.externalId}`);
  };
  return (
    <div
      onClick={onClickCard}
      className="w-full h-fit bg-white flex flex-col justify-start gap-4 border rounded-md border-neutral-300 p-4 cursor-pointer hover:bg-neutral-50 transition-colors shadow-sm"
    >
      <div className="w-full flex flex-row  gap-2 justify-between items-center">
        <div className="w-full flex flex-row gap-2 items-center justify-start">
          <Image
            src={match.logoUrl}
            alt={`${match.externalId} match`}
            width={25}
            height={25}
          />
          <p className=" text-sm font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
            {match.eventStage.split(":")[1]}
          </p>
        </div>
        <p
          className={`text-sm font-semibold whitespace-nowrap ${
            matchTime === "Live"
              ? "text-red-500"
              : matchTime === "Completed"
              ? "text-neutral-700"
              : "text-green-700"
          }`}
        >
          {matchTime}
        </p>
      </div>
      <div className="w-full flex flex-col gap-2 justify-start items-start">
        {match.teams?.map((team) => (
          <div
            key={team.externalId}
            className=" h-fit flex flex-row gap-2 items-center"
          >
            <Image
              src={`https://${team.logo}`}
              alt={`${team.name} logo`}
              width={20}
              height={20}
            />
            <p className="text-sm font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
              {team.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesBarItem;
