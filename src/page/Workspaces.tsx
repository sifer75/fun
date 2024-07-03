import WorkspaceCard from "@/components/card/WorkspaceCard";
import Header from "@/components/layout/Header";
import WorkspaceSearchbar from "@/components/layout/WorkspaceSearchbar";
import { Toaster } from "@/components/ui/toaster";
import { getAllWorkspace } from "@/lib/workspace.request";
import { WorkspaceProps } from "@/lib/workspace.utils";
import { useQuery } from "@tanstack/react-query";

function Workspaces() {
  const {
    data: workspaces,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["workspace"],
    queryFn: getAllWorkspace,
  });

  if (isError || isLoading) return <div>chargement...</div>;
 
  return (
    <div className="h-screen w-screen flex flex-col px-8">
      <Header />
      <WorkspaceSearchbar />
      <div className="w-full h-full flex flex-wrap gap-10">
      {workspaces.map((workspace: WorkspaceProps, index: number) => {
        return (
          <WorkspaceCard
            key={index}
            title={workspace.title}
            description={workspace.description}
            id={workspace.id}
          />
        );
      })}
      </div>
      <Toaster />
    </div>
  );
}

export default Workspaces;
