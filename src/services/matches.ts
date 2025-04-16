import api from "@/lib/axios";
import { Match } from "@/types/match";

export const getAllMatches = async (): Promise<Match[]> => {
  try {
    const response = await api("http://localhost:3000/api/getAllMatches", {
      headers: {
        "Cache-Control": "no-store", // mimic fetch's cache: 'no-store'
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch matches:", error);
    throw new Error("Failed to fetch matches");
  }
};

export const getOneMatch = async (id: string): Promise<Match> => {
  try {
    const response = await api(`http://localhost:3000/api/getOneMatch/${id}`, {
      headers: {
        "Cache-Control": "no-store", // mimic fetch's cache: 'no-store'
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch match:", error);
    throw new Error("Failed to fetch match");
  }
};

export const getUpcomingMatches = async (): Promise<Match[]> => {
  try {
    const response = await api("http://localhost:3000/api/getUpcomingMatches", {
      headers: {
        "Cache-Control": "no-store", // mimic fetch's cache: 'no-store'
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch matches:", error);
    throw new Error("Failed to fetch matches");
  }
};
