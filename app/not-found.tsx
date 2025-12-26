import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
        <p className="text-xs font-medium tracking-[0.2em] text-white/60">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Página no encontrada
        </h1>
        <p className="mt-3 text-sm text-neutral-300">
          La ruta que intentas abrir no existe. Vuelve al inicio o explora el catálogo.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-white/90"
          >
            Ir al inicio
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </Container>
  );
}
