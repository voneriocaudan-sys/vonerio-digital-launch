export function Logo({ withWordmark = true, className = "" }: { withWordmark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 170 100"
        aria-hidden="true"
        className="h-7 w-auto"
        shapeRendering="crispEdges"
      >
        {/* Purple background, sharp corners */}
        <rect x="0" y="0" width="137" height="100" fill="var(--color-violet, #7B2FB8)" />
        {/* Left blade */}
        <polygon points="6,6 31,6 68.35,90 68.35,96 62.35,96" fill="#FFFFFF" />
        {/* Right blade (mirror) */}
        <polygon points="131,6 106,6 68.65,90 68.65,96 74.65,96" fill="#FFFFFF" />
        {/* ™ mark */}
        <text
          x="144"
          y="16"
          fill="#FFFFFF"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
        >TM</text>
      </svg>
      {withWordmark && (
        <span className="font-display text-[1.35rem] font-semibold tracking-[-0.03em]" style={{ fontFamily: "var(--font-display)", color: "currentColor" }}>
          vonerio
        </span>
      )}
    </span>
  );
}
