import { PlayerStats } from "./playerStats";
import { PlayerStatsAdvanced } from "./playerStatsAdvanced";

export type PlayerGame = {
  externalId: string;
  playerId?: string;
  agent: string;
  alias?: string;
  imageUrl?: string;
  stats: PlayerStats;
  advancedStats?: PlayerStatsAdvanced;

  teamGameId?: string; // TeamGame (externalId)
};
