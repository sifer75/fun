import Header from "@/components/layout/Header";
import Searchbar from "@/components/layout/Searchbar";

function Workspace() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <Searchbar />
      <div className="flex-grow px-8 bg-red-500">
        
      </div>
    </div>
  );
}

export default Workspace;
