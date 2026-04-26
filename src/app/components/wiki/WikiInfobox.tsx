interface WikiInfoboxProps {
  title: string;
  imageSrc?: string;
  data: { label: string; value: string }[];
  className?: string;
}

export function WikiInfobox({ title, imageSrc, data, className = "" }: WikiInfoboxProps) {
  return (
    <aside className={`sticky top-24 h-fit w-full ${className}`}>
      <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg overflow-hidden">
        {imageSrc ? (
          <div className="aspect-video bg-[#1f1f1f] flex items-center justify-center border-b border-[#1f1f1f]">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="aspect-video bg-[#1f1f1f] flex items-center justify-center border-b border-[#1f1f1f]">
            <div className="w-16 h-16 bg-[#3b82f6]/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-[#3b82f6] rounded-full"></div>
            </div>
          </div>
        )}
        <div className="p-5">
          <h3 className="text-lg font-bold mb-4 text-emerald-400 font-syne uppercase tracking-wider">
            {title}
          </h3>
          <div className="border border-[#1f1f1f] rounded-lg overflow-hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 ${
                  index !== data.length - 1 ? 'border-b border-[#1f1f1f]' : ''
                }`}
              >
                <div 
                  className="px-3 py-2.5 bg-[#000000] text-xs font-semibold text-gray-500 uppercase tracking-widest font-syne" 
                >
                  {item.label}
                </div>
                <div 
                  className="px-3 py-2.5 text-sm text-gray-300 bg-[#0a0a0a] font-outfit" 
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
