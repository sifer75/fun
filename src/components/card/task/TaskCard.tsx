import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { TaskProps } from "@/lib/cards.utils";
import { Ellipsis } from "lucide-react";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";
import DateTask from "./DateTask";

function TaskCard({ title, description, id, color, from, to }: TaskProps) {
  const fromDate = from;
  const toDate = to;
  const dateFrom = from ? new Date(fromDate as string) : null;
  const dateTo = to ? new Date(toDate as string) : null;
  const formattedDateFrom = dateFrom
    ? format(dateFrom, "dd/MM")
    : format(Date.now(), "dd/MM");
  const formattedDateTo = dateTo ? format(dateTo, "dd/MM") : "N/A";
  if (!id) return <div>id non trouvé</div>;

  return (
    <Card className="w-40 md:w-48 lg:w-72 rounded-2xl mb-8">
      <CardHeader
        className={`pr-3 rounded-t-lg flex ${color} justify-start pb-10 pt-5 sm:py-5`}
      >
        <CardTitle className="flex flex-col w-full">
          <div className="flex items-center justify-center">
            <p className="truncate w-24 sm:w-32 md:w-40 lg:w-64 h-7">{title}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Ellipsis />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <EditTask
                    titleCard={title}
                    descriptionCard={description}
                    id={id}
                  ></EditTask>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <DateTask id={id} />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <DeleteTask title={title} id={id} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="text-xs">
            de {formattedDateFrom} jusqu'à {formattedDateTo}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-5">
        <CardDescription className="flex flex-col overflow-y-scroll">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
