import Link from "next/link";
import Container from "@/components/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          INTRAMAR
        </Link>
        <nav className="flex items-center gap-6 text-sm text-neutral-300">
          <Link className="hover:text-neutral-100" href="/products">
            Productos
          </Link>
          <Link className="hover:text-neutral-100" href="/about">
            Sobre
          </Link>
          <Link className="hover:text-neutral-100" href="/contact">
            Contacto
          </Link>
        </nav>
      </Container>
    </header>
  );
}
