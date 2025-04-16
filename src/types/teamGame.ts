import { PlayerGame } from "./playerGame";

export type TeamGame = {
  externalId: string;
  vlrTeamId: string;
  totalRounds: number;
  ctRounds: number;
  trRounds: number;

  gameMatchId: string;

  playersGame: PlayerGame[];
};
