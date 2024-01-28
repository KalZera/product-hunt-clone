import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Home } from '../Pages/Home/HomePage';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { ContentLayout } from './content-layout';
import { RootLayout } from './root-layout';

export const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <ContentLayout />,
          children: [
            {
              path: '/',
              element: <Navigate to="/home" />,
            },
            { path: '/home', element: <Home /> },
          ],
        },
        {
          path: '/sign-in',
        },
        {
          path: '/sign-up/*',
          element: (
            <SignUp redirectUrl={'/home'} routing="path" path="/sign-up" />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};
