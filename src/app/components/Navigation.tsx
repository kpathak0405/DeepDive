export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-2xl border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-5 max-w-[2000px] mx-auto">
        <div className="tracking-[0.2em] text-5xl uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 'bold' }}>
          Deep<span className="text-[#059669]">Dive</span>
        </div>

        <div className="hidden lg:flex items-center space-x-12">
          <a
            className="text-white text-[13px] tracking-[0.15em] uppercase hover:text-[#059669] transition-colors"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
            href="#"
          >
            System
          </a>
          <a
            className="text-gray-500 text-[13px] tracking-[0.15em] uppercase hover:text-white transition-colors"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
            href="#"
          >
            Core
          </a>
          <a
            className="text-gray-500 text-[13px] tracking-[0.15em] uppercase hover:text-white transition-colors"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
            href="#"
          >
            Index
          </a>
        </div>
      </div>
    </nav>
  );
}
