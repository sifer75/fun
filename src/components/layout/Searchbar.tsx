import { Input } from "../ui/input";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

function Searchbar() {
  return (
    <div className="mx-8 flex justify-between">
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

export default Searchbar;
