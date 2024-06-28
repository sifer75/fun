import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight } from "lucide-react";
import DialogCardEdit from "./DialogCardEdit";
import DialogCardDelete from "./DialogCardDelete";

function KanbanCard() {
  return (
    <div className="flex flex-wrap w-full p-4 gap-10 overflow-y-auto grid-cols-3 px-8">
      {[...Array(8)].map((_, index) => (
        <Card key={index} className="w-[350px]">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Create project</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    <ArrowUpRight />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DialogCardEdit
                      dialogTitle={"Créer un kanban"}
                      dialogDescription={"Ajouter un nouveau kanban."}
                      labelName={"Nom du kanban"}
                      labelDescription={"Décrire le kanban"}
                    />
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <DialogCardDelete dialogTitle={"Supprimer le kanban"} label={"Souhaitez-vous supprimer (nom du kanban) ?"} />
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>0 taches</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Progress value={50} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default KanbanCard;
