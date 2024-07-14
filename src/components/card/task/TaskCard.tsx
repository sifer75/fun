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
    <Card className="w-[400px] rounded-2xl mb-8">
      <CardHeader
        className={`pr-3 rounded-t-lg flex ${color} justify-start pb-10 pt-5`}
      >
        <div className="flex justify-between items-center w-full">
          <CardTitle className="text-xl flex items-center gap-2 h-full justify-between">
            <p className="whitespace-nowrap overflow-hidden min-w-4 max-w-64 truncate">{title}</p>
            <EditTask
              modele={"tâche"}
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
        <CardDescription className="break-words">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
