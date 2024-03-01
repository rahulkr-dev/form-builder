import {
  HomeIcon,
  ClockIcon,
  CheckIcon,
  PlusCircledIcon,
  CircleIcon,
  LockClosedIcon,
  BellIcon,
  QuestionMarkCircledIcon,
  MixIcon
} from '@radix-ui/react-icons';

export const sidebarContent = [
  {
    title: "General",
    items: [
      {
        title: "Dashboard",
        icon: HomeIcon,
        isLink: true,
        link: "/dashboard",
      },
      {
        title: "Color Test",
        icon: HomeIcon,
        isLink: true,
        link: "/test",
      },
      {
        title:"Form-builder",
        icon: MixIcon,
        isLink:false,
        items:[
          {
            name: "All Forms",
            link: "/forms/all",
            icon: MixIcon,
          },
          {
            name: "Create New Form",
            link: "/forms/create",
            icon: MixIcon,
          },
        ]
      },
      {
        title: "Chat",
        icon: MixIcon,
        isLink: true,
        link: "/chat",
      },

      // Dummy links
      {
        title: "Orders",
        icon: PlusCircledIcon,
        isLink: false,
        items: [
          {
            name: "All Orders",
            link: "/orders/all",
            icon: PlusCircledIcon,
            badge: {
              text: "10",
              color: "green",
            },
          },
          {
            name: "Pending Orders",
            link: "/orders/pending",
            icon: ClockIcon,
          },
          {
            name: "Completed Orders",
            link: "/orders/completed",
            icon: CheckIcon,
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
        icon: CircleIcon,
        isLink: false,
        items: [
          {
            name: "All Products",
            link: "/products/all",
            icon: CircleIcon,
          },
          {
            name: "Add New Product",
            link: "/products/add",
            icon: CircleIcon,
          },
        ],
      },
      {
        title: "Customers",
        icon: QuestionMarkCircledIcon,
        isLink: false,
        items: [
          {
            name: "All Customers",
            link: "/customers/all",
            icon: QuestionMarkCircledIcon,
          },
          {
            name: "Add New Customer",
            link: "/customers/add",
            icon: QuestionMarkCircledIcon,
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
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/settings/profile",
      },
      {
        title: "Security",
        icon: LockClosedIcon,
        isLink: true,
        link: "/settings/security",
      },
      {
        title: "Notifications",
        icon: BellIcon,
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
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/faqs",
      },
      {
        title: "Contact Us",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/contact",
      },
    ],
  },
  {
    title: "Help & Support",
    items: [
      {
        title: "FAQs",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/faqs",
      },
      {
        title: "Contact Us",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/contact",
      },
    ],
  },
  {
    title: "Help & Support",
    items: [
      {
        title: "FAQs",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/faqs",
      },
      {
        title: "Contact Us",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/contact",
      },
    ],
  },
  {
    title: "Help & Support",
    items: [
      {
        title: "FAQs",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/faqs",
      },
      {
        title: "Contact Us",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/contact",
      },
    ],
  },
  {
    title: "Help & Support",
    items: [
      {
        title: "FAQs",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/faqs",
      },
      {
        title: "Contact Us",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/contact",
      },
    ],
  },
  {
    title: "Help & Support",
    items: [
      {
        title: "FAQs",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/faqs",
      },
      {
        title: "Contact Us",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/contact",
      },
    ],
  },
  {
    title: "Help & Support",
    items: [
      {
        title: "FAQs",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/faqs",
      },
      {
        title: "Contact Us",
        icon: QuestionMarkCircledIcon,
        isLink: true,
        link: "/help/contact",
      },
    ],
  },
];
