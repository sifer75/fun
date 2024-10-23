import { MissionProps } from "./cards.utils";

export const CreateMission = async (data: MissionProps) => {
  const { date, timeFrom, timeTo, title, tasks } = data;
  console.log(date, "date");
  const response = await fetch("http://localhost:3333/mission/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, timeFrom, timeTo, title, tasks }),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Erreur lors de la création de la mission`);
  }
  return response.json();
};
export const getAllMissionsFromDate = async (fetchedDate: Date | undefined) => {
  const date = fetchedDate?.toISOString().split("T")[0];
  if (!fetchedDate) {
    throw new Error("Erreur lors de la récupération des missions");
  }
  const response = await fetch(
    `http://localhost:3333/mission/get?date=${date}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des missions du jour");
  }
  return response.json();
};
