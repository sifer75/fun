import { useDroppable } from "@dnd-kit/core";

const Droppable = ({ id, children }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{ minHeight: "200px", padding: "10px", border: "2px dashed #ccc" }}
    >
      {children}
    </div>
  );
};

export default Droppable;
