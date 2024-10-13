import CreateTask from "@/components/card/task/CreateTask";
import DndColumn from "@/components/dragAndDrop.tsx/DndColumn";
import { TaskProps } from "@/lib/cards.utils";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { TaskList } from "iconoir-react";
import { useState } from "react";

const example: Record<string, TaskProps[]> = {
  todo: [
    {
      id: "1",
      kanbanId: 1,
      title: "Setup project",
      description: "Initialize the project with basic setup and dependencies.",
      status: "to_do",
      color: "#FF5733",
      from: "2024-08-01",
      to: "2024-08-05",
    },
    {
      id: "2",
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
      id: "3",
      kanbanId: 1,
      title: "Develop login feature",
      description: "Implement the login page and authentication system.",
      status: "in_progress",
      color: "#33FF57",
      from: "2024-08-06",
      to: "2024-08-10",
    },
    {
      id: "4",
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
      id: "5",
      kanbanId: 1,
      title: "Project kickoff meeting",
      description: "Organize the kickoff meeting with stakeholders.",
      status: "finished",
      color: "#5733FF",
      from: "2024-07-25",
      to: "2024-07-25",
    },
    {
      id: "6",
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
  const [tasks, setTasks] = useState(example);
  const columns = [
    { title: "To-do", tasks: tasks["todo"], key: "todo" },
    { title: "En Cours", tasks: tasks["in_progress"], key: "in_progress" },
    { title: "Completé", tasks: tasks["finished"], key: "finished" },
  ];
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  function findContainer(id: string) {
    if (id in tasks) return id;
    return Object.keys(tasks).find((key) =>
      tasks[key].some((task) => task.id === id)
    );
  }

  const handleDragEnd = (e: DragEndEvent) => {
    const { over, active } = e;
    if (!over || !active) return;
    const oldColumnId = findContainer(active.id as string);
    const newColumnId = findContainer(over.id as string);

    if (!oldColumnId || !newColumnId) return;

    const oldIndex = tasks[oldColumnId].findIndex(
      (task: TaskProps) => task.id === active.id
    );
    const newIndex = tasks[newColumnId].findIndex(
      (task: TaskProps) => task.id === over?.id
    );

    if (oldColumnId === newColumnId && active.id !== over.id) {
      const updateOldColumn = arrayMove(tasks[oldColumnId], oldIndex, newIndex);
      setTasks({ ...tasks, [oldColumnId]: updateOldColumn });
    } else if (oldColumnId !== newColumnId && newIndex >= 0) {
      const updateOldColumn = tasks[oldColumnId].splice(oldIndex, 1);
      const [removedTask] = tasks[oldColumnId].filter(
        (task: TaskProps) => task.id === active.id
      );
      const updateNewColumn = [...tasks[newColumnId], removedTask];
      setTasks({
        ...tasks,
        [oldColumnId]: updateOldColumn,
        [newColumnId]: updateNewColumn,
      });
    }
  };

  function handleDragMove(e: DragMoveEvent) {
    const { active, over } = e;
    const overId = over?.id as string;
    const activeId = active?.id as string;
    const activeColumn = findContainer(activeId) || "";
    const overColumn = findContainer(overId) || "";

    if (!overColumn || !activeColumn) return;

    const activeTask = tasks[activeColumn];
    const overTask = tasks[overColumn];

    const draggedTask = activeTask.find((task) => task.id === activeId);
    if (!draggedTask) return;

    if (activeColumn !== overColumn) {
      const overIndex = tasks[overColumn].findIndex(
        (task) => task.id === overId
      );
      const newIndex = overIndex >= 0 ? overIndex : overTask.length;

      const updateActiveTask = activeTask.filter(
        (task) => task.id !== activeId
      );

      const updateOverTask = [
        ...overTask.slice(0, newIndex),
        draggedTask,
        ...overTask.slice(newIndex, overTask.length),
      ];

      setTasks({
        ...tasks,
        [activeColumn]: updateActiveTask,
        [overColumn]: updateOverTask,
      });
    }
  }

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
      <DndContext
        onDragEnd={handleDragEnd}
        onDragMove={handleDragMove}
        sensors={sensors}
        collisionDetection={closestCenter}
      >
        <div className="h-full flex flex-row gap-8 overflow-x-scroll">
          {columns.map(
            (column: { title: string; tasks: TaskProps[]; key: string }) => {
              return (
                <DndColumn
                  key={column.key}
                  id={column.key}
                  title={column.title}
                  columnTasks={tasks[column.key] as TaskProps[]}
                />
              );
            }
          )}
        </div>
      </DndContext>
    </div>
  );
}

export default Tasks;
