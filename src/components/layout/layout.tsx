import { ReactNode, useState } from "react";
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

const folder: {
    id: number;
    workspace_name: string;
    child: {
        kanban_name: string;
        task_completed: number;
        number_of_tasks: number;
    }[];
}[] = [
    {
        id: 1,
        workspace_name: "Workspace 1",
        child: [
            {
                kanban_name: "Kanban 1",
                task_completed: 2,
                number_of_tasks: 5,
            },
            {
                kanban_name: "Kanban 2",
                task_completed: 1,
                number_of_tasks: 3,
            },
        ],
    },
    {
        id: 2,
        workspace_name: "Workspace 2",
        child: [
            {
                kanban_name: "Kanban 1",
                task_completed: 2,
                number_of_tasks: 5,
            },
            {
                kanban_name: "Kanban 2",
                task_completed: 1,
                number_of_tasks: 3,
            },
        ],
    },
];

function Workspace() {
    const [openFolder, setOpenFolder] = useState<string[]>([]);

    return (
        <div className="flex flex-col gap-4 w-full h-full py-10">
            {folder.map((workspace, index) => (
                <div key={index} className="w-full">
                    <div
                        onClick={() => {
                            if (openFolder.includes(workspace.workspace_name)) {
                                setOpenFolder((prev) =>
                                    prev.filter(
                                        (folder) =>
                                            folder !== workspace.workspace_name
                                    )
                                );
                            } else {
                                setOpenFolder((prev) => [
                                    ...prev,
                                    workspace.workspace_name,
                                ]);
                            }
                        }}
                        className="w-full border border-transparent hover:border-black rounded-md px-2 py-1 flex flex-row items-center gap-2"
                    >
                        {openFolder.includes(workspace.workspace_name) ? (
                            <FolderOpen />
                        ) : (
                            <FolderClosed />
                        )}
                        <span className="font-semibold">
                            {workspace.workspace_name}
                        </span>
                    </div>
                    {openFolder.includes(workspace.workspace_name) && (
                        <div className="flex flex-col ml-4 mt-2 gap-2">
                            {workspace.child.map((kanban, index) => (
                                <div
                                    key={index}
                                    className="px-2 py-1 border border-transparent hover:border-black rounded-md flex flex-row items-center justify-between"
                                >
                                    <span className="text-sm font-semibold">
                                        {kanban.kanban_name}
                                    </span>
                                    <span className="text-xs">
                                        {kanban.task_completed} /{" "}
                                        {kanban.number_of_tasks}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
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
        <div className="h-full w-60 self-center rounded-xl border flex flex-col justify-between items-center p-4">
            <h1 className="text-center text-2xl font-bold">Logo</h1>
            <Workspace />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-40 my-10">
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
