import { Route, Routes } from "react-router-dom";
import Connection from "./page/Connection";
import Workspace from "./page/Workspace";

export default function App() {
  return (
    <Routes>
      <Route index element={< Connection />} />
      <Route path="/workspace" element={< Workspace />} />
    </Routes>
    
  );
}
