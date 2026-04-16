import { TaskCard } from './TaskCard';
import { useApp } from '../context/AppContext';

export function TeamResponsibilityView() {
  const { setShowRebalanceModal, teamMembers, tasks, setSelectedTask, setShowTaskDetail } = useApp();

  const handleRebalanceClick = () => {
    setShowRebalanceModal(true);
  };

  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
    setShowTaskDetail(true);
  };

  // Get Sarah's workload from context
  const sarah = teamMembers.find(m => m.name === 'Sarah Chen');
  const marcus = teamMembers.find(m => m.name === 'Marcus Thorne');
  const rahul = teamMembers.find(m => m.name === 'Rahul Sharma');

  // Get tasks for each member
  const sarahTasks = tasks.filter(t => t.assignee === 'Sarah Chen');
  const marcusTasks = tasks.filter(t => t.assignee === 'Marcus Thorne');
  const rahulTasks = tasks.filter(t => t.assignee === 'Rahul Sharma');

  return (
    <div className="max-w-[1152px] mx-auto">
      {/* System Intelligence Alert */}
      <div className="mb-6 flex items-center gap-3 px-4 py-3 bg-[#9f403d]/10 border border-[#9f403d]/30 rounded-lg text-[#9f403d] text-sm font-medium animate-pulse">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        <span>
          <strong>System Intelligence:</strong> Sarah Chen is overloaded (100% capacity). Reassign 2 tasks to Marcus Thorne to maintain velocity.
        </span>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-[26px] font-bold tracking-tight text-[#2d3338] dark:text-[#f3f4f6] mb-1">Team Responsibility</h2>
          <p className="text-[#596065] dark:text-[#9ca3af] text-sm">Real-time capacity and workload distribution overview.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#f2f4f6] dark:bg-[#1e2230] text-[#596065] dark:text-[#9ca3af] text-xs font-semibold rounded-md border border-[#acb3b8]/15 dark:border-white/10 hover:bg-[#e4e9ee] dark:bg-[#262b3a] transition-all">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </svg>
            Filter View
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#f2f4f6] dark:bg-[#1e2230] text-[#596065] dark:text-[#9ca3af] text-xs font-semibold rounded-md border border-[#acb3b8]/15 dark:border-white/10 hover:bg-[#e4e9ee] dark:bg-[#262b3a] transition-all">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
            Export PDF
          </button>
        </div>
      </div>

      {/* Responsibility Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Rahul Sharma */}
        <section className="flex flex-col gap-6 p-1">
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#e4e9ee] dark:bg-[#262b3a] ring-2 ring-[#f9f9fb] dark:ring-[#0c0e14] flex items-center justify-center text-[#2d3338] dark:text-[#f3f4f6] font-bold text-sm">
              RS
            </div>
            <div className="flex-1">
              <h3 className="text-[17px] font-bold text-[#2d3338] dark:text-[#f3f4f6] leading-none">Rahul Sharma</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between text-[13px] font-black text-[#596065] dark:text-[#9ca3af]">
                  <span>Workload: {rahul?.workload || 65}%</span>
                  <div className="flex items-center gap-1 text-[#9f403d]">
                    <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                    </svg>
                    <span className="text-[11px] font-bold">2 Overdue</span>
                  </div>
                </div>
                <div className="w-full bg-[#e4e9ee] dark:bg-[#262b3a] h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-[#5e5e5e] h-full transition-all duration-500 rounded-full" style={{ width: `${rahul?.workload || 65}%` }}></div>
                </div>
              </div>
            </div>
            <button className="text-[#596065] dark:text-[#9ca3af] hover:text-[#2d3338] dark:text-[#f3f4f6] transition-colors self-start">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
          <div className="space-y-2 opacity-80">
            {rahulTasks.slice(0, 3).map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                deadline={task.deadline}
                isOverdue={task.isOverdue}
                onClick={() => handleTaskClick(task)}
              />
            ))}
          </div>
        </section>

        {/* Column 2: Sarah Chen (AT CAPACITY) */}
        <section className="flex flex-col gap-6 p-2 bg-[#9f403d]/[0.02] rounded-xl ring-1 ring-[#9f403d]/5">
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#e4e9ee] dark:bg-[#262b3a] ring-2 ring-[#f9f9fb] dark:ring-[#0c0e14] flex items-center justify-center text-[#2d3338] dark:text-[#f3f4f6] font-bold text-sm">
              SC
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-[17px] font-bold text-[#2d3338] dark:text-[#f3f4f6] leading-none">Sarah Chen</h3>
                <span className="bg-[#9f403d] text-white text-[8px] font-black px-1.5 py-0.5 rounded tracking-tight">
                  NEEDS ATTENTION
                </span>
              </div>
              <button 
                onClick={handleRebalanceClick}
                className="bg-[#9f403d] text-white text-[10px] font-bold px-2 py-1 rounded hover:bg-[#4e0309] transition-colors flex items-center gap-1 shadow-sm mb-2"
              >
                <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
                Rebalance
              </button>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[13px] font-black text-[#9f403d]">
                  <span>Workload: {sarah?.workload || 100}%</span>
                  <span className="text-[#596065] dark:text-[#9ca3af]/60 font-bold text-[11px]">0 Overdue</span>
                </div>
                <div className="w-full bg-[#e4e9ee] dark:bg-[#262b3a] h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-[#9f403d] h-full transition-all duration-500 rounded-full shadow-sm" style={{ width: `${sarah?.workload || 100}%` }}></div>
                </div>
              </div>
            </div>
            <button className="text-[#596065] dark:text-[#9ca3af] hover:text-[#2d3338] dark:text-[#f3f4f6] transition-colors self-start">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
          <div className="space-y-2 opacity-80">
            {sarahTasks.slice(0, 3).map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                deadline={task.deadline}
                isInProgress={task.status === 'inprogress'}
                borderColor={task.status === 'inprogress' ? "border-[#0055d7]" : undefined}
                onClick={() => handleTaskClick(task)}
              />
            ))}
          </div>
        </section>

        {/* Column 3: Marcus Thorne */}
        <section className="flex flex-col gap-6 p-1">
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#e4e9ee] dark:bg-[#262b3a] ring-2 ring-[#f9f9fb] dark:ring-[#0c0e14] flex items-center justify-center text-[#2d3338] dark:text-[#f3f4f6] font-bold text-sm">
              MT
            </div>
            <div className="flex-1">
              <h3 className="text-[17px] font-bold text-[#2d3338] dark:text-[#f3f4f6] leading-none">Marcus Thorne</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between text-[13px] font-black text-[#0055d7]">
                  <span>Workload: {marcus?.workload || 38}%</span>
                  <span className="text-[#596065] dark:text-[#9ca3af]/60 font-bold text-[11px]">0 Overdue</span>
                </div>
                <div className="w-full bg-[#e4e9ee] dark:bg-[#262b3a] h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-[#0055d7] h-full transition-all duration-500 rounded-full shadow-sm" style={{ width: `${marcus?.workload || 38}%` }}></div>
                </div>
              </div>
            </div>
            <button className="text-[#596065] dark:text-[#9ca3af] hover:text-[#2d3338] dark:text-[#f3f4f6] transition-colors self-start">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
          <div className="space-y-2 opacity-80">
            {marcusTasks.slice(0, 2).map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                deadline={task.deadline}
                status={task.title === 'Security Audit' ? "STAGED" : undefined}
                borderColor={task.title === 'Security Audit' ? "border-[#835600]" : undefined}
                onClick={() => handleTaskClick(task)}
              />
            ))}
            <div className="border-2 border-dashed border-[#acb3b8]/20 dark:border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
              <svg className="w-6 h-6 text-[#596065] dark:text-[#9ca3af] group-hover:text-[#0055d7] mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
              <span className="text-[10px] font-bold tracking-widest text-[#596065] dark:text-[#9ca3af]">ASSIGN TASK</span>
            </div>
          </div>
        </section>
      </div>

      {/* Bento Summary Statistics */}
      <div className="mt-12 grid grid-cols-4 gap-4">
        <div className="col-span-2 p-5 bg-white dark:bg-[#151821] rounded-xl border border-[#acb3b8]/10 dark:border-white/5 shadow-sm flex flex-col justify-between h-[160px]">
          <span className="text-[10px] uppercase font-black tracking-widest text-[#596065] dark:text-[#9ca3af]">Active Team Health</span>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-black text-[#2d3338] dark:text-[#f3f4f6] leading-none">84%</span>
            <span className="text-[#0055d7] font-bold text-xs mb-1">STABLE PERFORMANCE</span>
          </div>
          <div className="w-full bg-[#e4e9ee] dark:bg-[#262b3a] h-1 rounded-full overflow-hidden">
            <div className="bg-[#0055d7] h-full" style={{ width: '84%' }}></div>
          </div>
        </div>
        <div className="p-5 bg-white dark:bg-[#151821] rounded-xl border border-[#acb3b8]/10 dark:border-white/5 shadow-sm h-[160px] flex flex-col justify-between">
          <span className="text-[10px] uppercase font-black tracking-widest text-[#596065] dark:text-[#9ca3af]">System Bottlenecks</span>
          <div className="text-3xl font-black text-[#9f403d]">1</div>
          <p className="text-[11px] text-[#596065] dark:text-[#9ca3af] font-medium">Critical overload detected in Frontend Team resources.</p>
        </div>
        <div className="p-5 bg-white dark:bg-[#151821] rounded-xl border border-[#acb3b8]/10 dark:border-white/5 shadow-sm h-[160px] flex flex-col justify-between">
          <span className="text-[10px] uppercase font-black tracking-widest text-[#596065] dark:text-[#9ca3af]">Active Sprint</span>
          <div className="text-3xl font-black text-[#2d3338] dark:text-[#f3f4f6]">V4.2</div>
          <div className="flex items-center gap-1.5 text-[#596065] dark:text-[#9ca3af]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <span className="text-[11px] font-medium">6 days until release</span>
          </div>
        </div>
      </div>

      {/* Floating Command Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50">
        <span className="text-[9px] font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] opacity-60">Quick Actions</span>
        <div className="bg-white dark:bg-[#151821]/80 backdrop-blur-xl px-4 py-2 rounded-full border border-[#acb3b8]/20 dark:border-white/10 shadow-2xl flex items-center gap-4 opacity-90 hover:opacity-100 transition-opacity">
          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded-full transition-colors text-[#2d3338] dark:text-[#f3f4f6] font-bold text-xs">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Add Member
          </button>
          <div className="w-px h-4 bg-[#acb3b8]/30"></div>
          <button
            onClick={handleRebalanceClick}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded-full transition-colors font-bold text-xs text-[#5e5e5e] bg-[#5e5e5e]/10"
          >
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
            Rebalance Load
          </button>
          <div className="w-px h-4 bg-[#acb3b8]/30"></div>
          <button className="p-1.5 bg-[#5e5e5e] rounded-full text-[#f8f8f8] hover:brightness-110 active:scale-90 transition-all">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}