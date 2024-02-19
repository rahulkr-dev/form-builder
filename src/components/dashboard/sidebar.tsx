"use client";
import React from "react";

import { sidebarContent } from "./sidebar-content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Todo - accordion opening dynamically based on the current route

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname, "pathname");
  return (
    <div className="w-full bg-gray-100 px-4 py-4 h-screen">
      <Accordion type="single" collapsible className={cn("space-y-4")}>
        {sidebarContent.map((item, i) => (
          <div key={i} className="space-y-3">
            <p className=" bold mb-2 ">{item.title}</p>
            {item.items.map((menu, i) =>
              menu.isLink && menu.link ? (
                <Link
                  key={menu.link}
                  className={cn(
                    "flex px-2 gap-3 items-center py-2 cursor-pointer hover:bg-blue-100",
                    { "bg-blue-50": pathname === menu.link }
                  )}
                  href={menu.link}
                >
                  {React.createElement(menu.icon)}
                  <p className="">{menu.title}</p>
                </Link>
              ) : (
                <AccordionItem
                  key={menu.title}
                  value={menu.title}
                  className="border-none "
                >
                  <AccordionTrigger
                    className={cn("hover:bg-blue-100 px-2 py-2", {
                      "bg-blue-100": menu.items?.some(
                        (submenu) => submenu.link === pathname
                      ),
                    })}
                  >
                    <div className="flex gap-3 items-center">
                      <span>{React.createElement(menu.icon)}</span>

                      <p>{menu.title}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {Array.isArray(menu.items) &&
                      menu.items.map((submenu, i) => (
                        <Link
                          key={submenu.link}
                          className={cn(
                            "block pl-4 py-2 cursor-pointer hover:bg-blue-50",
                            { "bg-blue-50": pathname === submenu.link }
                          )}
                          href={submenu.link}
                        >
                          {submenu.name}
                        </Link>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
