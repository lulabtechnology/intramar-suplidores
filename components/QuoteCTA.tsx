import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function QuoteCTA({
  title = "¿Quieres cotizar?",
  description = "Escríbenos por WhatsApp o envíanos un email con la categoría y productos que necesitas."
}: {
  title?: string;
  description?: string;
}) {
  const wa = buildWhatsAppLink(site.whatsappPhone, "Hola, necesito una cotización. ¿Me pueden ayudar?");
  const emailPrimary = site.emails[1];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-lg font-semibold tracking-tight text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-neutral-300">{description}</p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink href={wa} variant="primary">WhatsApp</ButtonLink>
        <ButtonLink href={`mailto:${emailPrimary}`} variant="secondary">Email</ButtonLink>
      </div>

      <p className="mt-4 text-xs text-white/50">
        WhatsApp: {site.whatsappPhone} · Tel alterno: {site.phones[1]} · Emails: {site.emails.join(" / ")}
      </p>
    </div>
  );
}
