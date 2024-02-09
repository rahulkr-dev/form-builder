"use client";
import React from "react";


import { sidebarContent } from './sidebar-content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";


const Sidebar = () => {
  return (
    <div className="w-[250px] bg-blue-400 text-white h-screen">
      <Accordion type="single" collapsible className={cn("space-y-4")}>
        {sidebarContent.map((item, i) => (
          <div key={i}>
            <p className=" bold ">{item.title}</p>
            {item.items.map((menu, i) =>
              menu.isLink? (
                <div key={i}>
                  <p className="text-green pl-4">{menu.title}</p>
                </div>
              ) : (
                <AccordionItem key={i} value={menu.title} className="border-none">
                  <AccordionTrigger className="bg-yellow-500">{menu.title}</AccordionTrigger>
                  <AccordionContent>
                    {Array.isArray(menu.items) && menu.items.map((submenu, i) => (
                      <p key={i} className=" pl-4">
                       ---- {submenu.name}
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
