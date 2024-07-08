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
import { KanbanProps } from "@/lib/cards.utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditKanban from "./EditKanban";
import DeleteKanban from "./DeleteKanban";

function KanbanCard({ title, workspaceId, id }: KanbanProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  if (!id) return <div>id non trouvé</div>;

  return (
    <Card className="w-[300px] overflow-y-scroll">
      <CardHeader className="flex flex-row justify-between items-center pb-3">
        <CardTitle>{title}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link
              to={`/workspace/${workspaceId}/${id}`}
              className="bg-black py-2 px-4 rounded-md"
            >
              <ArrowUpRight className="text-white" />
            </Link>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <CardDescription>0 taches</CardDescription>
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
                  <EditKanban
                    modele={"Kanban"}
                    titleCard={title}
                    id={id}
                    onClose={handleDropdownClose}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full">
                  <ArchiveRestore className="mr-2 h-4 w-4" />
                  Archiver
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <DeleteKanban
                    dialogTitle={"Supprimer le kanban"}
                    label={`Souhaitez-vous supprimer ${title} ?`}
                    id={id}
                    onClose={handleDropdownClose}
                  />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Progress value={50} />
      </CardFooter>
    </Card>
  );
}

export default KanbanCard;
