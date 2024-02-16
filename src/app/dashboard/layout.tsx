import Sidebar from "@/components/dashboard/sidebar";

import type { Metadata } from "next";

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
        <div className="bg-blue-500 py-3">Navbar</div>
        {children}
      </div>
    </div>
  );
}
