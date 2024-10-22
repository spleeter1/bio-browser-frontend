// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import GRUDpage from './pages/GRUD/GRUDpage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/GRUD',
                element: <GRUDpage />,
            },
            // {
            //     path: '/contact',
            //     element: <Contact />,
            // },
        ],
    },
]);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
