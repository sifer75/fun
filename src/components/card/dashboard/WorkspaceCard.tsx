import { ArrowUpRight, Suggestion } from "iconoir-react";
import Decoration from "./Decoration";

function WorkspaceCard({ title }: { title: string }) {
  return (
    <div className="bg-blue-400 min-w-[248px] flex flex-col p-3 rounded-xl gap-1">
      <div className="flex">
        <div className="text-white flex flex-col gap-3 w-full">
          <p className="font-bold">{title}</p>
          <p className="leading-4 text-sm">Completed Tasks: 200</p>
        </div>
        <div className="bg-[#D9D9D9]/20 rounded-full w-5 h-5 flex items-center justify-center">
          <ArrowUpRight className="w-3 h-3 text-white" />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2 text-white">
          <Suggestion className="w-4 h-4" />
          <p className="text-sm">2</p>
        </div>
        <Decoration style={"w-6 h-6 text-[10px]"} margin={"-ml-3"} />
      </div>
    </div>
  );
}

export default WorkspaceCard;
