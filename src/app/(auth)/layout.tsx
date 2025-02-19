import Image from "next/image";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen flex overflow-hidden">
    <div className="w-3/5">
      <Image src={"/assets/house_auth_page.jpg"} alt="house" width={1000} height={1000} className="h-full w-full" />
    </div>
    <div className="w-2/5 flex justify-center items-center">
      {children}
    </div>
  </div>
}
