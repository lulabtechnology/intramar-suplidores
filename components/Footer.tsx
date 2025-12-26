import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <Container className="py-10 text-sm text-neutral-300">
        <div className="space-y-2">
          <p className="text-neutral-100 font-medium">INTRAMAR SUPLIDORES S.A</p>
          <p>R.U.C. 155751256-2-2024  D.V. 35</p>
          <p>Calle 75, Local No.12, San Francisco, Panamá, Ciudad de Panama</p>
          <p>Tel: +507 6671-2333 / +507 6534-3521</p>
          <p>Correos: intramar28@gmail.com / ventas@intramar.com.pa / ventas@intramars.com</p>
        </div>
      </Container>
    </footer>
  );
}
