interface HeroProps {
  onGetStarted?: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center px-8 lg:px-24 pt-20 overflow-hidden">
      <div className="absolute inset-0 bento-grid-lines -z-10 opacity-30"></div>

      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 relative z-10">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-[#059669]/40"></span>
            <span
              className="text-[#059669] text-[10px] tracking-[0.3em] uppercase"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Phase 04: Decentralized Intelligence
            </span>
          </div>

          <h1
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter leading-[0.85] mb-12"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Everything in <br />
            <span
              className="italic text-[#059669]/80"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Tech
            </span>
            , <br />
            Decoded.
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button
              type="button"
              className="group relative z-50 px-6 py-3 bg-[#059669] text-white font-bold uppercase text-[11px] tracking-[0.2em] overflow-hidden"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
              onClick={(e) => {
                e.preventDefault();
                if (onGetStarted) onGetStarted();
              }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <div className="max-w-sm">
              <p
                className="text-gray-500 text-sm leading-relaxed border-l border-white/10 pl-6 py-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                The ultimate tech encyclopedia for vibe coding, deep-dive logic, and the essential infrastructure of the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
