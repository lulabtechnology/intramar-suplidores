import { cn } from "@/lib/cn";

export default function IconButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30",
        className
      )}
    />
  );
}
