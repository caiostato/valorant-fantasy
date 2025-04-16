"use client";
import { Player } from "@/types/player";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

interface PlayerItemProps {
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<string | null>>;
}

const PlayerItem = ({ player, setPlayer }: PlayerItemProps) => {
  const role = "duelist";

  const onClickEditPlayer = () => {
    setPlayer(player.externalId);
  };
  return (
    <Card
      key={player.externalId}
      className={`w-full flex flex-col justify-center items-center border border-neutral-300 transition-all hover:shadow-md rounded-md px-8 relative`}
    >
      <div className="absolute top-2 right-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-neutral-100 cursor-pointer"
          onClick={onClickEditPlayer}
          aria-label={`Edit ${player.name}`}
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>
      <CardHeader className="w-full flex flex-col gap-2 justify-center items-center border-b border-neutral-200">
        <Avatar
          className={`w-28 min-w-28 min-h-28 rounded-full border border-neutral-100 overflow-hidden`}
        >
          <AvatarImage
            src={player.imageUrl}
            className="object-cover scale-125 translate-y-4"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="font-bold text-black text-lg opacity-100">
          {player.alias}
        </h2>
        <Badge
          variant={"outline"}
          className="rounded-full font-semibold text-xs border-neutral-200 px-4"
        >
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent className="w-full flex flex-col p-0 m-0 gap-2 ">
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-neutral-600">Score</span>
          <span className="font-semibold">{player.currentScore}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-neutral-600">Rating</span>
          <span className="font-semibold">{player.rating}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-neutral-600">K/D</span>
          <span className="font-semibold">
            {Number(player.kills) - Number(player.deaths)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-neutral-600">ACS</span>
          <span className="font-semibold">{player.acs}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-neutral-600">
            First kills
          </span>
          <span className="font-semibold">{player.fk}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-neutral-600">
            First deaths
          </span>
          <span className="font-semibold">{player.fd}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerItem;
