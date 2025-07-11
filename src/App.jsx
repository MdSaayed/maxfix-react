import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeOne from './components/pages/home-1';
import HomeTwo from './components/pages/home-2';
import About from './components/pages/about/Index';
import Services from './components/pages/services/Index';
import Contact from './components/pages/contact/Index';

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <HomeOne /> },
    { path: "/index-2", element: <HomeTwo /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
