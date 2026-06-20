export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 200 80"
        aria-hidden="true"
        className="h-8 w-auto"
      >
        {/* V symbol - left stroke */}
        <path
          d="M 58 12 L 78 12 L 58 62 L 38 62 Z"
          fill="currentColor"
          className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
        />
        {/* V symbol - right stroke */}
        <path
          d="M 82 12 L 102 12 L 82 62 L 62 62 Z"
          fill="currentColor"
          className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
        />
        {/* TM superscript */}
        <text
          x="105"
          y="18"
          fontSize="8"
          fontFamily="sans-serif"
          fill="currentColor"
          className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
        >
          TM
        </text>
        {/* vonerio wordmark */}
        <text
          x="80"
          y="74"
          fontSize="28"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="500"
          letterSpacing="0.02em"
          fill="currentColor"
          textAnchor="middle"
          className="text-foreground"
        >
          vonerio
        </text>
      </svg>
    </span>
  );
}
