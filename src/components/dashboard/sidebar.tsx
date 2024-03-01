"use client";
import React from "react";

import { sidebarContent } from "./sidebar-content";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

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
  const hover_class = `hover:bg-muted hover:text-muted-foreground`
  const active_class = `bg-muted text-muted-foreground`
  return (
    <ScrollArea className="bg-primary text-primary-foreground">

    <div className="w-full  px-4 py-3  h-screen">
      <Accordion type="single" collapsible className="">
        {sidebarContent.map((item, i) => (
          <div key={i} className="">
            {i !== 0 && <Separator className="bg-muted" />}
            <p className={cn("font-semibold",{"mt-8":i})}>{item.title}</p>
            {item.items.map((menu, i) =>
              menu.isLink && menu.link ? (
                <Link
                  key={menu.link}
                  className={cn(
                    `flex px-2 gap-3 py-2 items-center  cursor-pointer ${hover_class}`,
                    {active_class: pathname === menu.link }
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
                  className="border-none"
                >
                  <AccordionTrigger
                    className={cn(`${hover_class} px-2 py-2 pb-3 m-0`, {
                      active_class: menu.items?.some(
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
                            `pl-4 py-2 flex gap-2 cursor-pointer ${hover_class}`,
                            {active_class: pathname === submenu.link }
                          )}
                          href={submenu.link}
                        >
                           {React.createElement(menu.icon)}
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
    </ScrollArea>

  );
};

export default Sidebar;
