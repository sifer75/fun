import { TicketX } from "lucide-react";
import Decoration from "./Decoration";
import { MissionProps } from "@/lib/cards.utils";

function AgendaCard({ title, tasks, timeFrom, timeTo }: MissionProps) {
  return (
    <div className="bg-[#4F894A]/40 w-full rounded-lg flex items-start gap-2.5 p-5">
      <div className="flex gap-3 w-full">
        <div className="min-w-8 h-8 flex justify-center bg-white items-center rounded border border-[#D9D9D9]">
          <TicketX />
        </div>
        <div className="min-w-max w-full flex flex-col gap-2.5">
          <div className="text-sm min-w-full h-8 flex items-center justify-start font-bold">
            {title}
          </div>
          <ul className="list-disc text-sm min-w-full text-[#71717A] pl-5">
            <li>{tasks}</li>
          </ul>
          <Decoration style={"w-9 h-9 text-sm"} margin={"-ml-4"} />
        </div>
        <div className="min-w-12 flex flex-col items-end">
          <p className="text-sm w-fit">{timeFrom} AM</p>
          <p className="text-sm w-fit">{timeTo} AM</p>
        </div>
      </div>
    </div>
  );
}

export default AgendaCard;
