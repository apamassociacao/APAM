import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: (<h1>Index</h1>),
    }
]);

const Routes: FC = () => <RouterProvider router={router} />;

export default Routes;