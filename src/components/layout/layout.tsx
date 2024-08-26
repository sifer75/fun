import { ReactNode, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import ButtonUser from "./ButtonUser";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/lib/user.request";
import { FolderClosed, FolderOpen } from "lucide-react";
import { getAllWorkspace } from "@/lib/workspace.request";
import { WorkspaceProps } from "@/lib/cards.utils";
import { getAllKanban } from "@/lib/kanban.request";
import CreateKanban from "../card/kanban/CreateKanban";

function Workspace() {
  const [openFolder, setOpenFolder] = useState<string[]>([]);
  const [saveIdWorkspace, setSaveIdWorkspace] = useState<number | undefined>(
    undefined
  );
  const [storeKanban, setStoreKanban] = useState<
    {
      workspaceId: number;
      kanbans: string[];
    }[]
  >([]);

  console.log(storeKanban, saveIdWorkspace, "store");

  const {
    data: workspaces,
    isError: workspaceError,
    isLoading: workspaceLoading,
  } = useQuery({ queryKey: ["workspace"], queryFn: getAllWorkspace });

  const {
    data: kanbans,
    isError: kanbanError,
    isLoading: kanbanLoading,
  } = useQuery({
    queryKey: ["kanban", saveIdWorkspace],
    queryFn: () => getAllKanban(saveIdWorkspace as number),
    enabled: saveIdWorkspace !== undefined,
  });

  useEffect(() => {
    if (kanbans && saveIdWorkspace) {
      setStoreKanban((prev) => [
        ...prev.filter((item) => item.workspaceId !== saveIdWorkspace),
        { workspaceId: saveIdWorkspace as number, kanbans: kanbans },
      ]);
    }
  }, [kanbans, saveIdWorkspace]);

  if (!workspaces) return <div>workspaces non trouvé</div>;
  if (workspaceError || workspaceLoading || kanbanLoading || kanbanError)
    return <div>chargement...</div>;

  return (
    <div className="flex flex-col gap-4 w-full h-full py-10">
      {workspaces.map((workspace: WorkspaceProps) => (
        <div key={workspace.id} className="w-full">
          <div
            onClick={() => {
              if (openFolder.includes(workspace.title)) {
                setOpenFolder((prev) =>
                  prev.filter((folder) => folder !== workspace.title)
                );
              } else {
                setSaveIdWorkspace(workspace.id);
                setOpenFolder((prev) => [...prev, workspace.title]);
              }
            }}
            className="w-full border border-transparent hover:border-black rounded-md px-2 py-1 flex flex-row items-center gap-2"
          >
            {openFolder.includes(workspace.title) ? (
              <FolderOpen />
            ) : (
              <FolderClosed />
            )}
            <span className="font-semibold">{workspace.title}</span>
          </div>

          {storeKanban.find(
            (kanbanz) => kanbanz.workspaceId === saveIdWorkspace
          ) ? (
            <div className="flex flex-col ml-4 mt-2 gap-2">
              {storeKanban
                .find((kanbanz) => kanbanz.workspaceId === saveIdWorkspace)
                ?.kanbans.map((kanban: any) => (
                  <div
                    key={kanban.id}
                    className="px-2 py-1 border border-transparent hover:border-black rounded-md flex flex-row items-center justify-between"
                  >
                    <span className="text-sm font-semibold">
                      {kanban.title}
                    </span>
                    <span className="text-xs">
                      {kanban.title} / {kanban.title}
                    </span>
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Sidebar() {
  const {
    data: user,
    isError: userError,
    isLoading: userLoading,
  } = useQuery({ queryKey: ["user"], queryFn: getUserInfo });

  if (userError || userLoading) return <div>chargement...</div>;

  return (
    <div className="h-full w-60 self-center border flex flex-col justify-between items-center p-4">
      <h1 className="text-center text-2xl font-bold">Logo</h1>
      <CreateKanban titleTypeCard={"kanban"} />
      <Workspace />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-40 my-10">
            <Avatar className="mr-2 w-5 h-5">
              <AvatarImage src={user.avatarUrl} alt="image de l'utilisateur" />
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
    </div>
  );
}
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen flex flex-row">
      <Sidebar />
      <main className="flex-1 p-5">{children}</main>
    </div>
  );
}
