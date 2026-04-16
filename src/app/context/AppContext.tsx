import { createContext, useContext, useState, ReactNode } from 'react';

export interface Task {
  id: string;
  title: string;
  priority: 'HIGH' | 'MED' | 'LOW';
  assignee: string;
  avatar: string;
  deadline: string;
  status: 'backlog' | 'todo' | 'inprogress' | 'review' | 'done' | 'blocked';
  description?: string;
  dependencies?: string[];
  isOverdue?: boolean;
  isBlocked?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  workload: number;
  tasks: Task[];
  overdueCount: number;
}

interface AppState {
  tasks: Task[];
  teamMembers: TeamMember[];
  selectedTask: Task | null;
  selectedAlert: string | null;
  highlightedTasks: string[];
  showRebalanceModal: boolean;
  showAddTaskModal: boolean;
  showTaskDetail: boolean;
}

interface AppContextType extends AppState {
  setSelectedTask: (task: Task | null) => void;
  setSelectedAlert: (alert: string | null) => void;
  setHighlightedTasks: (taskIds: string[]) => void;
  setShowRebalanceModal: (show: boolean) => void;
  setShowAddTaskModal: (show: boolean) => void;
  setShowTaskDetail: (show: boolean) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  reassignTask: (taskId: string, newAssignee: string) => void;
  updateTeamMember: (memberId: string, updates: Partial<TeamMember>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialTasks: Task[] = [
  { id: '1', title: 'Cloud Provider Setup', priority: 'LOW', assignee: 'Marcus Thorne', avatar: 'MT', deadline: 'Oct 28', status: 'backlog' },
  { id: '2', title: 'Testing Framework', priority: 'MED', assignee: 'Unassigned', avatar: 'UN', deadline: '', status: 'backlog' },
  { id: '3', title: 'Performance Benchmarks', priority: 'LOW', assignee: 'Alex Rivera', avatar: 'AR', deadline: 'Nov 2', status: 'backlog' },
  { id: '4', title: 'UI Kit Implementation', priority: 'HIGH', assignee: 'Sarah Chen', avatar: 'SC', deadline: 'Oct 18', status: 'todo', description: 'Build out the complete UI component library based on the design system.' },
  { id: '5', title: 'Responsive Design QA', priority: 'MED', assignee: 'Sarah Chen', avatar: 'SC', deadline: 'Oct 20', status: 'todo', description: 'Test responsive behavior across all device breakpoints.' },
  { id: '6', title: 'Security Audit', priority: 'HIGH', assignee: 'Marcus Thorne', avatar: 'MT', deadline: 'Oct 25', status: 'todo' },
  { id: '7', title: 'Stability Testing', priority: 'MED', assignee: 'Sarah Chen', avatar: 'SC', deadline: 'Oct 27', status: 'todo' },
  { id: '8', title: 'Frontend Architecture', priority: 'HIGH', assignee: 'Sarah Chen', avatar: 'SC', deadline: 'Oct 14', status: 'inprogress', description: 'Design and implement the core frontend architecture with state management.', dependencies: ['11'] },
  { id: '9', title: 'Infrastructure Setup', priority: 'HIGH', assignee: 'Rahul Sharma', avatar: 'RS', deadline: 'Oct 12', status: 'inprogress', description: 'Set up cloud infrastructure, CI/CD pipelines, and deployment automation.' },
  { id: '10', title: 'Sensor Calibration', priority: 'MED', assignee: 'Liam Foster', avatar: 'LF', deadline: 'Oct 16', status: 'inprogress' },
  { id: '11', title: 'Database Migration', priority: 'HIGH', assignee: 'Rahul Sharma', avatar: 'RS', deadline: 'Oct 15', status: 'review' },
  { id: '12', title: 'Chassis Prototyping', priority: 'HIGH', assignee: 'Sarah Chen', avatar: 'SC', deadline: 'Oct 22', status: 'review', dependencies: ['13'] },
  { id: '13', title: 'Conceptual Design', priority: 'HIGH', assignee: 'Alex Rivera', avatar: 'AR', deadline: 'Oct 10', status: 'done' },
  { id: '14', title: 'API Documentation', priority: 'MED', assignee: 'Rahul Sharma', avatar: 'RS', deadline: 'Overdue 3d', status: 'blocked', isOverdue: true, isBlocked: true, description: 'Complete API documentation for all endpoints.' },
  { id: '15', title: 'Power Module Assembly', priority: 'HIGH', assignee: 'Maria G.', avatar: 'MG', deadline: 'Overdue 1d', status: 'blocked', isOverdue: true, isBlocked: true, description: 'Assemble and test the power module for the autonomous rover.' },
];

const initialTeamMembers: TeamMember[] = [
  { id: '1', name: 'Rahul Sharma', avatar: 'RS', workload: 65, tasks: [], overdueCount: 2 },
  { id: '2', name: 'Sarah Chen', avatar: 'SC', workload: 100, tasks: [], overdueCount: 0 },
  { id: '3', name: 'Marcus Thorne', avatar: 'MT', workload: 38, tasks: [], overdueCount: 0 },
  { id: '4', name: 'Liam Foster', avatar: 'LF', workload: 45, tasks: [], overdueCount: 0 },
  { id: '5', name: 'Alex Rivera', avatar: 'AR', workload: 20, tasks: [], overdueCount: 0 },
  { id: '6', name: 'Maria G.', avatar: 'MG', workload: 55, tasks: [], overdueCount: 1 },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);
  const [highlightedTasks, setHighlightedTasks] = useState<string[]>([]);
  const [showRebalanceModal, setShowRebalanceModal] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showTaskDetail, setShowTaskDetail] = useState(false);

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ));
  };

  const addTask = (newTask: Omit<Task, 'id'>) => {
    const task: Task = {
      ...newTask,
      id: Date.now().toString(),
    };
    setTasks(prev => [...prev, task]);
  };

  const reassignTask = (taskId: string, newAssignee: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        const member = teamMembers.find(m => m.name === newAssignee);
        return { 
          ...task, 
          assignee: newAssignee,
          avatar: member?.avatar || task.avatar
        };
      }
      return task;
    }));
  };

  const updateTeamMember = (memberId: string, updates: Partial<TeamMember>) => {
    setTeamMembers(prev => prev.map(member =>
      member.id === memberId ? { ...member, ...updates } : member
    ));
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        teamMembers,
        selectedTask,
        selectedAlert,
        highlightedTasks,
        showRebalanceModal,
        showAddTaskModal,
        showTaskDetail,
        setSelectedTask,
        setSelectedAlert,
        setHighlightedTasks,
        setShowRebalanceModal,
        setShowAddTaskModal,
        setShowTaskDetail,
        updateTask,
        addTask,
        reassignTask,
        updateTeamMember,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
