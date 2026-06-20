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
          d="M 72 8 L 98 8 L 99 55 L 92 55 Z"
          fill="currentColor"
          className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
        />
        {/* V symbol - right stroke */}
        <path
          d="M 102 8 L 128 8 L 108 55 L 101 55 Z"
          fill="currentColor"
          className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
        />
        {/* TM superscript */}
        <text
          x="130"
          y="14"
          fontSize="8"
          fontFamily="sans-serif"
          fill="currentColor"
          className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
        >
          TM
        </text>
        {/* vonerio wordmark */}
        <text
          x="100"
          y="72"
          fontSize="24"
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
