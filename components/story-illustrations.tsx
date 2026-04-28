/* ================================================================
 *  Inline SVG illustrations for the example story modal.
 *  - Three stories (Maya, Aaron, Priya), six pages each.
 *  - Matches the visual language of components/service-illustrations.tsx:
 *    400x400 viewBox, dark slate backgrounds, cyan/indigo gradient
 *    accents, geometric line-and-fill compositions.
 *  - Each illustration owns a unique gradient id prefix so multiple
 *    illustrations can coexist on the page without id collisions.
 * =============================================================== */

type StoryId = "maya" | "aaron" | "priya";

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

const baseProps = {
  viewBox: "0 0 400 400",
  xmlns: "http://www.w3.org/2000/svg",
  className: "h-full w-full",
} as const;

/* ============================================================
 *  STORY 1: Maya the cafe owner
 * ============================================================ */

/* Page 1: Storefront with a warm window glow, dog by the door */
function MayaPage1() {
  const id = "maya1";
  return (
    <svg {...baseProps} role="img" aria-label="Cafe storefront with a glowing window and a dog by the door">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="220" r="190" fill={`url(#${id}-glow)`} />

      {/* Awning */}
      <path
        d="M 70 120 L 330 120 L 320 150 L 80 150 Z"
        fill="url(#maya1-accent)"
        opacity="0.85"
      />
      <g stroke="rgba(11,18,38,0.6)" strokeWidth="1">
        <line x1="110" y1="120" x2="100" y2="150" />
        <line x1="160" y1="120" x2="150" y2="150" />
        <line x1="210" y1="120" x2="200" y2="150" />
        <line x1="260" y1="120" x2="250" y2="150" />
        <line x1="310" y1="120" x2="300" y2="150" />
      </g>

      {/* Shopfront */}
      <rect
        x="80"
        y="150"
        width="240"
        height="190"
        fill="rgba(15,23,42,0.95)"
        stroke="rgba(34,211,238,0.45)"
        strokeWidth="1.4"
      />

      {/* Sign */}
      <rect x="148" y="166" width="104" height="22" rx="4" fill="rgba(34,211,238,0.18)" stroke="#22d3ee" strokeWidth="1" />
      <rect x="160" y="174" width="80" height="6" rx="2" fill="#22d3ee" />

      {/* Window with warm glow */}
      <rect x="100" y="200" width="130" height="100" rx="6" fill="rgba(252,211,77,0.18)" stroke="rgba(252,211,77,0.55)" strokeWidth="1.2" />
      <circle cx="165" cy="240" r="38" fill="rgba(252,211,77,0.32)" />
      <rect x="120" y="220" width="50" height="6" rx="2" fill="rgba(252,211,77,0.7)" />
      <rect x="120" y="234" width="80" height="4" rx="2" fill="rgba(252,211,77,0.45)" />

      {/* Door */}
      <rect x="248" y="210" width="56" height="120" rx="6" fill="rgba(15,23,42,0.7)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.2" />
      <circle cx="295" cy="270" r="2" fill="#22d3ee" />

      {/* Dog silhouette by the door */}
      <g transform="translate(232 320)" fill="rgba(99,102,241,0.85)">
        <ellipse cx="0" cy="-2" rx="14" ry="7" />
        <circle cx="-13" cy="-6" r="6" />
        <rect x="-10" y="2" width="3" height="6" rx="1" />
        <rect x="6" y="2" width="3" height="6" rx="1" />
        <path d="M 13 -4 L 17 -10" stroke="rgba(99,102,241,0.85)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Steam from chimney pot */}
      <g stroke="rgba(34,211,238,0.45)" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M 248 100 Q 252 90 248 80 Q 244 70 248 60" />
        <path d="M 268 100 Q 272 90 268 80 Q 264 70 268 60" />
      </g>
    </svg>
  );
}

/* Page 2: Three suburb tiles, one circled in red, coffee cup on top */
function MayaPage2() {
  const id = "maya2";
  return (
    <svg {...baseProps} role="img" aria-label="Three suburb map tiles with one circled in red and a coffee cup placed across them">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Map grid */}
      <g opacity="0.10" stroke="#ffffff" strokeWidth="0.5">
        <line x1="40" y1="120" x2="360" y2="120" />
        <line x1="40" y1="200" x2="360" y2="200" />
        <line x1="40" y1="280" x2="360" y2="280" />
        <line x1="120" y1="60" x2="120" y2="340" />
        <line x1="200" y1="60" x2="200" y2="340" />
        <line x1="280" y1="60" x2="280" y2="340" />
      </g>

      {/* Three suburb tiles */}
      <rect x="56" y="100" width="92" height="120" rx="12" fill="rgba(99,102,241,0.16)" stroke="rgba(99,102,241,0.55)" strokeWidth="1.4" />
      <rect x="156" y="100" width="92" height="120" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
      <rect x="256" y="100" width="92" height="120" rx="12" fill="rgba(99,102,241,0.10)" stroke="rgba(99,102,241,0.35)" strokeWidth="1.2" />

      {/* Tile labels */}
      <rect x="68" y="200" width="52" height="6" rx="2" fill="rgba(255,255,255,0.45)" />
      <rect x="168" y="200" width="52" height="6" rx="2" fill="rgba(255,255,255,0.45)" />
      <rect x="268" y="200" width="52" height="6" rx="2" fill="rgba(255,255,255,0.45)" />

      {/* Red dashed warning circle around the leftmost (the one she nearly picked) */}
      <circle
        cx="102"
        cy="160"
        r="56"
        fill="none"
        stroke="#f87171"
        strokeWidth="2.5"
        strokeDasharray="5 5"
        opacity="0.85"
      />
      <g transform="translate(140 110)" fill="#f87171">
        <circle r="9" />
        <rect x="-1" y="-5" width="2" height="6" fill="#0a1531" />
        <rect x="-1" y="2" width="2" height="2" fill="#0a1531" />
      </g>

      {/* Coffee cup placed across the tiles */}
      <g transform="translate(200 280)">
        <ellipse cx="0" cy="0" rx="50" ry="14" fill="rgba(11,18,38,0.65)" />
        <path
          d="M -50 -2 L -45 50 Q -45 64 0 64 Q 45 64 45 50 L 50 -2 Z"
          fill="url(#maya2-accent)"
          stroke="#22d3ee"
          strokeWidth="1.4"
        />
        <ellipse cx="0" cy="-2" rx="50" ry="12" fill="rgba(11,18,38,0.85)" stroke="#22d3ee" strokeWidth="1" />
        <ellipse cx="0" cy="-2" rx="40" ry="8" fill="rgba(120,80,40,0.85)" />
        {/* Handle */}
        <path d="M 50 8 Q 70 8 70 30 Q 70 50 50 50" fill="none" stroke="#22d3ee" strokeWidth="2" />
        {/* Steam */}
        <g stroke="rgba(34,211,238,0.55)" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <path d="M -16 -10 Q -12 -22 -16 -34" />
          <path d="M 0 -10 Q 4 -22 0 -34" />
          <path d="M 16 -10 Q 20 -22 16 -34" />
        </g>
      </g>
    </svg>
  );
}

/* Page 3: Lease document at night, laptop with rent figures, wine glass */
function MayaPage3() {
  const id = "maya3";
  return (
    <svg {...baseProps} role="img" aria-label="A lease document on a kitchen table at night beside a laptop showing rent figures and a wine glass">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <radialGradient id={`${id}-lamp`} cx="50%" cy="20%" r="60%">
        <stop offset="0%" stopColor="rgba(252,211,77,0.35)" />
        <stop offset="100%" stopColor="rgba(252,211,77,0)" />
      </radialGradient>
      <rect width="400" height="400" fill={`url(#${id}-lamp)`} />

      {/* Table edge */}
      <rect x="0" y="320" width="400" height="80" fill="rgba(20,28,52,0.85)" />
      <line x1="0" y1="320" x2="400" y2="320" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />

      {/* Lease document */}
      <g transform="translate(70 130) rotate(-6)">
        <rect width="170" height="200" rx="6" fill="rgba(241,245,249,0.92)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <rect x="14" y="18" width="90" height="10" rx="2" fill="#0f172a" />
        <rect x="14" y="40" width="142" height="4" rx="2" fill="rgba(15,23,42,0.7)" />
        <rect x="14" y="50" width="130" height="4" rx="2" fill="rgba(15,23,42,0.7)" />
        <rect x="14" y="60" width="138" height="4" rx="2" fill="rgba(15,23,42,0.7)" />
        <rect x="14" y="80" width="80" height="4" rx="2" fill="rgba(15,23,42,0.7)" />
        <rect x="14" y="90" width="120" height="4" rx="2" fill="rgba(15,23,42,0.7)" />
        <rect x="14" y="100" width="100" height="4" rx="2" fill="rgba(15,23,42,0.7)" />
        {/* Signature line */}
        <line x1="14" y1="160" x2="120" y2="160" stroke="#0f172a" strokeWidth="1" />
        <text x="14" y="156" fill="#0f172a" fontFamily="cursive" fontSize="20" fontStyle="italic">M.</text>
        <rect x="14" y="170" width="60" height="3" rx="1" fill="rgba(15,23,42,0.5)" />
      </g>

      {/* Laptop */}
      <g transform="translate(220 170)">
        <rect x="-10" y="0" width="160" height="100" rx="6" fill="#0a1531" stroke="rgba(34,211,238,0.45)" strokeWidth="1.2" />
        {/* Screen content - rent comparison */}
        <rect x="0" y="10" width="60" height="6" rx="2" fill="#22d3ee" />
        <rect x="0" y="24" width="140" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
        <rect x="0" y="36" width="100" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
        {/* Big number */}
        <rect x="0" y="50" width="80" height="14" rx="3" fill="rgba(248,113,113,0.85)" />
        <rect x="0" y="72" width="120" height="4" rx="2" fill="rgba(255,255,255,0.18)" />
        <rect x="0" y="82" width="80" height="4" rx="2" fill="rgba(255,255,255,0.18)" />
        {/* Base */}
        <rect x="-30" y="100" width="200" height="10" rx="3" fill="#0a1531" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
      </g>

      {/* Wine glass */}
      <g transform="translate(320 260)">
        <path d="M -14 -40 Q -14 -10 0 -10 Q 14 -10 14 -40 Z" fill="rgba(190,18,60,0.55)" stroke="rgba(190,18,60,0.85)" strokeWidth="1" />
        <line x1="0" y1="-10" x2="0" y2="20" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" />
        <ellipse cx="0" cy="20" rx="14" ry="3" fill="rgba(255,255,255,0.18)" />
      </g>

      {/* Phone face-down */}
      <rect x="60" y="346" width="80" height="14" rx="3" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.25)" strokeWidth="1" />
    </svg>
  );
}

/* Page 4: Map with weighted bars at each pin, one cyan-highlighted */
function MayaPage4() {
  const id = "maya4";
  return (
    <svg {...baseProps} role="img" aria-label="Map showing three suburb pins each with a small bar chart, one option highlighted in cyan">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Roads */}
      <g stroke="rgba(34,211,238,0.18)" strokeWidth="2" strokeLinecap="round">
        <line x1="40" y1="200" x2="360" y2="200" />
        <line x1="200" y1="40" x2="200" y2="360" />
        <line x1="80" y1="80" x2="320" y2="320" />
      </g>

      {/* Pin 1 with bars (left, dim) */}
      <g transform="translate(110 130)">
        <path d="M 0 -18 C -10 -18, -16 -10, -16 -2 C -16 12, 0 22, 0 22 C 0 22, 16 12, 16 -2 C 16 -10, 10 -18, 0 -18 Z"
          fill="rgba(99,102,241,0.55)" stroke="rgba(99,102,241,0.85)" strokeWidth="1" />
        <circle cx="0" cy="-3" r="4" fill="#0a1531" />
      </g>
      <g transform="translate(140 130)">
        <line x1="-8" y1="14" x2="22" y2="14" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
        <rect x="-6" y="6" width="6" height="8" fill="rgba(99,102,241,0.55)" />
        <rect x="2" y="0" width="6" height="14" fill="rgba(99,102,241,0.55)" />
        <rect x="10" y="-6" width="6" height="20" fill="rgba(99,102,241,0.55)" />
      </g>

      {/* Pin 2 with bars (centre right, highlighted) */}
      <g transform="translate(260 200)">
        <circle r="40" fill="rgba(34,211,238,0.10)" />
        <circle r="28" fill="rgba(34,211,238,0.18)" />
        <path d="M 0 -22 C -12 -22, -20 -12, -20 -2 C -20 14, 0 28, 0 28 C 0 28, 20 14, 20 -2 C 20 -12, 12 -22, 0 -22 Z"
          fill="url(#maya4-accent)" stroke="#22d3ee" strokeWidth="1.4" />
        <circle cx="0" cy="-4" r="6" fill="#0a1531" />
      </g>
      <g transform="translate(296 200)">
        <line x1="-8" y1="14" x2="26" y2="14" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
        <rect x="-6" y="0" width="6" height="14" fill="rgba(34,211,238,0.55)" />
        <rect x="4" y="-8" width="6" height="22" fill="rgba(34,211,238,0.85)" />
        <rect x="14" y="-14" width="6" height="28" fill="#22d3ee" />
      </g>

      {/* Pin 3 with bars (bottom, dim) */}
      <g transform="translate(140 280)">
        <path d="M 0 -18 C -10 -18, -16 -10, -16 -2 C -16 12, 0 22, 0 22 C 0 22, 16 12, 16 -2 C 16 -10, 10 -18, 0 -18 Z"
          fill="rgba(99,102,241,0.55)" stroke="rgba(99,102,241,0.85)" strokeWidth="1" />
        <circle cx="0" cy="-3" r="4" fill="#0a1531" />
      </g>
      <g transform="translate(170 280)">
        <line x1="-8" y1="14" x2="22" y2="14" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
        <rect x="-6" y="2" width="6" height="12" fill="rgba(99,102,241,0.55)" />
        <rect x="2" y="-2" width="6" height="16" fill="rgba(99,102,241,0.55)" />
        <rect x="10" y="2" width="6" height="12" fill="rgba(99,102,241,0.55)" />
      </g>

      {/* Data callout */}
      <g>
        <rect x="50" y="320" width="160" height="60" rx="12" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.45)" strokeWidth="1" />
        <rect x="64" y="334" width="60" height="8" rx="2" fill="#22d3ee" />
        <rect x="64" y="348" width="120" height="5" rx="2" fill="rgba(255,255,255,0.32)" />
        <rect x="64" y="358" width="86" height="5" rx="2" fill="rgba(255,255,255,0.22)" />
      </g>
    </svg>
  );
}

/* Page 5: Toolkit exploded view - foot traffic, demographics, ads, GBP */
function MayaPage5() {
  const id = "maya5";
  return (
    <svg {...baseProps} role="img" aria-label="A connected toolkit showing foot traffic data, demographic icons, an ad mockup and a Google Business profile card">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Connector lines */}
      <g stroke="rgba(34,211,238,0.45)" strokeWidth="1.2" strokeDasharray="2 5" strokeLinecap="round">
        <line x1="200" y1="200" x2="100" y2="100" />
        <line x1="200" y1="200" x2="300" y2="100" />
        <line x1="200" y1="200" x2="100" y2="300" />
        <line x1="200" y1="200" x2="300" y2="300" />
      </g>

      {/* Centre hub */}
      <circle cx="200" cy="200" r="34" fill="rgba(34,211,238,0.14)" stroke="#22d3ee" strokeWidth="1.4" />
      <circle cx="200" cy="200" r="20" fill="url(#maya5-accent)" />
      <circle cx="200" cy="200" r="6" fill="#0a1531" />

      {/* Top-left: foot traffic chart */}
      <g transform="translate(100 100)">
        <rect x="-44" y="-30" width="88" height="60" rx="10" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.45)" strokeWidth="1" />
        <line x1="-34" y1="20" x2="34" y2="20" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <path d="M -34 12 L -20 6 L -8 14 L 4 -2 L 18 -8 L 34 -16" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Top-right: demographic icons (pram, school, dog) */}
      <g transform="translate(300 100)">
        <rect x="-44" y="-30" width="88" height="60" rx="10" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.45)" strokeWidth="1" />
        {/* Pram */}
        <g transform="translate(-26 0)" stroke="#22d3ee" strokeWidth="1.4" fill="none" strokeLinecap="round">
          <path d="M -8 0 Q -8 -10 2 -10 L 8 -10 L 8 6 L -8 6 Z" />
          <circle cx="-6" cy="10" r="2.5" fill="#22d3ee" />
          <circle cx="6" cy="10" r="2.5" fill="#22d3ee" />
        </g>
        {/* School building */}
        <g transform="translate(0 0)">
          <path d="M -7 4 L 0 -4 L 7 4 Z" fill="rgba(34,211,238,0.6)" />
          <rect x="-6" y="4" width="12" height="8" fill="rgba(34,211,238,0.4)" />
        </g>
        {/* Dog */}
        <g transform="translate(26 4)" fill="rgba(99,102,241,0.85)">
          <ellipse cx="0" cy="0" rx="8" ry="4" />
          <circle cx="-7" cy="-2" r="3" />
          <rect x="-5" y="3" width="2" height="4" />
          <rect x="3" y="3" width="2" height="4" />
        </g>
      </g>

      {/* Bottom-left: GBP card */}
      <g transform="translate(100 300)">
        <rect x="-44" y="-30" width="88" height="60" rx="10" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.45)" strokeWidth="1" />
        <circle cx="-30" cy="-12" r="8" fill="rgba(34,211,238,0.2)" stroke="#22d3ee" strokeWidth="1" />
        <path d="M -30 -16 L -30 -12 L -27 -10" stroke="#22d3ee" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <rect x="-16" y="-16" width="48" height="6" rx="2" fill="#22d3ee" />
        <rect x="-16" y="-6" width="36" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
        <rect x="-32" y="6" width="64" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
        <rect x="-32" y="14" width="44" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
      </g>

      {/* Bottom-right: ad mockup */}
      <g transform="translate(300 300)">
        <rect x="-44" y="-30" width="88" height="60" rx="10" fill="rgba(15,23,42,0.95)" stroke="rgba(99,102,241,0.45)" strokeWidth="1" />
        <rect x="-34" y="-20" width="68" height="22" rx="4" fill="rgba(34,211,238,0.18)" />
        <rect x="-30" y="-12" width="44" height="6" rx="2" fill="#22d3ee" />
        <rect x="-34" y="8" width="50" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
        <rect x="-34" y="16" width="36" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
        <rect x="20" y="14" width="20" height="8" rx="4" fill="#22d3ee" />
      </g>
    </svg>
  );
}

/* Page 6: Two storefronts side by side, both glowing, sun up */
function MayaPage6() {
  const id = "maya6";
  return (
    <svg {...baseProps} role="img" aria-label="Two cafe storefronts side by side, both with warm glowing windows under a rising sun">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />

      {/* Sun and warm sky glow */}
      <radialGradient id={`${id}-sun`} cx="50%" cy="20%" r="60%">
        <stop offset="0%" stopColor="rgba(252,211,77,0.35)" />
        <stop offset="100%" stopColor="rgba(252,211,77,0)" />
      </radialGradient>
      <rect width="400" height="400" fill={`url(#${id}-sun)`} />
      <circle cx="200" cy="80" r="34" fill="rgba(252,211,77,0.7)" />
      <circle cx="200" cy="80" r="50" fill="rgba(252,211,77,0.18)" />

      {/* Pulse ring around the new (right) cafe */}
      <g fill="none">
        <circle cx="290" cy="260" r="100" stroke="rgba(34,211,238,0.20)" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="290" cy="260" r="76" stroke="rgba(34,211,238,0.35)" strokeWidth="1" strokeDasharray="3 6" />
      </g>

      {/* Cafe 1 */}
      <g transform="translate(60 180)">
        <path d="M 0 0 L 120 0 L 114 16 L 6 16 Z" fill="url(#maya6-accent)" opacity="0.85" />
        <rect x="0" y="16" width="120" height="140" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.45)" strokeWidth="1.2" />
        <rect x="14" y="50" width="60" height="60" rx="3" fill="rgba(252,211,77,0.32)" stroke="rgba(252,211,77,0.55)" strokeWidth="1" />
        <rect x="84" y="50" width="22" height="106" rx="2" fill="rgba(15,23,42,0.7)" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
        <rect x="32" y="28" width="56" height="8" rx="2" fill="#22d3ee" />
      </g>

      {/* Cafe 2 (the new one - same shape, slightly bigger glow) */}
      <g transform="translate(220 180)">
        <path d="M 0 0 L 120 0 L 114 16 L 6 16 Z" fill="url(#maya6-accent)" opacity="0.95" />
        <rect x="0" y="16" width="120" height="140" fill="rgba(15,23,42,0.95)" stroke="#22d3ee" strokeWidth="1.5" />
        <rect x="14" y="50" width="60" height="60" rx="3" fill="rgba(252,211,77,0.5)" stroke="rgba(252,211,77,0.85)" strokeWidth="1.4" />
        <circle cx="44" cy="80" r="22" fill="rgba(252,211,77,0.45)" />
        <rect x="84" y="50" width="22" height="106" rx="2" fill="rgba(15,23,42,0.7)" stroke="rgba(34,211,238,0.55)" strokeWidth="1" />
        <rect x="32" y="28" width="56" height="8" rx="2" fill="#0a1531" />
      </g>

      {/* Footpath */}
      <line x1="0" y1="340" x2="400" y2="340" stroke="rgba(34,211,238,0.25)" strokeWidth="1.5" />

      {/* Tiny figures walking */}
      <g fill="rgba(99,102,241,0.85)">
        <circle cx="160" cy="332" r="3" />
        <rect x="158.5" y="334" width="3" height="6" rx="1" />
        <circle cx="200" cy="332" r="3" />
        <rect x="198.5" y="334" width="3" height="6" rx="1" />
      </g>
    </svg>
  );
}

/* ============================================================
 *  STORY 2: Aaron the clinic partner
 * ============================================================ */

/* Page 1: Clinic floorplan with four treatment rooms and a wall calendar */
function AaronPage1() {
  const id = "aaron1";
  return (
    <svg {...baseProps} role="img" aria-label="A clinic floorplan with four treatment rooms and a wall calendar">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Outer clinic walls */}
      <rect x="60" y="80" width="280" height="240" rx="14" fill="rgba(15,23,42,0.96)" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />

      {/* Reception area (left) */}
      <rect x="60" y="80" width="100" height="240" fill="rgba(34,211,238,0.05)" />
      <rect x="76" y="180" width="68" height="40" rx="4" fill="rgba(34,211,238,0.18)" stroke="#22d3ee" strokeWidth="1" />
      <rect x="80" y="186" width="60" height="6" rx="2" fill="#22d3ee" />
      <rect x="80" y="198" width="44" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
      {/* Waiting chairs */}
      <g fill="rgba(99,102,241,0.85)">
        <rect x="74" y="100" width="14" height="10" rx="2" />
        <rect x="92" y="100" width="14" height="10" rx="2" />
        <rect x="110" y="100" width="14" height="10" rx="2" />
        <rect x="128" y="100" width="14" height="10" rx="2" />
      </g>

      {/* Vertical divider */}
      <line x1="160" y1="80" x2="160" y2="320" stroke="rgba(34,211,238,0.4)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Four treatment rooms in a 2x2 grid (right side) */}
      <g>
        <rect x="170" y="92" width="80" height="100" rx="6" fill="rgba(15,23,42,0.7)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
        <rect x="260" y="92" width="80" height="100" rx="6" fill="rgba(15,23,42,0.7)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
        <rect x="170" y="208" width="80" height="100" rx="6" fill="rgba(15,23,42,0.7)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
        <rect x="260" y="208" width="80" height="100" rx="6" fill="rgba(15,23,42,0.7)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
        {/* Treatment beds */}
        <rect x="184" y="130" width="52" height="20" rx="4" fill="rgba(34,211,238,0.55)" />
        <rect x="274" y="130" width="52" height="20" rx="4" fill="rgba(34,211,238,0.55)" />
        <rect x="184" y="246" width="52" height="20" rx="4" fill="rgba(34,211,238,0.55)" />
        <rect x="274" y="246" width="52" height="20" rx="4" fill="rgba(34,211,238,0.55)" />
        {/* Room labels */}
        <rect x="178" y="100" width="18" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
        <rect x="268" y="100" width="18" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
        <rect x="178" y="216" width="18" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
        <rect x="268" y="216" width="18" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
      </g>

      {/* Wall calendar in reception */}
      <g transform="translate(76 240)">
        <rect width="68" height="60" rx="6" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
        <rect width="68" height="14" rx="6" fill="rgba(34,211,238,0.18)" />
        <rect x="6" y="3" width="40" height="8" rx="2" fill="#22d3ee" />
        <g fill="rgba(255,255,255,0.45)">
          <rect x="6" y="20" width="6" height="6" rx="1" />
          <rect x="16" y="20" width="6" height="6" rx="1" />
          <rect x="26" y="20" width="6" height="6" rx="1" />
          <rect x="36" y="20" width="6" height="6" rx="1" />
          <rect x="46" y="20" width="6" height="6" rx="1" />
          <rect x="56" y="20" width="6" height="6" rx="1" />
          <rect x="6" y="30" width="6" height="6" rx="1" />
          <rect x="16" y="30" width="6" height="6" rx="1" />
          <rect x="26" y="30" width="6" height="6" rx="1" />
          <rect x="36" y="30" width="6" height="6" rx="1" />
          <rect x="46" y="30" width="6" height="6" rx="1" />
          <rect x="56" y="30" width="6" height="6" rx="1" />
          <rect x="6" y="40" width="6" height="6" rx="1" />
          <rect x="16" y="40" width="6" height="6" rx="1" />
          <rect x="26" y="40" width="6" height="6" rx="1" />
          <rect x="36" y="40" width="6" height="6" rx="1" />
          <rect x="46" y="40" width="6" height="6" rx="1" />
          <rect x="56" y="40" width="6" height="6" rx="1" />
        </g>
      </g>
    </svg>
  );
}

/* Page 2: Calendar with Tuesday/Thursday columns highlighted as gaps */
function AaronPage2() {
  const id = "aaron2";
  return (
    <svg {...baseProps} role="img" aria-label="A weekly calendar with the Tuesday and Thursday columns highlighted as empty">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      <g transform="translate(40 60)">
        <rect width="320" height="280" rx="14" fill="rgba(15,23,42,0.96)" stroke="rgba(34,211,238,0.45)" strokeWidth="1.2" />
        {/* Header */}
        <rect width="320" height="40" rx="14" fill="rgba(34,211,238,0.15)" />
        <rect width="320" height="20" y="20" fill="rgba(34,211,238,0.15)" />
        <rect x="16" y="14" width="80" height="10" rx="2" fill="#22d3ee" />

        {/* Day headers */}
        <g fill="rgba(255,255,255,0.7)">
          <rect x="16" y="50" width="20" height="6" rx="2" />
          <rect x="76" y="50" width="20" height="6" rx="2" />
          <rect x="136" y="50" width="20" height="6" rx="2" />
          <rect x="196" y="50" width="20" height="6" rx="2" />
          <rect x="256" y="50" width="20" height="6" rx="2" />
        </g>

        {/* Tuesday column dimmed */}
        <rect x="70" y="64" width="56" height="200" rx="6" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.55)" strokeWidth="1.2" strokeDasharray="4 4" />
        {/* Thursday column dimmed */}
        <rect x="190" y="64" width="56" height="200" rx="6" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.55)" strokeWidth="1.2" strokeDasharray="4 4" />

        {/* Monday slots (full) */}
        <g>
          <rect x="14" y="70" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="14" y="96" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="14" y="122" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="14" y="148" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="14" y="174" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="14" y="200" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="14" y="226" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
        </g>

        {/* Wednesday slots (full) */}
        <g>
          <rect x="134" y="70" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="134" y="96" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="134" y="122" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="134" y="148" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="134" y="174" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="134" y="200" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
        </g>

        {/* Friday slots (full) */}
        <g>
          <rect x="254" y="70" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="254" y="96" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="254" y="122" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="254" y="148" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="254" y="174" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="254" y="200" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
          <rect x="254" y="226" width="48" height="22" rx="4" fill="rgba(34,211,238,0.35)" />
        </g>

        {/* Tuesday: only one slot */}
        <rect x="74" y="70" width="48" height="22" rx="4" fill="rgba(248,113,113,0.4)" />

        {/* Thursday: empty - no slots */}
      </g>
    </svg>
  );
}

/* Page 3: Laptop with vanity SEO dashboard, crumpled invoice */
function AaronPage3() {
  const id = "aaron3";
  return (
    <svg {...baseProps} role="img" aria-label="A laptop showing an SEO dashboard full of vanity metrics with a crumpled invoice in the foreground">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="180" r="180" fill={`url(#${id}-glow)`} />

      {/* Laptop */}
      <g transform="translate(60 100)">
        <rect width="280" height="180" rx="10" fill="#0a1531" stroke="rgba(34,211,238,0.45)" strokeWidth="1.4" />
        {/* Header bar */}
        <rect width="280" height="28" rx="10" fill="rgba(34,211,238,0.15)" />
        <rect width="280" height="14" y="14" fill="rgba(34,211,238,0.15)" />
        <rect x="14" y="9" width="80" height="10" rx="3" fill="#22d3ee" />
        {/* Vanity metric tiles */}
        <g>
          <rect x="14" y="42" width="80" height="50" rx="6" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
          <rect x="22" y="50" width="40" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="22" y="62" width="60" height="14" rx="2" fill="#22d3ee" />
          <rect x="22" y="80" width="36" height="4" rx="2" fill="rgba(99,102,241,0.65)" />

          <rect x="100" y="42" width="80" height="50" rx="6" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
          <rect x="108" y="50" width="40" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="108" y="62" width="60" height="14" rx="2" fill="#22d3ee" />
          <rect x="108" y="80" width="36" height="4" rx="2" fill="rgba(99,102,241,0.65)" />

          <rect x="186" y="42" width="80" height="50" rx="6" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
          <rect x="194" y="50" width="40" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="194" y="62" width="60" height="14" rx="2" fill="#22d3ee" />
          <rect x="194" y="80" width="36" height="4" rx="2" fill="rgba(99,102,241,0.65)" />
        </g>

        {/* Flat-line chart */}
        <g transform="translate(14 110)">
          <rect width="252" height="58" rx="6" fill="rgba(15,23,42,0.95)" stroke="rgba(248,113,113,0.45)" strokeWidth="1" />
          <line x1="10" y1="48" x2="242" y2="48" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <path d="M 10 36 L 50 38 L 90 34 L 130 38 L 170 36 L 210 36 L 242 34" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
          <rect x="14" y="6" width="50" height="6" rx="2" fill="rgba(248,113,113,0.85)" />
          <rect x="14" y="16" width="100" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
        </g>
        {/* Stand */}
        <rect x="-20" y="180" width="320" height="10" rx="4" fill="#0a1531" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
      </g>

      {/* Crumpled invoice */}
      <g transform="translate(70 320)">
        <path d="M 0 0 L 80 -8 L 90 30 L -4 36 Z" fill="rgba(241,245,249,0.92)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <path d="M 10 8 L 60 4" stroke="rgba(15,23,42,0.6)" strokeWidth="1" />
        <path d="M 10 16 L 50 14" stroke="rgba(15,23,42,0.6)" strokeWidth="1" />
        <path d="M 10 24 L 64 22" stroke="rgba(248,113,113,0.85)" strokeWidth="2" />
      </g>

      {/* Bin outline */}
      <g transform="translate(300 320)">
        <path d="M 0 0 L 60 0 L 56 50 L 4 50 Z" fill="rgba(15,23,42,0.6)" stroke="rgba(99,102,241,0.55)" strokeWidth="1.2" />
        <line x1="-4" y1="0" x2="64" y2="0" stroke="rgba(99,102,241,0.7)" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="14" x2="22" y2="40" stroke="rgba(99,102,241,0.45)" strokeWidth="1" />
        <line x1="38" y1="14" x2="36" y2="40" stroke="rgba(99,102,241,0.45)" strokeWidth="1" />
      </g>
    </svg>
  );
}

/* Page 4: Phone in a car park, "no results nearby" */
function AaronPage4() {
  const id = "aaron4";
  return (
    <svg {...baseProps} role="img" aria-label="A phone showing a search for physio nearby with no clinic results visible">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Car park asphalt lines (subtle) */}
      <g stroke="rgba(255,255,255,0.10)" strokeWidth="1.4" strokeDasharray="14 10">
        <line x1="40" y1="350" x2="360" y2="350" />
        <line x1="40" y1="380" x2="360" y2="380" />
      </g>

      {/* Phone */}
      <g transform="translate(120 50)">
        <rect width="160" height="280" rx="22" fill="#0a1531" stroke="rgba(34,211,238,0.55)" strokeWidth="1.6" />
        {/* Screen */}
        <rect x="10" y="22" width="140" height="240" rx="10" fill="rgba(15,23,42,0.95)" />
        {/* Notch */}
        <rect x="60" y="6" width="40" height="6" rx="3" fill="#0a1531" stroke="rgba(34,211,238,0.4)" strokeWidth="0.8" />

        {/* Search bar */}
        <rect x="20" y="36" width="120" height="24" rx="12" fill="rgba(34,211,238,0.10)" stroke="rgba(34,211,238,0.45)" strokeWidth="1" />
        <circle cx="32" cy="48" r="5" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        <line x1="36" y1="52" x2="40" y2="56" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="46" y="44" width="80" height="8" rx="2" fill="rgba(255,255,255,0.45)" />

        {/* Map area */}
        <rect x="20" y="70" width="120" height="100" rx="6" fill="rgba(15,23,42,0.7)" stroke="rgba(99,102,241,0.45)" strokeWidth="1" />
        <g stroke="rgba(34,211,238,0.18)" strokeWidth="1" strokeLinecap="round">
          <line x1="20" y1="100" x2="140" y2="100" />
          <line x1="20" y1="135" x2="140" y2="135" />
          <line x1="60" y1="70" x2="60" y2="170" />
          <line x1="100" y1="70" x2="100" y2="170" />
        </g>
        {/* "You are here" pin */}
        <g transform="translate(80 120)">
          <circle r="14" fill="rgba(34,211,238,0.18)" />
          <circle r="4" fill="#22d3ee" />
        </g>
        {/* Big sad-face question mark over the map */}
        <g transform="translate(120 90)">
          <text x="0" y="0" fill="rgba(248,113,113,0.85)" fontSize="22" fontFamily="sans-serif" fontWeight="bold">?</text>
        </g>

        {/* Results list (with X marks) */}
        <g transform="translate(20 184)">
          <rect width="120" height="22" rx="4" fill="rgba(15,23,42,0.85)" stroke="rgba(248,113,113,0.45)" strokeWidth="1" />
          <line x1="6" y1="6" x2="14" y2="14" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14" y1="6" x2="6" y2="14" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="22" y="8" width="80" height="6" rx="2" fill="rgba(255,255,255,0.30)" />

          <rect y="28" width="120" height="22" rx="4" fill="rgba(15,23,42,0.85)" stroke="rgba(248,113,113,0.45)" strokeWidth="1" />
          <line x1="6" y1="34" x2="14" y2="42" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14" y1="34" x2="6" y2="42" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="22" y="36" width="60" height="6" rx="2" fill="rgba(255,255,255,0.30)" />

          <rect y="56" width="120" height="22" rx="4" fill="rgba(15,23,42,0.85)" stroke="rgba(248,113,113,0.45)" strokeWidth="1" />
          <line x1="6" y1="62" x2="14" y2="70" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14" y1="62" x2="6" y2="70" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="22" y="64" width="70" height="6" rx="2" fill="rgba(255,255,255,0.30)" />
        </g>
      </g>

      {/* Hand silhouette holding the phone */}
      <path d="M 100 320 Q 110 360 200 360 Q 290 360 300 320" fill="none" stroke="rgba(99,102,241,0.65)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Page 5: Targeting/booking flow with rebuilt pages and postcode rings */
function AaronPage5() {
  const id = "aaron5";
  return (
    <svg {...baseProps} role="img" aria-label="A diagram of rebuilt service pages, postcode targeting rings on a map and a booking flow leading to a calendar">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Service page mock (left) */}
      <g transform="translate(40 80)">
        <rect width="120" height="160" rx="10" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.45)" strokeWidth="1.2" />
        <rect width="120" height="22" rx="10" fill="rgba(34,211,238,0.18)" />
        <rect x="10" y="34" width="80" height="8" rx="2" fill="#22d3ee" />
        <rect x="10" y="48" width="100" height="4" rx="2" fill="rgba(255,255,255,0.32)" />
        <rect x="10" y="58" width="86" height="4" rx="2" fill="rgba(255,255,255,0.32)" />
        <rect x="10" y="76" width="100" height="40" rx="4" fill="rgba(34,211,238,0.10)" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
        <rect x="18" y="84" width="60" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
        <rect x="18" y="98" width="44" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
        <rect x="10" y="124" width="60" height="20" rx="10" fill="#22d3ee" />
      </g>

      {/* Map with postcode rings (centre) */}
      <g transform="translate(200 160)">
        <circle r="80" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.4)" strokeWidth="1" strokeDasharray="3 6" />
        <circle r="56" fill="rgba(34,211,238,0.10)" stroke="rgba(34,211,238,0.55)" strokeWidth="1" strokeDasharray="3 6" />
        <circle r="32" fill="rgba(34,211,238,0.18)" stroke="#22d3ee" strokeWidth="1.4" />
        <path d="M 0 -14 C -8 -14, -14 -8, -14 -1 C -14 8, 0 16, 0 16 C 0 16, 14 8, 14 -1 C 14 -8, 8 -14, 0 -14 Z"
          fill="url(#aaron5-accent)" stroke="#22d3ee" strokeWidth="1.2" />
        <circle cx="0" cy="-3" r="4" fill="#0a1531" />
        {/* Postcode tags */}
        <g fill="rgba(15,23,42,0.96)" stroke="rgba(34,211,238,0.55)" strokeWidth="1">
          <rect x="-86" y="-78" width="40" height="16" rx="4" />
          <rect x="60" y="-66" width="40" height="16" rx="4" />
          <rect x="60" y="48" width="40" height="16" rx="4" />
          <rect x="-86" y="56" width="40" height="16" rx="4" />
        </g>
        <g fill="#22d3ee">
          <rect x="-80" y="-72" width="28" height="4" rx="1" />
          <rect x="66" y="-60" width="28" height="4" rx="1" />
          <rect x="66" y="54" width="28" height="4" rx="1" />
          <rect x="-80" y="62" width="28" height="4" rx="1" />
        </g>
      </g>

      {/* Booking calendar (right) */}
      <g transform="translate(280 240)">
        <rect width="100" height="100" rx="10" fill="rgba(15,23,42,0.96)" stroke="rgba(34,211,238,0.55)" strokeWidth="1.2" />
        <rect width="100" height="20" rx="10" fill="rgba(34,211,238,0.18)" />
        <rect x="10" y="6" width="40" height="8" rx="2" fill="#22d3ee" />
        <g fill="rgba(255,255,255,0.45)">
          <rect x="10" y="30" width="14" height="4" rx="1" />
          <rect x="32" y="30" width="14" height="4" rx="1" />
          <rect x="54" y="30" width="14" height="4" rx="1" />
          <rect x="76" y="30" width="14" height="4" rx="1" />
        </g>
        <g fill="rgba(34,211,238,0.55)">
          <rect x="10" y="42" width="14" height="14" rx="2" />
          <rect x="32" y="42" width="14" height="14" rx="2" />
          <rect x="54" y="42" width="14" height="14" rx="2" />
          <rect x="76" y="42" width="14" height="14" rx="2" />
          <rect x="10" y="60" width="14" height="14" rx="2" />
          <rect x="32" y="60" width="14" height="14" rx="2" fill="#22d3ee" />
          <rect x="54" y="60" width="14" height="14" rx="2" />
          <rect x="76" y="60" width="14" height="14" rx="2" />
          <rect x="10" y="78" width="14" height="14" rx="2" />
          <rect x="32" y="78" width="14" height="14" rx="2" />
          <rect x="54" y="78" width="14" height="14" rx="2" />
          <rect x="76" y="78" width="14" height="14" rx="2" />
        </g>
      </g>

      {/* Connector arrows */}
      <g stroke="url(#aaron5-accent)" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="3 5">
        <path d="M 160 160 L 200 160" />
        <path d="M 280 240 L 240 200" />
      </g>
    </svg>
  );
}

/* Page 6: Calendar full, coffee, smiley analytics chart */
function AaronPage6() {
  const id = "aaron6";
  return (
    <svg {...baseProps} role="img" aria-label="A weekly calendar with every column full, a coffee cup beside an analytics chart trending up">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Calendar (left half) */}
      <g transform="translate(30 60)">
        <rect width="200" height="280" rx="14" fill="rgba(15,23,42,0.96)" stroke="rgba(34,211,238,0.55)" strokeWidth="1.4" />
        <rect width="200" height="40" rx="14" fill="rgba(34,211,238,0.18)" />
        <rect width="200" height="20" y="20" fill="rgba(34,211,238,0.18)" />
        <rect x="14" y="14" width="80" height="10" rx="2" fill="#22d3ee" />

        {/* Day headers */}
        <g fill="rgba(255,255,255,0.7)">
          <rect x="14" y="50" width="14" height="6" rx="2" />
          <rect x="50" y="50" width="14" height="6" rx="2" />
          <rect x="86" y="50" width="14" height="6" rx="2" />
          <rect x="122" y="50" width="14" height="6" rx="2" />
          <rect x="158" y="50" width="14" height="6" rx="2" />
        </g>

        {/* Every column filled with cyan slots */}
        {[0, 1, 2, 3, 4].map((col) => (
          <g key={col}>
            {[0, 1, 2, 3, 4, 5, 6].map((row) => (
              <rect
                key={`${col}-${row}`}
                x={12 + col * 36}
                y={68 + row * 28}
                width={32}
                height={22}
                rx={4}
                fill="rgba(34,211,238,0.5)"
              />
            ))}
          </g>
        ))}

        {/* Tick stamp in the corner */}
        <g transform="translate(170 60)">
          <circle r="14" fill="#22c55e" />
          <path d="M -6 0 L -2 4 L 6 -4" fill="none" stroke="#0a1531" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* Coffee cup */}
      <g transform="translate(280 110)">
        <ellipse cx="0" cy="0" rx="36" ry="10" fill="rgba(11,18,38,0.65)" />
        <path d="M -36 -2 L -32 50 Q -32 60 0 60 Q 32 60 32 50 L 36 -2 Z" fill="url(#aaron6-accent)" stroke="#22d3ee" strokeWidth="1.4" />
        <ellipse cx="0" cy="-2" rx="36" ry="9" fill="rgba(11,18,38,0.85)" stroke="#22d3ee" strokeWidth="1" />
        <ellipse cx="0" cy="-2" rx="28" ry="6" fill="rgba(120,80,40,0.85)" />
        <path d="M 36 6 Q 50 6 50 22 Q 50 38 36 38" fill="none" stroke="#22d3ee" strokeWidth="2" />
        <g stroke="rgba(34,211,238,0.55)" strokeWidth="1.4" strokeLinecap="round" fill="none">
          <path d="M -10 -8 Q -7 -18 -10 -28" />
          <path d="M 0 -8 Q 3 -18 0 -28" />
          <path d="M 10 -8 Q 13 -18 10 -28" />
        </g>
      </g>

      {/* Smiley analytics chart */}
      <g transform="translate(260 220)">
        <rect width="120" height="120" rx="10" fill="rgba(15,23,42,0.96)" stroke="rgba(34,211,238,0.55)" strokeWidth="1.2" />
        <line x1="14" y1="100" x2="106" y2="100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <path d="M 14 86 L 34 76 L 54 60 L 74 50 L 94 30" fill="none" stroke="#22d3ee" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="94" cy="30" r="5" fill="#22d3ee" />
        {/* Smile */}
        <g transform="translate(60 90)">
          <circle cx="-8" cy="-2" r="1.4" fill="rgba(255,255,255,0.85)" />
          <circle cx="8" cy="-2" r="1.4" fill="rgba(255,255,255,0.85)" />
          <path d="M -8 4 Q 0 12 8 4" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

/* ============================================================
 *  STORY 3: Priya the new business owner
 * ============================================================ */

/* Page 1: Figure with brand kit box, three blank studio outlines, balance sheet */
function PriyaPage1() {
  const id = "priya1";
  return (
    <svg {...baseProps} role="img" aria-label="A figure holding a brand kit box, three blank studio space outlines and a balance sheet card">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Three blank studio outlines (background) */}
      <g fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.20)" strokeWidth="1" strokeDasharray="4 4">
        <rect x="40" y="60" width="100" height="80" rx="8" />
        <rect x="150" y="80" width="100" height="80" rx="8" />
        <rect x="260" y="60" width="100" height="80" rx="8" />
      </g>
      <g fill="rgba(255,255,255,0.18)">
        <rect x="60" y="116" width="22" height="6" rx="2" />
        <rect x="170" y="136" width="22" height="6" rx="2" />
        <rect x="280" y="116" width="22" height="6" rx="2" />
      </g>

      {/* Figure silhouette */}
      <g transform="translate(170 200)">
        {/* Head */}
        <circle cx="0" cy="-50" r="18" fill="rgba(34,211,238,0.85)" stroke="#22d3ee" strokeWidth="1.4" />
        {/* Body */}
        <path d="M -22 -28 Q -22 -8 -16 12 L 18 12 Q 24 -8 24 -28 Z" fill="url(#priya1-accent)" />
        {/* Arms holding a box */}
        <rect x="-30" y="-8" width="60" height="40" rx="6" fill="rgba(15,23,42,0.95)" stroke="#22d3ee" strokeWidth="1.4" />
        <line x1="0" y1="-8" x2="0" y2="32" stroke="rgba(34,211,238,0.55)" strokeWidth="1" />
        <line x1="-30" y1="12" x2="30" y2="12" stroke="rgba(34,211,238,0.55)" strokeWidth="1" />
        <rect x="-12" y="0" width="24" height="6" rx="2" fill="#22d3ee" />
      </g>

      {/* Balance sheet card */}
      <g transform="translate(60 280)">
        <rect width="120" height="80" rx="10" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.45)" strokeWidth="1" />
        <rect x="12" y="14" width="60" height="8" rx="2" fill="#22d3ee" />
        <rect x="12" y="30" width="96" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
        <rect x="12" y="40" width="80" height="4" rx="2" fill="rgba(255,255,255,0.30)" />
        <rect x="12" y="56" width="60" height="14" rx="3" fill="rgba(34,197,94,0.7)" />
      </g>

      {/* Tiny brand swatch */}
      <g transform="translate(260 290)">
        <rect width="80" height="60" rx="10" fill="rgba(15,23,42,0.95)" stroke="rgba(99,102,241,0.55)" strokeWidth="1" />
        <rect x="10" y="12" width="14" height="14" rx="3" fill="#22d3ee" />
        <rect x="28" y="12" width="14" height="14" rx="3" fill="#6366f1" />
        <rect x="46" y="12" width="14" height="14" rx="3" fill="#0ea5e9" />
        <rect x="10" y="34" width="60" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
        <rect x="10" y="42" width="40" height="4" rx="2" fill="rgba(255,255,255,0.30)" />
      </g>
    </svg>
  );
}

/* Page 2: 14-tab spreadsheet sprawl with three radiating arrows */
function PriyaPage2() {
  const id = "priya2";
  return (
    <svg {...baseProps} role="img" aria-label="A spreadsheet with 14 tabs and three arrows radiating in different directions">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Spreadsheet body */}
      <g transform="translate(40 100)">
        <rect width="320" height="220" rx="10" fill="rgba(15,23,42,0.96)" stroke="rgba(34,211,238,0.45)" strokeWidth="1.2" />
        {/* Toolbar */}
        <rect width="320" height="22" rx="10" fill="rgba(34,211,238,0.18)" />
        <rect width="320" height="12" y="10" fill="rgba(34,211,238,0.18)" />
        <rect x="12" y="6" width="60" height="10" rx="2" fill="#22d3ee" />

        {/* Grid */}
        <g stroke="rgba(255,255,255,0.10)" strokeWidth="0.8">
          <line x1="0" y1="50" x2="320" y2="50" />
          <line x1="0" y1="80" x2="320" y2="80" />
          <line x1="0" y1="110" x2="320" y2="110" />
          <line x1="0" y1="140" x2="320" y2="140" />
          <line x1="0" y1="170" x2="320" y2="170" />
          <line x1="0" y1="200" x2="320" y2="200" />
          <line x1="60" y1="32" x2="60" y2="220" />
          <line x1="120" y1="32" x2="120" y2="220" />
          <line x1="180" y1="32" x2="180" y2="220" />
          <line x1="240" y1="32" x2="240" y2="220" />
          <line x1="300" y1="32" x2="300" y2="220" />
        </g>

        {/* Some cells filled */}
        <g fill="rgba(34,211,238,0.45)">
          <rect x="6" y="36" width="48" height="10" rx="2" />
          <rect x="66" y="36" width="48" height="10" rx="2" />
          <rect x="126" y="36" width="48" height="10" rx="2" />
        </g>
        <g fill="rgba(255,255,255,0.30)">
          <rect x="6" y="66" width="48" height="6" rx="2" />
          <rect x="66" y="66" width="36" height="6" rx="2" />
          <rect x="126" y="66" width="44" height="6" rx="2" />
          <rect x="186" y="66" width="40" height="6" rx="2" />
          <rect x="246" y="66" width="38" height="6" rx="2" />
          <rect x="6" y="96" width="40" height="6" rx="2" />
          <rect x="66" y="96" width="50" height="6" rx="2" />
          <rect x="126" y="96" width="36" height="6" rx="2" />
          <rect x="186" y="96" width="48" height="6" rx="2" />
          <rect x="6" y="126" width="48" height="6" rx="2" />
          <rect x="66" y="126" width="36" height="6" rx="2" />
          <rect x="186" y="126" width="44" height="6" rx="2" />
          <rect x="6" y="156" width="50" height="6" rx="2" />
          <rect x="66" y="156" width="40" height="6" rx="2" />
          <rect x="126" y="156" width="48" height="6" rx="2" />
          <rect x="246" y="156" width="36" height="6" rx="2" />
          <rect x="6" y="186" width="44" height="6" rx="2" />
          <rect x="186" y="186" width="36" height="6" rx="2" />
        </g>

        {/* 14 tabs at the bottom */}
        <g transform="translate(0 220)">
          {Array.from({ length: 14 }).map((_, i) => (
            <g key={i}>
              <rect
                x={i * 22}
                y={0}
                width={20}
                height={14}
                rx={3}
                fill={i === 6 ? "#22d3ee" : "rgba(34,211,238,0.20)"}
                stroke="rgba(34,211,238,0.45)"
                strokeWidth="0.8"
              />
            </g>
          ))}
        </g>
      </g>

      {/* Three radiating arrows */}
      <g stroke="url(#priya2-accent)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 200 100 L 60 30" />
        <path d="M 200 100 L 200 16" />
        <path d="M 200 100 L 340 30" />
      </g>
      <g fill="#22d3ee">
        <polygon points="60,30 76,32 70,42" />
        <polygon points="200,16 210,28 190,28" />
        <polygon points="340,30 326,42 320,32" />
      </g>
    </svg>
  );
}

/* Page 3: Bedside lamp at 3am with clock and laptop glow */
function PriyaPage3() {
  const id = "priya3";
  return (
    <svg {...baseProps} role="img" aria-label="A bedside lamp lit at three in the morning with a clock and a glowing laptop">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />

      {/* Lamp glow */}
      <radialGradient id={`${id}-lamp`} cx="50%" cy="40%" r="55%">
        <stop offset="0%" stopColor="rgba(252,211,77,0.40)" />
        <stop offset="100%" stopColor="rgba(252,211,77,0)" />
      </radialGradient>
      <rect width="400" height="400" fill={`url(#${id}-lamp)`} />

      {/* Bedside table edge */}
      <rect x="0" y="290" width="400" height="110" fill="rgba(20,28,52,0.85)" />
      <line x1="0" y1="290" x2="400" y2="290" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />

      {/* Lamp */}
      <g transform="translate(110 150)">
        <path d="M -34 0 L -20 -60 L 20 -60 L 34 0 Z" fill="url(#priya3-accent)" stroke="#22d3ee" strokeWidth="1.4" />
        <ellipse cx="0" cy="0" rx="34" ry="6" fill="rgba(11,18,38,0.85)" stroke="#22d3ee" strokeWidth="1" />
        <line x1="0" y1="0" x2="0" y2="120" stroke="rgba(255,255,255,0.30)" strokeWidth="2" />
        <ellipse cx="0" cy="120" rx="30" ry="6" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.45)" strokeWidth="1" />
      </g>

      {/* Clock */}
      <g transform="translate(220 220)">
        <rect x="-50" y="-26" width="100" height="52" rx="6" fill="rgba(15,23,42,0.96)" stroke="rgba(248,113,113,0.55)" strokeWidth="1.4" />
        <text x="-38" y="10" fill="#f87171" fontFamily="monospace" fontSize="28" fontWeight="bold">03:14</text>
      </g>

      {/* Laptop in the distance */}
      <g transform="translate(290 260)">
        <rect x="-44" y="0" width="88" height="50" rx="4" fill="#0a1531" stroke="rgba(34,211,238,0.55)" strokeWidth="1" />
        <rect x="-38" y="6" width="76" height="38" fill="rgba(34,211,238,0.18)" />
        <rect x="-36" y="12" width="40" height="4" rx="1" fill="#22d3ee" />
        <rect x="-36" y="20" width="60" height="3" rx="1" fill="rgba(255,255,255,0.45)" />
        <rect x="-36" y="26" width="50" height="3" rx="1" fill="rgba(255,255,255,0.30)" />
        <rect x="-36" y="32" width="40" height="3" rx="1" fill="rgba(255,255,255,0.30)" />
        <rect x="-50" y="50" width="100" height="6" rx="2" fill="#0a1531" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
      </g>

      {/* Mug rim */}
      <g transform="translate(80 320)">
        <ellipse cx="0" cy="0" rx="22" ry="6" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.45)" strokeWidth="1" />
      </g>
    </svg>
  );
}

/* Page 4: Phone showing forwarded text with a fork in the road behind */
function PriyaPage4() {
  const id = "priya4";
  return (
    <svg {...baseProps} role="img" aria-label="A phone showing a forwarded message with a fork in the road in the background">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Fork in the road */}
      <g stroke="rgba(34,211,238,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 8">
        <path d="M 200 360 L 140 220 L 60 60" />
        <path d="M 200 360 L 200 220 L 200 60" />
        <path d="M 200 360 L 260 220 L 340 60" />
      </g>
      {/* Distance markers */}
      <g fill="rgba(34,211,238,0.35)">
        <circle cx="140" cy="220" r="4" />
        <circle cx="200" cy="220" r="4" />
        <circle cx="260" cy="220" r="4" />
      </g>

      {/* Phone (smaller, at top) */}
      <g transform="translate(150 60)">
        <rect width="100" height="160" rx="14" fill="#0a1531" stroke="rgba(34,211,238,0.55)" strokeWidth="1.4" />
        <rect x="6" y="14" width="88" height="140" rx="8" fill="rgba(15,23,42,0.95)" />
        {/* Forwarded chat bubble */}
        <g transform="translate(14 28)">
          <path d="M 0 0 L 72 0 Q 80 0 80 8 L 80 38 Q 80 46 72 46 L 18 46 L 8 56 L 12 46 L 8 46 Q 0 46 0 38 Z"
            fill="rgba(34,211,238,0.18)" stroke="#22d3ee" strokeWidth="1" />
          <rect x="6" y="6" width="50" height="6" rx="2" fill="#22d3ee" />
          <rect x="6" y="18" width="60" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="6" y="26" width="44" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="6" y="34" width="56" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
        </g>
        {/* Reply bubble */}
        <g transform="translate(14 88)">
          <path d="M 80 0 L 8 0 Q 0 0 0 8 L 0 30 Q 0 38 8 38 L 60 38 L 70 48 L 66 38 L 80 38 Q 88 38 88 30 L 88 8 Q 88 0 80 0 Z"
            fill="rgba(99,102,241,0.18)" stroke="rgba(99,102,241,0.55)" strokeWidth="1" />
          <rect x="6" y="8" width="60" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="6" y="18" width="40" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
        </g>
      </g>

      {/* Spark of light at the centre point */}
      <g transform="translate(200 220)">
        <circle r="20" fill="rgba(34,211,238,0.18)" />
        <circle r="10" fill="url(#priya4-accent)" />
        <g stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round">
          <line x1="0" y1="-22" x2="0" y2="-30" />
          <line x1="0" y1="22" x2="0" y2="30" />
          <line x1="-22" y1="0" x2="-30" y2="0" />
          <line x1="22" y1="0" x2="30" y2="0" />
        </g>
      </g>
    </svg>
  );
}

/* Page 5: Site scoring grid with one row lit cyan, plus website mockup */
function PriyaPage5() {
  const id = "priya5";
  return (
    <svg {...baseProps} role="img" aria-label="A scoring grid for three potential sites with one row highlighted in cyan beside a website mockup">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="180" fill={`url(#${id}-glow)`} />

      {/* Scoring grid */}
      <g transform="translate(30 60)">
        <rect width="220" height="220" rx="12" fill="rgba(15,23,42,0.96)" stroke="rgba(34,211,238,0.45)" strokeWidth="1.4" />
        {/* Header */}
        <rect width="220" height="36" rx="12" fill="rgba(34,211,238,0.18)" />
        <rect width="220" height="20" y="16" fill="rgba(34,211,238,0.18)" />
        <rect x="14" y="13" width="80" height="10" rx="2" fill="#22d3ee" />

        {/* Column headers */}
        <g fill="rgba(255,255,255,0.7)">
          <rect x="76" y="44" width="24" height="4" rx="1" />
          <rect x="108" y="44" width="24" height="4" rx="1" />
          <rect x="140" y="44" width="24" height="4" rx="1" />
          <rect x="172" y="44" width="24" height="4" rx="1" />
        </g>

        {/* Row 1 (dim) */}
        <g transform="translate(0 60)">
          <rect x="6" y="0" width="208" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
          <rect x="14" y="14" width="50" height="6" rx="2" fill="rgba(255,255,255,0.45)" />
          <g fill="rgba(99,102,241,0.65)">
            <rect x="76" y="12" width="24" height="12" rx="2" />
            <rect x="108" y="12" width="24" height="12" rx="2" />
            <rect x="140" y="12" width="24" height="12" rx="2" />
            <rect x="172" y="12" width="24" height="12" rx="2" />
          </g>
        </g>

        {/* Row 2 (highlighted) */}
        <g transform="translate(0 100)">
          <rect x="6" y="0" width="208" height="36" rx="6" fill="rgba(34,211,238,0.20)" stroke="#22d3ee" strokeWidth="1.4" />
          <rect x="14" y="14" width="50" height="6" rx="2" fill="#22d3ee" />
          <g fill="#22d3ee">
            <rect x="76" y="12" width="24" height="12" rx="2" />
            <rect x="108" y="12" width="24" height="12" rx="2" />
            <rect x="140" y="12" width="24" height="12" rx="2" />
            <rect x="172" y="12" width="24" height="12" rx="2" />
          </g>
        </g>

        {/* Row 3 (dim) */}
        <g transform="translate(0 140)">
          <rect x="6" y="0" width="208" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
          <rect x="14" y="14" width="50" height="6" rx="2" fill="rgba(255,255,255,0.45)" />
          <g fill="rgba(99,102,241,0.65)">
            <rect x="76" y="12" width="24" height="12" rx="2" />
            <rect x="108" y="12" width="24" height="12" rx="2" />
            <rect x="140" y="12" width="24" height="12" rx="2" />
            <rect x="172" y="12" width="24" height="12" rx="2" />
          </g>
        </g>

        {/* Winner badge */}
        <g transform="translate(186 118)">
          <circle r="14" fill="#22d3ee" />
          <path d="M -6 0 L -2 4 L 6 -4" fill="none" stroke="#0a1531" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* Website mockup */}
      <g transform="translate(270 80)">
        <rect width="100" height="120" rx="8" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.55)" strokeWidth="1.2" />
        <rect width="100" height="20" rx="8" fill="rgba(34,211,238,0.18)" />
        <circle cx="10" cy="10" r="2" fill="#22d3ee" />
        <circle cx="18" cy="10" r="2" fill="#22d3ee" />
        <circle cx="26" cy="10" r="2" fill="#22d3ee" />
        <rect x="8" y="28" width="60" height="8" rx="2" fill="#22d3ee" />
        <rect x="8" y="42" width="84" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
        <rect x="8" y="50" width="70" height="4" rx="2" fill="rgba(255,255,255,0.30)" />
        <rect x="8" y="64" width="48" height="14" rx="7" fill="#22d3ee" />
        <rect x="8" y="86" width="40" height="26" rx="3" fill="rgba(34,211,238,0.18)" />
        <rect x="52" y="86" width="40" height="26" rx="3" fill="rgba(99,102,241,0.32)" />
      </g>

      {/* Instagram mini grid */}
      <g transform="translate(270 220)">
        <rect width="100" height="100" rx="8" fill="rgba(15,23,42,0.95)" stroke="rgba(99,102,241,0.45)" strokeWidth="1" />
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={8 + col * 30}
              y={8 + row * 30}
              width={26}
              height={26}
              rx={3}
              fill={(row + col) % 2 === 0 ? "rgba(34,211,238,0.45)" : "rgba(99,102,241,0.55)"}
            />
          ))
        )}
      </g>
    </svg>
  );
}

/* Page 6: Studio class formation with a "Founding member" badge */
function PriyaPage6() {
  const id = "priya6";
  return (
    <svg {...baseProps} role="img" aria-label="A pilates studio interior with a class of founding members and a Founding member badge">
      {SHARED_DEFS(id)}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="200" cy="200" r="190" fill={`url(#${id}-glow)`} />

      {/* Studio room */}
      <g>
        <rect x="40" y="80" width="320" height="240" rx="14" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.55)" strokeWidth="1.4" />
        {/* Floor */}
        <path d="M 40 250 L 360 250 L 360 320 L 40 320 Z" fill="rgba(34,211,238,0.05)" />
        {/* Mirror wall */}
        <rect x="56" y="98" width="288" height="60" rx="6" fill="rgba(34,211,238,0.10)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
      </g>

      {/* Class formation - rows of mats with figures */}
      <g>
        {[
          [80, 180], [140, 180], [200, 180], [260, 180], [320, 180],
          [80, 220], [140, 220], [200, 220], [260, 220], [320, 220],
          [80, 260], [140, 260], [200, 260], [260, 260], [320, 260],
          [110, 300], [170, 300], [230, 300], [290, 300],
        ].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx} ${cy})`}>
            {/* Mat */}
            <rect x="-20" y="6" width="40" height="8" rx="2" fill="rgba(99,102,241,0.45)" />
            {/* Figure (head + body) */}
            <circle cx="0" cy="-6" r="4" fill="#22d3ee" />
            <rect x="-5" y="-2" width="10" height="10" rx="2" fill="rgba(34,211,238,0.85)" />
          </g>
        ))}

        {/* Two extra figures (Priya at the front, taller) */}
        <g transform="translate(60 140)">
          <circle cx="0" cy="-6" r="6" fill="url(#priya6-accent)" stroke="#22d3ee" strokeWidth="1.2" />
          <rect x="-6" y="0" width="12" height="14" rx="3" fill="url(#priya6-accent)" />
        </g>
      </g>

      {/* "Founding member" badge */}
      <g transform="translate(310 110)">
        <circle r="34" fill="url(#priya6-accent)" stroke="#22d3ee" strokeWidth="1.6" />
        <circle r="26" fill="rgba(15,23,42,0.95)" stroke="rgba(34,211,238,0.55)" strokeWidth="1" />
        <rect x="-22" y="-10" width="44" height="6" rx="2" fill="#22d3ee" />
        <rect x="-18" y="-2" width="36" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
        <text x="0" y="14" fill="#22d3ee" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">22 / 30</text>
      </g>
    </svg>
  );
}

/* ============================================================
 *  Dispatcher
 * ============================================================ */

const STORY_PAGES = {
  maya: [MayaPage1, MayaPage2, MayaPage3, MayaPage4, MayaPage5, MayaPage6],
  aaron: [AaronPage1, AaronPage2, AaronPage3, AaronPage4, AaronPage5, AaronPage6],
  priya: [PriyaPage1, PriyaPage2, PriyaPage3, PriyaPage4, PriyaPage5, PriyaPage6],
} as const;

export const STORY_PAGE_COUNT = 6;

export type StoryIllustrationId = StoryId;

export function StoryIllustration({
  storyId,
  page,
}: {
  storyId: StoryId;
  page: number;
}) {
  const pages = STORY_PAGES[storyId];
  const safeIndex = Math.min(Math.max(page, 0), pages.length - 1);
  const Component = pages[safeIndex];

  return <Component />;
}
