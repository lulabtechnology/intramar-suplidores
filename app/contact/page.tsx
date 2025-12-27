import PageHeader from "@/components/PageHeader";
import ContactCards from "@/components/ContactCards";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Inicio / Contacto"
        eyebrow="CONTACTO"
        title="Contacto"
        description="Cotiza por WhatsApp o email. Te respondemos con base en tu requerimiento."
        imageSrc="/images/hero/hero.jpg"
        imageFit="cover"
      />

      <section className="bg-transparent">
        <ContactCards />
      </section>
    </>
  );
}
