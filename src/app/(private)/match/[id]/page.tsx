import Header from "@/components/header";
import { getOneMatch } from "@/services/matches";
import React from "react";
import TeamCard from "./_components/team-card";
import Image from "next/image";
import { formatTimeLeft } from "@/lib/utils";
import { Dot } from "lucide-react";
import GameCard from "./_components/game-card";
import StatsCard from "./_components/stats-card";
import MatchesBar from "@/components/matches-bar";

interface MatchDetailsPageProps {
  params: Promise<{ id: string }>;
}

const MatchDetailsPage = async ({ params }: MatchDetailsPageProps) => {
  const { id } = await params;

  const match = await getOneMatch(id);

  const matchDate = new Date(match.dateTime);
  const matchTime = formatTimeLeft(match.dateTime);
  return (
    <div className="w-screen max-w-screen h-full overflow-x-hidden flex flex-col gap-8">
      <Header />

      <div className="w-full min-h-40 px-4 md:px-20 py-4 flex flex-row gap-8">
        <div className="w-full flex flex-col gap-4 flex-1">
          <div className="w-full min-h-40 px-8 py-4 pb-16 flex flex-col gap-8 border rounded-md border-neutral-300 bg-white shadow-md ">
            <div className="flex flex-row gap-4 justify-between w-full">
              <div className="flex flex-row gap-4">
                <Image
                  src={`${match.eventLogo}`}
                  alt={`${match.externalId} match`}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-base ">{match.eventName}</p>
                  <p className="font-normal text-sm text-neutral-500">
                    {match.eventStage}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p
                  className={`font-semibold text-base ${
                    matchTime === "Live"
                      ? "text-red-500"
                      : matchTime === "Completed"
                      ? "text-neutral-700"
                      : "text-green-700"
                  }`}
                >
                  {match.status}
                </p>
                <div className="flex flex-row items-center justify-center">
                  <p className="font-semibold text-sm text-neutral-500 ">
                    {matchDate.toLocaleString("en-US", {
                      day: "numeric",
                      month: "long",
                    })}
                  </p>{" "}
                  <Dot className="text-neutral-500" />
                  <p className="font-semibold text-sm text-neutral-500">
                    {matchDate.toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
            {match.teams && (
              <div className="flex flex-row gap-10 justify-center items-center">
                <TeamCard
                  key={match.teams[0].externalId}
                  team={match.teams[0]}
                />
                <div className="flex flex-col h-full w-fit font-bold text-xl items-center text-center justify-center">
                  <p>VS</p>
                </div>
                <TeamCard
                  key={match.teams[1].externalId}
                  team={match.teams[1]}
                />
              </div>
            )}
          </div>
          {match.games && (
            <StatsCard
              games={match.games.sort((a, b) => a.gameOrder - b.gameOrder)}
            />
          )}
          {match.games && (
            <GameCard
              games={match.games.sort((a, b) => a.gameOrder - b.gameOrder)}
              teams={match.teams || []}
            />
          )}
        </div>
        <MatchesBar />
      </div>
    </div>
  );
};

export default MatchDetailsPage;
