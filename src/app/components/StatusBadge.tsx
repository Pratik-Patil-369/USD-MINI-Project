type BadgeVariant = 'HIGH' | 'MED' | 'LOW' | 'OVERDUE' | 'IN_PROGRESS' | 'STAGED' | 'BLOCKED' | 'DONE' | 'CRITICAL_PATH' | 'ON_TRACK' | 'DUE_SOON';

interface StatusBadgeProps {
  variant: BadgeVariant;
  withIcon?: boolean;
  size?: 'sm' | 'md';
}

export function StatusBadge({ variant, withIcon = false, size = 'sm' }: StatusBadgeProps) {
  const getStyles = () => {
    const fontSize = size === 'sm' ? 'text-[8px]' : 'text-[10px]';
    const padding = size === 'sm' ? 'px-1.5 py-0.5' : 'px-2 py-1';

    switch (variant) {
      case 'HIGH':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#9f403d]/10 text-[#9f403d] uppercase tracking-wide`,
          icon: withIcon ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          ) : null,
          label: 'HIGH'
        };
      case 'MED':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#acb3b8]/10 text-[#596065] dark:text-[#9ca3af] uppercase tracking-wide`,
          icon: null,
          label: 'MED'
        };
      case 'LOW':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#acb3b8]/10 text-[#596065] dark:text-[#9ca3af] uppercase tracking-wide`,
          icon: null,
          label: 'LOW'
        };
      case 'OVERDUE':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#9f403d]/10 text-[#9f403d] uppercase tracking-wide`,
          icon: withIcon ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          ) : null,
          label: 'OVERDUE'
        };
      case 'IN_PROGRESS':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#0055d7]/10 text-[#0055d7] uppercase tracking-wide`,
          icon: withIcon ? (
            <div className="w-1.5 h-1.5 bg-[#0055d7] rounded-full animate-pulse"></div>
          ) : null,
          label: 'IN PROGRESS'
        };
      case 'STAGED':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#835600]/10 text-[#835600] uppercase tracking-wide`,
          icon: null,
          label: 'STAGED'
        };
      case 'BLOCKED':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#9f403d]/10 text-[#9f403d] uppercase tracking-wide`,
          icon: withIcon ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
            </svg>
          ) : null,
          label: 'BLOCKED'
        };
      case 'DONE':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#0055d7]/10 text-[#0055d7] uppercase tracking-wide`,
          icon: withIcon ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          ) : null,
          label: 'DONE'
        };
      case 'CRITICAL_PATH':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#9f403d]/10 text-[#9f403d] uppercase tracking-wide`,
          icon: null,
          label: 'CRITICAL PATH'
        };
      case 'ON_TRACK':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#0055d7]/10 text-[#0055d7] uppercase tracking-wide`,
          icon: null,
          label: 'ON TRACK'
        };
      case 'DUE_SOON':
        return {
          className: `${fontSize} ${padding} font-black rounded bg-[#835600]/10 text-[#835600] uppercase tracking-wide`,
          icon: withIcon ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          ) : null,
          label: 'DUE SOON'
        };
    }
  };

  const { className, icon, label } = getStyles();

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      {icon}
      {label}
    </span>
  );
}
