var routes = [
  {
    path: "/",
    url: "./index.html",
  },
  {
    path: "/register/",
    url: "./pages/register.html",
    options: {
      transition: "f7-circle",
    },
  },
  {
    path: "/restauranten/",
    url: "./pages/restauranten.html",
    options: {
      transition: "f7-dive",
    },
  },
  {
    path: "/category/:id/",
    url: "./pages/category.html",
    options: {
      transition: "f7-cover",
    },
  },
  {
    path: "/productmenu/:id/",
    url: "./pages/productmenu.html",
    options: {
      transition: "f7-parallax",
    },
  },
  {
    path: "/ingredient/:id/",
    url: "./pages/ingredient.html",
    options: {
      transition: "f7-cover-v",
    },
  },
  {
    path: "/order/",
    url: "./pages/order.html",
    options: {
      transition: "f7-cover-v",
    },
  },
  {
    path: "/wallet/",
    url: "./pages/wallet.html",
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    componentUrl: "./pages/dynamic-route.html",
  },
  {
    path: "(.*)",
    url: "./pages/404.html",
  },
];
