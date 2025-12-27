import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import { catalog } from "@/data/catalog";

export default function WaterHygieneVectorSection() {
  const agua = catalog.find((c) => c.slug === "agua");
  const higiene = catalog.find((c) => c.slug === "seguridad-proteccion");
  const vectores = catalog.find((c) => c.slug === "insumos-vectores");

  return (
    <section className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Water / Hygiene / Vector
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Sub-secciones basadas en tu listado real (sin inventar productos).
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {agua ? (
            <FadeIn>
              <div className="surface p-6">
                <p className="text-sm font-extrabold text-slate-900">Agua</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {agua.items.map((x) => <li key={x}>• {x}</li>)}
                </ul>
              </div>
            </FadeIn>
          ) : null}

          {higiene ? (
            <FadeIn delay={0.03}>
              <div className="surface p-6">
                <p className="text-sm font-extrabold text-slate-900">Higiene / Protección</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {higiene.items.map((x) => <li key={x}>• {x}</li>)}
                </ul>
              </div>
            </FadeIn>
          ) : null}

          {vectores ? (
            <FadeIn delay={0.06}>
              <div className="surface p-6">
                <p className="text-sm font-extrabold text-slate-900">Vectores</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {vectores.items.map((x) => <li key={x}>• {x}</li>)}
                </ul>
              </div>
            </FadeIn>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
