import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Inicio / Sobre"
        eyebrow="SOBRE"
        title="Sobre nosotros"
        description="Información general y formas de contacto para cotizaciones."
        imageSrc="/images/hero/hero.jpg"
        imageFit="cover"
      />

      <section className="bg-transparent">
        <Container className="py-12">
          <FadeIn>
            <div className="surface p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                {site.company}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Somos un sitio catálogo / institucional para consulta por categorías de productos.
                Para precios, disponibilidad y opciones, contáctanos por WhatsApp o email.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
                  <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                    R.U.C.
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {site.ruc}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
                  <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                    DIRECCIÓN
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {site.address}
                  </p>
                </div>
              </div>

              <div className="mt-8 hairline" />

              <p className="mt-6 text-sm text-slate-700">
                Contacto principal por WhatsApp:{" "}
                <span className="font-semibold text-slate-900">{site.whatsappPhone}</span>
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
