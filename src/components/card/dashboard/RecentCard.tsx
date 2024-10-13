import { Expand } from "iconoir-react";
import { MoveUpRight } from "lucide-react";
import { ReactNode } from "react";
function RecentCard({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="bg-white min-w-[248px] flex flex-col p-3 rounded-xl gap-1">
      <div className="flex">
        <div className="flex flex-col w-full">
          <p className="font-bold">{title}</p>
          <p className="leading-4 text-xs">Workspace1</p>
        </div>
        {icon}
      </div>
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2 text-white">
          <MoveUpRight className="w-4 h-4" />
          <p className="text-sm">2</p>
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#D9D9D9]/20">
          <Expand className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

export default RecentCard;
