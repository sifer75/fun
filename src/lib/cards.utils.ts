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
  kanbanId: number;
  id: number;
}
