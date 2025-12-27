import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/data/site";

export default function MapEmbed() {
  const q = encodeURIComponent(site.address);
  const src = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <section className="bg-transparent">
      <Container className="pb-16">
        <FadeIn>
          <div className="surface overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                MAPA
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
                Ubicación
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                {site.address}
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full border-t border-slate-200/70 bg-white">
              <iframe
                title="Mapa - INTRAMAR"
                src={src}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
