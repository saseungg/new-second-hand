import Home from '@/pages/Home';
import New from '@/pages/New';
import NotFound from '@/pages/NotFound';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './Root';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'new', element: <New /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
