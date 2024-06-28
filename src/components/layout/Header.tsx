import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

function Header() {
  return (
    <div>
      <div className="h-16 border-b-2 border-gray-200 flex items-center pl-5 gap-8">
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
      <div className="py-4 px-8">
        <div className="border-b pb-4">
          <div className="w-full flex justify-between ">
            <h1 className="text-4xl font-medium mb-2">Mes workspaces</h1>
            <Button className="text-gray-100">Créer un workspace</Button>
          </div>
          <span className="text-gray-500 tewt-xl font-light">
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
