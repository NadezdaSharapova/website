import Link from "next/link";
import React from "react";

export function NavButton({ children }: { children: React.ReactNode }) {
  return (
    <button className=" px-2 py-1 bg-slate-50 text-base rounded font-medium text-blue-700 hover:underline">
      {children}
    </button>

  );
}

export function SideButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="container my-3 hover:px-4">
      <button className="w-full text-black bg-slate-100 hover:shadow-xl hover:rounded-xl py-3 ">
        {children}
      </button>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    <>
      <div className="grid grid-cols-10">
        <div className=" grid col-span-1 col-start-1">
          <div className="container h-screen bg-slate-500">
            <div className="container content-start">
              {/* <div className="h-1"/> */}
              <Link href='/'>
                <SideButton>
                  Home
                </SideButton>
              </Link>
              <Link href='/posts'>
                <SideButton>
                  Posts
                </SideButton>
              </Link>
            </div>
          </div>

        </div>
        <div className=" col-start-2 col-span-9">
          {children}
        </div>
      </div>
    </>
  );
};