export const sidebarContent = [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          icon: "home",
          isLink: true,
          link: "/dashboard",
        },
        {
          title: "Orders",
          icon: "receipt",
          isLink: false,
          items: [
            {
              name: "All Orders",
              link: "/orders/all",
              icon: "list",
              badge: {
                text: "10",
                color: "green",
              },
            },
            {
              name: "Pending Orders",
              link: "/orders/pending",
              icon: "clock",
            },
            {
              name: "Completed Orders",
              link: "/orders/completed",
              icon: "check",
            },
          ],
        },
      ],
    },
    {
      title: "Applications",
      items: [
        {
          title: "Products",
          icon: "box",
          isLink: false,
          items: [
            {
              name: "All Products",
              link: "/products/all",
              icon: "package",
            },
            {
              name: "Add New Product",
              link: "/products/add",
              icon: "plusCircle",
            },
          ],
        },
        {
          title: "Customers",
          icon: "user",
          isLink: false,
          items: [
            {
              name: "All Customers",
              link: "/customers/all",
              icon: "users",
            },
            {
              name: "Add New Customer",
              link: "/customers/add",
              icon: "userPlus",
            },
          ],
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Profile",
          icon: "userCircle",
          isLink: true,
          link: "/settings/profile",
        },
        {
          title: "Security",
          icon: "lockClosed",
          isLink: true,
          link: "/settings/security",
        },
        {
          title: "Notifications",
          icon: "bell",
          isLink: true,
          link: "/settings/notifications",
        },
      ],
    },
    {
      title: "Help & Support",
      items: [
        {
          title: "FAQs",
          icon: "questionMarkCircle",
          isLink: true,
          link: "/help/faqs",
        },
        {
          title: "Contact Us",
          icon: "mail",
          isLink: true,
          link: "/help/contact",
        },
      ],
    },
  ];