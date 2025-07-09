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
    title: "Portfolio",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/portfolio", title: "Portfolio", inner_submenu: false },
      { link: "/single-portfolio", title: "Portfolio Details", inner_submenu: false },
    ],
  },
  {
    id: 4,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog", inner_submenu: false },
      { link: "/single-blog", title: "Blog Details", inner_submenu: false },
    ],
  },
   {
    id: 2,
    title: "Pages",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/about-us", title: "About Us", inner_submenu: false },
      { link: "/pricing", title: "Pricing", inner_submenu: false },
      {
        link: "#",
        title: "Integrations",
        inner_submenu: true,
        sub_menu: [
          { link: "/integration", title: "Integrations" },
          { link: "/single-integration", title: "Integrations Details" },
        ],
      },
      {
        link: "#",
        title: "Team",
        inner_submenu: true,
        sub_menu: [
          { link: "/team", title: "Team" },
          { link: "/single-team", title: "Team Details" },
        ],
      },
      {
        link: "#",
        title: "Service",
        inner_submenu: true,
        sub_menu: [
          { link: "/service", title: "Service" },
          { link: "/single-service", title: "Service Details" },
        ],
      },
      {
        link: "#",
        title: "Career",
        inner_submenu: true,
        sub_menu: [
          { link: "/career", title: "Career" },
          { link: "/single-career", title: "Career Details" },
        ],
      },
      {
        link: "#",
        title: "Utility",
        inner_submenu: true,
        sub_menu: [
          { link: "/faq", title: "FAQ" },
          { link: "/404", title: "Error 404" },
          { link: "/coming-soon", title: "Coming Soon" },
        ],
      },
      {
        link: "#",
        title: "Accounts",
        inner_submenu: true,
        sub_menu: [
          { link: "/sign-up", title: "Sign Up" },
          { link: "/sign-in", title: "Sign In" },
          { link: "/reset-password", title: "Reset Password" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact-us",
    has_dropdown: false,
  },
];

export default menu_data;
