import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

export default function Profile() {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center">
                <Image src="/character.png" alt="Icon" width={32} height={32}/>
            </div>

            <div>
                <h2 className="text-lg font-semibold tracking-tight leading-tight">@norbit12</h2>
                <p className="mt-0.5 text-sm text-slate-500">Student learning web design.</p>

                <div className="mt-2 flex items-center gap-2">
                    <Link href="https://github.com/norbit12" target="_blank" rel="noopener noreferrer"className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 transition-colors">
                        <FiGithub size={14} /><span>GitHub</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}