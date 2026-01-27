import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

export default function Profile() {
    return (
        <div className="flex">
            <Image src="/character.png" alt="Icon" width={100} height={100} className="bg-slate-50/50 w-12 h-12 aspect-square p-1 border border-slate-200" />
            <div className="ml-4">
            <h2 className="text-2xl font-semibold">@norbit12</h2>
            <div className="mt-1">
                <div className="flex"><Link href="https://github.com/norbit12"target="_blank" rel="noopener noreferrer"><FiGithub className="text-slate-700" /></Link></div>
            </div>
            </div>
        </div>
    )
}