import Header from "@/components/layout/Header";
import { Input } from "@/components/ui/input";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { getAllKanban } from "@/lib/kanban.request";
import { KanbanProps, TaskProps } from "@/lib/cards.utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TaskCard from "@/components/card/task/TaskCard";

function Tasks() {
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

  const filteredTasks = kanbans.filter((kanban: KanbanProps) =>
    kanban.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="h-screen w-screen flex flex-col px-8">
      <Header titlePage="tâche" pageType="task" />
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
      <div className="w-full grid grid-cols-4 justify-center h-auto gap-8 place-items-center">
        {filteredTasks.map((task: TaskProps, index: number) => {
          return (
            <TaskCard
              key={index}
              title={task.title}
              kanbanId={task.kanbanId}
              id={task.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
