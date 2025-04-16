import Header from "@/components/header";
import MatchesBar from "@/components/matches-bar";
import React from "react";

// const playerList: Player[] = [
//   {
//     externalId: "02151b7a-cd76-422b-8f10-da29dcb08ba0",
//     playerId: 6582,
//     name: "Michael Bernet",
//     type: "player",
//     alias: "neT",
//     imageUrl: "https://owcdn.net/img/679c2200b60f3.png",
//     currentScore: 0,
//     previousScore: 0,
//     oldScore: 0,
//     teamId: "a905aa17-a5ae-47c5-88f3-a865b0f19cb2",
//     acs: 0,
//     adr: 0,
//     assistsPr: 0,
//     deaths: 0,
//     fdpr: 0,
//     fkpr: 0,
//     kast: 0,
//     kd: 0,
//     kills: 0,
//     rating: 0,
//   },
//   {
//     externalId: "53ac3b0a-9bce-4ba9-94ad-3c6241dfc4c9",
//     playerId: 612,
//     name: "Mitch Semago",
//     type: "player",
//     alias: "mitch",
//     imageUrl: "https://owcdn.net/img/679c221555b21.png",
//     currentScore: 0,
//     previousScore: 0,
//     oldScore: 0,
//     teamId: "a905aa17-a5ae-47c5-88f3-a865b0f19cb2",
//     acs: 0,
//     adr: 0,
//     assistsPr: 0,
//     deaths: 0,
//     fdpr: 0,
//     fkpr: 0,
//     kast: 0,
//     kd: 0,
//     kills: 0,
//     rating: 0,
//   },
//   {
//     externalId: "9cb1ef22-2331-4778-b5f3-d83a9bd60ff5",
//     playerId: 7871,
//     name: "Erick Bach",
//     type: "player",
//     alias: "Xeppaa",
//     imageUrl: "https://owcdn.net/img/679c223b5ed99.png",
//     currentScore: 0,
//     previousScore: 0,
//     oldScore: 0,
//     teamId: "a905aa17-a5ae-47c5-88f3-a865b0f19cb2",
//     acs: 0,
//     adr: 0,
//     assistsPr: 0,
//     deaths: 0,
//     fdpr: 0,
//     fkpr: 0,
//     kast: 0,
//     kd: 0,
//     kills: 0,
//     rating: 0,
//   },
//   {
//     externalId: "2bcb1a16-416b-4ef8-8fab-b06bba658c5a",
//     playerId: 17433,
//     name: "Victor Truong",
//     type: "player",
//     alias: "v1c",
//     imageUrl: "https://owcdn.net/img/679c222ec2d14.png",
//     currentScore: 0,
//     previousScore: 0,
//     oldScore: 0,
//     teamId: "a905aa17-a5ae-47c5-88f3-a865b0f19cb2",
//     acs: 0,
//     adr: 0,
//     assistsPr: 0,
//     deaths: 0,
//     fdpr: 0,
//     fkpr: 0,
//     kast: 0,
//     kd: 0,
//     kills: 0,
//     rating: 0,
//   },
//   {
//     externalId: "15dd8c30-cb74-4b60-9169-bb3a81d62a27",
//     playerId: 18796,
//     name: "Francis Hoang",
//     type: "player",
//     alias: "OXY",
//     imageUrl: "https://owcdn.net/img/679c2222b0181.png",
//     currentScore: 0,
//     previousScore: 0,
//     oldScore: 0,
//     teamId: "a905aa17-a5ae-47c5-88f3-a865b0f19cb2",
//     acs: 0,
//     adr: 0,
//     assistsPr: 0,
//     deaths: 0,
//     fdpr: 0,
//     fkpr: 0,
//     kast: 0,
//     kd: 0,
//     kills: 0,
//     rating: 0,
//   },
// ];
const LoggedHome = async () => {
  return (
    <div className="w-screen max-w-screen h-full overflow-x-hidden flex flex-col">
      <Header />
      <div className="w-full min-h-40 px-4 md:px-20 py-4 flex flex-row gap-8">
        <div className="flex-1">
          {/* <MyTeamContainer players={playerList} /> */}
        </div>
        <MatchesBar />
      </div>
    </div>
  );
};

export default LoggedHome;
