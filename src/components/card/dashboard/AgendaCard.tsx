import { TicketX } from "lucide-react";
import Decoration from "./Decoration";

function AgendaCard() {
  return (
    <div className="bg-[#4F894A]/40 w-full rounded-lg flex items-start gap-2.5 p-5">
      <div className="flex gap-3 w-full">
        <div className="min-w-8 h-8 flex justify-center bg-white items-center rounded border border-[#D9D9D9]">
          <TicketX />
        </div>
        <div className="min-w-max w-full flex flex-col gap-2.5">
          <div className="text-sm min-w-full h-8 flex items-center justify-start font-bold">
            Wake up
          </div>
          <ul className="list-disc text-sm text-[#71717A] pl-5">
            <li>Squat 10 x 3</li>
            <li>Push up 10 x 3</li>
            <li>Abdos 10 x 3</li>
          </ul>
          <Decoration style={"w-9 h-9 text-sm"} margin={"-ml-4"} />
        </div>
      </div>
      <div className="min-w-fit">
        <p className="text-sm">8:30 AM</p>
        <p className="text-sm">8:00 AM</p>
      </div>
    </div>
  );
}

export default AgendaCard;
