export function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5 relative z-10">
      <div className="max-w-[1600px] mx-auto px-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
        <div>
          <div
            className="text-white font-bold text-xl tracking-[0.2em] uppercase mb-8"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            DEEPDIVE <span className="text-[#059669]">DECODED.</span>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <a
              className="text-gray-600 text-[9px] uppercase tracking-[0.2em] hover:text-white transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
              href="#"
            >
              System_Log
            </a>
            <a
              className="text-gray-600 text-[9px] uppercase tracking-[0.2em] hover:text-white transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
              href="#"
            >
              Security
            </a>
            <a
              className="text-gray-600 text-[9px] uppercase tracking-[0.2em] hover:text-white transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
              href="#"
            >
              Nexus
            </a>
            <a
              className="text-gray-600 text-[9px] uppercase tracking-[0.2em] hover:text-white transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
              href="#"
            >
              Status
            </a>
          </div>
        </div>
        <div
          className="text-gray-700 text-[9px] uppercase tracking-[0.3em]"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          © 2026 DeepDive All rights reserved
        </div>
      </div>
    </footer>
  );
}

