export function Subscription() {
  return (
    <section className="py-40 px-8 relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col justify-center max-w-2xl">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter leading-none"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Stay <br />
            <span className="text-[#059669]">Decoded </span>
            <span className="block text-2xl md:text-3xl tracking-tight mt-4 opacity-40 font-normal normal-case" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              with DeepDive
            </span>
          </h2>
          <p
            className="text-gray-500 text-lg max-w-md leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Advanced insights into the evolution of software, decoded for the next generation of builders.
          </p>
        </div>
      </div>
    </section>
  );
}
