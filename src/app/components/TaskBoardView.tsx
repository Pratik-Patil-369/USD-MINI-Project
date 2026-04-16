import { TaskCard } from './TaskCard';
import { useApp } from '../context/AppContext';

export function TaskBoardView() {
  const { tasks, setSelectedTask, setShowTaskDetail, setShowAddTaskModal, highlightedTasks } = useApp();

  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
    setShowTaskDetail(true);
  };

  const handleAddTask = () => {
    setShowAddTaskModal(true);
  };

  // Organize tasks by status
  const backlogTasks = tasks.filter(t => t.status === 'backlog');
  const todoTasks = tasks.filter(t => t.status === 'todo');
  const inProgressTasks = tasks.filter(t => t.status === 'inprogress');
  const reviewTasks = tasks.filter(t => t.status === 'review');
  const doneTasks = tasks.filter(t => t.status === 'done');
  const blockedTasks = tasks.filter(t => t.status === 'blocked');

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-[26px] font-bold tracking-tight text-[#2d3338] dark:text-[#f3f4f6]">Task Board</h2>
          <p className="text-sm text-[#596065] dark:text-[#9ca3af] font-medium mt-1">Autonomous Rover Development • Q4 Sprint</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-[#f2f4f6] dark:bg-[#1e2230] px-4 py-2 rounded-md text-xs font-semibold border border-[#acb3b8]/10 dark:border-white/5 focus:outline-none focus:ring-1 focus:ring-[#0055d7]/40">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="bg-[#f2f4f6] dark:bg-[#1e2230] px-4 py-2 rounded-md text-xs font-semibold border border-[#acb3b8]/10 dark:border-white/5 focus:outline-none focus:ring-1 focus:ring-[#0055d7]/40">
            <option>All Assignees</option>
            <option>Rahul Sharma</option>
            <option>Sarah Chen</option>
            <option>Marcus Thorne</option>
          </select>
          <select className="bg-[#f2f4f6] dark:bg-[#1e2230] px-4 py-2 rounded-md text-xs font-semibold border border-[#acb3b8]/10 dark:border-white/5 focus:outline-none focus:ring-1 focus:ring-[#0055d7]/40">
            <option>All Status</option>
            <option>On Track</option>
            <option>At Risk</option>
            <option>Blocked</option>
          </select>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {/* Backlog Column */}
        <div className="flex-shrink-0 w-[280px] opacity-60">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#acb3b8]"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Backlog</h3>
              <span className="bg-[#e4e9ee] dark:bg-[#262b3a] text-[#596065] dark:text-[#9ca3af] text-[10px] font-bold px-1.5 py-0.5 rounded">{backlogTasks.length}</span>
            </div>
            <button onClick={handleAddTask} className="p-1 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded transition-colors">
              <svg className="w-4 h-4 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {backlogTasks.map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                assignee={task.assignee}
                avatar={task.avatar}
                deadline={task.deadline}
                isUnassigned={task.assignee === 'Unassigned'}
                onClick={() => handleTaskClick(task)}
                isHighlighted={highlightedTasks.includes(task.id)}
              />
            ))}
            <button onClick={handleAddTask} className="w-full p-3 border-2 border-dashed border-[#acb3b8]/20 dark:border-white/10 rounded-xl text-[#596065] dark:text-[#9ca3af] hover:border-[#0055d7]/40 hover:text-[#0055d7] transition-all flex items-center justify-center gap-2 text-xs font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Add Task
            </button>
          </div>
        </div>

        {/* To Do Column */}
        <div className="flex-shrink-0 w-[280px]">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#596065]"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">To Do</h3>
              <span className="bg-[#e4e9ee] dark:bg-[#262b3a] text-[#596065] dark:text-[#9ca3af] text-[10px] font-bold px-1.5 py-0.5 rounded">{todoTasks.length}</span>
            </div>
            <button onClick={handleAddTask} className="p-1 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded transition-colors">
              <svg className="w-4 h-4 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {todoTasks.map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                assignee={task.assignee}
                avatar={task.avatar}
                deadline={task.deadline}
                status={task.title === 'Security Audit' ? 'STAGED' : undefined}
                isOverloaded={task.assignee === 'Sarah Chen'}
                onClick={() => handleTaskClick(task)}
                isHighlighted={highlightedTasks.includes(task.id)}
              />
            ))}
            <button onClick={handleAddTask} className="w-full p-3 border-2 border-dashed border-[#acb3b8]/20 dark:border-white/10 rounded-xl text-[#596065] dark:text-[#9ca3af] hover:border-[#0055d7]/40 hover:text-[#0055d7] transition-all flex items-center justify-center gap-2 text-xs font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Add Task
            </button>
          </div>
        </div>

        {/* In Progress Column */}
        <div className="flex-shrink-0 w-[280px] bg-[#0055d7]/[0.02] rounded-xl p-3 -mx-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0055d7] animate-pulse"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">In Progress</h3>
              <span className="bg-[#0055d7]/10 text-[#0055d7] text-[10px] font-bold px-1.5 py-0.5 rounded">{inProgressTasks.length}</span>
            </div>
            <button onClick={handleAddTask} className="p-1 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded transition-colors">
              <svg className="w-4 h-4 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {inProgressTasks.map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                assignee={task.assignee}
                avatar={task.avatar}
                deadline={task.deadline}
                isInProgress={true}
                isOverloaded={task.assignee === 'Sarah Chen'}
                hasDependency={task.dependencies && task.dependencies.length > 0}
                onClick={() => handleTaskClick(task)}
                isHighlighted={highlightedTasks.includes(task.id)}
              />
            ))}
            <button onClick={handleAddTask} className="w-full p-3 border-2 border-dashed border-[#acb3b8]/20 dark:border-white/10 rounded-xl text-[#596065] dark:text-[#9ca3af] hover:border-[#0055d7]/40 hover:text-[#0055d7] transition-all flex items-center justify-center gap-2 text-xs font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Add Task
            </button>
          </div>
        </div>

        {/* Review Column */}
        <div className="flex-shrink-0 w-[280px]">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#835600]"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Review</h3>
              <span className="bg-[#e4e9ee] dark:bg-[#262b3a] text-[#596065] dark:text-[#9ca3af] text-[10px] font-bold px-1.5 py-0.5 rounded">{reviewTasks.length}</span>
            </div>
            <button onClick={handleAddTask} className="p-1 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded transition-colors">
              <svg className="w-4 h-4 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {reviewTasks.map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                assignee={task.assignee}
                avatar={task.avatar}
                deadline={task.deadline}
                hasDependency={task.dependencies && task.dependencies.length > 0}
                isOverloaded={task.assignee === 'Sarah Chen'}
                onClick={() => handleTaskClick(task)}
                isHighlighted={highlightedTasks.includes(task.id)}
              />
            ))}
            <button onClick={handleAddTask} className="w-full p-3 border-2 border-dashed border-[#acb3b8]/20 dark:border-white/10 rounded-xl text-[#596065] dark:text-[#9ca3af] hover:border-[#0055d7]/40 hover:text-[#0055d7] transition-all flex items-center justify-center gap-2 text-xs font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Add Task
            </button>
          </div>
        </div>

        {/* Done Column */}
        <div className="flex-shrink-0 w-[280px]">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0055d7]"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Done</h3>
              <span className="bg-[#e4e9ee] dark:bg-[#262b3a] text-[#596065] dark:text-[#9ca3af] text-[10px] font-bold px-1.5 py-0.5 rounded">{doneTasks.length}</span>
            </div>
            <button onClick={handleAddTask} className="p-1 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded transition-colors">
              <svg className="w-4 h-4 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </button>
          </div>
          <div className="space-y-4 opacity-60">
            {doneTasks.map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                assignee={task.assignee}
                avatar={task.avatar}
                deadline={task.deadline}
                onClick={() => handleTaskClick(task)}
              />
            ))}
            <button onClick={handleAddTask} className="w-full p-3 border-2 border-dashed border-[#acb3b8]/20 dark:border-white/10 rounded-xl text-[#596065] dark:text-[#9ca3af] hover:border-[#0055d7]/40 hover:text-[#0055d7] transition-all flex items-center justify-center gap-2 text-xs font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Add Task
            </button>
          </div>
        </div>

        {/* Blocked (Critical Attention) */}
        <div className="flex-shrink-0 w-[280px]">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#9f403d] animate-pulse"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#9f403d]">Blocked</h3>
              <span className="bg-[#9f403d]/10 text-[#9f403d] text-[10px] font-bold px-1.5 py-0.5 rounded">{blockedTasks.length}</span>
            </div>
          </div>
          <div className="space-y-4">
            {blockedTasks.map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                assignee={task.assignee}
                avatar={task.avatar}
                deadline={task.deadline}
                isOverdue={task.isOverdue}
                isBlocked={task.isBlocked}
                onClick={() => handleTaskClick(task)}
                isHighlighted={highlightedTasks.includes(task.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#151821] p-4 rounded-lg border border-[#acb3b8]/10 dark:border-white/5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Total Tasks</span>
          <div className="text-2xl font-black text-[#2d3338] dark:text-[#f3f4f6] mt-2">{tasks.length}</div>
        </div>
        <div className="bg-white dark:bg-[#151821] p-4 rounded-lg border border-[#acb3b8]/10 dark:border-white/5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">In Progress</span>
          <div className="text-2xl font-black text-[#0055d7] mt-2">{inProgressTasks.length}</div>
        </div>
        <div className="bg-white dark:bg-[#151821] p-4 rounded-lg border border-[#acb3b8]/10 dark:border-white/5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Blocked</span>
          <div className="text-2xl font-black text-[#9f403d] mt-2">{blockedTasks.length}</div>
        </div>
        <div className="bg-white dark:bg-[#151821] p-4 rounded-lg border border-[#acb3b8]/10 dark:border-white/5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#596065] dark:text-[#9ca3af]">Unassigned</span>
          <div className="text-2xl font-black text-[#835600] mt-2">{tasks.filter(t => t.assignee === 'Unassigned').length}</div>
        </div>
      </div>

      {/* Floating Add Button */}
      <button onClick={handleAddTask} className="fixed bottom-8 right-8 w-14 h-14 bg-[#5e5e5e] text-white rounded-full shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center z-50">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
      </button>
    </div>
  );
}
