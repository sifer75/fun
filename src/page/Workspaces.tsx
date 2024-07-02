import KanbanCard from "@/components/card/KanbanCard";
import TaskCard from "@/components/card/TaskCard";
import WorkspaceCard from "@/components/card/WorkspaceCard";
import Header from "@/components/layout/Header";
import KanbanSearchbar from "@/components/layout/KanbanSearchbar";
import WorkspaceSearchbar from "@/components/layout/WorkspaceSearchbar";
import { Toaster } from "@/components/ui/toaster";

function Workspaces() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <KanbanSearchbar />
      {/* <WorkspaceSearchbar /> */}
      {/* <KanbanCard /> */}
      {/* <WorkspaceCard /> */}
      <TaskCard />
      <Toaster />

    </div>
  );
}

export default Workspaces;
