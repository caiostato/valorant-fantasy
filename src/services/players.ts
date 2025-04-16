import api from "@/lib/axios";

// export const StatsService = {
//   fetchData: async () => {
//     const { data } = await api.get("/buildings");
//     return data;
//   },
// };

export const fetchAllPlayers = async () => {
  const { data } = await api.get("/getAllPlayers");
  console.log(data);
  return data;
};
