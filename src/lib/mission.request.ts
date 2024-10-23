import { MissionProps } from "./cards.utils";

export const CreateMission = async (data: MissionProps) => {
  const { dateFrom, dateTo, timeFrom, timeTo, title, tasks } = data;

  const response = await fetch(`http://localhost:3333/mission/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dateFrom, dateTo, timeFrom, timeTo, title, tasks }),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Erreur lors de la création de la mission`);
  }
  return response.json();
};
export const getAllMissionsFromDate = async () => {
  const response = await fetch("http://localhost:3333/mission/get", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des missions du jour");
  }
  return response.json();
};
