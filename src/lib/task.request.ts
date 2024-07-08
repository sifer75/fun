import { TaskProps } from "./cards.utils";

export const createTask = async (data: TaskProps) => {
  const response = await fetch("http://localhost:3333/task/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création de la tâche");
  }
  return response.json();
};

export const getAllTasks = async (kanbanId: number) => {
  const response = await fetch(`http://localhost:3333/task/get/${kanbanId}`, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  });
  if(!respo)
};
