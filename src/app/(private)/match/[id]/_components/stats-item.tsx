import { PlayerGame } from "@/types/playerGame";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

interface StatsItemProps {
  player: PlayerGame;
  value: string;
  content: string;
}

const StatsItem = ({ player, value, content }: StatsItemProps) => {
  return (
    <div className="flex flex-row gap-2 w-[45%] justify-between items-center border-b border-neutral-200 py-2">
      <div className="flex flex-row gap-4">
        <Avatar
          className={`w-14 min-w-14 min-h-14 max-w-24 rounded-full border border-neutral-100 overflow-hidden`}
        >
          <AvatarImage
            src={player.imageUrl}
            className="object-cover scale-125 translate-y-2"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="h-full flex flex-col justify-between py-1">
          <h1 className="text-base font-semibold">{player.alias}</h1>
          <p className="text-sm font-normal text-neutral-500">{content}</p>
        </div>
      </div>
      <div className="text-base font-semibold">{value}</div>
    </div>
  );
};

export default StatsItem;
