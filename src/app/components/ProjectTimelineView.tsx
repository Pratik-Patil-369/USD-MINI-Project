export function ProjectTimelineView() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-[26px] font-bold tracking-tight text-[#2d3338] dark:text-[#f3f4f6]">Project Timeline</h2>
          <p className="text-sm text-[#596065] dark:text-[#9ca3af] font-medium mt-1">Autonomous Rover Development • Q4 Sprint</p>
        </div>
        <div className="flex gap-2">
          <div className="flex -space-x-2 mr-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#f9f9fb] bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[10px] font-bold text-[#2d3338] dark:text-[#f3f4f6]">AR</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#f9f9fb] bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[10px] font-bold text-[#2d3338] dark:text-[#f3f4f6]">SC</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#f9f9fb] bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[10px] font-bold text-[#2d3338] dark:text-[#f3f4f6]">LF</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#f9f9fb] bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[10px] font-bold text-[#596065] dark:text-[#9ca3af]">+4</div>
          </div>
          <button className="bg-[#f2f4f6] dark:bg-[#1e2230] px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center gap-2 border border-[#acb3b8]/10 dark:border-white/5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </svg>
            Filter
          </button>
          <button className="bg-[#f2f4f6] dark:bg-[#1e2230] px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center gap-2 border border-[#acb3b8]/10 dark:border-white/5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/>
            </svg>
            Export PDF
          </button>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="bg-[#f2f4f6] dark:bg-[#1e2230] rounded-xl overflow-hidden border border-[#acb3b8]/10 dark:border-white/5 shadow-sm">
        {/* Timeline Header */}
        <div className="grid grid-cols-[250px_1fr] bg-[#e4e9ee] dark:bg-[#262b3a]/50 border-b border-[#acb3b8]/20 dark:border-white/10">
          <div className="p-4 border-r border-[#acb3b8]/20 dark:border-white/10 flex items-center">
            <span className="text-[13px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Task Details</span>
          </div>
          <div className="grid grid-cols-4 h-12">
            <div className="flex items-center justify-center border-r border-[#acb3b8]/10 dark:border-white/5 text-[12px] text-[#596065] dark:text-[#9ca3af] font-medium uppercase tracking-tighter">Week 01</div>
            <div className="flex items-center justify-center border-r border-[#acb3b8]/10 dark:border-white/5 text-[12px] text-[#596065] dark:text-[#9ca3af] font-medium uppercase tracking-tighter">Week 02</div>
            <div className="flex items-center justify-center border-r border-[#acb3b8]/10 dark:border-white/5 text-[12px] text-[#596065] dark:text-[#9ca3af] font-medium uppercase tracking-tighter">Week 03</div>
            <div className="flex items-center justify-center text-[12px] text-[#596065] dark:text-[#9ca3af] font-medium uppercase tracking-tighter">Week 04</div>
          </div>
        </div>

        {/* Timeline Body */}
        <div className="relative max-h-[600px] overflow-y-auto">
          {/* Deadline Indicator */}
          <div className="absolute top-0 bottom-0 left-[250px] right-0 pointer-events-none z-10">
            <div className="absolute left-[85%] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#9f403d] to-[#9f403d]/40 shadow-lg flex flex-col items-center">
              <span className="bg-[#9f403d] text-white text-[10px] px-2.5 py-1 rounded-md font-black mt-2 whitespace-nowrap shadow-lg tracking-wider uppercase">Deadline</span>
            </div>
          </div>

          {/* Timeline Rows */}
          {/* Row 1: On Track */}
          <div className="grid grid-cols-[250px_1fr] hover:bg-[#dde3e9]/30 transition-colors group py-1">
            <div className="p-4 border-r border-[#acb3b8]/10 dark:border-white/5 flex flex-col gap-1">
              <span className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6]">Conceptual Design</span>
              <span className="text-[11px] text-[#596065] dark:text-[#9ca3af] flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Alex Rivera
              </span>
            </div>
            <div className="relative flex items-center px-4">
              <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
              </div>
              <div className="w-[30%] h-4 bg-[#0055d7] rounded-full relative group-hover:brightness-110 shadow-sm cursor-pointer flex items-center justify-center overflow-hidden">
                <span className="text-[9px] font-bold text-white uppercase tracking-tighter">Done</span>
              </div>
              <span className="ml-3 text-[9px] font-black px-2 py-0.5 rounded bg-[#0055d7]/10 text-[#0055d7] uppercase tracking-tight">On Track</span>
            </div>
          </div>

          {/* Row 2: Critical Path */}
          <div className="grid grid-cols-[250px_1fr] hover:bg-[#dde3e9]/30 transition-colors group py-1">
            <div className="p-4 border-r border-[#acb3b8]/10 dark:border-white/5 flex flex-col gap-1">
              <span className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6]">Chassis Prototyping</span>
              <span className="text-[11px] text-[#596065] dark:text-[#9ca3af] flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Sarah Chen
              </span>
            </div>
            <div className="relative flex items-center px-4">
              <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
              </div>
              <div className="ml-[15%] w-[45%] h-5 bg-[#9f403d] rounded-full shadow-md flex items-center justify-center ring-2 ring-[#9f403d]/20 relative">
                <span className="text-[10px] font-black text-white uppercase tracking-wider">Critical Path</span>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#9f403d] rounded-full animate-ping"></div>
              </div>
              {/* Dependency Arrow */}
              <svg className="absolute left-[60%] top-full w-[35px] h-[34px] pointer-events-none z-10" style={{ overflow: 'visible' }}>
                <path d="M0 -8 V17 H-25" fill="transparent" stroke="#9f403d" strokeWidth="2.5"></path>
                <polygon fill="#9f403d" points="-22,14 -28,17 -22,20"></polygon>
              </svg>
            </div>
          </div>

          {/* Row 3: Due Soon Warning */}
          <div className="grid grid-cols-[250px_1fr] hover:bg-[#dde3e9]/30 transition-colors group py-1">
            <div className="p-4 border-r border-[#acb3b8]/10 dark:border-white/5 flex flex-col gap-1">
              <span className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6]">Sensor Calibration</span>
              <span className="text-[11px] text-[#596065] dark:text-[#9ca3af] flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Liam Foster
              </span>
            </div>
            <div className="relative flex items-center px-4">
              <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
              </div>
              <div className="ml-[50%] w-[25%] h-4 bg-[#835600] rounded-full shadow-sm relative flex items-center justify-center">
                <span className="text-[9px] font-bold text-white uppercase tracking-tighter">In Progress</span>
                <div className="absolute -right-1.5 -top-1.5 w-3 h-3 bg-[#feaa00] rounded-full border-2 border-[#f9f9fb] animate-pulse"></div>
              </div>
              <div className="ml-3 flex items-center gap-1">
                <span className="text-[9px] font-black px-2 py-0.5 rounded bg-[#835600]/10 text-[#835600] uppercase tracking-tight inline-flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                  Due in 2 days
                </span>
              </div>
            </div>
          </div>

          {/* Row 4: Overdue */}
          <div className="grid grid-cols-[250px_1fr] hover:bg-[#dde3e9]/30 transition-colors group py-1">
            <div className="p-4 border-r border-[#acb3b8]/10 dark:border-white/5 flex flex-col gap-1">
              <span className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6]">Power Module Assembly</span>
              <span className="text-[11px] text-[#596065] dark:text-[#9ca3af] flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Maria G.
              </span>
            </div>
            <div className="relative flex items-center px-4">
              <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
              </div>
              <div className="ml-[20%] w-[10%] h-4 bg-[#9f403d] rounded-full shadow-md flex items-center justify-center ring-2 ring-[#9f403d]/20">
                <span className="text-[9px] font-bold text-white uppercase tracking-tighter">Overdue</span>
              </div>
              <span className="ml-3 text-[9px] font-black px-2 py-0.5 rounded bg-[#9f403d]/10 text-[#9f403d] uppercase tracking-tight inline-flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
                Action Required
              </span>
            </div>
          </div>

          {/* Row 5: Overdue */}
          <div className="grid grid-cols-[250px_1fr] hover:bg-[#dde3e9]/30 transition-colors group py-1">
            <div className="p-4 border-r border-[#acb3b8]/10 dark:border-white/5 flex flex-col gap-1">
              <span className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6]">Navigation Software</span>
              <span className="text-[11px] text-[#596065] dark:text-[#9ca3af] flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Alex Rivera
              </span>
            </div>
            <div className="relative flex items-center px-4">
              <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
              </div>
              <div className="ml-[60%] w-[35%] h-4 bg-[#9f403d] rounded-full shadow-md flex items-center justify-center ring-2 ring-[#9f403d]/20">
                <span className="text-[9px] font-bold text-white uppercase tracking-tighter">Overdue</span>
              </div>
            </div>
          </div>

          {/* Row 6: Planned */}
          <div className="grid grid-cols-[250px_1fr] hover:bg-[#dde3e9]/30 transition-colors group py-1">
            <div className="p-4 border-r border-[#acb3b8]/10 dark:border-white/5 flex flex-col gap-1">
              <span className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6]">Stability Testing</span>
              <span className="text-[11px] text-[#596065] dark:text-[#9ca3af] flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Sarah Chen
              </span>
            </div>
            <div className="relative flex items-center px-4">
              <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
              </div>
              <div className="ml-[75%] w-[15%] h-4 bg-[#004abe] rounded-full shadow-sm opacity-60 flex items-center justify-center">
                <span className="text-[9px] font-bold text-white uppercase tracking-tighter">Planned</span>
              </div>
            </div>
          </div>

          {/* Row 7: Review */}
          <div className="grid grid-cols-[250px_1fr] hover:bg-[#dde3e9]/30 transition-colors group py-1">
            <div className="p-4 border-r border-[#acb3b8]/10 dark:border-white/5 flex flex-col gap-1">
              <span className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6]">Final Integration</span>
              <span className="text-[11px] text-[#596065] dark:text-[#9ca3af] flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                Core Team
              </span>
            </div>
            <div className="relative flex items-center px-4">
              <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
                <div className="border-r border-[#acb3b8]/40"></div>
              </div>
              <div className="ml-[90%] w-[10%] h-4 bg-[#dae1ff] rounded-full border border-[#0055d7]/20 shadow-sm flex items-center justify-center">
                <span className="text-[9px] font-bold text-[#0049bb] uppercase tracking-tighter">Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats Grid */}
      <div className="mt-8 grid grid-cols-4 gap-6">
        <div className="bg-white dark:bg-[#151821] p-4 rounded-lg border border-[#acb3b8]/10 dark:border-white/5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Project Status</span>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-[#0055d7]"></div>
            <span className="text-xl font-bold">78% Complete</span>
          </div>
        </div>
        <div className="bg-white dark:bg-[#151821] p-4 rounded-lg border border-[#acb3b8]/10 dark:border-white/5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Overdue Items</span>
          <div className="flex items-center gap-2 mt-2 text-[#d32f2f]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <span className="text-xl font-bold">2 Critical</span>
          </div>
        </div>
        <div className="bg-white dark:bg-[#151821] p-4 rounded-lg border border-[#acb3b8]/10 dark:border-white/5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Team Velocity</span>
          <div className="flex items-center gap-2 mt-2 text-[#0055d7]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
            <span className="text-xl font-bold">12.4 Tasks/wk</span>
          </div>
        </div>
        <div className="bg-white dark:bg-[#151821] p-4 rounded-lg border border-[#acb3b8]/10 dark:border-white/5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Next Milestone</span>
          <div className="flex items-center gap-2 mt-2 text-[#2d3338] dark:text-[#f3f4f6]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
            </svg>
            <span className="text-xl font-bold">Final Demo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
