import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import CatalogExplorer from "@/components/catalog/CatalogExplorer";
import QuoteCTA from "@/components/QuoteCTA";
import { site } from "@/data/site";

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src={site.images.warehouse2}
            alt="Warehouse"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/70 to-neutral-950" />
        </div>

        <Container className="relative py-14">
          <FadeIn>
            <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Productos", href: "/products" }]} />
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Catálogo por categorías
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              Explora y filtra por categoría o busca un producto específico. Para precios y opciones, contáctanos para cotizar.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Container className="py-12">
        <CatalogExplorer />

        <div className="mt-10">
          <QuoteCTA />
        </div>
      </Container>
    </>
  );
}
