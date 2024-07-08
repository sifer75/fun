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
import EditWorkspace from "./EditWorkspace";
import DeleteWorkspace from "./DeleteWorkspace";
import { WorkspaceProps } from "@/lib/cards.utils";
import { useState } from "react";
import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";
function WorkspaceCard({ title, description, id }: WorkspaceProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  if (!id) return <div>id non défini</div>;

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Card className="w-[300px] h-48 overflow-y-scroll">
      <CardHeader className="flex flex-row justify-between items-center pb-3">
        <CardTitle>{title}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link
              to={`/workspace/${id}`}
              className="bg-black py-2 px-4 rounded-md"
            >
              <ArrowUpRight className="text-white" />
            </Link>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex justify-end pb-2">
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
                  <EditWorkspace
                    modele={"Projet"}
                    titleCard={title}
                    descriptionCard={description}
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
                  <DeleteWorkspace
                    dialogTitle={"Supprimer le projet"}
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
      <CardFooter className="flex justify-between align-start h-fit items-start">
        <CardDescription className="flex items-start">
          {description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default WorkspaceCard;
