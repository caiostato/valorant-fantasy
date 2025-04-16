import { getAllMatches } from "@/services/matches";
import React from "react";
import MatchItem from "./match-item";
import { Match } from "@/types/match";
import { formatTimeLeft } from "@/lib/utils";
import LiveButton from "./live-button";

const MatchesContainer = async () => {
  const matches = await getAllMatches();

  const getMatchStatus = (match: Match): "Live" | "Completed" | "Upcoming" => {
    const now = new Date();
    const start = new Date(match.dateTime);
    const end = new Date(start.getTime() + 90 * 60 * 1000); // assuming 90 min match duration

    if (start <= now && now <= end) return "Live";
    if (now > end) return "Completed";
    return "Upcoming";
  };

  const sortMatchesByStatus = (matches: Match[]) => {
    const priority = {
      Completed: 0,
      Live: 1,
      Upcoming: 2,
    };

    return matches.sort((a, b) => {
      return priority[getMatchStatus(a)] - priority[getMatchStatus(b)];
    });
  };

  const hasLiveMatch =
    matches.filter((match) => formatTimeLeft(match.dateTime) === "Live")
      .length >= 1;

  const sortedMatches = sortMatchesByStatus(matches);
  return (
    <div className="w-full h-fit rounded-md px-4 md:px-20 flex flex-col gap-8 py-8">
      <div className="w-full h-fit flex flex-row justify-between">
        <h1 className="font-bold text-3xl">Matches</h1>
        {hasLiveMatch && <LiveButton />}
      </div>
      <div className="w-full h-fit flex flex-col gap-4 justify-start">
        {sortedMatches.map((match) => (
          <MatchItem match={match} key={match.externalId} />
        ))}
      </div>
    </div>
  );
};

export default MatchesContainer;
