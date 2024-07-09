import Header from "@/components/layout/Header";
import { TaskProps } from "@/lib/cards.utils";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TaskCard from "@/components/card/task/TaskCard";
import { getAllTask } from "@/lib/task.request";

function Tasks() {
  const { id } = useParams<{ id: string }>();
  const kanbanId = Number(id);
  const {
    data: tasks,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["task", kanbanId],
    queryFn: () => getAllTask(kanbanId),
  });

  if (isError || isLoading) return <div>chargement...</div>;

  return (
    <div className="h-screen w-screen flex flex-col px-8">
      <Header titlePage="tâche" pageType="task" />
      <div className="w-full grid grid-cols-4 justify-center h-auto gap-8 place-items-center">
        {tasks.map((task: TaskProps, index: number) => {
          return (
            <TaskCard
              key={index}
              title={task.title}
              description={task.description}
              id={task.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
