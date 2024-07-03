import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DialogCardCreate from "../card/DialogCardCreate";

function Header() {
  return (
    <div>
      <div className="h-20 border-b-2 border-gray-200 flex items-center gap-8">
        <div className="border-2 border-gray-200 rounded-lg w-52 flex items-center justify-center p-2 mr-4">
          <Avatar className="mr-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Alicia Koch</p>
        </div>
        <p>Workspaces</p>
        <p>Réglage</p>
      </div>

      <div className="border-b pb-4">
        <div className="w-full flex justify-between items-center pt-4">
          <h1 className="text-4xl font-medium mb-2">Mes Projets</h1>
          <DialogCardCreate
            dialogTitle={"Créer un projet"}
            dialogDescription={"Ajouter un nouveau projet"}
            labelName={"Nom du projet"}
            labelDescription={"Décrire le projet"}
          />
        </div>
        <span className="text-gray-500 tewt-xl font-light">
          Lorem ipsum dolor sit amet consectetur.
        </span>
      </div>
    </div>
  );
}

export default Header;
