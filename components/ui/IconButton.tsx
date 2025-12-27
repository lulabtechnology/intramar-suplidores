import { cn } from "@/lib/cn";

export default function IconButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-900 shadow-[0_10px_25px_rgba(2,6,23,0.06)] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-300",
        className
      )}
    />
  );
}
