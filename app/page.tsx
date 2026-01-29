"use client"
import { useState } from "react";
import Profile from "@/components/Profile";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "articles" | "works" | "playground"
  >("articles");

  return (
    <div className="max-w-md w-full md:w-1/3 px-4 md:px-0 mx-auto my-6">
      <Image src="/header.png" alt="header" width={200} height={200} className="w-32 mx-auto mb-8 opacity-90"/>
      <Profile />
      <div className="mt-8 flex rounded-lg border border-slate-200 overflow-hidden bg-slate-50">
        {(["articles", "works", "playground"] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-sm transition-colors
              ${activeTab === tab
                  ? "bg-white font-semibold shadow-inner"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "articles" && (
          <div>
            <p>Nothing here yet...</p>
          </div>
        )}

        {activeTab === "works" && (
          <div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 bg-white hover:shadow-md transition-shadow">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-50">
                <Image src="/works/dojang.svg" alt="dojang" width={32} height={32} />
              </div>
              <div>
                <p className="text-base font-semibold leading-tight">DoJang</p>
                <Link href="https://djng.vercel.app" className="text-sm text-slate-500 hover:text-slate-700 underline-offset-2 hover:underline">
                  djng.vercel.app
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "playground" && (
          <div>
            <p>Nothing here yet...</p>
          </div>
        )}
      </div>
    </div>
  );
}