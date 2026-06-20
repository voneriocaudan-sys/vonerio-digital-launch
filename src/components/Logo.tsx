export function Logo({ withWordmark = true, className = "" }: { withWordmark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="h-7 w-7 text-[var(--color-violet)] dark:text-[var(--color-magenta)]"
      >
        <path d="M18 20 L37 20 L60 70 L83 20 L102 20 L60 102 Z" fill="currentColor" />
      </svg>
      {withWordmark && (
        <span className="font-display text-[1.35rem] font-semibold tracking-[-0.03em] text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          vonerio
        </span>
      )}
    </span>
  );
}
