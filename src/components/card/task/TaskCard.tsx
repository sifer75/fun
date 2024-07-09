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

function TaskCard({ title, description, id }: TaskProps) {

  if (!id) return <div>id non trouvé</div>;

  return (
    <Card className="w-[300px] rounded-2xl">
      <CardHeader className="bg-red-500 pr-3 rounded-t-lg h-12 flex justify-start pb-10 pt-5">
        <div className="flex justify-between items-center w-full">
          <CardTitle className="text-xl flex items-center gap-2 h-full justify-between">
            {title}
            <EditTask modele={"task"} titleCard={title} descriptionCard={description} id={id}></EditTask>
            
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
