import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TaskProps } from "@/lib/cards.utils";
import { PencilLine } from "lucide-react";
import { Trash2 } from "lucide-react";

function TaskCard({ title, id }: TaskProps) {
  return (
    <Card className="w-[300px] rounded-2xl">
      <CardHeader className="bg-red-500 rounded-t-lg h-12 flex justify-start pb-8 pt-5">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl flex items-center gap-2 h-full justify-between">
            Tâche 3 <PencilLine className="h-4 w-4" />
          </CardTitle>
          <Trash2 className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
