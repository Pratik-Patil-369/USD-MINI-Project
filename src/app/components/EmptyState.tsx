interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  variant?: 'default' | 'success';
}

export function EmptyState({ icon, title, description, variant = 'default' }: EmptyStateProps) {
  const bgColor = variant === 'success' ? 'bg-[#0055d7]/[0.03]' : 'bg-[#f2f4f6] dark:bg-[#1e2230]';
  const borderColor = variant === 'success' ? 'border-[#0055d7]/10' : 'border-[#acb3b8]/10 dark:border-white/5';
  const iconColor = variant === 'success' ? 'text-[#0055d7]' : 'text-[#596065] dark:text-[#9ca3af]';
  const textColor = variant === 'success' ? 'text-[#0055d7]' : 'text-[#596065] dark:text-[#9ca3af]';

  const defaultIcon = (
    <svg className={`w-12 h-12 ${iconColor} opacity-40`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );

  return (
    <div className={`w-full p-8 ${bgColor} border ${borderColor} rounded-lg flex flex-col items-center justify-center text-center`}>
      <div className="mb-3">
        {icon || defaultIcon}
      </div>
      <h4 className={`text-sm font-bold ${textColor} mb-1`}>{title}</h4>
      {description && (
        <p className="text-xs text-[#596065] dark:text-[#9ca3af] opacity-60 max-w-sm">{description}</p>
      )}
    </div>
  );
}
