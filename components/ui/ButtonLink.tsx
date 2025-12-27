import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-300";

  const styles =
    variant === "primary"
      ? "text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 hover:opacity-95 shadow-[0_14px_35px_rgba(14,165,233,0.22)]"
      : "text-slate-900 border border-slate-200 bg-white/70 hover:bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)]";

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}
