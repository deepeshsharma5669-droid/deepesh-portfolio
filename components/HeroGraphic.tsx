// Decorative: connected data sources -> database -> dashboard. Conceptual only, no data shown.
export default function HeroGraphic() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 40 420 250" role="presentation">
        <defs>
          <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2dd4bf" /><stop offset="1" stopColor="#60a5fa" /></linearGradient>
        </defs>
        {[70, 150, 230].map((y, i) => (
          <g key={y}>
            <rect x="14" y={y} width="86" height="44" rx="10" className="node" />
            <rect x="26" y={y + 14} width={40 + i * 8} height="5" rx="2.5" className="bar" />
            <rect x="26" y={y + 26} width="30" height="5" rx="2.5" className="bar dim" />
            <path d={`M100 ${y + 22} C 150 ${y + 22}, 150 180, 190 180`} className="link" />
          </g>
        ))}
        <circle cx="215" cy="180" r="34" className="node" />
        <ellipse cx="215" cy="170" rx="16" ry="6" fill="none" stroke="url(#hg)" strokeWidth="2" />
        <path d="M199 170v20c0 4 7 8 16 8s16-4 16-8v-20" fill="none" stroke="url(#hg)" strokeWidth="2" />
        <path d="M249 180 C 280 180, 280 130, 310 130" className="link" />
        <path d="M249 180 C 280 180, 280 230, 310 230" className="link" />
        <rect x="310" y="90" width="100" height="80" rx="12" className="node" />
        <rect x="324" y="136" width="10" height="20" rx="2" fill="url(#hg)" />
        <rect x="342" y="120" width="10" height="36" rx="2" fill="url(#hg)" />
        <rect x="360" y="106" width="10" height="50" rx="2" fill="url(#hg)" />
        <rect x="378" y="128" width="10" height="28" rx="2" fill="url(#hg)" />
        <rect x="310" y="196" width="100" height="70" rx="12" className="node" />
        <path d="M324 244 L346 226 L362 236 L396 212" fill="none" stroke="url(#hg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="art-cap">Conceptual illustration</p>
    </div>
  );
}
