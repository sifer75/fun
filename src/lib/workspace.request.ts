import { WorkspaceProps } from "./workspace.utils";

export const createWorkspace = async (data: WorkspaceProps) => {
  const response = await fetch("http://localhost:3333/workspace/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création du workspace");
  }
  return response.json();
};

export const getAllWorkspace = async () => {
  const response = await fetch("http://localhost:3333/workspace/get", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création du workspace");
  }
  return response.json();
};

export const updateWorkspace = async (data: WorkspaceProps) => {
  const { id, title, description } = data;
  const response = await fetch(`http://localhost:3333/workspace/update/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la modification du workspace");
  }
  return response.json();
};

export const deleteWorkspace = async (id: number) => {
  const response = await fetch(`http://localhost:3333/workspace/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: null,
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la suppression du workspace");
  }
};