import Link from "next/link";

export default function Breadcrumbs({
  items
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            <Link href={it.href} className="hover:text-white">
              {it.label}
            </Link>
            {i < items.length - 1 ? <span className="text-white/30">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
