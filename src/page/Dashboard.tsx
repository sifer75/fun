import AgendaCard from "@/components/card/dashboard/AgendaCard";
import RecentCard from "@/components/card/dashboard/RecentCard";
import WorkspaceCard from "@/components/card/dashboard/WorkspaceCard";
import {
  Plus,
  ArrowLeft,
  ArrowRight,
  Calendar,
  NavArrowRight,
  Page,
  Presentation,
  Table2Columns,
  TaskList,
} from "iconoir-react";
function Dashboard() {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-8 ">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-2xl">Dashboard</h1>
          <p className="text-[#71717A] text-sm">
            Fuga nam voluptatibus ullam excepturi consectetur iusto blanditiis
            in. Deleniti dolore pariatur excepturi ullam facilis. Atque
            laudantium laudantium inventore assumenda natus. Voluptas atque
            sequi officiis commodi esse illo animi. Reiciendis esse ex error
            temporibus cupiditate quia quam.
          </p>
        </div>
        <div className="w-full h-full flex gap-5">
          <div className="w-2/3 flex flex-col gap-6">
            <div className="w-full bg-[#FAFBFD] rounded-xl p-3">
              <h1 className="text-xl h-8 w-32">Workspaces</h1>
              <div className="flex gap-2 flex-wrap">
                <WorkspaceCard />
                <WorkspaceCard />
                <WorkspaceCard />
                <WorkspaceCard />
              </div>
            </div>
            <div className="w-full bg-[#FAFBFD] rounded-xl p-3">
              <h1 className="text-xl h-8 w-32">Recents</h1>
              <div className="flex gap-5 flex-wrap">
                <RecentCard
                  title={"Calendrier"}
                  icon={<Calendar className="w-4 h-4" />}
                />
                <RecentCard
                  title={"Presentation"}
                  icon={<Presentation className="w-4 h-4" />}
                />
                <RecentCard
                  title={"Document"}
                  icon={<Page className="w-4 h-4" />}
                />
                <RecentCard
                  title={"Tableau"}
                  icon={<Table2Columns className="w-4 h-4" />}
                />
                <RecentCard
                  title={"Liste de tâches"}
                  icon={<TaskList className="w-4 h-4" />}
                />
                <RecentCard
                  title={"Excalidraw"}
                  icon={<NavArrowRight className="w-4 h-4" />}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#FAFBFD] min-w-[340px] flex flex-col gap-5 rounded-xl p-3">
            <div className="flex items-center justify-between min-w-max">
              <div className="flex gap-2.5 items-center">
                <p className="font-bold">Vendredi 3 Mars 2024</p>
                <div className="w-10 flex justify-between">
                  <ArrowLeft className="w-3 h-3" />
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              <Plus className="w-4 h-4" />
            </div>
            <AgendaCard />
            <AgendaCard />
            <AgendaCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
