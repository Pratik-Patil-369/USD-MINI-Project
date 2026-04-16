import { MetricCard } from './MetricCard';
import { EmptyState } from './EmptyState';
import { useApp } from '../context/AppContext';

interface DashboardViewProps {
  onNavigate?: (view: 'team' | 'timeline' | 'board') => void;
}

export function DashboardView({ onNavigate }: DashboardViewProps) {
  const { setShowRebalanceModal, setShowAddTaskModal, setHighlightedTasks, tasks } = useApp();

  const handleCriticalAlertClick = () => {
    // Highlight critical tasks and navigate to timeline
    const criticalTasks = tasks.filter(t => t.isBlocked || t.isOverdue).map(t => t.id);
    setHighlightedTasks(criticalTasks);
    onNavigate?.('timeline');
  };

  const handleTeamLoadClick = () => {
    // Navigate to team view and show overload alert
    onNavigate?.('team');
  };

  const handleRebalanceClick = () => {
    setShowRebalanceModal(true);
  };

  const handleAddTaskClick = () => {
    setShowAddTaskModal(true);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-[26px] font-bold tracking-tight text-[#2d3338] dark:text-[#f3f4f6]">Autonomous Rover Development</h2>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-sm text-[#596065] dark:text-[#9ca3af] font-medium">Q4 Sprint • 6 days left</p>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-[#f9f9fb] bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6]">RS</div>
              <div className="w-6 h-6 rounded-full border-2 border-[#f9f9fb] bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6]">SC</div>
              <div className="w-6 h-6 rounded-full border-2 border-[#f9f9fb] bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6]">MT</div>
              <div className="w-6 h-6 rounded-full border-2 border-[#f9f9fb] bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#596065] dark:text-[#9ca3af]">+3</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Health Overview */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <MetricCard
          label="Progress"
          value="78%"
          variant="success"
          progress={78}
        />
        <MetricCard
          label="Critical Alerts"
          value="2"
          variant="critical"
          icon={
            <svg className="w-5 h-5 text-[#9f403d]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          }
          onClick={handleCriticalAlertClick}
        />
        <MetricCard
          label="Team Load"
          value="1 Overloaded"
          variant="warning"
          onClick={handleTeamLoadClick}
        />
        <MetricCard
          label="Velocity"
          value="12.4"
          variant="default"
          trend="up"
          icon={
            <svg className="w-5 h-5 text-[#0055d7]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          }
        />
      </div>

      {/* System Intelligence Panel */}
      <div className="mb-8">
        <h3 className="text-sm font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-4">System Intelligence</h3>
        {tasks.filter(t => t.isBlocked || t.isOverdue).length === 0 ? (
          <EmptyState
            icon={
              <svg className="w-12 h-12 text-[#0055d7] opacity-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            }
            title="All systems running smoothly"
            description="No critical alerts detected. Team is operating at optimal capacity with no blockers."
            variant="success"
          />
        ) : (
        <div className="space-y-3">
          <button
            onClick={handleTeamLoadClick}
            className="w-full p-4 bg-[#9f403d]/[0.05] border border-[#9f403d]/30 rounded-lg text-left hover:bg-[#9f403d]/10 transition-all group"
          >
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#9f403d] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6] mb-1">Sarah Chen is overloaded (100% capacity)</p>
                <p className="text-xs text-[#596065] dark:text-[#9ca3af] mb-2">
                  Recommended: Reassign 2 frontend tasks to Marcus Thorne to maintain team velocity.
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#9f403d] opacity-70 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                    </svg>
                    REASSIGN NOW
                  </span>
                </div>
              </div>
              <svg className="w-5 h-5 text-[#596065] dark:text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </div>
          </button>

          <button
            onClick={handleCriticalAlertClick}
            className="w-full p-4 bg-[#9f403d]/[0.05] border border-[#9f403d]/30 rounded-lg text-left hover:bg-[#9f403d]/10 transition-all group"
          >
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#9f403d] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6] mb-1">2 critical tasks are blocking sprint completion</p>
                <p className="text-xs text-[#596065] dark:text-[#9ca3af] mb-2">
                  Power Module Assembly and Navigation Software are overdue and on the critical path.
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#9f403d] opacity-70 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                    </svg>
                    VIEW TIMELINE
                  </span>
                </div>
              </div>
              <svg className="w-5 h-5 text-[#596065] dark:text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </div>
          </button>

          <button
            onClick={handleTeamLoadClick}
            className="w-full p-4 bg-[#0055d7]/[0.05] border border-[#0055d7]/20 rounded-lg text-left hover:bg-[#0055d7]/10 transition-all group"
          >
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#0055d7] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6] mb-1">Marcus Thorne has available capacity (38%)</p>
                <p className="text-xs text-[#596065] dark:text-[#9ca3af] mb-2">
                  Optimize workload by reassigning UI Kit Implementation and Responsive Design QA tasks.
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#0055d7] opacity-70 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                    VIEW TEAM
                  </span>
                </div>
              </div>
              <svg className="w-5 h-5 text-[#596065] dark:text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </div>
          </button>
        </div>
        )}
      </div>

      {/* Two Column Layout: Deadlines & Activity */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Deadlines & Priorities */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-4">Deadlines & Priorities</h3>
          <div className="space-y-2">
            {/* Overdue */}
            <div className="p-3 bg-[#9f403d]/[0.05] border border-[#9f403d]/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-[#9f403d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
                <span className="text-[10px] font-black text-[#9f403d] uppercase tracking-wide">Overdue (2)</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-white dark:bg-[#151821] rounded">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#2d3338] dark:text-[#f3f4f6]">API Documentation</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-[#596065] dark:text-[#9ca3af]">Rahul Sharma</span>
                      <span className="text-[10px] text-[#9f403d] font-bold">3d overdue</span>
                    </div>
                  </div>
                  <span className="text-[8px] font-black px-2 py-0.5 rounded bg-[#9f403d]/10 text-[#9f403d]">HIGH</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white dark:bg-[#151821] rounded">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#2d3338] dark:text-[#f3f4f6]">Power Module Assembly</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-[#596065] dark:text-[#9ca3af]">Maria G.</span>
                      <span className="text-[10px] text-[#9f403d] font-bold">1d overdue</span>
                    </div>
                  </div>
                  <span className="text-[8px] font-black px-2 py-0.5 rounded bg-[#9f403d]/10 text-[#9f403d]">HIGH</span>
                </div>
              </div>
            </div>

            {/* Due Today */}
            <div className="p-3 bg-[#835600]/[0.05] border border-[#835600]/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-[#835600]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span className="text-[10px] font-black text-[#835600] uppercase tracking-wide">Due Today (1)</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white dark:bg-[#151821] rounded">
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#2d3338] dark:text-[#f3f4f6]">Frontend Architecture</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-[#596065] dark:text-[#9ca3af]">Sarah Chen</span>
                    <span className="text-[10px] text-[#835600] font-bold">Due today</span>
                  </div>
                </div>
                <span className="text-[8px] font-black px-2 py-0.5 rounded bg-[#835600]/10 text-[#835600]">HIGH</span>
              </div>
            </div>

            {/* Due in 2 Days */}
            <div className="p-3 bg-[#0055d7]/[0.05] border border-[#0055d7]/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-[#0055d7]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <span className="text-[10px] font-black text-[#0055d7] uppercase tracking-wide">Due in 2 Days (2)</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-white dark:bg-[#151821] rounded">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#2d3338] dark:text-[#f3f4f6]">Sensor Calibration</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-[#596065] dark:text-[#9ca3af]">Liam Foster</span>
                    </div>
                  </div>
                  <span className="text-[8px] font-black px-2 py-0.5 rounded bg-[#acb3b8]/10 text-[#596065] dark:text-[#9ca3af]">MED</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white dark:bg-[#151821] rounded">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#2d3338] dark:text-[#f3f4f6]">Database Migration</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-[#596065] dark:text-[#9ca3af]">Rahul Sharma</span>
                    </div>
                  </div>
                  <span className="text-[8px] font-black px-2 py-0.5 rounded bg-[#9f403d]/10 text-[#9f403d]">HIGH</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-4">Recent Activity</h3>
          <div className="bg-white dark:bg-[#151821] rounded-xl border border-[#acb3b8]/10 dark:border-white/5 divide-y divide-[#acb3b8]/10">
            <div className="p-3 hover:bg-[#f2f4f6] dark:bg-[#1e2230] transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6] flex-shrink-0">
                  RS
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#2d3338] dark:text-[#f3f4f6]">
                    <span className="font-bold">Rahul Sharma</span> updated <span className="font-medium">API Documentation</span>
                  </p>
                  <p className="text-[10px] text-[#596065] dark:text-[#9ca3af] mt-0.5">2 minutes ago</p>
                </div>
              </div>
            </div>

            <div className="p-3 hover:bg-[#f2f4f6] dark:bg-[#1e2230] transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6] flex-shrink-0">
                  SC
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#2d3338] dark:text-[#f3f4f6]">
                    <span className="font-bold">Sarah Chen</span> marked <span className="font-medium">Frontend Architecture</span> as <span className="text-[#0055d7] font-bold">In Progress</span>
                  </p>
                  <p className="text-[10px] text-[#596065] dark:text-[#9ca3af] mt-0.5">15 minutes ago</p>
                </div>
              </div>
            </div>

            <div className="p-3 hover:bg-[#f2f4f6] dark:bg-[#1e2230] transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6] flex-shrink-0">
                  MT
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#2d3338] dark:text-[#f3f4f6]">
                    <span className="font-bold">Marcus Thorne</span> resolved blocker on <span className="font-medium">Security Audit</span>
                  </p>
                  <p className="text-[10px] text-[#596065] dark:text-[#9ca3af] mt-0.5">1 hour ago</p>
                </div>
              </div>
            </div>

            <div className="p-3 hover:bg-[#f2f4f6] dark:bg-[#1e2230] transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6] flex-shrink-0">
                  LF
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#2d3338] dark:text-[#f3f4f6]">
                    <span className="font-bold">Liam Foster</span> started working on <span className="font-medium">Sensor Calibration</span>
                  </p>
                  <p className="text-[10px] text-[#596065] dark:text-[#9ca3af] mt-0.5">3 hours ago</p>
                </div>
              </div>
            </div>

            <div className="p-3 hover:bg-[#f2f4f6] dark:bg-[#1e2230] transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6] flex-shrink-0">
                  AR
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#2d3338] dark:text-[#f3f4f6]">
                    <span className="font-bold">Alex Rivera</span> completed <span className="font-medium">Conceptual Design</span>
                  </p>
                  <p className="text-[10px] text-[#596065] dark:text-[#9ca3af] mt-0.5">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Bar (Floating) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50">
        <span className="text-[9px] font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] opacity-60">Quick Actions</span>
        <div className="bg-white dark:bg-[#151821]/80 backdrop-blur-xl px-4 py-2 rounded-full border border-[#acb3b8]/20 dark:border-white/10 shadow-2xl flex items-center gap-4 opacity-90 hover:opacity-100 transition-opacity">
          <button
            onClick={handleAddTaskClick}
            className="flex items-center gap-2 px-4 py-2 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded-full transition-colors text-[#2d3338] dark:text-[#f3f4f6] font-bold text-xs"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Add Task
          </button>
          <div className="w-px h-4 bg-[#acb3b8]/30"></div>
          <button
            onClick={handleRebalanceClick}
            className="flex items-center gap-2 px-4 py-2 bg-[#5e5e5e]/10 hover:bg-[#5e5e5e]/20 rounded-full transition-colors font-bold text-xs text-[#5e5e5e]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
            Rebalance Workload
          </button>
          <div className="w-px h-4 bg-[#acb3b8]/30"></div>
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded-full transition-colors text-[#2d3338] dark:text-[#f3f4f6] font-bold text-xs">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
}