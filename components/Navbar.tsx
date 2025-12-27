import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const wa = buildWhatsAppLink(
    site.whatsappPhone,
    "Hola, necesito una cotización. ¿Me pueden ayudar?"
  );

  const links = [
    { href: "/products", label: "Productos" },
    { href: "/about", label: "Sobre" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* LOGO MÁS GRANDE */}
          <Image
            src="/images/brand/intramar-logo.png"
            alt="INTRAMAR"
            width={260}
            height={70}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={wa} variant="primary">
            Cotizar
          </ButtonLink>
        </div>

        {/* Mobile (sin JS) */}
        <details className="group md:hidden">
          <summary className="list-none cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm">
            <span className="inline-flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Menú
            </span>
          </summary>

          <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {l.label}
                </Link>
              ))}

              <div className="pt-2">
                <ButtonLink href={wa} variant="primary" className="w-full">
                  Cotizar
                </ButtonLink>
              </div>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
