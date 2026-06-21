export function Logo({ withWordmark = true, className = "" }: { withWordmark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <rect x="0" y="0" width="120" height="120" rx="22" fill="var(--color-violet, #7B3FE4)" />
        {/* Left half of V */}
        <path d="M22 22 L42 22 L60 86 L60 104 L54 104 Z" fill="#ffffff" />
        {/* Right half of V (thin gap at bottom) */}
        <path d="M98 22 L78 22 L60 86 L60 104 L66 104 Z" fill="#ffffff" />
        {/* Center slit to create the thin separation at apex */}
        <rect x="58.5" y="84" width="3" height="20" fill="var(--color-violet, #7B3FE4)" />
      </svg>
      {withWordmark && (
        <span className="font-display text-[1.35rem] font-semibold tracking-[-0.03em] text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          vonerio
        </span>
      )}
    </span>
  );
}
