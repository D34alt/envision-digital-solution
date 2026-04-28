/* ================================================================
 *  Inline SVG illustrations for the service hero panels.
 *  - No external dependencies, no remote requests, no waiting.
 *  - Built around the existing cyan/indigo/slate palette so they
 *    drop straight into the existing aesthetic.
 *  - Each component fills its parent. Wrap in an `aspect-square`
 *    container to control sizing.
 * =============================================================== */

const SHARED_DEFS = (idPrefix: string) => (
  <defs>
    <linearGradient id={`${idPrefix}-bg`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#0b1226" />
      <stop offset="55%" stopColor="#0a1738" />
      <stop offset="100%" stopColor="#06091a" />
    </linearGradient>
    <radialGradient
      id={`${idPrefix}-glow`}
      cx="50%"
      cy="50%"
      r="50%"
      fx="50%"
      fy="50%"
    >
      <stop offset="0%" stopColor="rgba(34,211,238,0.45)" />
      <stop offset="60%" stopColor="rgba(34,211,238,0.10)" />
      <stop offset="100%" stopColor="rgba(34,211,238,0)" />
    </radialGradient>
    <linearGradient
      id={`${idPrefix}-accent`}
      x1="0"
      y1="0"
      x2="1"
      y2="0"
    >
      <stop offset="0%" stopColor="#22d3ee" />
      <stop offset="100%" stopColor="#6366f1" />
    </linearGradient>
  </defs>
);

/* ---------- Website Design and Development ---------- */
export function WebsiteIllustration() {
  const id = "web";

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylised browser window with content blocks and a floating card"
      className="h-full w-full"
    >
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="190" r="180" fill={`url(#${id}-glow)`} />

      {/* Browser window */}
      <g>
        <rect
          x="56"
          y="70"
          width="288"
          height="208"
          rx="14"
          fill="#0a1531"
          stroke="rgba(34,211,238,0.35)"
          strokeWidth="1"
        />
        <rect x="56" y="70" width="288" height="32" rx="14" fill="#0d1a3d" />
        <rect x="56" y="92" width="288" height="10" fill="#0d1a3d" />
        <circle cx="76" cy="86" r="4" fill="#ef4444" opacity="0.65" />
        <circle cx="90" cy="86" r="4" fill="#facc15" opacity="0.65" />
        <circle cx="104" cy="86" r="4" fill="#22c55e" opacity="0.65" />
        <rect
          x="132"
          y="80"
          width="184"
          height="12"
          rx="6"
          fill="rgba(255,255,255,0.05)"
        />

        {/* Left column copy */}
        <rect
          x="76"
          y="120"
          width="120"
          height="14"
          rx="3"
          fill="url(#web-accent)"
        />
        <rect
          x="76"
          y="142"
          width="180"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
        <rect
          x="76"
          y="156"
          width="156"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
        <rect
          x="76"
          y="170"
          width="138"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
        <rect
          x="76"
          y="196"
          width="92"
          height="26"
          rx="13"
          fill="#22d3ee"
        />
        <rect
          x="76"
          y="234"
          width="160"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.10)"
        />
        <rect
          x="76"
          y="248"
          width="120"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.10)"
        />

        {/* Right column tile */}
        <rect
          x="232"
          y="120"
          width="92"
          height="92"
          rx="10"
          fill="#0c1a3a"
          stroke="rgba(34,211,238,0.25)"
          strokeWidth="1"
        />
        <circle cx="278" cy="166" r="22" fill="rgba(34,211,238,0.18)" />
        <circle cx="278" cy="166" r="10" fill="rgba(34,211,238,0.55)" />
      </g>

      {/* Floating card */}
      <g>
        <rect
          x="206"
          y="248"
          width="148"
          height="68"
          rx="12"
          fill="rgba(15,23,42,0.95)"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1"
        />
        <rect
          x="220"
          y="262"
          width="56"
          height="8"
          rx="2"
          fill="#22d3ee"
        />
        <rect
          x="220"
          y="278"
          width="108"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.25)"
        />
        <rect
          x="220"
          y="290"
          width="80"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.25)"
        />
      </g>

      {/* Mobile mockup */}
      <g>
        <rect
          x="40"
          y="232"
          width="76"
          height="120"
          rx="12"
          fill="#0a1531"
          stroke="rgba(99,102,241,0.45)"
          strokeWidth="1"
        />
        <rect
          x="50"
          y="248"
          width="56"
          height="6"
          rx="2"
          fill="rgba(34,211,238,0.7)"
        />
        <rect
          x="50"
          y="260"
          width="40"
          height="4"
          rx="1.5"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="50"
          y="272"
          width="56"
          height="44"
          rx="6"
          fill="rgba(34,211,238,0.08)"
        />
        <rect
          x="50"
          y="324"
          width="56"
          height="16"
          rx="8"
          fill="#22d3ee"
        />
      </g>
    </svg>
  );
}

/* ---------- SEO and Content Strategy ---------- */
export function SeoIllustration() {
  const id = "seo";

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylised search bar over a stack of result cards"
      className="h-full w-full"
    >
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="160" r="170" fill={`url(#${id}-glow)`} />

      {/* Search bar */}
      <g>
        <rect
          x="60"
          y="92"
          width="280"
          height="56"
          rx="28"
          fill="#0a1531"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="1.4"
        />
        <circle
          cx="92"
          cy="120"
          r="13"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.5"
        />
        <line
          x1="102"
          y1="130"
          x2="112"
          y2="140"
          stroke="#22d3ee"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect
          x="120"
          y="115"
          width="148"
          height="10"
          rx="4"
          fill="rgba(255,255,255,0.22)"
        />
        <rect
          x="290"
          y="106"
          width="38"
          height="28"
          rx="14"
          fill="url(#seo-accent)"
        />
      </g>

      {/* Search rays */}
      <g stroke="rgba(34,211,238,0.55)" strokeWidth="1.4" strokeLinecap="round">
        <line x1="92" y1="68" x2="92" y2="50" />
        <line x1="60" y1="92" x2="42" y2="84" />
        <line x1="60" y1="148" x2="42" y2="156" />
        <line x1="124" y1="68" x2="138" y2="50" />
        <line x1="60" y1="120" x2="40" y2="120" />
      </g>

      {/* Result cards */}
      <g>
        <rect
          x="60"
          y="180"
          width="280"
          height="56"
          rx="12"
          fill="rgba(15,23,42,0.85)"
          stroke="rgba(34,211,238,0.35)"
          strokeWidth="1"
        />
        <rect
          x="76"
          y="194"
          width="180"
          height="10"
          rx="3"
          fill="#22d3ee"
        />
        <rect
          x="76"
          y="212"
          width="240"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.22)"
        />
        <rect
          x="76"
          y="222"
          width="160"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />

        <rect
          x="60"
          y="252"
          width="280"
          height="56"
          rx="12"
          fill="rgba(15,23,42,0.85)"
          stroke="rgba(99,102,241,0.35)"
          strokeWidth="1"
        />
        <rect
          x="76"
          y="266"
          width="140"
          height="10"
          rx="3"
          fill="rgba(99,102,241,0.85)"
        />
        <rect
          x="76"
          y="284"
          width="220"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.22)"
        />
        <rect
          x="76"
          y="294"
          width="180"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />

        <rect
          x="60"
          y="324"
          width="280"
          height="44"
          rx="12"
          fill="rgba(15,23,42,0.55)"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1"
        />
        <rect
          x="76"
          y="338"
          width="120"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.35)"
        />
        <rect
          x="76"
          y="352"
          width="200"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
      </g>

      {/* Trend pin */}
      <g>
        <circle
          cx="332"
          cy="196"
          r="18"
          fill="rgba(34,211,238,0.18)"
          stroke="#22d3ee"
          strokeWidth="1.4"
        />
        <path
          d="M324 200 L330 192 L334 196 L342 188"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* ---------- Location Strategy ---------- */
export function LocationStrategyIllustration() {
  const id = "loc";

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylised map with suburb regions, a highlighted opportunity tile, target pin and competitor markers"
      className="h-full w-full"
    >
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="160" cy="230" r="180" fill={`url(#${id}-glow)`} />

      {/* Subtle grid */}
      <g opacity="0.08" stroke="#ffffff" strokeWidth="0.5">
        <line x1="40" y1="100" x2="360" y2="100" />
        <line x1="40" y1="180" x2="360" y2="180" />
        <line x1="40" y1="260" x2="360" y2="260" />
        <line x1="100" y1="60" x2="100" y2="340" />
        <line x1="180" y1="60" x2="180" y2="340" />
        <line x1="260" y1="60" x2="260" y2="340" />
        <line x1="340" y1="60" x2="340" y2="340" />
      </g>

      {/* Roads */}
      <g
        stroke="rgba(34,211,238,0.22)"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <line x1="40" y1="210" x2="360" y2="210" />
        <line x1="190" y1="60" x2="190" y2="340" />
        <line x1="60" y1="80" x2="320" y2="320" />
      </g>

      {/* Suburb regions */}
      <g>
        <rect
          x="60"
          y="80"
          width="110"
          height="80"
          rx="10"
          fill="rgba(99,102,241,0.16)"
          stroke="rgba(99,102,241,0.45)"
          strokeWidth="1"
        />
        <rect
          x="190"
          y="80"
          width="100"
          height="80"
          rx="10"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
        <rect
          x="310"
          y="80"
          width="50"
          height="80"
          rx="10"
          fill="rgba(99,102,241,0.10)"
          stroke="rgba(99,102,241,0.30)"
          strokeWidth="1"
        />

        {/* Highlighted opportunity suburb */}
        <rect
          x="60"
          y="180"
          width="130"
          height="110"
          rx="12"
          fill="rgba(34,211,238,0.16)"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        <rect
          x="60"
          y="180"
          width="130"
          height="110"
          rx="12"
          fill="none"
          stroke="rgba(34,211,238,0.35)"
          strokeWidth="4"
          strokeDasharray="6 6"
          opacity="0.6"
        />

        <rect
          x="210"
          y="180"
          width="80"
          height="110"
          rx="10"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
        <rect
          x="310"
          y="180"
          width="50"
          height="60"
          rx="10"
          fill="rgba(99,102,241,0.12)"
          stroke="rgba(99,102,241,0.30)"
          strokeWidth="1"
        />
        <rect
          x="310"
          y="250"
          width="50"
          height="80"
          rx="10"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
        <rect
          x="60"
          y="310"
          width="230"
          height="32"
          rx="10"
          fill="rgba(99,102,241,0.10)"
          stroke="rgba(99,102,241,0.28)"
          strokeWidth="1"
        />
      </g>

      {/* Demand heatmap dots in target suburb */}
      <g fill="#22d3ee">
        <circle cx="82" cy="206" r="2.5" opacity="0.55" />
        <circle cx="100" cy="218" r="2.5" opacity="0.65" />
        <circle cx="118" cy="212" r="2.5" opacity="0.5" />
        <circle cx="96" cy="242" r="2.5" opacity="0.6" />
        <circle cx="130" cy="248" r="2.5" opacity="0.55" />
        <circle cx="112" cy="266" r="2.5" opacity="0.5" />
        <circle cx="148" cy="232" r="2.5" opacity="0.55" />
        <circle cx="160" cy="262" r="2.5" opacity="0.5" />
        <circle cx="168" cy="218" r="2.5" opacity="0.4" />
      </g>

      {/* Target map pin with halo */}
      <g>
        <circle
          cx="125"
          cy="230"
          r="40"
          fill="rgba(34,211,238,0.10)"
        />
        <circle
          cx="125"
          cy="230"
          r="26"
          fill="rgba(34,211,238,0.20)"
        />
        <path
          d="M 125 198 C 113 198, 104 207, 104 219 C 104 235, 125 260, 125 260 C 125 260, 146 235, 146 219 C 146 207, 137 198, 125 198 Z"
          fill="url(#loc-accent)"
          stroke="#22d3ee"
          strokeWidth="1"
        />
        <circle cx="125" cy="219" r="5" fill="#0a1531" />
      </g>

      {/* Competitor markers */}
      <g>
        <circle
          cx="108"
          cy="118"
          r="7"
          fill="rgba(99,102,241,0.85)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        <circle cx="108" cy="118" r="2.5" fill="#0a1531" />

        <circle
          cx="244"
          cy="122"
          r="7"
          fill="rgba(99,102,241,0.85)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        <circle cx="244" cy="122" r="2.5" fill="#0a1531" />

        <circle
          cx="335"
          cy="288"
          r="7"
          fill="rgba(99,102,241,0.85)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        <circle cx="335" cy="288" r="2.5" fill="#0a1531" />

        <circle
          cx="250"
          cy="234"
          r="6"
          fill="rgba(99,102,241,0.55)"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
        />
        <circle cx="250" cy="234" r="2" fill="#0a1531" />
      </g>

      {/* Compass */}
      <g transform="translate(332 84)">
        <circle
          r="22"
          fill="rgba(15,23,42,0.92)"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1"
        />
        <path d="M 0 -16 L 5 0 L 0 16 L -5 0 Z" fill="#22d3ee" />
        <path
          d="M 0 -16 L 5 0 L 0 0 Z"
          fill="#0a1531"
          opacity="0.5"
        />
        <circle r="2" fill="#0a1531" />
      </g>

      {/* Data callout card */}
      <g>
        <rect
          x="206"
          y="294"
          width="148"
          height="66"
          rx="12"
          fill="rgba(15,23,42,0.95)"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1"
        />
        <rect
          x="218"
          y="308"
          width="56"
          height="8"
          rx="2"
          fill="#22d3ee"
        />
        <rect
          x="218"
          y="322"
          width="108"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.30)"
        />
        <rect
          x="218"
          y="332"
          width="86"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.22)"
        />
        <rect
          x="218"
          y="342"
          width="96"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.22)"
        />
      </g>
    </svg>
  );
}

/* ---------- Services overview / Toolkit ---------- */
export function ServicesIllustration() {
  const id = "services";

  /* 3x3 grid centred at (200,200), 110px between tile centres. */
  const tiles = [
    { cx: 90, cy: 90 },
    { cx: 200, cy: 90 },
    { cx: 310, cy: 90 },
    { cx: 90, cy: 200 },
    { cx: 310, cy: 200 },
    { cx: 90, cy: 310 },
    { cx: 200, cy: 310 },
    { cx: 310, cy: 310 },
  ];

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylised three-by-three grid of service tiles surrounding a glowing strategy core"
      className="h-full w-full"
    >
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="190" fill={`url(#${id}-glow)`} />

      {/* Connection dots from centre to adjacent tiles (cross pattern) */}
      <g
        stroke="rgba(34,211,238,0.45)"
        strokeWidth="1.2"
        strokeDasharray="2 4"
        strokeLinecap="round"
      >
        <line x1="200" y1="200" x2="200" y2="90" />
        <line x1="200" y1="200" x2="310" y2="200" />
        <line x1="200" y1="200" x2="200" y2="310" />
        <line x1="200" y1="200" x2="90" y2="200" />
      </g>

      {/* Diagonal connector hints */}
      <g
        stroke="rgba(99,102,241,0.30)"
        strokeWidth="1"
        strokeDasharray="2 5"
        strokeLinecap="round"
      >
        <line x1="200" y1="200" x2="90" y2="90" />
        <line x1="200" y1="200" x2="310" y2="90" />
        <line x1="200" y1="200" x2="90" y2="310" />
        <line x1="200" y1="200" x2="310" y2="310" />
      </g>

      {/* Outer service tiles */}
      <g>
        {tiles.map((t) => (
          <rect
            key={`tile-${t.cx}-${t.cy}`}
            x={t.cx - 39}
            y={t.cy - 39}
            width="78"
            height="78"
            rx="14"
            fill="rgba(15,23,42,0.95)"
            stroke="rgba(34,211,238,0.30)"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Tile 1: Website (top-left) */}
      <g transform="translate(90 90)">
        <rect
          x="-18"
          y="-12"
          width="36"
          height="24"
          rx="3"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.6"
        />
        <line
          x1="-18"
          y1="-5"
          x2="18"
          y2="-5"
          stroke="#22d3ee"
          strokeWidth="1"
        />
        <circle cx="-13" cy="-9" r="1" fill="#22d3ee" />
        <circle cx="-9" cy="-9" r="1" fill="#22d3ee" />
        <circle cx="-5" cy="-9" r="1" fill="#22d3ee" />
        <line
          x1="-12"
          y1="1"
          x2="8"
          y2="1"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="1"
        />
        <line
          x1="-12"
          y1="6"
          x2="4"
          y2="6"
          stroke="rgba(34,211,238,0.40)"
          strokeWidth="1"
        />
      </g>

      {/* Tile 2: Search (top-centre) */}
      <g transform="translate(200 90)">
        <circle
          cx="-3"
          cy="-3"
          r="11"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <line
          x1="5"
          y1="5"
          x2="13"
          y2="13"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Tile 3: Megaphone / Ads (top-right) */}
      <g transform="translate(310 90)">
        <path
          d="M -16 -4 L 6 -12 L 6 12 L -16 4 Z"
          fill="rgba(34,211,238,0.20)"
          stroke="#22d3ee"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <rect
          x="6"
          y="-8"
          width="6"
          height="16"
          rx="2"
          fill="#22d3ee"
        />
        <line
          x1="-12"
          y1="4"
          x2="-12"
          y2="12"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Tile 4: Location pin (middle-left) */}
      <g transform="translate(90 200)">
        <path
          d="M 0 -14 C -8 -14, -14 -8, -14 -1 C -14 8, 0 14, 0 14 C 0 14, 14 8, 14 -1 C 14 -8, 8 -14, 0 -14 Z"
          fill="url(#services-accent)"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />
        <circle cx="0" cy="-3" r="4" fill="#0a1531" />
      </g>

      {/* Centre tile: Strategy core (highlighted, slightly larger than the
          surrounding tiles to read as the focal point) */}
      <g>
        <rect
          x="156"
          y="156"
          width="88"
          height="88"
          rx="16"
          fill="rgba(15,23,42,0.96)"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        <circle
          cx="200"
          cy="200"
          r="30"
          fill="rgba(34,211,238,0.14)"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="1.4"
        />
        <circle
          cx="200"
          cy="200"
          r="18"
          fill="url(#services-accent)"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />
        {/* Sparkle rays */}
        <g
          stroke="#22d3ee"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <line x1="200" y1="178" x2="200" y2="170" />
          <line x1="200" y1="222" x2="200" y2="230" />
          <line x1="178" y1="200" x2="170" y2="200" />
          <line x1="222" y1="200" x2="230" y2="200" />
          <line x1="185" y1="185" x2="180" y2="180" />
          <line x1="215" y1="185" x2="220" y2="180" />
          <line x1="185" y1="215" x2="180" y2="220" />
          <line x1="215" y1="215" x2="220" y2="220" />
        </g>
        <circle cx="200" cy="200" r="5" fill="#0a1531" />
      </g>

      {/* Tile 5 (skipped centre): Bar chart (middle-right) */}
      <g transform="translate(310 200)">
        <line
          x1="-15"
          y1="13"
          x2="15"
          y2="13"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
        />
        <rect
          x="-13"
          y="3"
          width="6"
          height="10"
          rx="1"
          fill="rgba(99,102,241,0.7)"
        />
        <rect
          x="-3"
          y="-4"
          width="6"
          height="17"
          rx="1"
          fill="rgba(34,211,238,0.65)"
        />
        <rect
          x="7"
          y="-11"
          width="6"
          height="24"
          rx="1"
          fill="#22d3ee"
        />
      </g>

      {/* Tile 6: Email (bottom-left) */}
      <g transform="translate(90 310)">
        <rect
          x="-16"
          y="-10"
          width="32"
          height="22"
          rx="3"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.6"
        />
        <path
          d="M -16 -8 L 0 4 L 16 -8"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Tile 7: Automation / Workflow (bottom-centre) */}
      <g transform="translate(200 310)">
        <circle
          cx="-12"
          cy="0"
          r="5"
          fill="rgba(34,211,238,0.30)"
          stroke="#22d3ee"
          strokeWidth="1.4"
        />
        <circle
          cx="0"
          cy="-8"
          r="5"
          fill="#22d3ee"
        />
        <circle
          cx="12"
          cy="4"
          r="5"
          fill="rgba(34,211,238,0.30)"
          stroke="#22d3ee"
          strokeWidth="1.4"
        />
        <line
          x1="-8"
          y1="-2"
          x2="-3"
          y2="-6"
          stroke="#22d3ee"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="-5"
          x2="9"
          y2="1"
          stroke="#22d3ee"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>

      {/* Tile 8: Share / Social (bottom-right) */}
      <g transform="translate(310 310)">
        <circle
          cx="-10"
          cy="-8"
          r="5"
          fill="#22d3ee"
        />
        <circle
          cx="10"
          cy="-2"
          r="5"
          fill="rgba(34,211,238,0.55)"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />
        <circle
          cx="-6"
          cy="10"
          r="5"
          fill="rgba(99,102,241,0.7)"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />
        <line
          x1="-6"
          y1="-6"
          x2="6"
          y2="-3"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <line
          x1="-8"
          y1="-4"
          x2="-6"
          y2="5"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* ---------- Home / Connected system ---------- */
export function HomeIllustration() {
  const id = "home";

  /* Six nodes spaced around a central hub at radius 140. */
  const nodes = [
    { cx: 200, cy: 60 }, // top
    { cx: 321, cy: 130 }, // upper-right
    { cx: 321, cy: 270 }, // lower-right
    { cx: 200, cy: 340 }, // bottom
    { cx: 79, cy: 270 }, // lower-left
    { cx: 79, cy: 130 }, // upper-left
  ];

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylised hub-and-spoke diagram with six channel nodes connected to a central strategy core"
      className="h-full w-full"
    >
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="190" fill={`url(#${id}-glow)`} />

      {/* Pulse rings */}
      <g fill="none">
        <circle
          cx="200"
          cy="200"
          r="58"
          stroke="rgba(34,211,238,0.22)"
          strokeWidth="1"
          strokeDasharray="2 5"
        />
        <circle
          cx="200"
          cy="200"
          r="92"
          stroke="rgba(34,211,238,0.16)"
          strokeWidth="1"
          strokeDasharray="2 7"
        />
        <circle
          cx="200"
          cy="200"
          r="126"
          stroke="rgba(34,211,238,0.10)"
          strokeWidth="1"
          strokeDasharray="2 9"
        />
      </g>

      {/* Outer hexagon connecting all nodes */}
      <path
        d="M 200 60 L 321 130 L 321 270 L 200 340 L 79 270 L 79 130 Z"
        fill="none"
        stroke="rgba(99,102,241,0.30)"
        strokeWidth="1"
        strokeDasharray="3 6"
      />

      {/* Spokes from hub to each node */}
      <g
        stroke="url(#home-accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      >
        {nodes.map((n) => (
          <line
            key={`spoke-${n.cx}-${n.cy}`}
            x1="200"
            y1="200"
            x2={n.cx}
            y2={n.cy}
          />
        ))}
      </g>

      {/* Pulses along each spoke */}
      <g fill="#22d3ee">
        {nodes.map((n, i) => {
          const t = 0.45 + (i % 3) * 0.15;
          const px = 200 + (n.cx - 200) * t;
          const py = 200 + (n.cy - 200) * t;
          return <circle key={`pulse-${i}`} cx={px} cy={py} r="3" />;
        })}
      </g>

      {/* Central hub */}
      <g>
        <circle
          cx="200"
          cy="200"
          r="40"
          fill="rgba(34,211,238,0.14)"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1.5"
        />
        <circle
          cx="200"
          cy="200"
          r="24"
          fill="url(#home-accent)"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        <circle cx="200" cy="200" r="8" fill="#0a1531" />
        <circle cx="200" cy="200" r="3" fill="#22d3ee" />
      </g>

      {/* Node containers (rendered before their inner icons) */}
      <g>
        {nodes.map((n) => (
          <rect
            key={`tile-${n.cx}-${n.cy}`}
            x={n.cx - 26}
            y={n.cy - 26}
            width="52"
            height="52"
            rx="12"
            fill="rgba(15,23,42,0.95)"
            stroke="rgba(34,211,238,0.45)"
            strokeWidth="1.2"
          />
        ))}
      </g>

      {/* Node 1: Browser / Website (top) */}
      <g transform="translate(200 60)">
        <rect
          x="-15"
          y="-10"
          width="30"
          height="20"
          rx="3"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        <line
          x1="-15"
          y1="-4"
          x2="15"
          y2="-4"
          stroke="#22d3ee"
          strokeWidth="1"
        />
        <circle cx="-11" cy="-7" r="1" fill="#22d3ee" />
        <circle cx="-7" cy="-7" r="1" fill="#22d3ee" />
        <circle cx="-3" cy="-7" r="1" fill="#22d3ee" />
        <line
          x1="-10"
          y1="1"
          x2="6"
          y2="1"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="1"
        />
        <line
          x1="-10"
          y1="5"
          x2="2"
          y2="5"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1"
        />
      </g>

      {/* Node 2: Search / SEO (upper-right) */}
      <g transform="translate(321 130)">
        <circle
          cx="-3"
          cy="-3"
          r="9"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <line
          x1="4"
          y1="4"
          x2="11"
          y2="11"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Node 3: Paid ads / Target (lower-right) */}
      <g transform="translate(321 270)">
        <circle
          r="14"
          fill="none"
          stroke="rgba(34,211,238,0.4)"
          strokeWidth="1.5"
        />
        <circle
          r="9"
          fill="none"
          stroke="rgba(34,211,238,0.7)"
          strokeWidth="1.5"
        />
        <circle r="4" fill="#22d3ee" />
      </g>

      {/* Node 4: Location pin (bottom) */}
      <g transform="translate(200 340)">
        <path
          d="M 0 -14 C -7 -14, -12 -8, -12 -2 C -12 6, 0 14, 0 14 C 0 14, 12 6, 12 -2 C 12 -8, 7 -14, 0 -14 Z"
          fill="url(#home-accent)"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />
        <circle cx="0" cy="-3" r="3.5" fill="#0a1531" />
      </g>

      {/* Node 5: Content / Chat bubble (lower-left) */}
      <g transform="translate(79 270)">
        <path
          d="M -14 -8 Q -14 -14, -8 -14 L 8 -14 Q 14 -14, 14 -8 L 14 4 Q 14 10, 8 10 L -2 10 L -8 16 L -7 10 L -8 10 Q -14 10, -14 4 Z"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        <circle cx="-6" cy="-2" r="1.5" fill="#22d3ee" />
        <circle cx="0" cy="-2" r="1.5" fill="#22d3ee" />
        <circle cx="6" cy="-2" r="1.5" fill="#22d3ee" />
      </g>

      {/* Node 6: Analytics / Bar chart (upper-left) */}
      <g transform="translate(79 130)">
        <line
          x1="-13"
          y1="12"
          x2="13"
          y2="12"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
        />
        <rect
          x="-12"
          y="2"
          width="6"
          height="10"
          rx="1"
          fill="rgba(99,102,241,0.7)"
        />
        <rect
          x="-3"
          y="-4"
          width="6"
          height="16"
          rx="1"
          fill="rgba(34,211,238,0.65)"
        />
        <rect
          x="6"
          y="-10"
          width="6"
          height="22"
          rx="1"
          fill="#22d3ee"
        />
      </g>
    </svg>
  );
}

/* ---------- About / Brand story ---------- */
export function AboutIllustration() {
  const id = "about";

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylised growth chart trending upward with a clarity lens highlighting a milestone"
      className="h-full w-full"
    >
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="230" cy="180" r="180" fill={`url(#${id}-glow)`} />

      {/* Subtle chart grid */}
      <g opacity="0.08" stroke="#ffffff" strokeWidth="0.5">
        <line x1="60" y1="120" x2="360" y2="120" />
        <line x1="60" y1="170" x2="360" y2="170" />
        <line x1="60" y1="220" x2="360" y2="220" />
        <line x1="60" y1="270" x2="360" y2="270" />
      </g>

      {/* Axes */}
      <g
        stroke="rgba(255,255,255,0.20)"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <line x1="60" y1="80" x2="60" y2="320" />
        <line x1="60" y1="320" x2="360" y2="320" />
      </g>

      {/* Tick marks */}
      <g stroke="rgba(255,255,255,0.30)" strokeWidth="1" strokeLinecap="round">
        <line x1="110" y1="320" x2="110" y2="326" />
        <line x1="160" y1="320" x2="160" y2="326" />
        <line x1="210" y1="320" x2="210" y2="326" />
        <line x1="260" y1="320" x2="260" y2="326" />
        <line x1="310" y1="320" x2="310" y2="326" />
      </g>

      {/* Filled area under curve */}
      <path
        d="M 60 280 L 110 258 L 160 232 L 210 208 L 260 178 L 310 134 L 310 320 L 60 320 Z"
        fill="url(#about-accent)"
        opacity="0.18"
      />

      {/* Growth curve */}
      <path
        d="M 60 280 L 110 258 L 160 232 L 210 208 L 260 178 L 310 134"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dashed projection */}
      <path
        d="M 310 134 L 358 96"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 6"
        opacity="0.65"
      />

      {/* Curve markers */}
      <g>
        <circle
          cx="110"
          cy="258"
          r="5"
          fill="#0a1531"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <circle
          cx="160"
          cy="232"
          r="5"
          fill="#0a1531"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <circle
          cx="210"
          cy="208"
          r="5"
          fill="#0a1531"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <circle
          cx="260"
          cy="178"
          r="5"
          fill="#0a1531"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <circle
          cx="310"
          cy="134"
          r="7"
          fill="#22d3ee"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
      </g>

      {/* Milestone flag at the projection peak */}
      <g>
        <line
          x1="358"
          y1="96"
          x2="358"
          y2="58"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 358 58 L 384 68 L 358 78 Z"
          fill="url(#about-accent)"
          stroke="#22d3ee"
          strokeWidth="1"
        />
      </g>

      {/* Clarity lens highlighting a milestone */}
      <g>
        <circle
          cx="210"
          cy="208"
          r="42"
          fill="none"
          stroke="rgba(34,211,238,0.35)"
          strokeWidth="1.5"
          strokeDasharray="3 5"
        />
        <circle
          cx="210"
          cy="208"
          r="24"
          fill="rgba(34,211,238,0.10)"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="1.5"
        />
        <line
          x1="227"
          y1="225"
          x2="244"
          y2="242"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Insights data card */}
      <g>
        <rect
          x="62"
          y="72"
          width="148"
          height="54"
          rx="12"
          fill="rgba(15,23,42,0.95)"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1"
        />
        <rect
          x="76"
          y="86"
          width="60"
          height="8"
          rx="2"
          fill="#22d3ee"
        />
        <rect
          x="76"
          y="100"
          width="108"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.30)"
        />
        <rect
          x="76"
          y="110"
          width="82"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.22)"
        />
      </g>
    </svg>
  );
}

/* ---------- Contact / Conversation ---------- */
export function ContactIllustration() {
  const id = "contact";

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylised chat bubble exchange with a paper plane and a booking time card"
      className="h-full w-full"
    >
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Incoming bubble (top-left) */}
      <g>
        <path
          d="M 60 90 Q 60 78 72 78 L 220 78 Q 232 78 232 90 L 232 150 Q 232 162 220 162 L 92 162 L 74 184 L 80 162 L 72 162 Q 60 162 60 150 Z"
          fill="rgba(99,102,241,0.16)"
          stroke="rgba(99,102,241,0.55)"
          strokeWidth="1.2"
        />
        <circle
          cx="82"
          cy="100"
          r="10"
          fill="rgba(99,102,241,0.30)"
          stroke="rgba(99,102,241,0.65)"
          strokeWidth="1"
        />
        <rect
          x="100"
          y="96"
          width="56"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.55)"
        />
        <rect
          x="100"
          y="108"
          width="112"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.30)"
        />
        <rect
          x="100"
          y="120"
          width="96"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.30)"
        />
        <rect
          x="100"
          y="140"
          width="68"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.22)"
        />
      </g>

      {/* Outgoing bubble (mid-right) */}
      <g>
        <path
          d="M 168 178 Q 168 166 180 166 L 340 166 Q 352 166 352 178 L 352 246 Q 352 258 340 258 L 204 258 L 188 280 L 194 258 L 180 258 Q 168 258 168 246 Z"
          fill="rgba(34,211,238,0.18)"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />
        <rect
          x="186"
          y="184"
          width="80"
          height="8"
          rx="2"
          fill="#22d3ee"
        />
        <rect
          x="186"
          y="200"
          width="148"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.55)"
        />
        <rect
          x="186"
          y="212"
          width="128"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.45)"
        />
        <rect
          x="186"
          y="224"
          width="112"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.45)"
        />
        <rect
          x="186"
          y="240"
          width="60"
          height="8"
          rx="4"
          fill="rgba(34,211,238,0.55)"
        />
      </g>

      {/* Paper plane mid-flight */}
      <g transform="translate(252 286)">
        <path
          d="M -28 38 L 4 28"
          stroke="rgba(34,211,238,0.35)"
          strokeWidth="1"
          strokeDasharray="2 4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M -52 50 L -16 36"
          stroke="rgba(34,211,238,0.20)"
          strokeWidth="1"
          strokeDasharray="2 4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 4 28 L 64 -4 L 38 38 L 26 22 Z"
          fill="url(#contact-accent)"
          stroke="#22d3ee"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path
          d="M 26 22 L 38 38 L 30 26 Z"
          fill="rgba(11,18,38,0.85)"
        />
      </g>

      {/* Booking time card (bottom-left) */}
      <g>
        <rect
          x="54"
          y="282"
          width="176"
          height="82"
          rx="12"
          fill="rgba(15,23,42,0.96)"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1"
        />
        <rect
          x="54"
          y="282"
          width="176"
          height="24"
          rx="12"
          fill="rgba(34,211,238,0.18)"
        />
        <rect
          x="54"
          y="298"
          width="176"
          height="8"
          fill="rgba(34,211,238,0.18)"
        />
        <circle cx="72" cy="294" r="3.5" fill="#22d3ee" />
        <rect
          x="86"
          y="290"
          width="86"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.85)"
        />
        {/* Time slots */}
        <rect
          x="68"
          y="320"
          width="42"
          height="32"
          rx="8"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        <rect
          x="118"
          y="320"
          width="42"
          height="32"
          rx="8"
          fill="#22d3ee"
        />
        <rect
          x="168"
          y="320"
          width="42"
          height="32"
          rx="8"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        {/* Inner labels */}
        <rect
          x="76"
          y="330"
          width="26"
          height="4"
          rx="1.5"
          fill="rgba(255,255,255,0.45)"
        />
        <rect
          x="76"
          y="340"
          width="18"
          height="4"
          rx="1.5"
          fill="rgba(255,255,255,0.30)"
        />
        <rect
          x="126"
          y="330"
          width="26"
          height="4"
          rx="1.5"
          fill="#0a1531"
        />
        <rect
          x="126"
          y="340"
          width="18"
          height="4"
          rx="1.5"
          fill="rgba(10,21,49,0.7)"
        />
        <rect
          x="176"
          y="330"
          width="26"
          height="4"
          rx="1.5"
          fill="rgba(255,255,255,0.45)"
        />
        <rect
          x="176"
          y="340"
          width="18"
          height="4"
          rx="1.5"
          fill="rgba(255,255,255,0.30)"
        />
      </g>

      {/* Online indicator pill (top-right) */}
      <g>
        <rect
          x="248"
          y="42"
          width="110"
          height="34"
          rx="17"
          fill="rgba(15,23,42,0.96)"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1"
        />
        <circle
          cx="266"
          cy="59"
          r="10"
          fill="none"
          stroke="rgba(34,197,94,0.35)"
          strokeWidth="1.5"
        />
        <circle cx="266" cy="59" r="5" fill="#22c55e" />
        <rect
          x="282"
          y="55"
          width="60"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.78)"
        />
      </g>
    </svg>
  );
}

/* ---------- Paid Ads Management ---------- */
export function PaidAdsIllustration() {
  const id = "ads";

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylised bullseye target with a floating performance card"
      className="h-full w-full"
    >
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="160" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Bullseye */}
      <g>
        <circle
          cx="160"
          cy="200"
          r="120"
          fill="none"
          stroke="rgba(34,211,238,0.18)"
          strokeWidth="2"
        />
        <circle
          cx="160"
          cy="200"
          r="92"
          fill="none"
          stroke="rgba(34,211,238,0.30)"
          strokeWidth="2"
        />
        <circle
          cx="160"
          cy="200"
          r="64"
          fill="none"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="2"
        />
        <circle
          cx="160"
          cy="200"
          r="36"
          fill="rgba(34,211,238,0.10)"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <circle cx="160" cy="200" r="10" fill="#22d3ee" />
      </g>

      {/* Arrow hitting the target */}
      <g>
        <line
          x1="60"
          y1="100"
          x2="155"
          y2="195"
          stroke="url(#ads-accent)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <polygon
          points="155,195 142,184 144,200"
          fill="#22d3ee"
        />
        <polygon
          points="60,100 70,98 68,108"
          fill="#6366f1"
          opacity="0.85"
        />
      </g>

      {/* Performance card */}
      <g>
        <rect
          x="232"
          y="244"
          width="132"
          height="100"
          rx="14"
          fill="rgba(15,23,42,0.95)"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1"
        />
        <rect
          x="248"
          y="260"
          width="60"
          height="8"
          rx="2"
          fill="#22d3ee"
        />
        <rect
          x="248"
          y="276"
          width="100"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.22)"
        />
        {/* Bar chart */}
        <rect
          x="248"
          y="296"
          width="14"
          height="32"
          rx="2"
          fill="rgba(99,102,241,0.55)"
        />
        <rect
          x="266"
          y="288"
          width="14"
          height="40"
          rx="2"
          fill="rgba(34,211,238,0.55)"
        />
        <rect
          x="284"
          y="304"
          width="14"
          height="24"
          rx="2"
          fill="rgba(34,211,238,0.35)"
        />
        <rect
          x="302"
          y="276"
          width="14"
          height="52"
          rx="2"
          fill="#22d3ee"
        />
        <rect
          x="320"
          y="260"
          width="14"
          height="68"
          rx="2"
          fill="url(#ads-accent)"
        />
      </g>

      {/* CTR pill */}
      <g>
        <rect
          x="244"
          y="86"
          width="118"
          height="48"
          rx="24"
          fill="rgba(15,23,42,0.95)"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1"
        />
        <circle cx="266" cy="110" r="10" fill="rgba(34,211,238,0.20)" />
        <circle cx="266" cy="110" r="5" fill="#22d3ee" />
        <rect
          x="284"
          y="100"
          width="60"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.85)"
        />
        <rect
          x="284"
          y="114"
          width="40"
          height="6"
          rx="2"
          fill="rgba(255,255,255,0.45)"
        />
      </g>
    </svg>
  );
}
