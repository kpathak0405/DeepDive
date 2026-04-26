export default function ApiFlowchart() {
    const nodeW = 140;
    const nodeH = 52;

    const nodes = [
        { id: "app", x: 100, y: 120, label: "Your App" },
        { id: "api", x: 380, y: 120, label: "API" },
        { id: "server", x: 660, y: 120, label: "Server" },
    ];

    const edges = [
        { x1: 175, y1: 104, x2: 305, y2: 104, label: "Sends Request", dashed: false },
        { x1: 455, y1: 104, x2: 585, y2: 104, label: "Forwards to", dashed: false },
        { x1: 585, y1: 136, x2: 455, y2: 136, label: "Returns Data", dashed: true },
        { x1: 305, y1: 136, x2: 175, y2: 136, label: "Sends Response", dashed: true },
    ]

    return (
        <div className="rounded-2xl border border-gray-800 bg-gray-950/60 backdrop-blur-sm overflow-hidden my-2">
            {/* Header bar */}
            <div className="px-6 py-3 border-b border-gray-800 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="font-syne text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    API Flow Diagram
                </span>
                <div className="ml-auto flex items-center gap-5 text-xs font-outfit text-gray-500">
                    <span className="flex items-center gap-2">
                        <svg width="24" height="2"><line x1="0" y1="1" x2="24" y2="1" stroke="white" strokeWidth="1.5" /></svg>
                        Request
                    </span>
                    <span className="flex items-center gap-2">
                        <svg width="24" height="2"><line x1="0" y1="1" x2="24" y2="1" stroke="white" strokeWidth="1.5" strokeDasharray="4 3" /></svg>
                        Response
                    </span>
                </div>
            </div>

            {/* Diagram */}
            <div className="px-4 py-8">
                <svg viewBox="0 0 760 240" className="w-full overflow-visible">
                    <defs>
                        
                        <style>{`
                        @keyframes flow {
                            0% { opacity: 0.5; }
                            50% { opacity: 1; }
                            100% { opacity: 0.5; }
                        }
                        @keyframes dash-move {
                            to { stroke-dashoffset: -20; }
                        }
                        .animated-line {
                            animation: flow 1.5s ease-in-out infinite;
                        }
                        .animated-dash {
                            animation: dash-move 1s linear infinite;
                        }
                        `}</style>
                        <marker id="arr" markerWidth="9" markerHeight="6" refX="8" refY="3" orient="auto">
                            <polygon points="0 0, 9 3, 0 6" fill="#ffffff" />
                        </marker>
                        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Nodes */}
                    {nodes.map((n) => (
                        <g key={n.id}>
                            {/* Subtle emerald glow ring */}
                            <rect
                                x={n.x - nodeW / 2 - 3}
                                y={n.y - nodeH / 2 - 3}
                                width={nodeW + 6}
                                height={nodeH + 6}
                                rx="13"
                                fill="none"
                                stroke="#34d399"
                                strokeWidth="1"
                                opacity="0.2"
                            />
                            {/* Box */}
                            <rect
                                x={n.x - nodeW / 2}
                                y={n.y - nodeH / 2}
                                width={nodeW}
                                height={nodeH}
                                rx="10"
                                fill="#071912"
                                stroke="#00c896"
                                strokeWidth="1.5"
                                filter="url(#glow)"
                            />
                            {/* Label */}
                            <text
                                x={n.x}
                                y={n.y + 1}
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fill="#34d399"
                                fontSize="14"
                                fontWeight="700"
                                fontFamily="'Syne', sans-serif"
                                letterSpacing="0.8"
                            >
                                {n.label}
                            </text>
                        </g>
                    ))}

                    {/* Edges */}
                    {edges.map((e, i) => {
                        const midX = (e.x1 + e.x2) / 2;
                        const labelY = e.dashed ? e.y1 + 14 : e.y1 - 12;
                        return (
                            <g key={i}>
                                <line
                                    x1={e.x1} y1={e.y1}
                                    x2={e.x2} y2={e.y2}
                                    stroke="#ffffff"
                                    strokeWidth="1.5"
                                    strokeDasharray={e.dashed ? "5 4" : undefined}
                                    className={!e.dashed ? "animated-line" : "animated-dash"}
                                    markerEnd="url(#arr)"
                                    opacity="0.8"
                                />
                                <text
                                    x={midX}
                                    y={labelY}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="#9ca3af"
                                    fontSize="11.5"
                                    fontFamily="'Outfit', sans-serif"
                                    fontWeight="400"
                                    letterSpacing="0.2"
                                >
                                    {e.label}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
}