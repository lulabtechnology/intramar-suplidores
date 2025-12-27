"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import IconButton from "@/components/ui/IconButton";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/products", label: "Productos" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contacto" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const wa = useMemo(
    () => buildWhatsAppLink(site.whatsappPhone, "Hola, necesito una cotización. ¿Me pueden ayudar?"),
    []
  );

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Ir a inicio">
          <span className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <Image
              src={site.brand.logo}
              alt="INTRAMAR logo"
              fill
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="font-semibold tracking-tight text-white">INTRAMAR</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex" aria-label="Navegación principal">
          {navItems.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                "transition hover:text-white",
                isActive(it.href) ? "text-white" : "text-neutral-300"
              )}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={wa} variant="secondary" className="hidden sm:inline-flex">
            Cotizar
          </ButtonLink>

          <IconButton
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </IconButton>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-neutral-950"
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Menú"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <p className="text-sm font-semibold text-white">Menú</p>
                <IconButton onClick={() => setOpen(false)} aria-label="Cerrar menú">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </IconButton>
              </div>

              <div className="p-4">
                <div className="space-y-2">
                  {navItems.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      className={cn(
                        "block rounded-2xl border px-4 py-3 text-sm transition",
                        isActive(it.href)
                          ? "border-white/20 bg-white text-neutral-950"
                          : "border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
                      )}
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">WhatsApp</p>
                  <p className="mt-2 text-sm text-neutral-300">
                    {site.whatsappPhone}
                  </p>
                  <div className="mt-4">
                    <ButtonLink href={wa} variant="primary" className="w-full">
                      Cotizar por WhatsApp
                    </ButtonLink>
                  </div>

                  <p className="mt-4 text-xs text-white/50">
                    Tel alterno: {site.phones[1]}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
