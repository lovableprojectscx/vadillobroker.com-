/* ─────────────────────────────────────────────────────────────────────────────
   Vadillo Broker — Professional SVG Illustrations
   Brand palette (extracted from logo):
     Navy dark  #0D2A48   Navy mid   #1A4A70
     Teal       #1E8BAA   Teal light #40B8CE   Teal glow  #7DD8E8
───────────────────────────────────────────────────────────────────────────── */

const TEAL = "#40B8CE";
const TEAL_MID = "#1E8BAA";
const TEAL_DARK = "#145F78";
const TEAL_GLOW = "#7DD8E8";
const NAVY = "#0D2A48";
const NAVY_MID = "#1A4A70";

/** Hero section: protective shield with 4 service mini-cards */
export function ShieldIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={TEAL} stopOpacity="0.12" />
          <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shieldFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={NAVY_MID} stopOpacity="0.3" />
          <stop offset="100%" stopColor={TEAL_DARK} stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Outer glow */}
      <circle cx="240" cy="245" r="200" fill="url(#shieldGlow)" />

      {/* Decorative rings */}
      <circle cx="240" cy="245" r="192" fill="none" stroke={TEAL} strokeWidth="1" strokeDasharray="5 10" opacity="0.2" />
      <circle cx="240" cy="245" r="218" fill="none" stroke={TEAL_GLOW} strokeWidth="0.5" strokeDasharray="2 14" opacity="0.1" />

      {/* Corner connection lines */}
      <line x1="88" y1="88" x2="148" y2="132" stroke={TEAL} strokeWidth="0.8" strokeDasharray="3 5" opacity="0.35" />
      <line x1="392" y1="88" x2="332" y2="132" stroke={TEAL} strokeWidth="0.8" strokeDasharray="3 5" opacity="0.35" />
      <line x1="88" y1="412" x2="142" y2="372" stroke={TEAL} strokeWidth="0.8" strokeDasharray="3 5" opacity="0.35" />
      <line x1="392" y1="412" x2="338" y2="372" stroke={TEAL} strokeWidth="0.8" strokeDasharray="3 5" opacity="0.35" />

      {/* Main shield */}
      <path
        d="M240 42 L58 112 L58 258 C58 372 240 454 240 454 C240 454 422 372 422 258 L422 112 Z"
        fill="url(#shieldFill)"
        stroke={TEAL}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Inner shield highlight */}
      <path
        d="M240 66 L86 130 L86 258 C86 358 240 432 240 432 C240 432 394 358 394 258 L394 130 Z"
        fill="rgba(255,255,255,0.02)"
        stroke={TEAL_GLOW}
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.4"
      />

      {/* Teal checkmark — matches logo's "V" shape */}
      <path
        d="M168 248 L215 295 L318 192"
        stroke={TEAL}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Checkmark glow */}
      <path
        d="M168 248 L215 295 L318 192"
        stroke={TEAL_GLOW}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />

      {/* SBS Badge */}
      <rect x="170" y="338" width="140" height="42" rx="21" fill={TEAL_MID} />
      <rect x="170" y="338" width="140" height="42" rx="21" fill="none" stroke={TEAL_GLOW} strokeWidth="1" opacity="0.4" />
      <text x="240" y="353" textAnchor="middle" fill="white" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" letterSpacing="1.5">RESPALDO TOTAL</text>
      <text x="240" y="370" textAnchor="middle" fill={TEAL_GLOW} fontSize="9.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" letterSpacing="1">EFICACIA GARANTIZADA</text>

      {/* ═══ TOP LEFT — SOAT / Vehicular ═══ */}
      <rect x="8" y="38" width="84" height="84" rx="18" fill="rgba(30,139,170,0.12)" stroke={TEAL} strokeWidth="1.5" opacity="0.7" />
      <path d="M24 70 L24 80 L60 80 L60 70 L52 58 L32 58 Z" stroke={TEAL_GLOW} strokeWidth="2" strokeLinejoin="round" fill="rgba(64,184,206,0.1)" />
      <path d="M32 58 L36 50 L48 50 L52 58" stroke={TEAL_GLOW} strokeWidth="2" fill="rgba(64,184,206,0.08)" />
      <circle cx="32" cy="80" r="5.5" stroke={TEAL_GLOW} strokeWidth="2" fill="rgba(64,184,206,0.15)" />
      <circle cx="52" cy="80" r="5.5" stroke={TEAL_GLOW} strokeWidth="2" fill="rgba(64,184,206,0.15)" />
      <text x="50" y="112" textAnchor="middle" fill={TEAL_GLOW} fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">AUTO</text>

      {/* ═══ TOP RIGHT — Salud ═══ */}
      <rect x="388" y="38" width="84" height="84" rx="18" fill="rgba(30,139,170,0.12)" stroke={TEAL} strokeWidth="1.5" opacity="0.7" />
      <path d="M430 78 C430 78 408 65 408 53 C408 44 417 40 423 46 C426 49 430 54 430 54 C430 54 434 49 437 46 C443 40 452 44 452 53 C452 65 430 78 430 78 Z" stroke={TEAL_GLOW} strokeWidth="2" fill="rgba(64,184,206,0.1)" />
      <path d="M415 65 L422 65 L425 58 L428 72 L431 60 L434 65 L445 65" stroke={TEAL_GLOW} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="430" y="112" textAnchor="middle" fill={TEAL_GLOW} fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">SALUD</text>

      {/* ═══ BOTTOM LEFT — Vida ═══ */}
      <rect x="8" y="378" width="84" height="84" rx="18" fill="rgba(30,139,170,0.12)" stroke={TEAL} strokeWidth="1.5" opacity="0.7" />
      <path d="M50 408 C33 408 26 420 26 426 L74 426 C74 420 67 408 50 408 Z" stroke={TEAL_GLOW} strokeWidth="2" fill="rgba(64,184,206,0.1)" />
      <line x1="50" y1="408" x2="50" y2="402" stroke={TEAL_GLOW} strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="426" x2="50" y2="440" stroke={TEAL_GLOW} strokeWidth="2" strokeLinecap="round" />
      <path d="M46 440 Q50 446 54 440" stroke={TEAL_GLOW} strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="50" y="472" textAnchor="middle" fill={TEAL_GLOW} fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">VIDA</text>

      {/* ═══ BOTTOM RIGHT — Hogar ═══ */}
      <rect x="388" y="378" width="84" height="84" rx="18" fill="rgba(30,139,170,0.12)" stroke={TEAL} strokeWidth="1.5" opacity="0.7" />
      <path d="M407 430 L430 408 L453 430" stroke={TEAL_GLOW} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M413 430 L413 448 L447 448 L447 430" stroke={TEAL_GLOW} strokeWidth="2" strokeLinejoin="round" fill="rgba(64,184,206,0.08)" />
      <rect x="424" y="434" width="12" height="14" rx="2" stroke={TEAL_GLOW} strokeWidth="1.5" fill="rgba(64,184,206,0.15)" />
      <rect x="415" y="433" width="7" height="7" rx="1" stroke={TEAL_GLOW} strokeWidth="1.5" fill="rgba(64,184,206,0.1)" />
      <rect x="437" y="408" width="6" height="12" stroke={TEAL_GLOW} strokeWidth="1.5" fill="none" />
      <text x="430" y="472" textAnchor="middle" fill={TEAL_GLOW} fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">HOGAR</text>

      {/* Accent dots */}
      <circle cx="158" cy="148" r="3.5" fill={TEAL} opacity="0.5" />
      <circle cx="322" cy="148" r="3.5" fill={TEAL} opacity="0.5" />
      <circle cx="148" cy="362" r="3.5" fill={TEAL} opacity="0.5" />
      <circle cx="332" cy="362" r="3.5" fill={TEAL} opacity="0.5" />
      <circle cx="240" cy="80" r="2.5" fill={TEAL_GLOW} opacity="0.3" />
      <circle cx="182" cy="58" r="1.8" fill={TEAL_GLOW} opacity="0.2" />
      <circle cx="298" cy="58" r="1.8" fill={TEAL_GLOW} opacity="0.2" />
    </svg>
  );
}

/** Desgravamen: house with upward savings arrow */
export function SavingsIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="savGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={TEAL} stopOpacity="0.08" />
          <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="220" cy="195" r="158" fill="url(#savGlow)" />
      <circle cx="220" cy="195" r="122" fill="rgba(30,139,170,0.04)" />

      {/* Ground */}
      <line x1="50" y1="322" x2="390" y2="322" stroke={TEAL} strokeWidth="1.5" opacity="0.15" />

      {/* ── House ── */}
      <path d="M128 220 L220 138 L312 220" stroke={TEAL_GLOW} strokeWidth="3.5" strokeLinejoin="round" fill="none" opacity="0.85" />
      <rect x="148" y="220" width="144" height="102" rx="3" stroke={TEAL_GLOW} strokeWidth="2.5" fill="rgba(64,184,206,0.07)" opacity="0.85" />
      {/* Door */}
      <rect x="196" y="262" width="48" height="60" rx="5" stroke={TEAL_GLOW} strokeWidth="2" fill="rgba(30,139,170,0.2)" opacity="0.9" />
      <circle cx="238" cy="292" r="3.5" fill={TEAL} />
      {/* Left window */}
      <rect x="160" y="238" width="34" height="30" rx="4" stroke={TEAL_GLOW} strokeWidth="1.8" fill="rgba(30,139,170,0.2)" opacity="0.85" />
      <line x1="177" y1="238" x2="177" y2="268" stroke={TEAL_GLOW} strokeWidth="1" opacity="0.4" />
      <line x1="160" y1="253" x2="194" y2="253" stroke={TEAL_GLOW} strokeWidth="1" opacity="0.4" />
      {/* Right window */}
      <rect x="246" y="238" width="34" height="30" rx="4" stroke={TEAL_GLOW} strokeWidth="1.8" fill="rgba(30,139,170,0.2)" opacity="0.85" />
      <line x1="263" y1="238" x2="263" y2="268" stroke={TEAL_GLOW} strokeWidth="1" opacity="0.4" />
      <line x1="246" y1="253" x2="280" y2="253" stroke={TEAL_GLOW} strokeWidth="1" opacity="0.4" />
      {/* Chimney */}
      <rect x="262" y="148" width="14" height="30" rx="2" stroke={TEAL_GLOW} strokeWidth="1.8" fill="rgba(64,184,206,0.08)" opacity="0.6" />
      <circle cx="269" cy="140" r="5" fill="rgba(125,216,232,0.15)" />
      <circle cx="274" cy="133" r="4" fill="rgba(125,216,232,0.1)" />

      {/* ── Upward arrow ── */}
      <path d="M345 305 L345 128" stroke={TEAL} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M332 153 L345 128 L358 153" stroke={TEAL} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Arrow dots */}
      {[305, 255, 205, 155].map((y, i) => (
        <circle key={y} cx="345" cy={y} r="4.5" fill={TEAL} opacity={0.5 + i * 0.15} />
      ))}

      {/* ── Savings badge ── */}
      <rect x="298" y="78" width="112" height="52" rx="26" fill={TEAL_MID} />
      <rect x="298" y="78" width="112" height="52" rx="26" fill="none" stroke={TEAL_GLOW} strokeWidth="1" opacity="0.5" />
      <text x="354" y="102" textAnchor="middle" fill="white" fontSize="12" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" letterSpacing="0.5">MÁXIMA</text>
      <text x="354" y="118" textAnchor="middle" fill={TEAL_GLOW} fontSize="12" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900">PROTECCIÓN</text>

      {/* ── Coin stack ── */}
      <ellipse cx="86" cy="310" rx="34" ry="9" fill={TEAL_DARK} />
      <rect x="52" y="288" width="68" height="22" fill={TEAL_DARK} />
      <ellipse cx="86" cy="288" rx="34" ry="9" fill={TEAL_MID} />
      <text x="86" y="293" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif" fontWeight="800">S/.</text>

      <ellipse cx="86" cy="278" rx="30" ry="8" fill={TEAL_DARK} />
      <rect x="56" y="258" width="60" height="20" fill={TEAL_DARK} />
      <ellipse cx="86" cy="258" rx="30" ry="8" fill={TEAL} />
      <text x="86" y="263" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif" fontWeight="800">S/.</text>

      <ellipse cx="86" cy="248" rx="25" ry="7" fill={TEAL_MID} />
      <rect x="61" y="232" width="50" height="16" fill={TEAL_MID} />
      <ellipse cx="86" cy="232" rx="25" ry="7" fill={TEAL_GLOW} />
      <text x="86" y="237" textAnchor="middle" fill={NAVY} fontSize="7" fontFamily="sans-serif" fontWeight="800">S/.</text>

      {/* Decorative dots */}
      <circle cx="186" cy="108" r="4.5" fill={TEAL_GLOW} opacity="0.2" />
      <circle cx="360" cy="195" r="3" fill={TEAL_GLOW} opacity="0.2" />
      <circle cx="72" cy="162" r="3.5" fill={TEAL} opacity="0.3" />
    </svg>
  );
}

/** Inmobiliaria: modern building skyline with key icon */
export function BuildingIllustration({ className }: { className?: string }) {
  const winRows4 = [0, 1, 2, 3];
  const winRows6 = [0, 1, 2, 3, 4, 5];
  const winCols2 = [0, 1];
  const winCols3 = [0, 1, 2];

  return (
    <svg
      viewBox="0 0 440 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="bldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={TEAL} stopOpacity="0.07" />
          <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="220" cy="200" r="155" fill="url(#bldGlow)" />

      {/* Ground */}
      <line x1="50" y1="325" x2="390" y2="325" stroke={TEAL} strokeWidth="1.5" opacity="0.15" />

      {/* Left building */}
      <rect x="72" y="145" width="82" height="180" rx="4" fill="rgba(30,139,170,0.08)" stroke={TEAL} strokeWidth="2" opacity="0.6" />
      {winRows4.map((row) =>
        winCols2.map((col) => (
          <rect key={`l-${row}-${col}`}
            x={86 + col * 32} y={162 + row * 38}
            width="20" height="24" rx="3"
            fill={row === 3 && col === 0 ? `${TEAL_MID}80` : `${TEAL}25`}
          />
        ))
      )}
      <rect x="82" y="136" width="62" height="12" rx="3" fill="rgba(64,184,206,0.2)" />
      <rect x="100" y="126" width="26" height="12" rx="2" fill="rgba(64,184,206,0.15)" />

      {/* Center building (tallest) */}
      <rect x="170" y="75" width="100" height="250" rx="5" fill="rgba(30,139,170,0.1)" stroke={TEAL_GLOW} strokeWidth="2.5" opacity="0.7" />
      {winRows6.map((row) =>
        winCols3.map((col) => (
          <rect key={`c-${row}-${col}`}
            x={182 + col * 30} y={90 + row * 35}
            width="20" height="22" rx="3"
            fill={
              (row === 5 && col === 1) || (row === 2 && col === 2)
                ? `${TEAL_MID}90`
                : `${TEAL}30`
            }
          />
        ))
      )}
      <rect x="178" y="64" width="84" height="14" rx="4" fill="rgba(64,184,206,0.2)" />
      <rect x="198" y="52" width="44" height="14" rx="3" fill="rgba(64,184,206,0.15)" />
      <rect x="212" y="42" width="16" height="12" rx="2" fill="rgba(64,184,206,0.12)" />
      <line x1="220" y1="42" x2="220" y2="28" stroke={TEAL} strokeWidth="1.5" opacity="0.5" />
      <circle cx="220" cy="26" r="3" fill={TEAL} opacity="0.7" />

      {/* Right building */}
      <rect x="288" y="168" width="78" height="157" rx="4" fill="rgba(30,139,170,0.07)" stroke={TEAL} strokeWidth="2" opacity="0.55" />
      {winRows4.map((row) =>
        winCols2.map((col) => (
          <rect key={`r-${row}-${col}`}
            x={300 + col * 30} y={184 + row * 34}
            width="18" height="20" rx="3"
            fill={row === 0 && col === 1 ? `${TEAL_MID}80` : `${TEAL}22`}
          />
        ))
      )}
      <rect x="296" y="158" width="62" height="12" rx="3" fill="rgba(64,184,206,0.15)" />

      {/* Key badge */}
      <circle cx="368" cy="102" r="40" fill={TEAL_MID} />
      <circle cx="368" cy="102" r="40" fill="none" stroke={TEAL_GLOW} strokeWidth="1.5" opacity="0.5" />
      <circle cx="360" cy="94" r="13" fill="none" stroke="white" strokeWidth="3" />
      <circle cx="360" cy="94" r="6" fill={TEAL_MID} />
      <line x1="373" y1="104" x2="393" y2="124" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="388" y1="119" x2="393" y2="124" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="382" y1="125" x2="387" y2="120" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

      {/* Star rating */}
      {[0, 1, 2, 3, 4].map((i) => (
        <text key={i} x={138 + i * 20} y="352" fill={TEAL} fontSize="15" textAnchor="middle" opacity="0.8">★</text>
      ))}

      {/* Badge */}
      <rect x="52" y="90" width="104" height="42" rx="21" fill={TEAL_MID} />
      <rect x="52" y="90" width="104" height="42" rx="21" fill="none" stroke={TEAL_GLOW} strokeWidth="1" opacity="0.4" />
      <text x="104" y="106" textAnchor="middle" fill="white" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" letterSpacing="0.5">ASESORÍA</text>
      <text x="104" y="122" textAnchor="middle" fill={TEAL_GLOW} fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" letterSpacing="0.5">INMOBILIARIA PRO</text>

      {/* Decorative dots */}
      <circle cx="140" cy="56" r="4" fill={TEAL_GLOW} opacity="0.2" />
      <circle cx="80" cy="338" r="3.5" fill={TEAL} opacity="0.3" />
      <circle cx="360" cy="338" r="3.5" fill={TEAL} opacity="0.3" />
    </svg>
  );
}

/** About: broker professional profile card */
export function BrokerProfile({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="cardBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={NAVY} />
          <stop offset="60%" stopColor={NAVY_MID} />
          <stop offset="100%" stopColor={TEAL_DARK} />
        </linearGradient>
        <linearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={TEAL_MID} />
          <stop offset="100%" stopColor={TEAL_DARK} />
        </linearGradient>
        <pattern id="cardDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={`${TEAL_GLOW}15`} />
        </pattern>
      </defs>

      {/* Card */}
      <rect x="20" y="20" width="340" height="380" rx="24" fill="url(#cardBg)" />
      <rect x="20" y="20" width="340" height="380" rx="24" fill="url(#cardDots)" />
      <rect x="20" y="20" width="340" height="380" rx="24" fill="none" stroke={TEAL} strokeWidth="1.5" opacity="0.4" />

      {/* Avatar */}
      <circle cx="190" cy="110" r="58" fill="url(#avatarBg)" />
      <circle cx="190" cy="110" r="58" fill="none" stroke={TEAL_GLOW} strokeWidth="2.5" opacity="0.5" />
      <circle cx="190" cy="110" r="48" fill="none" stroke={TEAL_GLOW} strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />

      {/* Initials */}
      <text x="190" y="128" textAnchor="middle" fill="white" fontSize="38" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" letterSpacing="-1">FV</text>

      {/* Name + title */}
      <text x="190" y="196" textAnchor="middle" fill="white" fontSize="20" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800">Fabio Vadillo</text>
      <text x="190" y="216" textAnchor="middle" fill={TEAL_GLOW} fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" letterSpacing="1.5">SEGUROS E INMOBILIARIA</text>

      {/* SBS Badge */}
      <rect x="128" y="226" width="124" height="28" rx="14" fill={TEAL_MID} />
      <rect x="128" y="226" width="124" height="28" rx="14" fill="none" stroke={TEAL_GLOW} strokeWidth="1" opacity="0.5" />
      <text x="190" y="245" textAnchor="middle" fill="white" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" letterSpacing="1">COMPROMISO PERSONAL</text>

      {/* Divider */}
      <line x1="60" y1="272" x2="320" y2="272" stroke={TEAL} strokeWidth="1" opacity="0.2" />

      {/* Stats */}
      <text x="100" y="304" textAnchor="middle" fill={TEAL_GLOW} fontSize="28" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900">20+</text>
      <text x="100" y="320" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">AÑOS EXP.</text>
      <line x1="190" y1="283" x2="190" y2="330" stroke={TEAL} strokeWidth="1" opacity="0.2" />
      <text x="280" y="304" textAnchor="middle" fill={TEAL_GLOW} fontSize="28" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900">200+</text>
      <text x="280" y="320" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">FAMILIAS</text>

      {/* Companies */}
      <line x1="60" y1="340" x2="320" y2="340" stroke={TEAL} strokeWidth="1" opacity="0.15" />
      {["RÍMAC", "PACÍFICO", "MAPFRE"].map((name, i) => (
        <text key={name} x={88 + i * 102} y="368" textAnchor="middle" fill={`${TEAL_GLOW}60`}
          fontSize="9.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" letterSpacing="0.5">
          {name}
        </text>
      ))}

      {/* 24/7 */}
      <text x="190" y="396" textAnchor="middle" fill={`${TEAL}80`} fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" letterSpacing="1">
        ATENCIÓN 24 / 7 VÍA WHATSAPP
      </text>
    </svg>
  );
}
