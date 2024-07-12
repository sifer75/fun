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
    <Card className="w-full rounded-2xl mb-8">
      <CardHeader
        className={`pr-3 rounded-t-lg h-12 flex ${color} justify-start pb-10 pt-5`}
      >
        <div className="flex justify-between items-center w-full">
          <CardTitle className="text-xl flex items-center gap-2 h-full justify-between overflow-hidden">
            {title}
            <EditTask
              modele={"task"}
              titleCard={title}
              descriptionCard={description}
              id={id}
            ></EditTask>
          </CardTitle>

          <DeleteTask
            dialogTitle={"Supprimer la tâche"}
            label={`souhaitez-vous supprimer ${title} ?`}
            id={id}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
