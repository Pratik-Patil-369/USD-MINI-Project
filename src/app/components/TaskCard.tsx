import { StatusBadge } from './StatusBadge';

interface TaskCardProps {
  title: string;
  priority: 'HIGH' | 'MED' | 'LOW';
  deadline?: string;
  status?: string;
  isOverdue?: boolean;
  isInProgress?: boolean;
  borderColor?: string;
  assignee?: string;
  avatar?: string;
  isBlocked?: boolean;
  hasDependency?: boolean;
  isUnassigned?: boolean;
  isOverloaded?: boolean;
  onClick?: () => void;
  isHighlighted?: boolean;
}

export function TaskCard({
  title,
  priority,
  deadline,
  status,
  isOverdue,
  isInProgress,
  borderColor,
  assignee,
  avatar,
  isBlocked,
  hasDependency,
  isUnassigned,
  isOverloaded,
  onClick,
  isHighlighted
}: TaskCardProps) {
  const borderClass = borderColor ? `border-l-4 ${borderColor}` : '';

  return (
    <div
      onClick={onClick}
      className={`p-3 bg-white dark:bg-[#151821] rounded-xl border border-[#acb3b8]/10 dark:border-white/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all group ${borderClass} ${isBlocked ? 'ring-1 ring-[#9f403d]/30' : ''} ${isUnassigned ? 'ring-1 ring-[#835600]/30' : ''} ${isHighlighted ? 'ring-2 ring-[#0055d7] bg-[#0055d7]/5' : ''} ${onClick ? 'cursor-pointer hover:scale-[1.01]' : ''}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-[14px] font-bold text-[#2d3338] dark:text-[#f3f4f6] group-hover:text-[#0055d7] transition-colors flex-1">
          {title}
        </h4>
        <div className="flex items-center gap-1.5">
          {isBlocked && <StatusBadge variant="BLOCKED" withIcon size="sm" />}
          <StatusBadge variant={priority} size="sm" />
        </div>
      </div>
      <div className="flex items-center justify-between text-[12px] mb-2">
        {assignee ? (
          <div className="flex items-center gap-1.5">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${isOverloaded ? 'bg-[#9f403d]/10 text-[#9f403d] ring-1 ring-[#9f403d]/30' : 'bg-[#e4e9ee] dark:bg-[#262b3a] text-[#2d3338] dark:text-[#f3f4f6]'}`}>
              {avatar || assignee.substring(0, 2).toUpperCase()}
            </div>
            <span className="text-[10px] text-[#596065] dark:text-[#9ca3af] font-medium">{assignee}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-[#835600]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <span className="text-[10px] font-bold">UNASSIGNED</span>
          </div>
        )}
        {hasDependency && (
          <svg className="w-4 h-4 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
          </svg>
        )}
      </div>
      <div className="flex items-center justify-between text-[12px]">
        {deadline && !isOverdue && (
          <div className="flex items-center gap-1.5 text-[#596065] dark:text-[#9ca3af]/50">
            <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span>{deadline}</span>
          </div>
        )}
        {isOverdue && (
          <div className="flex items-center gap-1.5 text-[#9f403d] font-medium">
            <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <span>{deadline}</span>
          </div>
        )}
        {isInProgress && <StatusBadge variant="IN_PROGRESS" withIcon size="sm" />}
        {status && status === 'STAGED' && <StatusBadge variant="STAGED" size="sm" />}
      </div>
    </div>
  );
}