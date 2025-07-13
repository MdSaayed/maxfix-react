const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/", title: "Home 01", inner_submenu: false },
      { link: "/index-2", title: "Home 02", inner_submenu: false },
    ],
  },
  {
    id: 3,
    title: "Services",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/services", title: "Services", inner_submenu: false },
      {
        link: "/services-details",
        title: "Services Details",
        inner_submenu: false,
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog", inner_submenu: false },
      { link: "/blog-details", title: "Blog Details", inner_submenu: false },
    ],
  },
  {
    id: 2,
    title: "Pages",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "About Us", inner_submenu: false },
      { link: "/pricing", title: "Pricing", inner_submenu: false },
      { link: "/portfolio", title: "Portfolio", has_dropdown: false },
      { link: "/portfolio-details", title: "Portfolio Details", has_dropdown: false },
      { link: "/faq", title: "Faq", has_dropdown: false },
      { link: "/team", title: "Team", has_dropdown: false },
      { link: "/error", title: "Error Page", has_dropdown: false },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];

export default menu_data;
