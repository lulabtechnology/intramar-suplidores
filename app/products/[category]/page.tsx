import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteCTA from "@/components/QuoteCTA";
import EnergyFeatured from "@/components/catalog/EnergyFeatured";
import { catalog } from "@/data/catalog";
import { site } from "@/data/site";

export default function CategoryPage({
  params
}: {
  params: { category: string };
}) {
  const cat = catalog.find((c) => c.slug === params.category);
  if (!cat) return notFound();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src={cat.slug === "energia" ? site.images.solarKit2 : site.images.warehouse1}
            alt={cat.name}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/70 to-neutral-950" />
        </div>

        <Container className="relative py-14">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/products" },
                { label: cat.name, href: `/products/${cat.slug}` }
              ]}
            />
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {cat.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              Listado de productos de la categoría. Para precios y disponibilidad, contáctanos para cotizar.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Container className="py-12 space-y-8">
        {cat.slug === "energia" ? (
          <FadeIn>
            <EnergyFeatured />
          </FadeIn>
        ) : null}

        <FadeIn>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Listado</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <QuoteCTA
            title="Cotizar esta categoría"
            description={`Incluye en tu mensaje la categoría "${cat.name}" y los productos que necesitas.`}
          />
        </FadeIn>
      </Container>
    </>
  );
}
