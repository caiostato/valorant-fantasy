import Header from "@/components/header";
import React from "react";
import MatchesContainer from "./_components/matches-container";

const MatchesPage = () => {
  return (
    <div className="w-screen max-w-screen h-full overflow-x-hidden flex flex-col">
      <Header />
      <MatchesContainer />
    </div>
  );
};

export default MatchesPage;
