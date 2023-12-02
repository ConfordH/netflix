import React from 'react';
import { useAuthListener } from './hooks';
import { router } from './router';
export default function App() {
  const { user } = useAuthListener();

  return <RouterProvider router={router} />;
}
