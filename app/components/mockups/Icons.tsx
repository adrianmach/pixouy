type IconProps = {
  size?: number;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconLock({ size = 10 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.6}>
      <rect x="4.5" y="11" width="15" height="10" rx="2.2" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </svg>
  );
}

export function IconSearch({ size = 11 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.6}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.3-4.3" />
    </svg>
  );
}

export function IconCart({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2}>
      <circle cx="9" cy="20.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20.5" r="1.3" fill="currentColor" stroke="none" />
      <path d="M2.5 3h2.2l2.55 12.2a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 1.97-1.68L21 8H6" />
    </svg>
  );
}

export function IconTruck({ size = 11 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2}>
      <rect x="1.5" y="7" width="12" height="9.5" rx="1.3" />
      <path d="M13.5 10.5h4l3.5 3.5v2.5h-7.5z" />
      <circle cx="6.3" cy="18.7" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="17" cy="18.7" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconStar({ size = 9, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.8}
      strokeLinejoin="round"
    >
      <path d="M12 2.8l2.9 6.06 6.53.83-4.8 4.55 1.27 6.52L12 17.6l-5.9 3.16 1.27-6.52-4.8-4.55 6.53-.83z" />
    </svg>
  );
}

export function IconCard({ size = 13 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.1}>
      <rect x="2" y="5.5" width="20" height="13" rx="2.4" />
      <path d="M2 10.2h20" />
      <path d="M6 14.5h4" />
    </svg>
  );
}

export function IconChat({ size = 13 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2.5c-5.25 0-9.5 3.9-9.5 8.7 0 2.55 1.2 4.84 3.13 6.44L4.6 21.5l4.3-1.55c1 .28 2.05.43 3.1.43 5.25 0 9.5-3.9 9.5-8.7s-4.25-8.68-9.5-8.68z" />
    </svg>
  );
}

export function IconBag({ size = 13 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.1}>
      <path d="M6.2 2.5 3.5 7.3v12.2a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7.3l-2.7-4.8" />
      <path d="M3.5 7.3h17" />
      <path d="M15.8 11a3.8 3.8 0 0 1-7.6 0" />
    </svg>
  );
}

export function IconBolt({ size = 11 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M13.2 2 3.6 14.2h6.6l-1.1 7.8L21 9.4h-6.9l1.1-7.4z" />
    </svg>
  );
}

export function IconImagePlaceholder({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={1.5}>
      <rect x="2.5" y="3.5" width="19" height="17" rx="2.2" />
      <circle cx="8.3" cy="9" r="1.6" fill="currentColor" stroke="none" />
      <path d="M21 15.5l-5.6-5.4-6 6-2-1.9-4.9 4.7" />
    </svg>
  );
}

export function IconArrowRight({ size = 9 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.8}>
      <path d="M4 12h16M13 5.5l6.5 6.5-6.5 6.5" />
    </svg>
  );
}
