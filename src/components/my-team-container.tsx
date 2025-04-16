"use client";
import React from "react";

import PlayerItem from "./player-item";
import { Player } from "@/types/player";
import ChangePlayerContainer from "@/app/(private)/loggedHome/_components/change-player-container";

interface MyTeamContainerProps {
  players: Player[];
}

const MyTeamContainer = ({ players }: MyTeamContainerProps) => {
  const [player, setPlayer] = React.useState<string | null>(null);
  return (
    <div className="w-full h-fit rounded-md p-4 flex flex-col gap-8">
      <h1 className="font-bold text-3xl">My Team</h1>
      <div className="w-full h-fit flex flex-col gap-4 justify-start">
        {/* team */}
        <div className="w-full h-fit flex flex-row gap-4 justify-start">
          {player === null ? (
            players.map((player) => (
              <PlayerItem
                key={player.externalId}
                setPlayer={setPlayer}
                player={player}
              />
            ))
          ) : (
            <ChangePlayerContainer />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTeamContainer;
