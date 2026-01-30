import type { Metadata } from "next";
import PlaygroundLayout from "@/components/PlaygroundLayout";

export const metadata: Metadata = {
  title: "Playground - norbit12",
};

export default function Page() {
  return (
    <PlaygroundLayout
      title="Animations"
      description="Small UI animation experiments."
    >
      <div className="space-y-4">
        <div className="p-4 border border-slate-200 rounded-lg">
          <p className="text-sm mb-2 text-slate-600">Hover animation</p>
          <div className="w-full h-12 flex items-center justify-center rounded-md bg-slate-100 transition-transform hover:scale-105">
            <span className="text-sm font-medium">Hover me</span>
          </div>
        </div>

        <div className="p-4 border border-slate-200 rounded-lg">
          <p className="text-sm mb-2 text-slate-600">Fade in</p>
          <div className="w-full h-12 flex items-center justify-center rounded-md bg-slate-100 animate-fade-in">
            <span className="text-sm font-medium">Fade in</span>
          </div>
        </div>
      </div>
    </PlaygroundLayout>
  );
}