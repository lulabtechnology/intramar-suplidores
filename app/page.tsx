import Container from "@/components/Container";

export default function HomePage() {
  return (
    <Container className="py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          INTRAMAR SUPLIDORES S.A
        </h1>
        <p className="mt-3 text-neutral-300">
          FASE 0 OK — base instalada (Next.js 14 + Tailwind + Framer Motion).
          En la FASE 1 montamos el look & feel tipo referencia con hero, grids y animaciones.
        </p>
      </div>
    </Container>
  );
}
