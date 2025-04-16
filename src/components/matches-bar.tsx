import { getUpcomingMatches } from "@/services/matches";
import React from "react";
import MatchesBarItem from "./matches-bar-item";

const MatchesBar = async () => {
  const matches = await getUpcomingMatches();
  return (
    <div className=" max-w-56 h-fit flex flex-col gap-4">
      {matches.map((match) => (
        <MatchesBarItem key={match.externalId} match={match} />
      ))}
    </div>
  );
};

export default MatchesBar;
