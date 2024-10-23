import { useQuery } from "@tanstack/react-query";
import AgendaCard from "./AgendaCard";
import { getAllMissionsFromDate } from "@/lib/mission.request";
import { MissionProps } from "@/lib/cards.utils";

function AgendaMission() {
  const {
    data: missions = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["mission"],
    queryFn: getAllMissionsFromDate,
  });

  if (isError || isLoading) return <div>missions non trouvé</div>;
  console.log(missions, "missions");

  return (
    <div className="overflow-y-scroll w-full h-full flex flex-col gap-5 rounded-xl p-3">
      {missions.length > 0 ? (
        missions.map((mission: MissionProps) => (
          <AgendaCard
            key={mission.id}
            title={mission.title}
            tasks={mission.tasks}
            timeFrom={mission.timeFrom}
            timeTo={mission.timeTo}
          />
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          aucune mission trouvée
        </div>
      )}
    </div>
  );
}

export default AgendaMission;
