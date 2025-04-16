"use client";
import { Team } from "@/types/team";
import Image from "next/image";
import React from "react";

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-1">
      <Image
        src={`https:${team.logo}`}
        alt={`${team.externalId} match`}
        width={100}
        height={100}
      />
      <h1 className="font-semibold text-3xl">{team.name}</h1>
    </div>
  );
};

export default TeamCard;
