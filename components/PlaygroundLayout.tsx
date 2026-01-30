import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

type PlaygroundLayoutProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
};

export default function PlaygroundLayout({
    title,
    description,
    children,
}: PlaygroundLayoutProps) {
    return (
        <div className="max-w-md w-full md:w-1/3 px-4 md:px-0 mx-auto my-6">
            <div className="mb-6">
                <Link href="/" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 transition-colors"><HiOutlineArrowNarrowLeft size={14} /><span>Back to Home</span></Link>
                <h1 className="mt-4 text-xl font-semibold tracking-tight">{title}</h1>
                {description && (<p className="mt-1 text-sm text-slate-500">{description}</p>)}
            </div>
            {children}
        </div>
    );
}
