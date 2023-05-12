import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='w-10/12 mx-auto'>
    <RouterProvider router={Routes}></RouterProvider>
 </div>
)
