import { useState } from 'react';
import { useApp } from '../context/AppContext';

export function RebalanceModal() {
  const { showRebalanceModal, setShowRebalanceModal, tasks, teamMembers, reassignTask, updateTeamMember, setShowTaskDetail } = useApp();
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);

  if (!showRebalanceModal) return null;

  // Find Sarah's overloaded tasks
  const sarahTasks = tasks.filter(t => t.assignee === 'Sarah Chen' && t.status === 'todo');
  const suggestions = sarahTasks.slice(0, 2); // UI Kit Implementation and Responsive Design QA

  const handleToggleSuggestion = (taskId: string) => {
    setSelectedSuggestions(prev =>
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const handleConfirm = () => {
    // Reassign selected tasks
    selectedSuggestions.forEach(taskId => {
      reassignTask(taskId, 'Marcus Thorne');
    });

    // Update workload percentages
    const sarah = teamMembers.find(m => m.name === 'Sarah Chen');
    const marcus = teamMembers.find(m => m.name === 'Marcus Thorne');
    
    if (sarah && marcus) {
      const taskCount = selectedSuggestions.length;
      const workloadReduction = taskCount * 20; // 20% per task simplified
      
      updateTeamMember(sarah.id, { workload: Math.max(0, sarah.workload - workloadReduction) });
      updateTeamMember(marcus.id, { workload: Math.min(100, marcus.workload + workloadReduction) });
    }

    setShowRebalanceModal(false);
    setSelectedSuggestions([]);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#151821] rounded-2xl shadow-2xl w-[600px] max-h-[80vh] overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#acb3b8]/10 dark:border-white/5 bg-[#f9f9fb] dark:bg-[#0c0e14]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#2d3338] dark:text-[#f3f4f6] mb-1">⚡ Rebalance Workload</h2>
              <p className="text-sm text-[#596065] dark:text-[#9ca3af]">Optimize team capacity to maintain velocity</p>
            </div>
            <button
              onClick={() => setShowRebalanceModal(false)}
              className="p-2 hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-[#596065] dark:text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {/* Problem Statement */}
          <div className="mb-6 p-4 bg-[#9f403d]/[0.05] border border-[#9f403d]/20 rounded-lg">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#9f403d] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <div>
                <p className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6] mb-1">Critical Issue Detected</p>
                <p className="text-xs text-[#596065] dark:text-[#9ca3af]">
                  Sarah Chen is operating at 100% capacity with 4 active tasks. This creates a bottleneck and risks sprint completion.
                </p>
              </div>
            </div>
          </div>

          {/* Suggested Rebalancing */}
          <div className="mb-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-3">Suggested Tasks to Reassign</h3>
            <div className="space-y-2">
              {suggestions.map(task => (
                <button
                  key={task.id}
                  onClick={() => handleToggleSuggestion(task.id)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedSuggestions.includes(task.id)
                      ? 'border-[#0055d7] bg-[#0055d7]/5'
                      : 'border-[#acb3b8]/20 dark:border-white/10 hover:border-[#acb3b8]/40'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedSuggestions.includes(task.id)
                        ? 'border-[#0055d7] bg-[#0055d7]'
                        : 'border-[#acb3b8]/40'
                    }`}>
                      {selectedSuggestions.includes(task.id) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#2d3338] dark:text-[#f3f4f6] mb-1">{task.title}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-[8px] font-black px-2 py-0.5 rounded ${
                          task.priority === 'HIGH' ? 'bg-[#9f403d]/10 text-[#9f403d]' :
                          task.priority === 'MED' ? 'bg-[#835600]/10 text-[#835600]' :
                          'bg-[#acb3b8]/10 text-[#596065] dark:text-[#9ca3af]'
                        }`}>
                          {task.priority}
                        </span>
                        <span className="text-[10px] text-[#596065] dark:text-[#9ca3af]">Due: {task.deadline}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Impact Preview */}
          <div className="mb-6 p-4 bg-[#f2f4f6] dark:bg-[#1e2230] rounded-lg">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#596065] dark:text-[#9ca3af] mb-3">Impact Preview</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* From: Sarah Chen */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6]">
                    SC
                  </div>
                  <span className="text-xs font-bold text-[#2d3338] dark:text-[#f3f4f6]">Sarah Chen</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-[#9f403d] font-bold">Current: 100%</span>
                    <span className="text-[#0055d7] font-bold">New: {100 - (selectedSuggestions.length * 20)}%</span>
                  </div>
                  <div className="w-full bg-[#e4e9ee] dark:bg-[#262b3a] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#0055d7] h-full transition-all duration-500" style={{ width: `${100 - (selectedSuggestions.length * 20)}%` }}></div>
                  </div>
                </div>
              </div>

              {/* To: Marcus Thorne */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#e4e9ee] dark:bg-[#262b3a] flex items-center justify-center text-[9px] font-bold text-[#2d3338] dark:text-[#f3f4f6]">
                    MT
                  </div>
                  <span className="text-xs font-bold text-[#2d3338] dark:text-[#f3f4f6]">Marcus Thorne</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-[#596065] dark:text-[#9ca3af] font-bold">Current: 38%</span>
                    <span className="text-[#0055d7] font-bold">New: {38 + (selectedSuggestions.length * 20)}%</span>
                  </div>
                  <div className="w-full bg-[#e4e9ee] dark:bg-[#262b3a] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#0055d7] h-full transition-all duration-500" style={{ width: `${38 + (selectedSuggestions.length * 20)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#acb3b8]/10 dark:border-white/5 bg-[#f9f9fb] dark:bg-[#0c0e14] flex items-center justify-between">
          <button
            onClick={() => setShowRebalanceModal(false)}
            className="px-4 py-2 text-sm font-bold text-[#596065] dark:text-[#9ca3af] hover:bg-[#e4e9ee] dark:bg-[#262b3a] rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={selectedSuggestions.length === 0}
            className={`px-6 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${
              selectedSuggestions.length === 0
                ? 'bg-[#acb3b8]/20 text-[#596065] dark:text-[#9ca3af]/50 cursor-not-allowed'
                : 'bg-[#5e5e5e] text-white hover:brightness-110 active:scale-95'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
            Confirm Rebalance ({selectedSuggestions.length})
          </button>
        </div>
      </div>
    </div>
  );
}
