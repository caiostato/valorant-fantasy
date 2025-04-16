import { Game } from "@/types/game";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import GameItem from "./game-item";
import { Team } from "@/types/team";
import AllCard from "./all-card";

interface GameCardProps {
  games: Game[];
  teams: Team[];
}

const GameCard = ({ games, teams }: GameCardProps) => {
  return (
    <div className="w-full min-h-40 px-8 py-4 pb-16 flex flex-col gap-8 border rounded-md border-neutral-300 bg-white shadow-md">
      <Tabs defaultValue={"all"} className="w-full">
        <TabsList className="flex flex-row gap-4">
          <TabsTrigger
            key={"all"}
            value={"all"}
            className="text-lg font-semibold px-4 pb-2 border-b-2 border-transparent data-[state=active]:border-[#FF4655]"
          >
            All maps
          </TabsTrigger>
          {games.map((game) => (
            <TabsTrigger
              key={game.externalId}
              value={game.mapName}
              className="text-lg font-semibold px-4 pb-2 border-b-2 border-transparent data-[state=active]:border-[#FF4655]"
            >
              {game.mapName}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent key={"all maps"} value={"all"}>
          <AllCard games={games} teams={teams} />
        </TabsContent>
        {games.map((game, i) => (
          <GameItem
            i={i}
            key={game.externalId}
            decider={i + 1 === games.length}
            game={game}
            teams={teams.sort((a, b) => b.teamId.localeCompare(a.teamId))}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default GameCard;
