import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, ArrowLeft, ArrowRight } from "iconoir-react";
import AgendaCard from "@/components/card/dashboard/AgendaCard";
import DateTask from "@/components/card/task/DateTask";
import { useState } from "react";
function Agenda() {
  const [title, setTitle] = useState<string>("");
  const [tasks, setTasks] = useState<string>("");
  const [hour, setHour] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });

  return (
    <div className="bg-[#FAFBFD] min-w-[340px] flex flex-col gap-5 rounded-xl p-3">
      <div className="flex items-center justify-between min-w-max">
        <div className="flex gap-2.5 items-center">
          <p className="font-bold">Vendredi 3 Mars 2024</p>
          <div className="w-10 flex justify-between">
            <ArrowLeft className="w-4 h-4 hover:shadow-2xl hover:scale-125 hover:border hover:border-black rounded-sm" />
            <ArrowRight className="w-4 h-4 hover:shadow-2xl hover:scale-125 hover:border hover:border-black rounded-sm" />
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="p-0 min-w-5 max-h-5 min-h-5 hover:scale-125"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Agenda</DialogTitle>
              <DialogDescription>
                Ajoute une Mission à faire dans ton calendrier
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center gap-3 w-full justify-end">
                <Label htmlFor="name" className="text-right">
                  Mission
                </Label>
                <Input
                  id="name"
                  placeholder="nom de la mission"
                  className="w-2/3"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3 w-full justify-end">
                <Label htmlFor="username" className="text-right">
                  Liste de tâches
                </Label>
                <Input
                  id="username"
                  placeholder="tâche"
                  className="w-2/3"
                  value={tasks}
                  onChange={(e) => setTasks(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3 w-full justify-end">
                <Label htmlFor="username" className="text-right">
                  Date
                </Label>

                <DateTask />
              </div>
              <div className="flex items-center gap-3 w-full justify-end">
                <Label htmlFor="username" className="text-right">
                  Heure
                </Label>

                <div className="flex items-center gap-3 w-2/3 justify-end">
                  <Input
                    id="start"
                    placeholder="00"
                    className="w-1/2"
                    value={hour.from}
                    onChange={(e) => setHour({ ...hour, from: e.target.value })}
                  />
                  <p>H</p>
                  <Input
                    id="end"
                    placeholder="00"
                    className="w-1/2"
                    value={hour.to}
                    onChange={(e) => setHour({ ...hour, to: e.target.value })}
                  />
                  <p>min</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Ajouter</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <AgendaCard />
      <AgendaCard />
      <AgendaCard />
    </div>
  );
}

export default Agenda;
