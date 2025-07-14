import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./pages/home-1";
import HomeTwo from "./pages/home-2";
import About from "./pages/about/Index";
import Services from "./pages/services/Index";
import ServicesDetails from "./pages/servies-details/Index";
import Blog from "./pages/blog/Index";
import BlogDetails from "./pages/blog-details/Index";
import Portfolio from "./pages/portfolio/Index";
import PortfolioDetails from "./pages/portfolio-details/Index";
import Faq from "./pages/faq/Index";
import Pricing from "./pages/pricing/Index";
import Team from "./pages/team/Index";
import Contact from "./pages/contact/Index";
import NotFound from "./pages/not-found/Index";
import Wrapper from "./layouts/Wrapper";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomeOne /> },
    { path: "/index-2", element: <HomeTwo /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/services-details", element: <ServicesDetails /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog-details", element: <BlogDetails /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/portfolio-details", element: <PortfolioDetails /> },
    { path: "/faq", element: <Faq /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/team", element: <Team /> },
    { path: "/contact", element: <Contact /> },
    { path: "/error", element: <NotFound /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </>
  );
}

export default App;
