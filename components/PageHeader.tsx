import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PageHeader({
  title,
  description,
  imageSrc,
  crumbs
}: {
  title: string;
  description: string;
  imageSrc: string;
  crumbs: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/70 to-neutral-950" />
      </div>

      <Container className="relative py-14">
        <FadeIn>
          <Breadcrumbs items={crumbs} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
            {description}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
