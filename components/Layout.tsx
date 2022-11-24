import Link from "next/link";
import React from "react";

export function NavButton({ children }: { children: React.ReactNode }) {
  return (
    <button className=" rounded bg-slate-50 px-2 py-1 text-base font-medium text-blue-700 hover:underline">
      {children}
    </button>
  );
}

export function SideButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="container my-3 hover:px-4">
      <button className="w-full bg-slate-100 py-3 text-black hover:rounded-xl hover:shadow-xl ">
        {children}
      </button>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid grid-cols-10">
        <div className=" col-span-1 col-start-1 grid">
          <div className="container h-screen bg-purple-500">
            <div className="container content-start">
              {/* <div className="h-1"/> */}
              <Link href="/">
                <SideButton>Home</SideButton>
              </Link>
              <Link href="/posts">
                <SideButton>Posts</SideButton>
              </Link>
            </div>
          </div>
        </div>
        <div className=" col-span-9 col-start-2">{children}</div>
      </div>
    </>
  );
}
