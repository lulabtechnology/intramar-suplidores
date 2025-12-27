import Image from "next/image";
import Container from "@/components/Container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: string;
  imageSrc?: string;
  imageAlt?: string;
  /**
   * cover = más “pro” (puede recortar)
   * contain = “siempre completa” (no recorta, puede dejar bordes)
   */
  imageFit?: "cover" | "contain";
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  imageSrc,
  imageAlt = "Header image",
  imageFit = "cover",
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70">
      {/* Background image (optional) */}
      {imageSrc ? (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={false}
            className={imageFit === "cover" ? "object-cover" : "object-contain"}
          />
          {/* Light overlay so text always reads */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/95" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F6FBFF_0%,#F8FAFF_40%,#F7FAFC_100%)]" />
      )}

      <Container className="relative py-12 md:py-16">
        {breadcrumb ? (
          <p className="text-xs font-medium text-slate-500">{breadcrumb}</p>
        ) : null}

        {eyebrow ? (
          <p className="mt-3 text-xs font-bold tracking-[0.22em] text-slate-500">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-700 md:text-base">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
