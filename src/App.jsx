import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeOne from './components/homes/home-1';
import HomeTwo from './components/homes/home-2';

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <HomeOne /> },
    { path: "/index-2", element: <HomeTwo /> },
  ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
