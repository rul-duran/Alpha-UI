import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from '@routes';
import { MainLayout } from '@layouts';
import { Page404 } from '@views';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <Page404 />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
