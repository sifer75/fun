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
import DateTask from "@/components/card/task/DateTask";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MissionProps } from "@/lib/cards.utils";
import AgendaMission from "./AgendaMission";
import { CreateMission } from "@/lib/mission.request";
function Agenda() {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [tasks, setTasks] = useState<string>("");
  const [time, setTime] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  const getFormatedDate = () => {
    const today = new Date();
    return today.toLocaleDateString("fr-FR", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const mutation = useMutation({
    mutationFn: (data: MissionProps) => CreateMission(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["task"] });
      setOpen(false);
    },
  });

  const handleSubmit = () => {
    if (date?.from && date?.to) {
      const data = {
        dateFrom: date.from.toISOString(),
        dateTo: date.to.toISOString(),
        timeFrom: time.from,
        timeTo: time.to,
        title,
        tasks,
      };
      mutation.mutate(data);
    }
  };

  return (
    <div className="w-fit h-full gap-5 rounded-xl p-3 bg-[#FAFBFD]">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2.5 items-center w-fit">
          <p className="font-bold truncate w-max">{getFormatedDate()}</p>
          <div className="w-10 flex justify-between">
            <ArrowLeft className="w-4 h-4 hover:shadow-2xl hover:scale-125 hover:border hover:border-black rounded-sm" />
            <ArrowRight className="w-4 h-4 hover:shadow-2xl hover:scale-125 hover:border hover:border-black rounded-sm" />
          </div>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="p-0 min-w-5 max-h-5 min-h-5 hover:scale-125"
              onClick={() => setOpen(true)}
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

                <DateTask date={date} setDate={setDate} />
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
                    value={time.from}
                    onChange={(e) => setTime({ ...time, from: e.target.value })}
                  />
                  <p>H</p>
                  <Input
                    id="end"
                    placeholder="00"
                    className="w-1/2"
                    value={time.to}
                    onChange={(e) => setTime({ ...time, to: e.target.value })}
                  />
                  <p>min</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSubmit}>
                Ajouter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <AgendaMission />
    </div>
  );
}

export default Agenda;
