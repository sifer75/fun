import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Input } from "../ui/input";

function WorkspaceSearchbar() {
  return (
    <div className="mx-8 mb-6 flex justify-between">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Tout</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Archivé</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Input className="w-3/12" type="text" placeholder="Rechercher..." />
    </div>
  );
}

export default WorkspaceSearchbar;
