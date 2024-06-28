import { Button } from "@/components/ui/button";
import { ArchiveRestore } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
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
import { PencilLine } from "lucide-react";

function KanbanCard() {
  return (
    <div className="flex flex-wrap w-full p-4 gap-10 bg-red-500 overflow-y-auto grid-cols-3 px-8">
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
                    <DropdownMenuItem>
                      <PencilLine className="w-4 h-4 mr-2" />
                      <span>Éditer</span>
                      <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <ArchiveRestore className="mr-2 h-4 w-4" />
                      <span>Archiver</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
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
