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

const Sidebar = () => {
  return (
    <div className="w-full bg-gray-100 px-4 py-4 h-screen">
      <Accordion type="single" collapsible className={cn("space-y-4")}>
        {sidebarContent.map((item, i) => (
          <div key={i} className="space-y-3">
            <p className=" bold mb-2 ">{item.title}</p>
            {item.items.map((menu, i) =>
              menu.isLink ? (
                <div key={i} className="flex px-2 gap-3 items-center py-2 cursor-pointer hover:bg-blue-100">
                  {React.createElement(menu.icon)}
                  <p className="">{menu.title}</p>
                </div>
              ) : (
                <AccordionItem
                  key={i}
                  value={menu.title}
                  className="border-none "
                >
                  <AccordionTrigger className="hover:bg-blue-100 px-2 py-2 ">
                    <div className="flex gap-3 items-center">
                      <span>{React.createElement(menu.icon)}</span>

                      <p>{menu.title}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {Array.isArray(menu.items) &&
                      menu.items.map((submenu, i) => (
                        <p key={i} className=" pl-4 py-2 cursor-pointer hover:bg-blue-50">
                          {submenu.name}
                        </p>
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
