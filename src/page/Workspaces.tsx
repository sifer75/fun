import WorkspaceCard from "@/components/card/workspace/WorkspaceCard";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { getAllWorkspace } from "@/lib/workspace.request";
import { WorkspaceProps } from "@/lib/cards.utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CreateWorkspace from "@/components/card/workspace/CreateWorkspace";

function Workspaces() {
  const { data: workspaces } = useQuery({
    queryKey: ["workspace"],
    queryFn: getAllWorkspace,
  });
  const [searchTitle, setSearchTitle] = useState<string>("");
  if (!workspaces) {
    return null;
  }
  const filteredWorkspaces = workspaces.filter((workspace: WorkspaceProps) =>
    workspace.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  return (
    <>
      <div className="pt-6 pb-10 flex  gap-8 justify-between">
        <Input
          className="w-40 sm:w-60 md:w-72 lg:w-80"
          type="text"
          placeholder="Rechercher..."
          value={searchTitle}
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
        />
        <CreateWorkspace />
      </div>
      <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20 justify-center">
        {filteredWorkspaces.map((workspace: WorkspaceProps, index: number) => (
          <WorkspaceCard
            title={workspace.title}
            description={workspace.description}
            id={workspace.id}
            key={index}
          />
        ))}
      </div>
      <Toaster />
    </>
  );
}

export default Workspaces;
