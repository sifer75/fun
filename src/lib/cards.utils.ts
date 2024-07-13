export interface WorkspaceProps {
  title: string;
  description: string;
  id?: number;
}

export interface KanbanProps {
  title: string;
  workspaceId?: number;
  id?: number;
}

export interface TaskProps {
  title: string;
  description: string;
  kanbanId?: number;
  id?: number;
  status?: "to_do" | "in_progress" | "finished";
  color?: "bg-fontBlue" | "bg-fontYellow" | "bg-fontGreen"
}
