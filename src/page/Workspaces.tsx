// import KanbanCard from "@/components/card/KanbanCard";
import WorkspaceCard from "@/components/card/WorkspaceCard";
import Header from "@/components/layout/Header";
// import KanbanSearchbar from "@/components/layout/KanbanSearchbar";
import WorkspaceSearchbar from "@/components/layout/WorkspaceSearchbar";

function Workspaces() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      {/* <KanbanSearchbar /> */}
      <WorkspaceSearchbar />
      {/* <KanbanCard /> */}
      <WorkspaceCard />
    </div>
  );
}

export default Workspaces;
