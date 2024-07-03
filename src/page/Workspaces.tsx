import WorkspaceCard from "@/components/card/WorkspaceCard";
import Header from "@/components/layout/Header";
import WorkspaceSearchbar from "@/components/layout/WorkspaceSearchbar";
import { Toaster } from "@/components/ui/toaster";

function Workspaces() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <WorkspaceSearchbar />
      <WorkspaceCard />
      <Toaster />
    </div>
  );
}

export default Workspaces;
