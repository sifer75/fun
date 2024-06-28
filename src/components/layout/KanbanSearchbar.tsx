import { Input } from "../ui/input";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

function KanbanSearchbar() {
  return (
    <div className="mx-8 mb-6 flex justify-between">
      <Menubar>
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
      <Input className="w-3/12" type="text" placeholder="Rechercher..." />
    </div>
  );
}

export default KanbanSearchbar;
