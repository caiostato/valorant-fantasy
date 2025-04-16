import { TeamGame } from "./teamGame";

export type Game = {
  externalId: string;
  gameOrder: number;
  mapName: string;
  teamPicker: string;
  teamWinner: string;
  totalTime: string;
  createdAt: string;
  updatedAt: string;
  teams: TeamGame[];
};
