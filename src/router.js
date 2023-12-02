import { createBrowserRouter } from 'react-router-dom';
import { Home, SignIn, SignUp, Browse } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: <Home />,
  },
  {
    path: '/signin',
    Component: <SignIn />,
  },
  {
    path: '/signup',
    Component: <SignUp />,
  },
  {
    path: '/signin',
    Component: <Browse />,
  },
]);
