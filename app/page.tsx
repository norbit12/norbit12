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
      <Image src="/header.png" alt="header" width={100} height={100} className="w-1/3 mx-auto mb-6" />
      <Profile />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 border border-slate-300 divide-y md:divide-y-0 md:divide-x divide-slate-300">
        <button onClick={() => setActiveTab("articles")} className={`cursor-pointer py-1 hover:bg-slate-100 ${activeTab === "articles" ? "bg-slate-100 font-semibold" : ""}`}>Articles</button>
        <button onClick={() => setActiveTab("works")}className={`cursor-pointer py-1 hover:bg-slate-100 ${activeTab === "works" ? "bg-slate-100 font-semibold" : ""}`}>Works</button>
        <button onClick={() => setActiveTab("playground")} className={`cursor-pointer py-1 hover:bg-slate-100 ${activeTab === "playground" ? "bg-slate-100 font-semibold" : ""}`}>Playground</button>
      </div>

      <div className="mt-6">
        {activeTab === "articles" && (
          <div>
            <p>Nothing here yet...</p>
          </div>
        )}

        {activeTab === "works" && (
          <div>
            <div className="flex border border-slate-200 shadow-sm">
              <div className="w-10 p-2">
                <Image src="/works/dojang.svg" alt="dojang" width={100} height={100} className="w-full" />
              </div>
              <div className="p-1"><p className="text-lg font-semibold">DoJang</p><Link href="https://djng.vercel.app"><p className="text-sm underline text-slate-700">https://djng.vercel.app</p></Link></div>
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