import React from 'react';

interface WikiLayoutProps {
  sidebar?: React.ReactNode;
  content: React.ReactNode;
  infobox?: React.ReactNode;
  className?: string;
}

export function WikiLayout({ sidebar, content, infobox, className = "" }: WikiLayoutProps) {
  return (
    <div className={`size-full text-white overflow-auto ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_340px] gap-12">
          {/* Left Column: Sidebar */}
          <div className="order-2 lg:order-1">
            {sidebar}
          </div>

          {/* Center Column: Main Content */}
          <div className="order-1 lg:order-2">
            {content}
          </div>

          {/* Right Column: Infobox */}
          <div className="order-3">
            {infobox}
          </div>
        </div>
      </div>
    </div>
  );
}
