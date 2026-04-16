interface SidebarProps {
  activeView: 'dashboard' | 'board' | 'team' | 'timeline';
  onViewChange: (view: 'dashboard' | 'board' | 'team' | 'timeline') => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <nav className="fixed top-0 left-0 bottom-0 w-[240px] flex flex-col py-4 px-3 z-50 bg-[#f2f4f6] dark:bg-[#1e2230] border-r border-gray-200 dark:border-white/10 font-['Inter']">
      <div className="px-2 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#5e5e5e] flex items-center justify-center text-[#f8f8f8]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-base font-black tracking-tighter text-[#2d3338] dark:text-[#f3f4f6]">Engineering Hub</h1>
            <p className="text-[10px] text-[#596065] dark:text-[#9ca3af] font-bold opacity-60">V3.0</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-1">
        <button
          onClick={() => onViewChange('dashboard')}
          className={`w-full flex items-center gap-3 px-3 py-2 transition-all duration-150 ease-in-out text-[13px] font-medium rounded-md ${
            activeView === 'dashboard'
              ? 'bg-[#e4e9ee] dark:bg-[#262b3a] text-[#2d3338] dark:text-[#f3f4f6]'
              : 'text-[#596065] dark:text-[#9ca3af] hover:text-[#2d3338] dark:text-[#f3f4f6] hover:bg-[#e4e9ee] dark:bg-[#262b3a]/50'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
          </svg>
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => onViewChange('board')}
          className={`w-full flex items-center gap-3 px-3 py-2 transition-all duration-150 ease-in-out text-[13px] font-medium rounded-md ${
            activeView === 'board'
              ? 'bg-[#e4e9ee] dark:bg-[#262b3a] text-[#2d3338] dark:text-[#f3f4f6]'
              : 'text-[#596065] dark:text-[#9ca3af] hover:text-[#2d3338] dark:text-[#f3f4f6] hover:bg-[#e4e9ee] dark:bg-[#262b3a]/50'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
          <span>Task Board</span>
        </button>

        <button
          onClick={() => onViewChange('team')}
          className={`w-full flex items-center gap-3 px-3 py-2 transition-all duration-150 ease-in-out text-[13px] font-medium rounded-md ${
            activeView === 'team'
              ? 'bg-[#e4e9ee] dark:bg-[#262b3a] text-[#2d3338] dark:text-[#f3f4f6]'
              : 'text-[#596065] dark:text-[#9ca3af] hover:text-[#2d3338] dark:text-[#f3f4f6] hover:bg-[#e4e9ee] dark:bg-[#262b3a]/50'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span>Team Responsibility</span>
        </button>

        <button
          onClick={() => onViewChange('timeline')}
          className={`w-full flex items-center gap-3 px-3 py-2 transition-all duration-150 ease-in-out text-[13px] font-medium rounded-md ${
            activeView === 'timeline'
              ? 'bg-[#e4e9ee] dark:bg-[#262b3a] text-[#2d3338] dark:text-[#f3f4f6]'
              : 'text-[#596065] dark:text-[#9ca3af] hover:text-[#2d3338] dark:text-[#f3f4f6] hover:bg-[#e4e9ee] dark:bg-[#262b3a]/50'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/>
          </svg>
          <span>Project Timeline</span>
        </button>
      </div>

      <div className="mt-auto px-2 mb-4">
        <button className="w-full py-2.5 bg-gradient-to-br from-[#5e5e5e] to-[#525252] text-[#f8f8f8] rounded-md text-[13px] font-bold shadow-sm hover:brightness-110 active:scale-95 transition-all">
          New Project
        </button>
      </div>

      <div className="space-y-1 pt-4 border-t border-gray-200 dark:border-white/10">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-[#596065] dark:text-[#9ca3af] hover:text-[#2d3338] dark:text-[#f3f4f6] transition-all text-[13px] font-medium">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
          </svg>
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-[#596065] dark:text-[#9ca3af] hover:text-[#2d3338] dark:text-[#f3f4f6] transition-all text-[13px] font-medium">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
          </svg>
          <span>Support</span>
        </button>
      </div>
    </nav>
  );
}
