export type ServiceKind = "web" | "shop" | "automation" | "ai";

export default function ServiceSymbol({ kind }: { kind: ServiceKind }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === "web" && (
        <>
          <rect x="9" y="14" width="62" height="48" rx="2" />
          <path d="M9 27h62M20 21h1m7 0h1M21 39h22M21 48h14M48 38l-3 28 9-7 10 7 4-6-11-7 11-5z" />
        </>
      )}
      {kind === "shop" && (
        <>
          <path d="M17 26h46l5 43H12l5-43zM28 30V20a12 12 0 0124 0v10M30 44l10 9 12-15" />
          <path d="M8 14h9M12.5 9.5v9M65 11h9M69.5 6.5v9" />
        </>
      )}
      {kind === "automation" && (
        <>
          <rect x="5" y="28" width="23" height="23" rx="3" />
          <rect x="52" y="6" width="22" height="22" rx="3" />
          <rect x="52" y="52" width="22" height="22" rx="3" />
          <path d="M28 40h10V17h14M38 40v23h14M46 11l6 6-6 6M46 57l6 6-6 6" />
        </>
      )}
      {kind === "ai" && (
        <>
          <path d="M26 19L7 40l19 21M54 19l19 21-19 21M46 9L34 71" />
          <path d="M17 40h5M58 40h5" />
        </>
      )}
    </svg>
  );
}
