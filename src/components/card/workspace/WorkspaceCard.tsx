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
import EditWorkspace from "./EditWorkspace";
import DeleteWorkspace from "./DeleteWorkspace";
import { WorkspaceProps } from "@/lib/cards.utils";
import { useState } from "react";
import { Ellipsis } from "lucide-react";
import { useNavigate } from "react-router-dom";
function WorkspaceCard({ title, description, id }: WorkspaceProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  if (!id) return <div>id non défini</div>;

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const handleCardClick = () => {
    navigate(`/workspace/${id}`);
  };

  return (
    <Card
      className="w-56 md:w-72 lg:w-96 hover:translate-y-3  ease-in-out delay-100 duration-150"
      onClick={handleCardClick}
    >
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="truncate w-24 sm:w-32 md:w-40 lg:w-64 h-7">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-end pb-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              onClick={(event) => {
                event.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          {isDropdownOpen && (
            <DropdownMenuContent className="w-56 z-50">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <EditWorkspace
                    titleCard={title}
                    descriptionCard={description}
                    id={id}
                    onClose={handleDropdownClose}
                  />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <DeleteWorkspace title={title} id={id} />
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
