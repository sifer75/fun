import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TaskProps } from "@/lib/cards.utils";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

function TaskCard({ title, description, id, color }: TaskProps) {
  if (!id) return <div>id non trouvé</div>;

  return (
    <Card className="w-40 md:w-48 lg:w-72 rounded-2xl mb-8">
      <CardHeader
        className={`pr-3 rounded-t-lg flex ${color} justify-start pb-10 pt-5 sm:py-5`}
      >
        <div className="flex justify-between items-center w-full">
          <CardTitle className="flex">
            <p className="truncate w-12 md:w-20 lg:w-44">{title}</p>
            <div className="flex w-fit">
              <EditTask
                modele={"tâche"}
                titleCard={title}
                descriptionCard={description}
                id={id}
              ></EditTask>
              <DeleteTask dialogTitle={"Supprimer la tâche"} id={id} />
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <CardDescription className="break-words truncate">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
