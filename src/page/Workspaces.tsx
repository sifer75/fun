import WorkspaceCard from "@/components/card/workspace/WorkspaceCard";
import Header from "@/components/layout/Header";
import { Input } from "@/components/ui/input";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Toaster } from "@/components/ui/toaster";
import { getAllWorkspace } from "@/lib/workspace.request";
import { WorkspaceProps } from "@/lib/cards.utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function Workspaces() {
  const {
    data: workspaces,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["workspace"],
    queryFn: getAllWorkspace,
  });
  const [searchTitle, setSearchTitle] = useState<string>("");
  if (!workspaces) {
    return null;
  }
  if (isError || isLoading)
    return (
      <div className="h-screen w-screen flex flex-col px-8">
        <Header titlePage="Projets" pageType="workspace" />
      </div>
    );

  const filteredWorkspaces = workspaces?.filter((workspace: WorkspaceProps) =>
    workspace.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  return (
    <div className="h-screen w-screen flex flex-col px-8">
      <Header titlePage="Projets" pageType="workspace" />
      <div className="py-6 flex justify-between">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Tout</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Archivé</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <Input
          className="w-3/12"
          type="text"
          placeholder="Rechercher..."
          value={searchTitle}
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
        />
      </div>
      <div className="w-full grid grid-cols-3 justify-center h-auto gap-8 place-items-center">
        {filteredWorkspaces.map((workspace: WorkspaceProps, index: number) => {
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
