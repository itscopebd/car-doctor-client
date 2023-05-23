import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRouter from './PrivateRouter/PrivateRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
   <div className='w-10/12 mx-auto'>
      <AuthProvider>
         <RouterProvider router={Routes}></RouterProvider>
      </AuthProvider>

   </div>
)
