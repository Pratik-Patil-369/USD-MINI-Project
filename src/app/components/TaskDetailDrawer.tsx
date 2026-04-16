import { useApp } from '../context/AppContext';

export function TaskDetailDrawer() {
  const { selectedTask, setSelectedTask, showTaskDetail, setShowTaskDetail, updateTask, teamMembers, tasks } = useApp();

  if (!showTaskDetail || !selectedTask) return null;

  const handleClose = () => {
    setShowTaskDetail(false);
    setSelectedTask(null);
  };

  const handleUpdateStatus = (newStatus: string) => {
    updateTask(selectedTask.id, { status: newStatus as any });
    setSelectedTask({ ...selectedTask, status: newStatus as any });
  };

  const handleUpdatePriority = (newPriority: string) => {
    updateTask(selectedTask.id, { priority: newPriority as any });
    setSelectedTask({ ...selectedTask, priority: newPriority as any });
  };

  const handleUpdateAssignee = (newAssignee: string) => {
    const member = teamMembers.find(m => m.name === newAssignee);
    updateTask(selectedTask.id, { assignee: newAssignee, avatar: member?.avatar || 'UN' });
    setSelectedTask({ ...selectedTask, assignee: newAssignee, avatar: member?.avatar || 'UN' });
  };

  // Find dependent tasks
  const dependentTasks = selectedTask.dependencies 
    ? tasks.filter(t => selectedTask.dependencies?.includes(t.id))
    : [];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-in fade-in duration-200"
        onClick={handleClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-[480px] bg-white dark:bg-[#151821] shadow-2xl z-50 overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-[#151821] border-b border-[#acb3b8]/10 dark:border-white/5 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-lg font-bold text-[#2d3338] dark:text-[#f3f4f6]">Task Details</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Task Title */}
          <div>
            <h3 className="text-xl font-bold text-[#2d3338] dark:text-[#f3f4f6] mb-2">{selectedTask.title}</h3>
            {selectedTask.isOverdue && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#9f403d]/10 text-[#9f403d] rounded text-xs font-bold">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
                {selectedTask.deadline}
              </div>
            )}
            {selectedTask.isBlocked && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#9f403d]/10 text-[#9f403d] rounded text-xs font-bold ml-2">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
                </svg>
                Blocked
              </div>
            )}
          </div>

          {/* Description */}
          {selectedTask.description && (
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
                Description
              </label>
              <p className="text-sm text-[#2d3338] dark:text-[#f3f4f6] leading-relaxed">{selectedTask.description}</p>
            </div>
          )}

          {/* Status */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
              Status
            </label>
            <select
              value={selectedTask.status}
              onChange={(e) => handleUpdateStatus(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#acb3b8]/20 dark:border-white/10 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0055d7]/40 focus:border-[#0055d7]/40"
            >
              <option value="backlog">Backlog</option>
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
              Priority
            </label>
            <div className="flex gap-2">
              {['HIGH', 'MED', 'LOW'].map((priority) => (
                <button
                  key={priority}
                  onClick={() => handleUpdatePriority(priority)}
                  className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    selectedTask.priority === priority
                      ? priority === 'HIGH' ? 'bg-[#9f403d] text-white' :
                        priority === 'MED' ? 'bg-[#835600] text-white' :
                        'bg-[#596065] text-white'
                      : 'bg-[#f2f4f6] dark:bg-[#1e2230] text-[#596065] dark:text-[#9ca3af] hover:bg-[#e4e9ee] dark:bg-[#262b3a]'
                  }`}
                >
                  {priority}
                </button>
              ))}
            </div>
          </div>

          {/* Assignee */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
              Assignee
            </label>
            <select
              value={selectedTask.assignee}
              onChange={(e) => handleUpdateAssignee(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#acb3b8]/20 dark:border-white/10 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0055d7]/40 focus:border-[#0055d7]/40"
            >
              <option value="Unassigned">Unassigned</option>
              {teamMembers.map(member => (
                <option key={member.id} value={member.name}>
                  {member.name}
                </option>
              ))}
            </select>
            
            {/* Assignee Card */}
            {selectedTask.assignee !== 'Unassigned' && (
              <div className="mt-3 p-3 bg-[#f2f4f6] dark:bg-[#1e2230] rounded-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-xs font-bold text-[#2d3338] dark:text-[#f3f4f6]">
                  {selectedTask.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6]">{selectedTask.assignee}</p>
                  <p className="text-xs text-[#596065] dark:text-[#9ca3af]">
                    {teamMembers.find(m => m.name === selectedTask.assignee)?.workload}% workload
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
              Deadline
            </label>
            <div className="flex items-center gap-2 px-4 py-2.5 border border-[#acb3b8]/20 dark:border-white/10 rounded-lg">
              <svg className="w-4 h-4 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              <span className="text-sm font-semibold text-[#2d3338] dark:text-[#f3f4f6]">{selectedTask.deadline || 'No deadline set'}</span>
            </div>
          </div>

          {/* Dependencies */}
          {dependentTasks.length > 0 && (
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
                Dependencies ({dependentTasks.length})
              </label>
              <div className="space-y-2">
                {dependentTasks.map(task => (
                  <div key={task.id} className="p-3 bg-[#f2f4f6] dark:bg-[#1e2230] rounded-lg border border-[#acb3b8]/10 dark:border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-bold text-[#2d3338] dark:text-[#f3f4f6]">{task.title}</p>
                      <span className={`text-[8px] font-black px-2 py-0.5 rounded ${
                        task.priority === 'HIGH' ? 'bg-[#9f403d]/10 text-[#9f403d]' :
                        task.priority === 'MED' ? 'bg-[#835600]/10 text-[#835600]' :
                        'bg-[#acb3b8]/10 text-[#596065] dark:text-[#9ca3af]'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[7px] font-bold text-[#2d3338] dark:text-[#f3f4f6]">
                        {task.avatar}
                      </div>
                      <span className="text-[10px] text-[#596065] dark:text-[#9ca3af]">{task.assignee}</span>
                      <span className="text-[10px] text-[#596065] dark:text-[#9ca3af]">•</span>
                      <span className="text-[10px] text-[#596065] dark:text-[#9ca3af]">{task.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activity Timeline */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-3">
              Activity
            </label>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6] flex-shrink-0">
                  {selectedTask.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#2d3338] dark:text-[#f3f4f6]">
                    <span className="font-bold">{selectedTask.assignee}</span> is assigned to this task
                  </p>
                  <p className="text-[10px] text-[#596065] dark:text-[#9ca3af] mt-0.5">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0055d7] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#2d3338] dark:text-[#f3f4f6]">Task created</p>
                  <p className="text-[10px] text-[#596065] dark:text-[#9ca3af] mt-0.5">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white dark:bg-[#151821] border-t border-[#acb3b8]/10 dark:border-white/5 px-6 py-4">
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2.5 bg-[#f2f4f6] dark:bg-[#1e2230] text-[#596065] dark:text-[#9ca3af] text-sm font-bold rounded-lg hover:bg-[#e4e9ee] dark:bg-[#262b3a] transition-colors">
              Delete Task
            </button>
            <button 
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 bg-[#5e5e5e] text-white text-sm font-bold rounded-lg hover:brightness-110 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
