import { Route, Routes } from "react-router-dom";
import Connection from "./page/Connection";

export default function App() {
  return (
    <Routes>
      <Route index element={< Connection />} />
    </Routes>
    
  );
}
