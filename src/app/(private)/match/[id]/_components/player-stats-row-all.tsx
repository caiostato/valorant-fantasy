import { Game } from "@/types/game";
import { PlayerStats } from "@/types/playerStats";
import { PlayerStatsAdvanced } from "@/types/playerStatsAdvanced";
import { agentIcons } from "@/utils/agents";
import { getAgentsUsedByPlayer } from "@/utils/stats";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
import React from "react";

interface PlayerStatsRowAllProps {
  games: Game[];
  player: {
    externalId: string;
    playerId?: string;
    agent?: string[];
    alias?: string;
    imageUrl?: string;
    stats: PlayerStats;
    advancedStats?: PlayerStatsAdvanced;

    teamGameId: string; // TeamGame (externalId)
  };
}

const PlayerStatsRowAll = ({ games, player }: PlayerStatsRowAllProps) => {
  const agents = getAgentsUsedByPlayer(games, player.playerId || "");
  return (
    <div className="grid grid-cols-14 border-b border-neutral-200">
      <div className="flex flex-row items-center justify-start gap-2">
        <Avatar
          className={`w-10 min-w-10 min-h-10 max-w-24 rounded-full border border-neutral-100 overflow-hidden`}
        >
          <AvatarImage
            src={player.imageUrl}
            className="object-cover scale-125 translate-y-2"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="justify-start items-center flex flex-row text-base font-semibold ">
        <p>{player.alias}</p>
      </div>
      <div className="flex flex-row gap-1 col-span-2 justify-end px-4">
        {agents?.map((each) => (
          <Image
            key={each}
            src={agentIcons[each]}
            alt={each}
            width={30}
            height={30}
            className="rounded-full object-contain"
          />
        ))}
      </div>
      <p
        className={`flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2 ${
          Number(player.stats.rating) >= 1 ? `text-[#00b9aa]` : `text-[#FF4655]`
        }`}
      >
        {player.stats.rating}
      </p>
      <p className="flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2">
        {player.stats.acs}
      </p>
      <p className="flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2">
        {player.stats.k}
      </p>
      <p className="flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2">
        {player.stats.d}
      </p>
      <p
        className={`flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2 ${
          Number(player.stats.k) - Number(player.stats.d) >= 0
            ? `text-[#00b9aa]`
            : `text-[#FF4655]`
        }`}
      >
        {Number(player.stats.k) - Number(player.stats.d)}
      </p>
      <p className="flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2">
        {player.stats.a}
      </p>
      <p className="flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2">
        {player.stats.hs}
      </p>
      <p className="flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2">
        {player.stats.fk}
      </p>
      <p className="flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2">
        {player.stats.fd}
      </p>
      <p
        className={`flex flex-row justify-end items-center px-2 font-semibold border-l border-r border-neutral-200 text-base my-2 ${
          Number(player.stats.fk) - Number(player.stats.fd) >= 0
            ? `text-[#00b9aa]`
            : `text-[#FF4655]`
        }`}
      >
        {Number(player.stats.fk) - Number(player.stats.fd)}
      </p>
    </div>
  );
};

export default PlayerStatsRowAll;
