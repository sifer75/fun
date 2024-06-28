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
import { ArrowUpLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ArchiveRestore } from "lucide-react";
import { PencilLine } from "lucide-react";

function WorkspaceCard() {
  return (
    <div className="flex flex-wrap w-full p-4 gap-10 bg-red-500 overflow-y-auto grid-cols-3 px-8">
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
                    <DropdownMenuItem>
                      <PencilLine className="w-4 h-4 mr-2" />
                      <span>Éditer</span>
                      <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ArchiveRestore className="mr-2 h-4 w-4" />
                      <span>Archiver</span>
                      <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>Supprimer</span>
                      <DropdownMenuShortcut>
                        <ArrowUpLeft className="h-4 w-4" />
                      </DropdownMenuShortcut>
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
