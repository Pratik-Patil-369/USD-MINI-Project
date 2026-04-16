import { useState } from 'react';
import { useApp } from '../context/AppContext';

export function AddTaskModal() {
  const { showAddTaskModal, setShowAddTaskModal, addTask, teamMembers } = useApp();
  const [formData, setFormData] = useState({
    title: '',
    priority: 'MED' as 'HIGH' | 'MED' | 'LOW',
    assignee: 'Unassigned',
    deadline: '',
    status: 'backlog' as const,
    description: '',
  });

  if (!showAddTaskModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim()) return;

    const member = teamMembers.find(m => m.name === formData.assignee);
    const avatar = member?.avatar || 'UN';

    addTask({
      ...formData,
      avatar,
      title: formData.title.trim(),
    });

    // Reset form
    setFormData({
      title: '',
      priority: 'MED',
      assignee: 'Unassigned',
      deadline: '',
      status: 'backlog',
      description: '',
    });

    setShowAddTaskModal(false);
  };

  const handleClose = () => {
    setShowAddTaskModal(false);
    // Reset form
    setFormData({
      title: '',
      priority: 'MED',
      assignee: 'Unassigned',
      deadline: '',
      status: 'backlog',
      description: '',
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#151821] rounded-2xl shadow-2xl w-[520px] max-h-[80vh] overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#acb3b8]/10 dark:border-white/5 bg-[#f9f9fb] dark:bg-[#0c0e14]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#2d3338] dark:text-[#f3f4f6] mb-1">Add New Task</h2>
              <p className="text-sm text-[#596065] dark:text-[#9ca3af]">Create a task and assign it to a team member</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {/* Task Title */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
              Task Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter task title..."
              className="w-full px-4 py-2.5 border border-[#acb3b8]/20 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0055d7]/40 focus:border-[#0055d7]/40"
              autoFocus
            />
          </div>

          {/* Priority & Status Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Priority */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'HIGH' | 'MED' | 'LOW' })}
                className="w-full px-4 py-2.5 border border-[#acb3b8]/20 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0055d7]/40 focus:border-[#0055d7]/40"
              >
                <option value="HIGH">High</option>
                <option value="MED">Medium</option>
                <option value="LOW">Low</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-4 py-2.5 border border-[#acb3b8]/20 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0055d7]/40 focus:border-[#0055d7]/40"
              >
                <option value="backlog">Backlog</option>
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="review">Review</option>
              </select>
            </div>
          </div>

          {/* Assignee & Deadline Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Assignee */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
                Assignee
              </label>
              <select
                value={formData.assignee}
                onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#acb3b8]/20 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0055d7]/40 focus:border-[#0055d7]/40"
              >
                <option value="Unassigned">Unassigned</option>
                {teamMembers.map(member => (
                  <option key={member.id} value={member.name}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
                Deadline
              </label>
              <input
                type="text"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                placeholder="e.g., Oct 28"
                className="w-full px-4 py-2.5 border border-[#acb3b8]/20 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0055d7]/40 focus:border-[#0055d7]/40"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Add task description..."
              rows={3}
              className="w-full px-4 py-2.5 border border-[#acb3b8]/20 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0055d7]/40 focus:border-[#0055d7]/40 resize-none"
            />
          </div>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#acb3b8]/10 dark:border-white/5 bg-[#f9f9fb] dark:bg-[#0c0e14] flex items-center justify-between">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-sm font-bold text-[#596065] dark:text-[#9ca3af] hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!formData.title.trim()}
            className={`px-6 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${
              !formData.title.trim()
                ? 'bg-[#acb3b8]/20 text-[#596065] dark:text-[#9ca3af]/50 cursor-not-allowed'
                : 'bg-[#5e5e5e] text-white hover:brightness-110 active:scale-95'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
