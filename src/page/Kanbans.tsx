import KanbanCard from "@/components/card/kanban/KanbanCard";
import Header from "@/components/layout/Header";
import { Input } from "@/components/ui/input";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { getAllKanban } from "@/lib/kanban.request";
import { KanbanProps, WorkspaceProps } from "@/lib/cards.utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Kanbans() {
  const { id } = useParams<{ id: string }>();
  const workspaceId = Number(id);
  const {
    data: kanbans,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["kanban", workspaceId],
    queryFn: () => getAllKanban(workspaceId),
  });

  const [searchTitle, setSearchTitle] = useState<string>("");

  if (isError || isLoading) return <div>chargement...</div>;

  const filteredKanbans = kanbans.filter((kanban: WorkspaceProps) =>
    kanban.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="h-screen w-screen flex flex-col px-8">
      <Header titlePage="kanban" pageType="kanban" />
      <div className="py-6 flex justify-between">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Tout</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>En cours</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Non commencé</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Terminé</MenubarTrigger>
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
        {filteredKanbans.map((kanban: KanbanProps, index: number) => {
          return (
            <KanbanCard
              key={index}
              title={kanban.title}
              workspaceId={kanban.workspaceId}
              id={kanban.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Kanbans;
