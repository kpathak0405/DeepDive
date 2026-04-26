interface WikiSidebarProps {
  items: { id: string; label: string }[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  className?: string;
}

export function WikiSidebar({ items, activeId, onItemClick, className = "" }: WikiSidebarProps) {
  return (
    <aside className={`sticky top-24 h-fit w-full ${className}`}>
      <div className="bg-gray-950/50 backdrop-blur-xl border border-gray-800 rounded-xl p-5 shadow-2xl">
        <h3 className="text-xs font-bold mb-5 text-gray-500 uppercase tracking-widest font-syne">
          Contents
        </h3>
        <nav className="space-y-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onItemClick?.(item.id);
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block text-sm py-2.5 px-4 rounded-lg transition-all duration-300 font-outfit ${
                activeId === item.id
                  ? "bg-emerald-500/10 text-emerald-400 font-bold border-l-2 border-emerald-400 rounded-l-none shadow-[inset_0_0_20px_rgba(52,211,153,0.05)]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
