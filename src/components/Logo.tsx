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
          d="M 70 8 L 98 8 L 99 52 L 82 52 Z"
          fill="currentColor"
          className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
        />
        {/* V symbol - right stroke */}
        <path
          d="M 103 8 L 130 8 L 118 52 L 101 52 Z"
          fill="currentColor"
          className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
        />
        {/* TM superscript */}
        <text
          x="132"
          y="14"
          fontSize="7"
          fontFamily="sans-serif"
          fill="currentColor"
          className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
        >
          TM
        </text>
        {/* vonerio wordmark */}
        <text
          x="100"
          y="70"
          fontSize="22"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="500"
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
