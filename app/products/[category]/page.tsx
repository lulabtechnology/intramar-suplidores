import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { catalog } from "@/data/catalog";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = catalog.find((c) => c.slug === params.category);
  if (!cat) return notFound();

  const msg = `Hola, necesito una cotización.\n\nCategoría: ${cat.name}\nProductos:\n- ${cat.items.join(
    "\n- "
  )}\n\nGracias.`;

  const wa = buildWhatsAppLink(site.whatsappPhone, msg);

  return (
    <>
      {/* Header LIGHT (sin negro) */}
      <PageHeader
        breadcrumb={`Inicio / Productos / ${cat.name}`}
        eyebrow="CATEGORÍA"
        title={cat.name}
        description="Listado de productos de la categoría. Para precios y disponibilidad, contáctanos para cotizar."
        imageSrc="/images/hero/hero.jpg"
        imageFit="cover"
      />

      <section className="bg-transparent">
        <Container className="py-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Lista */}
            <FadeIn className="lg:col-span-2">
              <div className="surface p-8">
                <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                  LISTADO
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700"
                    >
                      {it}
                    </span>
                  ))}
                </div>

                <div className="mt-8 hairline" />

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                  >
                    ← Volver a categorías
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.05}>
              <div className="surface p-8">
                <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                  COTIZAR ESTA CATEGORÍA
                </p>

                <p className="mt-3 text-sm text-slate-700">
                  Incluye en tu mensaje la categoría <span className="font-semibold text-slate-900">“{cat.name}”</span>{" "}
                  y los productos que necesitas.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <ButtonLink href={wa} variant="primary" className="w-full">
                    WhatsApp
                  </ButtonLink>

                  <ButtonLink
                    href={`mailto:${site.emails[1]}?subject=Cotización%20-%20${encodeURIComponent(
                      cat.name
                    )}`}
                    variant="secondary"
                    className="w-full"
                  >
                    Email
                  </ButtonLink>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                    CONTACTO
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    WhatsApp: <span className="font-semibold text-slate-900">{site.whatsappPhone}</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Tel alterno: <span className="font-semibold text-slate-900">{site.phones[1]}</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Email: <span className="font-semibold text-slate-900">{site.emails[1]}</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
