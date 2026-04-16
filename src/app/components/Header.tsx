interface HeaderProps {
  title?: string;
  subtitle?: string;
  alertMessage?: string;
}

export function Header({ title, subtitle, alertMessage }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-[240px] h-16 px-6 flex justify-between items-center z-40 bg-[#f9f9fb] dark:bg-[#0c0e14] border-b border-gray-200 dark:border-white/10 font-['Inter']">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input
            className="w-full bg-[#f2f4f6] dark:bg-[#1e2230] border-none rounded-md pl-10 pr-4 py-1.5 text-xs focus:ring-1 focus:ring-[#0055d7]/40 transition-all placeholder:text-[#acb3b8] dark:text-[#6b7280]"
            placeholder="Search tasks or people..."
            type="text"
          />
        </div>
        {alertMessage && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#9f403d]/10 border border-[#9f403d]/30 rounded-md">
            <svg className="w-4 h-4 text-[#9f403d]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <span className="text-[11px] font-semibold text-[#9f403d] tracking-tight">{alertMessage}</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-[#596065] dark:text-[#9ca3af] hover:bg-gray-100 transition-colors rounded-full active:scale-90">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </button>
        <button className="p-2 text-[#596065] dark:text-[#9ca3af] hover:bg-gray-100 transition-colors rounded-full active:scale-90">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        </button>
        <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 dark:border-white/10 ml-2">
          <img
            alt="User profile"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Crect width='32' height='32' fill='%235e5e5e'/%3E%3Ctext x='16' y='20' font-family='Inter' font-size='14' fill='%23f8f8f8' text-anchor='middle'%3EU%3C/text%3E%3C/svg%3E"
          />
        </div>
      </div>
    </header>
  );
}
