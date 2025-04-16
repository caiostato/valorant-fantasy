import { Game } from "@/types/game";
import { PlayerGame } from "@/types/playerGame";
import { PlayerStats } from "@/types/playerStats";

//rating hs kf

export const findMostKillPlayer = (
  games: Game[]
): { player: PlayerGame; totalKills: number } => {
  const killMap: Record<string, { player: PlayerGame; totalKills: number }> =
    {};

  games.forEach((game) => {
    game.teams.forEach((team) => {
      team.playersGame.forEach((player) => {
        const kills = player.stats.k;
        const key: string = player.playerId || "";

        if (!killMap[key]) {
          killMap[key] = {
            player,
            totalKills: Number(kills),
          };
        } else {
          killMap[key].totalKills += Number(kills);
        }
      });
    });
  });

  let topPlayerEntry;

  for (const entry of Object.values(killMap)) {
    if (!topPlayerEntry || entry.totalKills > topPlayerEntry.totalKills) {
      topPlayerEntry = entry;
    }
  }

  return {
    player: topPlayerEntry?.player || games[0].teams[0].playersGame[0],
    totalKills: topPlayerEntry?.totalKills || 0,
  };
};

export const findMostFKPlayer = (
  games: Game[]
): { player: PlayerGame; totalKills: number } => {
  const killMap: Record<string, { player: PlayerGame; totalKills: number }> =
    {};

  games.forEach((game) => {
    game.teams.forEach((team) => {
      team.playersGame.forEach((player) => {
        const kills = player.stats.fk;
        const key: string = player.playerId || "";

        if (!killMap[key]) {
          killMap[key] = {
            player,
            totalKills: Number(kills),
          };
        } else {
          killMap[key].totalKills += Number(kills);
        }
      });
    });
  });

  let topPlayerEntry;

  for (const entry of Object.values(killMap)) {
    if (!topPlayerEntry || entry.totalKills > topPlayerEntry.totalKills) {
      topPlayerEntry = entry;
    }
  }

  return {
    player: topPlayerEntry?.player || games[0].teams[0].playersGame[0],
    totalKills: topPlayerEntry?.totalKills || 0,
  };
};

export const findMostHSPlayer = (
  games: Game[]
): { player: PlayerGame; avgHS: number } => {
  const hsMap: Record<
    string,
    { player: PlayerGame; totalHS: number; count: number }
  > = {};

  games.forEach((game) => {
    game.teams.forEach((team) => {
      team.playersGame.forEach((player) => {
        const hsRate = parseFloat(player.stats.hs.replace("%", ""));
        const key: string = player.playerId || "";

        if (!hsMap[key]) {
          hsMap[key] = {
            player,
            totalHS: hsRate,
            count: 1,
          };
        } else {
          hsMap[key].totalHS += hsRate;
          hsMap[key].count += 1;
        }
      });
    });
  });

  // Compute averages and find top
  let topPlayerEntry: { player: PlayerGame; avgHS: number } | null = null;

  for (const entry of Object.values(hsMap)) {
    const avgHS = entry.totalHS / entry.count;
    if (!topPlayerEntry || avgHS > topPlayerEntry.avgHS) {
      topPlayerEntry = {
        player: entry.player,
        avgHS,
      };
    }
  }

  return {
    player: topPlayerEntry?.player || games[0].teams[0].playersGame[0],
    avgHS: topPlayerEntry?.avgHS || 0,
  };
};

export const findMostACSPlayer = (
  games: Game[]
): { player: PlayerGame; averageACS: number } => {
  const acsMap: Record<
    string,
    { player: PlayerGame; totalACS: number; gamesPlayed: number }
  > = {};

  games.forEach((game) => {
    game.teams.forEach((team) => {
      team.playersGame.forEach((player) => {
        const acs = player.stats.acs;
        const key: string = player.playerId || "";

        if (!acsMap[key]) {
          acsMap[key] = {
            player,
            totalACS: Number(acs),
            gamesPlayed: 1,
          };
        } else {
          acsMap[key].totalACS += Number(acs);
          acsMap[key].gamesPlayed += 1;
        }
      });
    });
  });

  // Find player with highest average ACS
  let topPlayerEntry = null;

  for (const entry of Object.values(acsMap)) {
    const averageACS = entry.totalACS / entry.gamesPlayed;

    if (
      !topPlayerEntry ||
      averageACS > topPlayerEntry.totalACS / topPlayerEntry.gamesPlayed
    ) {
      topPlayerEntry = entry;
    }
  }

  return {
    player: topPlayerEntry?.player || games[0].teams[0].playersGame[0],
    averageACS: topPlayerEntry
      ? topPlayerEntry.totalACS / topPlayerEntry.gamesPlayed
      : 0,
  };
};

export const findMostADRPlayer = (
  games: Game[]
): { player: PlayerGame; averageACS: number } => {
  const acsMap: Record<
    string,
    { player: PlayerGame; totalACS: number; gamesPlayed: number }
  > = {};

  games.forEach((game) => {
    game.teams.forEach((team) => {
      team.playersGame.forEach((player) => {
        const acs = player.stats.adr;
        const key: string = player.playerId || "";

        if (!acsMap[key]) {
          acsMap[key] = {
            player,
            totalACS: Number(acs),
            gamesPlayed: 1,
          };
        } else {
          acsMap[key].totalACS += Number(acs);
          acsMap[key].gamesPlayed += 1;
        }
      });
    });
  });

  // Find player with highest average ACS
  let topPlayerEntry = null;

  for (const entry of Object.values(acsMap)) {
    const averageACS = entry.totalACS / entry.gamesPlayed;

    if (
      !topPlayerEntry ||
      averageACS > topPlayerEntry.totalACS / topPlayerEntry.gamesPlayed
    ) {
      topPlayerEntry = entry;
    }
  }

  return {
    player: topPlayerEntry?.player || games[0].teams[0].playersGame[0],
    averageACS: topPlayerEntry
      ? topPlayerEntry.totalACS / topPlayerEntry.gamesPlayed
      : 0,
  };
};

export const findMostRatingPlayer = (
  games: Game[]
): { player: PlayerGame; avgRating: number } => {
  const ratingMap: Record<
    string,
    { player: PlayerGame; totalRating: number; count: number }
  > = {};

  games.forEach((game) => {
    game.teams.forEach((team) => {
      team.playersGame.forEach((player) => {
        const rating = parseFloat(player.stats.rating);
        const key: string = player.playerId || "";

        if (!ratingMap[key]) {
          ratingMap[key] = {
            player,
            totalRating: rating,
            count: 1,
          };
        } else {
          ratingMap[key].totalRating += rating;
          ratingMap[key].count += 1;
        }
      });
    });
  });

  // Find player with highest average rating
  let topPlayerEntry: { player: PlayerGame; avgRating: number } | null = null;

  for (const entry of Object.values(ratingMap)) {
    const avgRating = entry.totalRating / entry.count;

    if (!topPlayerEntry || avgRating > topPlayerEntry.avgRating) {
      topPlayerEntry = {
        player: entry.player,
        avgRating,
      };
    }
  }

  return {
    player: topPlayerEntry?.player || games[0].teams[0].playersGame[0],
    avgRating: topPlayerEntry?.avgRating || 0,
  };
};

export const groupAllPlayerStatsByTeam = (games: Game[]) => {
  const teamMap: Record<
    string,
    Record<
      string,
      {
        player: PlayerGame;
        gamesPlayed: number;
        sum: {
          k: number;
          d: number;
          a: number;
          acs: number;
          adr: number;
          hs: number;
          rating: number;
          fk: number;
          fd: number;
        };
      }
    >
  > = {};

  games.forEach((game) => {
    game.teams.forEach((team) => {
      const teamId = team.vlrTeamId;
      if (!teamMap[teamId]) teamMap[teamId] = {};

      team.playersGame.forEach((player) => {
        const stats = player.stats;
        const key: string = player.playerId || "";

        const parsed = {
          k: parseInt(stats.k),
          d: parseInt(stats.d),
          a: parseInt(stats.a),
          acs: parseFloat(stats.acs),
          adr: parseFloat(stats.adr),
          hs: parseFloat(stats.hs.replace("%", "")),
          rating: parseFloat(stats.rating),
          fk: parseInt(stats.fk),
          fd: parseInt(stats.fd),
        };

        if (!teamMap[teamId][key]) {
          teamMap[teamId][key] = {
            player,
            gamesPlayed: 1,
            sum: { ...parsed },
          };
        } else {
          const entry = teamMap[teamId][key];
          entry.gamesPlayed += 1;
          Object.keys(parsed).forEach((field) => {
            entry.sum[field as keyof typeof parsed] +=
              parsed[field as keyof typeof parsed];
          });
        }
      });
    });
  });

  // Return final grouped stats with strings matching your PlayerStats type
  return Object.entries(teamMap).map(([teamId, playersMap]) => ({
    teamId,
    players: Object.values(playersMap).map(({ player, gamesPlayed, sum }) => {
      const fkdb = sum.fk - sum.fd;
      const kdb = sum.k - sum.d;

      const finalStats: PlayerStats = {
        id: player.externalId,
        rating: (sum.rating / gamesPlayed).toFixed(2),
        acs: (sum.acs / gamesPlayed).toFixed(1),
        k: sum.k.toString(),
        d: sum.d.toString(),
        a: sum.a.toString(),
        kdb: kdb.toString(),
        kast: "0", // Not available in source, set to '0' or fetch if available
        adr: (sum.adr / gamesPlayed).toFixed(1),
        hs: `${(sum.hs / gamesPlayed).toFixed(1)}%`,
        fk: sum.fk.toString(),
        fd: sum.fd.toString(),
        fkdb: fkdb.toString(),
      };

      return {
        playerId: player.playerId,
        externalId: player.externalId,
        alias: player.alias,
        imageUrl: player.imageUrl,
        stats: finalStats,
        teamGameId: "",
      };
    }),
  }));
};

export const getAgentsUsedByPlayer = (
  games: Game[],
  playerId: string
): string[] => {
  const agents = new Set<string>();

  games.forEach((game) => {
    game.teams.forEach((team) => {
      team.playersGame.forEach((player) => {
        const idMatch =
          player.playerId === playerId || player.playerId === playerId;
        if (idMatch && player.agent) {
          agents.add(player.agent);
        }
      });
    });
  });

  return Array.from(agents);
};
