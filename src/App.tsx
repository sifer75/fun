import { Outlet, Route, Routes } from "react-router-dom";
import Connection from "./page/Connection";
import Workspaces from "./page/Workspaces";
import Kanbans from "./page/Kanbans";
import Tasks from "./page/Tasks";
import { Toaster } from "./components/ui/toaster";
import { Layout } from "./components/layout/layout";

export default function App() {
    return (
        <>
            <Routes>
                <Route index element={<Connection />} />
                <Route
                    element={
                        <Layout>
                            <Outlet />
                        </Layout>
                    }
                >
                    <Route path="/workspace" element={<Workspaces />} />
                    <Route path="/workspace/:id" element={<Kanbans />} />
                    <Route path="/workspace/:id/:id" element={<Tasks />} />
                </Route>
            </Routes>
            <Toaster />
        </>
    );
}
