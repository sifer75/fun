export interface WorkspaceProps {
  title: string;
  description: string;
  id?: number;
}

export interface KanbanProps {
  title: string;
  description: string;
  workspaceId?: number;
  id?: number;
  updateAt?: Date;
}

export interface TaskProps {
  title: string;
  description: string;
  kanbanId?: number;
  id: string;
  status?: "to_do" | "in_progress" | "finished";
  color?: string;
  from?: string;
  to?: string;
}
