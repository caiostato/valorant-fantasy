import { Game } from "@/types/game";
import {
  findMostACSPlayer,
  findMostKillPlayer,
  findMostFKPlayer,
  findMostADRPlayer,
  findMostHSPlayer,
  findMostRatingPlayer,
} from "@/utils/stats";
import React from "react";
import StatsItem from "./stats-item";

interface StatsCardProps {
  games: Game[];
}

const StatsCard = ({ games }: StatsCardProps) => {
  const { player: playerMostKills, totalKills: mostKills } =
    findMostKillPlayer(games);

  const { player: playerMostFK, totalKills: mostFK } = findMostFKPlayer(games);
  const { player: playerMostADR, averageACS: mostADR } =
    findMostADRPlayer(games);
  const { player: playerMostRating, avgRating: mostRating } =
    findMostRatingPlayer(games);

  const { player: playerMostHS, avgHS: mostHS } = findMostHSPlayer(games);

  const { player: playerHighestACS, averageACS: highestACS } =
    findMostACSPlayer(games);
  return (
    <div className="w-full min-h-40 px-8 py-4 pb-16 flex flex-row flex-wrap justify-between gap-2 border rounded-md border-neutral-300 bg-white shadow-md">
      <StatsItem
        player={playerMostKills}
        value={mostKills.toString()}
        content={"Most kills"}
      />
      <StatsItem
        player={playerMostRating}
        value={mostRating?.toFixed(2) || ""}
        content={"Highest rating"}
      />
      <StatsItem
        player={playerMostHS}
        value={mostHS.toFixed(2)}
        content={"Highest HS%"}
      />
      <StatsItem
        player={playerHighestACS}
        value={highestACS?.toFixed(2) || ""}
        content={"Highest ACS"}
      />
      <StatsItem
        player={playerMostFK}
        value={mostFK.toString()}
        content={"Most FK"}
      />
      <StatsItem
        player={playerMostADR}
        value={mostADR?.toFixed(2) || ""}
        content={"Highest ADR"}
      />
    </div>
  );
};

export default StatsCard;
