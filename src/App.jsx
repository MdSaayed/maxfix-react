import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeOne from './components/pages/home-1';
import HomeTwo from './components/pages/home-2';
import About from './components/pages/about/Index';
import Services from './components/pages/services/Index';
import Contact from './components/pages/contact/Index';
import Blog from './components/pages/blog/Index';
import Portfolio from './components/pages/portfolio/Index';
import BlogDetails from './components/pages/blog-details/Index';
import NotFound from './components/pages/not-found/Index';
import Faq from './components/pages/faq/Index';
import Pricing from './components/pages/pricing/Index';

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <HomeOne /> },
    { path: "/index-2", element: <HomeTwo /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog-details", element: <BlogDetails /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/faq", element: <Faq /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
