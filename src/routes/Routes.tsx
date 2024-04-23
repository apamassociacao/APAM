import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from "../Components/Header/Header.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: (<Header />),
    }
]);

const Routes: FC = () => <RouterProvider router={router} />;

export default Routes;