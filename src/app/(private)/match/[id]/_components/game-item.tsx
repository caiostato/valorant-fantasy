import { Game } from "@/types/game";
import { Team } from "@/types/team";
import { TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";
import React from "react";
import PlayerStatsRow from "./player-stats-row";

interface GameItemProps {
  decider?: boolean;
  i: number;
  game: Game;
  teams: Team[];
}

const GameItem = ({ game, teams, i, decider = false }: GameItemProps) => {
  const firstTeam = {
    team: teams[0],
    teamData: game.teams.filter(
      (team) => team.vlrTeamId === teams[0].teamId
    )[0],
  };
  const secondTeam = {
    team: teams[1],
    teamData: game.teams.filter(
      (team) => team.vlrTeamId === teams[1].teamId
    )[0],
  };

  const teamPickerName = teams.filter(
    (team) => team.teamId === game.teamPicker
  )[0];
  console.log(game.teamPicker);

  return (
    <TabsContent value={game.mapName} className="flex flex-col w-full gap-0">
      <div className="flex flex-row justify-between w-full py-10 px-20">
        <div className="flex flex-col gap-1 items-start">
          <div className="flex flex-row gap-6 items-center">
            <Image
              src={`https:${firstTeam.team.logo}`}
              alt={`${firstTeam.team.externalId} team`}
              width={75}
              height={75}
            />
            <div className="flex flex-row gap-1 items-start justify-between min-w-16">
              <span className="text-3xl font-semibold">
                {firstTeam.teamData.totalRounds}
              </span>
              <div className="text-sm font-semibold">
                <span className="text-[#00b9aa]">
                  {firstTeam.teamData.ctRounds}
                </span>{" "}
                /{" "}
                <span className="text-[#FF4655]">
                  {firstTeam.teamData.trRounds}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0 items-center">
          <p className="text-sm text-neutral-500 h-4">{game.totalTime}</p>
          <h1 className="text-3xl font-semibold h-10">{game.mapName}</h1>
          <p className="text-xs text-neutral-500 h-4">
            {decider ? "Decider" : `${teamPickerName.name} pick`}
          </p>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <div className="flex flex-row gap-6 items-center">
            <Image
              src={`https:${secondTeam.team.logo}`}
              alt={`${secondTeam.team.externalId} team`}
              width={75}
              height={75}
            />
            <div className="flex flex-row gap-1 items-start justify-between min-w-16">
              <span className="text-3xl font-semibold">
                {secondTeam.teamData.totalRounds}
              </span>
              <div className="text-sm font-semibold">
                <span className="text-[#00b9aa]">
                  {secondTeam.teamData.ctRounds}
                </span>{" "}
                /{" "}
                <span className="text-[#FF4655]">
                  {secondTeam.teamData.trRounds}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-0 w-full p-0">
        <div className="grid grid-cols-14 py-2 border-b border-neutral-200 text-xs text-neutral-500">
          <Image
            src={`https:${teams[0].logo}`}
            alt={""}
            width={30}
            height={30}
            className="rounded-full object-contain"
          />
          <p className=" flex flex-row justify-start items-center text-base font-semibold text-black whitespace-nowrap  text-ellipsis">
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
          {game.teams[i != 0 ? 1 : 0].playersGame
            .sort(
              (a, b) => parseFloat(b.stats.rating) - parseFloat(a.stats.rating)
            )
            .map((player) => (
              <PlayerStatsRow key={player.externalId} player={player} />
            ))}
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
          <p className=" flex flex-row justify-start items-center text-base font-semibold text-black whitespace-nowrap  text-ellipsis">
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
          {game.teams[i != 0 ? 0 : 1].playersGame
            .sort(
              (a, b) => parseFloat(b.stats.rating) - parseFloat(a.stats.rating)
            )
            .map((player) => (
              <PlayerStatsRow key={player.externalId} player={player} />
            ))}
        </div>
      </div>
    </TabsContent>
  );
};

export default GameItem;
