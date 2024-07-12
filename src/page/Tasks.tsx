import Header from "@/components/layout/Header";
import { TaskProps } from "@/lib/cards.utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TaskCard from "@/components/card/task/TaskCard";
import { getAllTask, updateTaskStatus } from "@/lib/task.request";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
} from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { DropResult } from "react-beautiful-dnd";

interface Columns {
  to_do: TaskProps[];
  in_progress: TaskProps[];
  finished: TaskProps[];
}

interface task {
  id: number;
  status: "to_do" | "in_progress" | "done";
}

function Tasks() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const kanbanId = Number(id);
  const {
    data: tasks,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["task", kanbanId],
    queryFn: () => getAllTask(kanbanId),
  });

  const [columns, setColumns] = useState<Columns>({
    to_do: [],
    in_progress: [],
    finished: [],
  });

  useEffect(() => {
    if (tasks) {
      const updatedColumns: Columns = {
        to_do: tasks.filter((tasks: TaskProps) => tasks.status === "to_do"),
        in_progress: tasks.filter(
          (tasks: TaskProps) => tasks.status === "in_progress"
        ),
        finished: tasks.filter(
          (tasks: TaskProps) => tasks.status === "finished"
        ),
      };
      setColumns(updatedColumns);
    }
  }, [tasks]);

  const mutation = useMutation({
    mutationFn: (data: task) => updateTaskStatus(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["task", kanbanId],
      });
    },
  });

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    const updatedColumns = { ...columns };

    const removedTask = updatedColumns[
      source.droppableId as keyof Columns
    ].splice(source.index, 1)[0];
    removedTask.status = destination.droppableId as keyof Columns;
    updatedColumns[destination.droppableId as keyof Columns].splice(
      destination.index,
      0,
      removedTask
    );
    setColumns(updatedColumns);

    mutation.mutate({
      id: removedTask.id,
      status: destination.droppableId as "to_do" | "in_progress" | "done",
    });
  };

  if (isError || isLoading) return <div>chargement...</div>;

  return (
    <div className="h-screen w-screen flex flex-col px-8">
      <Header titlePage="tâche" pageType="task" />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="w-full h-max flex justify-center place-items-center">
          <Droppable droppableId="to_do">
            {(provided: DroppableProvided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full flex h-full flex-col px-3"
              >
                <div className="w-full flex flex-col gap-2 p-4">
                  <h1 className="font-medium text-2xl">A Faire</h1>
                  <p>tâches à faire</p>
                </div>
                {columns.to_do.map((task: TaskProps, index: number) => (
                  <Draggable
                    draggableId={task.id.toString()}
                    index={index}
                    key={task.id.toString()}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskCard
                          title={task.title}
                          description={task.description}
                          id={task.id}
                          color={"bg-fontBlue"}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="in_progress">
            {(provided: DroppableProvided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full flex h-full flex-col border-x-2 px-3"
              >
                <div className="w-full flex flex-col gap-2 p-4">
                  <h1 className="font-medium text-2xl">En Cours</h1>
                  <p>tâches en cours</p>
                </div>
                {columns.in_progress.map((task: TaskProps, index: number) => (
                  <Draggable
                    draggableId={task.id.toString()}
                    index={index}
                    key={task.id.toString()}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <TaskCard
                          title={task.title}
                          description={task.description}
                          id={task.id}
                          color={"bg-fontYellow"}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="finished">
            {(provided: DroppableProvided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full flex h-full flex-col px-3"
              >
                <div className="w-full flex flex-col gap-2 p-4">
                  <h1 className="font-medium text-2xl">Terminé</h1>
                  <p>tâches terminés</p>
                </div>
                {columns.finished.map((task: TaskProps, index: number) => (
                  <Draggable
                    draggableId={task.id.toString()}
                    index={index}
                    key={task.id.toString()}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <TaskCard
                          title={task.title}
                          description={task.description}
                          id={task.id}
                          color={"bg-fontGreen"}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default Tasks;
