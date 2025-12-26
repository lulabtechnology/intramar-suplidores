import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const wa = buildWhatsAppLink(site.phones[0], "Hola, necesito una cotización. ¿Me pueden ayudar?");
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <Image
              src={site.brand.logo}
              alt="INTRAMAR logo"
              fill
              className="object-contain p-1"
            />
          </span>
          <span className="font-semibold tracking-tight text-white">INTRAMAR</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          <Link className="hover:text-white" href="/products">Productos</Link>
          <Link className="hover:text-white" href="/about">Sobre</Link>
          <Link className="hover:text-white" href="/contact">Contacto</Link>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={wa} variant="secondary" className="hidden sm:inline-flex">
            Cotizar
          </ButtonLink>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 md:hidden"
          >
            Menú
          </Link>
        </div>
      </Container>
    </header>
  );
}
