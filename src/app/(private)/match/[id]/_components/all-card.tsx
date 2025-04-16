import { Game } from "@/types/game";
import { Team } from "@/types/team";
import Image from "next/image";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { groupAllPlayerStatsByTeam } from "@/utils/stats";
import PlayerStatsRowAll from "./player-stats-row-all";

interface AllCardProps {
  games: Game[];
  teams: Team[];
}

const AllCard = ({ games, teams }: AllCardProps) => {
  const data = groupAllPlayerStatsByTeam(games);
  return (
    <TabsContent value={"all"} className="flex flex-col w-full gap-0 pt-10">
      <div className="flex flex-col gap-0 w-full p-0">
        <div className="grid grid-cols-14 py-2 border-b border-neutral-200 text-xs text-neutral-500">
          <Image
            src={`https:${teams[0].logo}`}
            alt={""}
            width={30}
            height={30}
            className="rounded-full object-contain"
          />
          <p className=" flex flex-row justify-center items-center text-base font-semibold text-black whitespace-nowrap overflow-hidden text-ellipsis">
            {teams[0].name}
          </p>
          <div className="flex col-span-2"></div>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            Rating
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            ACS
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            Kills
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            Deaths
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            K/D
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            Assists
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            HS%
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            FK
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            FD
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            FK Diff
          </p>
        </div>
        <div className="flex flex-col gap-2 py-2">
          {data[0].players
            .sort(
              (a, b) => parseFloat(b.stats.rating) - parseFloat(a.stats.rating)
            )
            .map((player) => {
              player.teamGameId = "";
              return (
                <PlayerStatsRowAll
                  key={player.externalId}
                  player={player}
                  games={games}
                />
              );
            })}
        </div>
      </div>
      <div className="flex flex-col gap-0 w-full p-0">
        <div className="grid grid-cols-14 py-2 border-b border-neutral-200 text-xs text-neutral-500">
          <Image
            src={`https:${teams[1].logo}`}
            alt={""}
            width={30}
            height={30}
            className="rounded-full object-contain"
          />
          <p className=" flex flex-row justify-center items-center text-base font-semibold text-black whitespace-nowrap  text-ellipsis">
            {teams[1].name}
          </p>
          <div className="flex col-span-2"></div>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            Rating
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            ACS
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            Kills
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            Deaths
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            K/D
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            Assists
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            HS%
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            FK
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            FD
          </p>
          <p className=" flex flex-row justify-center items-center font-semibold border-l border-r border-neutral-200">
            FK Diff
          </p>
        </div>
        <div className="flex flex-col gap-2 py-2">
          {data[1].players
            .sort(
              (a, b) => parseFloat(b.stats.rating) - parseFloat(a.stats.rating)
            )
            .map((player) => (
              <PlayerStatsRowAll
                key={player.externalId}
                player={player}
                games={games}
              />
            ))}
        </div>
      </div>
    </TabsContent>
  );
};

export default AllCard;
