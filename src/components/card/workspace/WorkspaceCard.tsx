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
    <Card className="w-56 md:w-72 lg:w-96">
      <CardHeader className="flex flex-row justify-between items-center ">
        <CardTitle className="truncate w-24 sm:w-32 md:w-40 lg:w-64">
          {title}
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link
              to={`/workspace/${id}`}
              className="bg-black py-2 px-4 rounded-md ml-4 "
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
                    id={id}
                  />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </CardContent>
      <CardFooter>
        <CardDescription className="truncate w-44 sm:w-52 md:w-60 lg:w-80">
          {description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default WorkspaceCard;
