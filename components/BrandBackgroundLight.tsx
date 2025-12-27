export default function BrandBackgroundLight() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base light gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1100px_700px_at_10%_0%,rgba(56,189,248,0.22),transparent_60%),radial-gradient(900px_700px_at_95%_10%,rgba(34,197,94,0.18),transparent_62%),radial-gradient(900px_700px_at_50%_110%,rgba(6,182,212,0.16),transparent_60%),linear-gradient(180deg,#F6FBFF_0%,#F8FAFF_40%,#F7FAFC_100%)]" />

      {/* Soft blobs */}
      <div className="absolute -left-36 top-[-180px] h-[520px] w-[520px] rounded-full bg-sky-400/18 blur-3xl animate-blobSlow" />
      <div className="absolute -right-40 top-[40px] h-[580px] w-[580px] rounded-full bg-emerald-400/14 blur-3xl animate-blobSlow2" />
      <div className="absolute left-[18%] bottom-[-260px] h-[760px] w-[760px] rounded-full bg-cyan-300/14 blur-3xl animate-blobSlow3" />

      {/* subtle dots */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,rgba(2,6,23,0.55)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* vignette light */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_560px_at_50%_0%,rgba(255,255,255,0.75),transparent_60%),radial-gradient(900px_700px_at_50%_120%,rgba(2,6,23,0.12),transparent_55%)]" />
    </div>
  );
}
