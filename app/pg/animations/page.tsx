import type { Metadata } from "next";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Playground - norbit12",
};

export default function Page() {
  return (
    <div className="max-w-md w-full md:w-1/3 px-4 md:px-0 mx-auto my-6">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 transition-colors">
          <HiOutlineArrowNarrowLeft size={14} />
          <span>Back to Home</span>
        </Link>


        <h1 className="mt-4 text-xl font-semibold tracking-tight">
          Animations
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Small UI animation experiments.
        </p>
      </div>

      {/* playground items */}
      <div className="space-y-4">
        {/* hover animation */}
        <div className="p-4 border border-slate-200 rounded-lg">
          <p className="text-sm mb-2 text-slate-600">Hover animation</p>
          <div className="w-full h-12 flex items-center justify-center rounded-md bg-slate-100 transition-transform hover:scale-105">
            <span className="text-sm font-medium">Hover me</span>
          </div>
        </div>

        {/* fade animation */}
        <div className="p-4 border border-slate-200 rounded-lg">
          <p className="text-sm mb-2 text-slate-600">Fade in</p>
          <div className="w-full h-12 flex items-center justify-center rounded-md bg-slate-100 animate-fade-in">
            <span className="text-sm font-medium">Fade in</span>
          </div>
        </div>
      </div>
    </div>
  );
}