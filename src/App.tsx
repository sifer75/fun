import { Route, Routes } from "react-router-dom";
import Connection from "./page/Connection";
import Workspaces from "./page/Workspaces";
import Kanbans from "./page/Kanbans";
import Tasks from "./page/Tasks";

export default function App() {
  return (
    <Routes>
      <Route index element={<Connection />} />
      <Route path="/workspace" element={<Workspaces />} />
      <Route path="/workspace/:id" element={<Kanbans />} />
      <Route path="/workspace/:id/:id" element={<Tasks />} />
    </Routes>
  );
}
