import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpRight, ArchiveRestore } from "lucide-react";
import DialogCardEdit from "./DialogCardEdit";
import DialogCardDelete from "./DialogCardDelete";
import { WorkspaceProps } from "@/lib/workspace.utils";
import { useState } from "react";
function WorkspaceCard({ title, description, id }: WorkspaceProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  if (!id) return <div>id non défini</div>;

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                <ArrowUpRight />
              </Button>
            </DropdownMenuTrigger>
            {isDropdownOpen && (
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <DialogCardEdit
                      dialogTitle={"Modifier le nom du projet"}
                      dialogDescription={"Modifier la description du projet"}
                      labelName={title}
                      labelDescription={description}
                      id={id}
                      onClose={handleDropdownClose}
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ArchiveRestore className="mr-2 h-4 w-4" />
                    <span>Archiver</span>
                    <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <DialogCardDelete
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
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default WorkspaceCard;
