import { Route, Routes } from "react-router-dom";
import Connection from "./page/Connection";
import Workspaces from "./page/Workspaces";

export default function App() {
  return (
    <Routes>
      <Route index element={< Connection />} />
      <Route path="/workspace" element={< Workspaces />} />
    </Routes>
    
  );
}
