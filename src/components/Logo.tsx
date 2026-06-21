export function Logo({ withWordmark = true, className = "" }: { withWordmark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 180 120"
        aria-hidden="true"
        className="h-8 w-auto"
        shapeRendering="crispEdges"
      >
        <rect x="0" y="0" width="180" height="120" fill="#7B2FB8" />
        {/* Left blade */}
        <path d="M0,4 L27,4 L69,76 L69,115 L64,115 Z" fill="#FFFFFF" />
        {/* Right blade (mirror across x=76) */}
        <path d="M152,4 L125,4 L83,76 L83,115 L88,115 Z" fill="#FFFFFF" />
        {/* Trademark */}
        <text x="160" y="18" fontFamily="Arial, Helvetica, sans-serif" fontSize="14" fontWeight="600" fill="#FFFFFF">™</text>
      </svg>
      {withWordmark && (
        <span className="font-display text-[1.35rem] font-semibold tracking-[-0.03em]" style={{ fontFamily: "var(--font-display)", color: "currentColor" }}>
          vonerio
        </span>
      )}
    </span>
  );
}
