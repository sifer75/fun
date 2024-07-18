import { TaskProps } from "./cards.utils";

export const createTask = async (data: TaskProps) => {
  const response = await fetch("http://localhost:3333/task/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création de la tâche");
  }
  return response.json();
};

export const getAllTask = async (kanbanId: number) => {
  const response = await fetch(`http://localhost:3333/task/get/${kanbanId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des tâches");
  }
  return response.json();
};

export const updateTask = async (data: TaskProps) => {
  const { id, title, description } = data;
  const response = await fetch(`http://localhost:3333/task/update/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la modification de la tâche");
  }
  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`http://localhost:3333/task/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la suppression de la tâche");
  }
  return response.json();
};

export const updateTaskStatus = async ({
  status,
  id,
}: {
  status: string;
  id: number;
}) => {
  const response = await fetch(
    `http://localHost:3333/task/update/status/${id}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error(
      `Erreur lors de la modification du status de la tâche ${id}`
    );
  }
  return response.json();
};

export const updateTaskDate = async (data: {
  id: number;
  from: string;
  to: string;
}) => {
  const { id, from, to } = data;
  const response = await fetch(`http://localhost:3333/task/update/date/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, from, to }),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(
      `Erreur lors de la modification de la date de la tâche ${id}`
    );
  }
  return response.json();
};
