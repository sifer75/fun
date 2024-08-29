// import { TaskProps } from "@/lib/cards.utils";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import TaskCard from "@/components/card/task/TaskCard";
// import { getAllTask, updateTaskStatus } from "@/lib/task.request";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DroppableProvided,
// } from "react-beautiful-dnd";
// import { useEffect, useState } from "react";
// import { DropResult } from "react-beautiful-dnd";
// import { TaskList } from "iconoir-react";

import CreateTask from "@/components/card/task/CreateTask";
import TaskCard from "@/components/card/task/TaskCard";
import { TaskProps } from "@/lib/cards.utils";
import { Plus, TaskList } from "iconoir-react";
import { useRef } from "react";

// interface Columns {
//   to_do: TaskProps[];
//   in_progress: TaskProps[];
//   finished: TaskProps[];
// }

// interface task {
//   id: number;
//   status: "to_do" | "in_progress" | "done";
// }

// function Tasks() {
//   const { elementId } = useParams<{ elementId: string }>();
//   const queryClient = useQueryClient();
//   // const [searchTitle, setSearchTitle] = useState<string>("");
//   const {
//     data: tasks,
//     isError,
//     isLoading,
//   } = useQuery({
//     queryKey: ["task", elementId],
//     queryFn: () => getAllTask(Number(elementId)),
//   });

//   // const filteredTasks = tasks.filter((task: TaskProps) =>
//   //   task.title.toLowerCase().includes(searchTitle.toLowerCase())
//   // );

//   const [columns, setColumns] = useState<Columns>({
//     to_do: [],
//     in_progress: [],
//     finished: [],
//   });

//   useEffect(() => {
//     if (tasks) {
//       const updatedColumns: Columns = {
//         to_do: tasks.filter((tasks: TaskProps) => tasks.status === "to_do"),
//         in_progress: tasks.filter(
//           (tasks: TaskProps) => tasks.status === "in_progress"
//         ),
//         finished: tasks.filter(
//           (tasks: TaskProps) => tasks.status === "finished"
//         ),
//       };
//       setColumns(updatedColumns);
//     }
//   }, [tasks]);

//   const mutation = useMutation({
//     mutationFn: (data: task) => updateTaskStatus(data),
//     onError: (error) => {
//       console.log(error);
//     },
//     onSuccess: async () => {
//       queryClient.invalidateQueries({
//         queryKey: ["task", elementId],
//       });
//     },
//   });

//   const onDragEnd = (result: DropResult) => {
//     const { source, destination } = result;
//     if (!destination) return;
//     const updatedColumns = { ...columns };

//     const removedTask = updatedColumns[
//       source.droppableId as keyof Columns
//     ].splice(source.index, 1)[0];
//     removedTask.status = destination.droppableId as keyof Columns;
//     updatedColumns[destination.droppableId as keyof Columns].splice(
//       destination.index,
//       0,
//       removedTask
//     );
//     setColumns(updatedColumns);
//     if (removedTask.id !== undefined) {
//       mutation.mutate({
//         id: removedTask.id,
//         status: destination.droppableId as "to_do" | "in_progress" | "done",
//       });
//     }
//   };

//   const statusColumn = (
//     columnId: keyof Columns,
//     title: string,
//     color: string,
//     description: string
//   ) => {
//     return (
//       <div className="w-1/3 flex h-full flex-col px-3 items-center border-x-2">
//         <div className="w-full flex flex-col gap-2 pt-4 pb-10">
//           <h1 className="font-medium text-2xl">{title}</h1>
//           <p>{description}</p>
//         </div>
//         <Droppable droppableId={columnId}>
//           {(provided: DroppableProvided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               className="h-full"
//             >
//               {columns[columnId].map((task: TaskProps, index: number) => (
//                 <Draggable
//                   draggableId={task.id ? task.id.toString() : `task-${index}`}
//                   index={index}
//                   key={task.id ? task.id.toString() : `task-${index}`}
//                 >
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <TaskCard
//                         title={task.title}
//                         description={task.description}
//                         id={task.id}
//                         color={color}
//                         from={task.from}
//                         to={task.to}
//                         key={index}
//                       />
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </div>
//     );
//   };

//   if (isError || isLoading) return <div>chargement...</div>;

//   return (
//     <div className="w-full h-screen">
//       <div className="flex flex-col gap-2">
//         <div className="flex items-center gap-2 w-fit">
//           <TaskList className="w-8 h-8" />
//           <h1 className="font-medium text-2xl">titre</h1>
//         </div>
//         <p className="text-[#71717A] text-sm">description</p>
//       </div>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="w-full flex-1 flex justify-center">
//           {statusColumn("to_do", "A Faire", "bg-fontBlue", "tâche(s) à faire")}
//           {statusColumn(
//             "in_progress",
//             "En Cours",
//             "bg-fontYellow",
//             "tâche(s) en cours"
//           )}
//           {statusColumn(
//             "finished",
//             "Terminé",
//             "bg-fontGreen",
//             "tâche(s) terminé(es)"
//           )}
//         </div>
//       </DragDropContext>
//     </div>
//   );
// }

// export default Tasks;
const task: Record<string, TaskProps[]> = {
  todo: [
    {
      id: 1,
      kanbanId: 1,
      title: "Setup project",
      description: "Initialize the project with basic setup and dependencies.",
      status: "to_do",
      color: "#FF5733",
      from: "2024-08-01",
      to: "2024-08-05",
    },
    {
      id: 2,
      kanbanId: 1,
      title: "Design wireframes",
      description: "Create wireframes for the dashboard.",
      status: "to_do",
      color: "#33C1FF",
      from: "2024-08-03",
      to: "2024-08-07",
    },
  ],
  in_progress: [
    {
      id: 3,
      kanbanId: 1,
      title: "Develop login feature",
      description: "Implement the login page and authentication system.",
      status: "in_progress",
      color: "#33FF57",
      from: "2024-08-06",
      to: "2024-08-10",
    },
    {
      id: 4,
      kanbanId: 1,
      title: "Database schema design",
      description: "Design the database schema for user management.",
      status: "in_progress",
      color: "#FFA533",
      from: "2024-08-04",
      to: "2024-08-12",
    },
  ],
  finished: [
    {
      id: 5,
      kanbanId: 1,
      title: "Project kickoff meeting",
      description: "Organize the kickoff meeting with stakeholders.",
      status: "finished",
      color: "#5733FF",
      from: "2024-07-25",
      to: "2024-07-25",
    },
    {
      id: 6,
      kanbanId: 1,
      title: "Setup CI/CD pipeline",
      description:
        "Configure the CI/CD pipeline for automated testing and deployment.",
      status: "finished",
      color: "#FF3357",
      from: "2024-07-28",
      to: "2024-07-30",
    },
  ],
};

function Tasks() {
  const refContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full flex flex-col gap-8 overflow-hidden">
      <div className="w-full gap-4 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 w-fit">
            <TaskList className="w-8 h-8" />
            <h1 className="font-medium text-3xl">title</h1>
          </div>
          <p className="text-[#71717A] text-sm">
            Quos blanditiis ipsa et veritatis eveniet repudiandae. Error dolore
            id. Quasi maxime reprehenderit ipsa fugit.
          </p>
        </div>
        <div className="w-full flex justify-end">
          <CreateTask />
        </div>
      </div>

      <div
        ref={refContainer}
        className="h-full flex flex-row gap-8 overflow-x-scroll"
      >
        <div
          className="h-full w-fit bg-taskSection rounded-xl p-3 gap-6 flex flex-col"
          data-swapy-slot="todo"
        >
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1 items-center">
              <p className="text-sm font-medium">To-do</p>
              <div className="bg-[#D9D9D9] p- w-4 h-4 flex items-center justify-center rounded-sm text-sm">
                5
              </div>
            </div>
            <Plus className="w-5 h-5" />
          </div>
          <div className="h-full overflow-y-scroll flex flex-col gap-3 rounded-xl">
            {task.todo.map((task) => {
              return <TaskCard {...task} key={task.id} />;
            })}
          </div>
        </div>
        <div
          className="h-full w-fit bg-taskSection rounded-xl p-3 gap-6 flex flex-col"
          data-swapy-slot="in_progress"
        >
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1 items-center">
              <p className="text-sm font-medium">En Cours</p>
              <div className="bg-[#D9D9D9] p- w-4 h-4 flex items-center justify-center rounded-sm text-sm">
                5
              </div>
            </div>
            <Plus className="w-5 h-5" />
          </div>
          <div className="h-full overflow-y-scroll flex flex-col gap-3 rounded-xl">
            {task.in_progress.map((task) => {
              return <TaskCard {...task} key={task.id} />;
            })}
          </div>
        </div>
        <div
          className="h-full w-fit bg-taskSection rounded-xl p-3 gap-6 flex flex-col"
          data-swapy-slot="finished"
        >
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1 items-center">
              <p className="text-sm font-medium">Completé</p>
              <div className="bg-[#D9D9D9] p- w-4 h-4 flex items-center justify-center rounded-sm text-sm">
                5
              </div>
            </div>
            <Plus className="w-5 h-5" />
          </div>
          <div className="h-full overflow-y-scroll flex flex-col gap-3 rounded-xl">
            {task.finished.map((task) => {
              return <TaskCard {...task} key={task.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
