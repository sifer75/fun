import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreateWorkspace from "../card/workspace/CreateWorkspace";
import CreateKanban from "../card/kanban/CreateKanban";
import CreateTask from "../card/task/CreateTask";

interface HeaderProps {
  titlePage: string;
  pageType: "workspace" | "kanban" | "task";
  id?: number;
}
function Header({ titlePage, pageType }: HeaderProps) {
  const renderCreateButton = () => {
    switch (pageType) {
      case "workspace":
        return <CreateWorkspace titleTypeCard={titlePage} />;
      case "kanban":
        return <CreateKanban titleTypeCard={titlePage} />;
      case "task":
        return <CreateTask titleTypeCard={titlePage} />;
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
  return (
    <>
      <div className="h-20 border-b-2 border-gray-200 flex items-center gap-8">
        <div className="border-2 border-gray-200 rounded-lg w-52 flex items-center justify-center p-2 mr-4">
          <Avatar className="mr-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Alicia Koch</p>
        </div>
        <p>{titlePage}</p>
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
