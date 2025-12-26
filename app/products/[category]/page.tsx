import Container from "@/components/Container";

export default function CategoryPage({
  params
}: {
  params: { category: string };
}) {
  return (
    <Container className="py-16">
      <h1 className="text-2xl font-semibold">Categoría</h1>
      <p className="mt-3 text-neutral-300">
        Slug: <span className="text-neutral-100">{params.category}</span>
      </p>
      <p className="mt-2 text-neutral-300">
        Detalle por categoría (se completa en FASE 2).
      </p>
    </Container>
  );
}
