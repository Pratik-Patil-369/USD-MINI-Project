interface MetricCardProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  variant?: 'default' | 'critical' | 'warning' | 'success';
  progress?: number;
  onClick?: () => void;
}

export function MetricCard({
  label,
  value,
  icon,
  trend,
  variant = 'default',
  progress,
  onClick
}: MetricCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'critical':
        return 'border-[#9f403d]/20 bg-[#9f403d]/[0.02] hover:border-[#9f403d]/40';
      case 'warning':
        return 'border-[#835600]/20 bg-[#835600]/[0.02] hover:border-[#835600]/40';
      case 'success':
        return 'border-[#0055d7]/20 bg-[#0055d7]/[0.02] hover:border-[#0055d7]/40';
      default:
        return 'border-[#acb3b8]/10 dark:border-white/5 hover:border-[#acb3b8]/30';
    }
  };

  const getValueColor = () => {
    switch (variant) {
      case 'critical':
        return 'text-[#9f403d]';
      case 'warning':
        return 'text-[#835600]';
      case 'success':
        return 'text-[#0055d7]';
      default:
        return 'text-[#2d3338] dark:text-[#f3f4f6]';
    }
  };

  return (
    <div
      className={`p-5 bg-white dark:bg-[#151821] rounded-xl border shadow-sm transition-all ${getVariantStyles()} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">
          {label}
        </span>
        {icon}
      </div>

      <div className="flex items-end gap-2 mb-2">
        <span className={`text-3xl font-black ${getValueColor()} leading-none`}>
          {value}
        </span>
        {trend && (
          <div className="mb-1">
            {trend === 'up' && (
              <svg className="w-5 h-5 text-[#0055d7]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            )}
            {trend === 'down' && (
              <svg className="w-5 h-5 text-[#9f403d]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>
              </svg>
            )}
          </div>
        )}
      </div>

      {progress !== undefined && (
        <div className="w-full bg-[#e4e9ee] dark:bg-[#262b3a] h-1.5 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all ${
              variant === 'critical'
                ? 'bg-[#9f403d]'
                : variant === 'warning'
                ? 'bg-[#835600]'
                : 'bg-[#0055d7]'
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
