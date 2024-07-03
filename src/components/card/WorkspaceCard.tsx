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
function WorkspaceCard() {
  return (
    <div className="flex flex-wrap w-full p-4 gap-10 overflow-y-auto grid-cols-3 px-8">
      {[...Array(8)].map((_, index) => (
        <Card key={index} className="w-[350px]">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Projet</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    <ArrowUpRight />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <DialogCardEdit
                        dialogTitle={"Modifier le nom du projet"}
                        dialogDescription={"Modifier la description du projet"}
                        labelName={"Nom du projet"}
                        labelDescription={"Décrire le projet"}
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
                        label={"Souhaitez-vous supprimer (nom du projet) ?"}
                      />
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Deploy your new project in one-click.Deploy your new project in
              one-click.Deploy your new project in one-click.Deploy your new
              project in one-click.Deploy your new project in one-click.
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default WorkspaceCard;
