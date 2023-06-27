import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeLayout from "../Pages/Home/HomeLayout";
import NotFound from "../Pages/NotFound/NotFound";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetail";

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomeLayout />,
            },
            {
                path: '/project/:id',
                element: <ProjectDetails />,
                loader: async ({ params }) => await fetch(`https://simple-portfolio-server.vercel.app/projects/${params.id}`),
            }
        ]
    }
])

export default router;