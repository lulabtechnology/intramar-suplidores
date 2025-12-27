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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/30";

  const styles =
    variant === "primary"
      ? "text-neutral-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 hover:opacity-95 shadow-[0_10px_40px_rgba(56,189,248,0.18)]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/20";

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}
