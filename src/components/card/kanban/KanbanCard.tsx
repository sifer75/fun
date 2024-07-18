import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpRight, ArchiveRestore } from "lucide-react";
import { Ellipsis } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { KanbanProps, TaskProps } from "@/lib/cards.utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditKanban from "./EditKanban";
import DeleteKanban from "./DeleteKanban";
import { useQuery } from "@tanstack/react-query";
import { getAllTask } from "@/lib/task.request";

function KanbanCard({ title, workspaceId, id }: KanbanProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const kanbanId = id ?? -1;

  const {
    data: tasks,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["kanbanTasks", kanbanId],
    queryFn: () => getAllTask(kanbanId),
    enabled: id !== undefined,
  });

  const totalTasks = tasks ? tasks.length : 0;
  const totalTasksDone = tasks
    ? tasks.filter((task: TaskProps) => task.status === "finished").length
    : 0;
  const percentageTasksDone =
    totalTasks > 0 ? Math.min((totalTasksDone / totalTasks) * 100, 100) : 0;

  if (isError || isLoading) return <div>chargement...</div>;
  if (!id) return <div>id non trouvé</div>;

  return (
    <Card className="w-56 md:w-72 lg:w-96">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="truncate w-24 sm:w-32 md:w-40 lg:w-64 h-7">
          {title}
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link
              to={`/workspace/${workspaceId}/${id}`}
              className="bg-black py-2 px-4 rounded-md ml-4"
            >
              <ArrowUpRight className="text-white" />
            </Link>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <CardDescription>{totalTasks} tache(s)</CardDescription>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          {isDropdownOpen && (
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <EditKanban modele={"Kanban"} titleCard={title} id={id} />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full">
                  <ArchiveRestore className="mr-2 h-4 w-4" />
                  Archiver
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <DeleteKanban
                    title={title}
                    dialogTitle={"Supprimer le kanban"}
                    id={id}
                  />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Progress value={percentageTasksDone} />
      </CardFooter>
    </Card>
  );
}

export default KanbanCard;
