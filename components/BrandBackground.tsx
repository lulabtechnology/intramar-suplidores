export default function BrandBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_15%_-10%,rgba(56,189,248,0.35),transparent_60%),radial-gradient(900px_600px_at_95%_10%,rgba(34,197,94,0.28),transparent_62%),radial-gradient(1000px_700px_at_55%_110%,rgba(6,182,212,0.24),transparent_62%),linear-gradient(180deg,#070B10_0%,#050A0F_50%,#05080D_100%)]" />

      {/* Blobs animados (sutil) */}
      <div className="absolute -left-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-sky-400/20 blur-3xl animate-blobSlow" />
      <div className="absolute -right-40 top-[40px] h-[560px] w-[560px] rounded-full bg-emerald-400/18 blur-3xl animate-blobSlow2" />
      <div className="absolute left-[20%] bottom-[-220px] h-[720px] w-[720px] rounded-full bg-cyan-300/16 blur-3xl animate-blobSlow3" />

      {/* Pattern (puntos) */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(0,0,0,0.10),transparent_60%),radial-gradient(900px_600px_at_50%_120%,rgba(0,0,0,0.55),transparent_55%)]" />
    </div>
  );
}
