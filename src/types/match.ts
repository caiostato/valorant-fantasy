import { Game } from "./game";
import { Team } from "./team";

export type Match = {
  externalId: string;
  vlrId: string;
  matchOrder: number;
  dateTime: string; // or `Date` if you're parsing it
  logoUrl: string;
  status: string;
  eventId: string;
  eventName: string;
  eventLogo: string;
  eventStage: string;
  teams?: Team[];
  games?: Game[];
};
