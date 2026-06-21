export function Logo({ withWordmark = true, className = "" }: { withWordmark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 512 512"
        aria-hidden="true"
        className="h-8 w-8 rounded-[18%]"
      >
        <defs>
          <linearGradient id="vbg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8B42C7" />
            <stop offset="1" stopColor="#6921A9" />
          </linearGradient>
        </defs>
        <rect width="512" height="512" fill="url(#vbg)" />
        <g transform="translate(95,130) scale(2.117)" fill="#FFFFFF">
          <path d="M0,4 L27,4 L69,76 L69,115 L64,115 Z" />
          <path d="M152,4 L125,4 L83,76 L83,115 L88,115 Z" />
        </g>
      </svg>
      {withWordmark && (
        <span className="font-display text-[1.35rem] font-semibold tracking-[-0.03em]" style={{ fontFamily: "var(--font-display)", color: "currentColor" }}>
          vonerio
        </span>
      )}
    </span>
  );
}
