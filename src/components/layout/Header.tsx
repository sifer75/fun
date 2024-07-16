import CreateWorkspace from "../card/workspace/CreateWorkspace";
import CreateKanban from "../card/kanban/CreateKanban";
import CreateTask from "../card/task/CreateTask";
import ButtonUser from "./ButtonUser";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/lib/user.request";
interface HeaderProps {
  titlePage: string;
  pageType: "workspace" | "kanban" | "task";
  id?: number;
}
function Header({ titlePage, pageType }: HeaderProps) {
  const {
    data: user,
    isError: userError,
    isLoading: userLoading,
  } = useQuery({ queryKey: ["user"], queryFn: getUserInfo });

  const renderCreateButton = () => {
    switch (pageType) {
      case "workspace":
        return <CreateWorkspace titleTypeCard={pageType} />;
      case "kanban":
        return <CreateKanban titleTypeCard={pageType} />;
      case "task":
        return <CreateTask titleTypeCard={pageType} />;
      default:
        return null;
    }
  };
  const renderDescription = () => {
    switch (pageType) {
      case "workspace":
        return "Gestion des Workspaces";
      case "kanban":
        return "Gestion des Kanbans";
      case "task":
        return "Gestion des Tâches";
    }
  };

  if (!user) return <div>utilisateur non trouvé</div>;
  if (userError || userLoading) return <div>chargement...</div>;

  return (
    <>
      <div className="h-20 border-b-2 border-gray-200 flex items-center gap-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-40">
              <Avatar className="mr-2 w-5 h-5">
                <AvatarImage
                  src={user.avatarUrl}
                  alt="image de l'utilisateur"
                />
              </Avatar>
              <p className="text-lg">{user.name}</p>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <ButtonUser />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {titlePage}
        <p>réglage</p>
      </div>

      <div className="border-b pb-4">
        <div className="w-full flex justify-between items-center pt-4">
          <h1 className="text-4xl font-medium mb-2">Mes {titlePage}</h1>
          {renderCreateButton()}
        </div>
        <span className="text-gray-500 tewt-xl font-light">
          {renderDescription()}
        </span>
      </div>
    </>
  );
}

export default Header;
