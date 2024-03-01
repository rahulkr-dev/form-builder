import Sidebar from "@/components/dashboard/sidebar";
import { UserButton } from "@clerk/nextjs";

import type { Metadata } from "next";
import { ThemChanger } from './../../components/theme-changer';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <div className="border-b-2 py-2 flex justify-end w-full">
          {/* <p >Testing</p> */}
          <div className=" flex gap-20 justify-between items-center">
            <ThemChanger />
            <UserButton afterSignOutUrl="/" />

          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
