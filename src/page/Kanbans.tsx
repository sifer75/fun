import KanbanCard from "@/components/card/kanban/KanbanCard";
import { Input } from "@/components/ui/input";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { getAllKanban } from "@/lib/kanban.request";
import { KanbanProps, WorkspaceProps } from "@/lib/cards.utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CreateKanban from "@/components/card/kanban/CreateKanban";

function Kanbans() {
    const { id } = useParams<{ id: string }>();
    const workspaceId = Number(id);
    const {
        data: kanbans,
        isError,
        isLoading,
    } = useQuery({
        queryKey: ["kanban", workspaceId],
        queryFn: () => getAllKanban(workspaceId),
    });

    const [searchTitle, setSearchTitle] = useState<string>("");

    if (isError || isLoading) return <div>chargement...</div>;

    const filteredKanbans = kanbans.filter((kanban: WorkspaceProps) =>
        kanban.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    return (
        <>
            <div className="pt-6 pb-10 flex flex-col gap-8 justify-between sm:flex-row sm:justify-between">
                <Menubar className="w-fit">
                    <MenubarMenu>
                        <MenubarTrigger>Tout</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>En cours</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Non commencé</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Terminé</MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
                <Input
                    className="w-40 sm:w-48 md:w-72 lg:w-80"
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTitle}
                    onChange={(e) => {
                        setSearchTitle(e.target.value);
                    }}
                />
                <CreateKanban />
            </div>
            <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20 justify-center">
                {filteredKanbans.map((kanban: KanbanProps, index: number) => (
                    <KanbanCard
                        title={kanban.title}
                        workspaceId={kanban.workspaceId}
                        id={kanban.id}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
}

export default Kanbans;
