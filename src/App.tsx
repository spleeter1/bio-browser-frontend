// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import GRUDpage from './pages/GRUD/GRUDpage';
import SkinCancerPage from './pages/SkinCancer/SkinCancerPage';
import PlinkPage from './pages/Plink/PlinkPage';
import VGPDiseasesPage from './pages/VGPdiseases/VGPDiseasesPage';
import PRSice2Page from './pages/PRSice2/PRSice2Page';
import FilteringSVPage from './pages/FilteriingSV/FilteringSVPage';

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
            {
                path: '/skinCancer',
                element: <SkinCancerPage />,
            },
            {
                path: '/Plink',
                element: <PlinkPage />,
            },
            {
                path: 'VGP-Diseases',
                element: <VGPDiseasesPage />,
            },
            {
                path: 'PRSice2',
                element: <PRSice2Page />,
            },
            {
                path: 'FilteringSV',
                element: <FilteringSVPage />,
            },
        ],
    },
]);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
