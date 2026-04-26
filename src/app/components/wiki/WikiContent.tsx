interface WikiSection {
  id: string;
  title: string;
  content: string[];
  subsections?: { title: string; content: string }[];
  component?: React.ReactNode;
}

interface WikiContentProps {
  title: string;
  sections: WikiSection[];
  className?: string;
}

export function WikiContent({ title, sections, className = "" }: WikiContentProps) {
  const renderText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, j) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={j}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <main className={`flex-1 min-w-0 ${className}`}>
      <h1
        className="text-5xl font-bold mb-6 tracking-tight text-white font-syne"
      >
        {title}
      </h1>
      <div className="h-px bg-[#1f1f1f] mb-10 w-full"></div>

      <div className="space-y-12 font-outfit">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2
              className="text-3xl font-bold mb-5 text-white border-b border-[#1f1f1f] pb-2 font-syne"
            >
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.map((p, i) => (
                <p key={i} className="text-gray-400 leading-relaxed text-lg">
                  {renderText(p)}
                </p>
              ))}
            </div>

            {section.component && (
              <div className="mt-6">
                {section.component}
              </div>
            )}

            {section.subsections && (
              <div className="mt-8 space-y-6">
                {section.subsections.map((sub, i) => (
                  <div key={i}>
                    <h3
                      className="text-xl font-semibold mb-3 text-emerald-400 font-syne"
                    >
                      {sub.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {renderText(sub.content)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
