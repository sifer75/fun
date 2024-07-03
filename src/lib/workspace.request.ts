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
