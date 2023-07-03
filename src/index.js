import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/home';
import Productos from './routes/productos';
import About from './routes/about';
import Recetario from './routes/recetario';
import Error from './routes/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/productos',
    element: <Productos />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/recetas',
    element: <Recetario />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

