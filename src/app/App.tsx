import { useState } from "react";
import { AppProvider } from "./context/AppContext";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { DashboardView } from "./components/DashboardView";
import { TaskBoardView } from "./components/TaskBoardView";
import { TeamResponsibilityView } from "./components/TeamResponsibilityView";
import { ProjectTimelineView } from "./components/ProjectTimelineView";
import { RebalanceModal } from "./components/RebalanceModal";
import { AddTaskModal } from "./components/AddTaskModal";
import { TaskDetailDrawer } from "./components/TaskDetailDrawer";

export default function App() {
  const [activeView, setActiveView] = useState<
    "dashboard" | "board" | "team" | "timeline"
  >("dashboard");

  const getHeaderProps = () => {
    switch (activeView) {
      case "dashboard":
        return {
          title: "Dashboard",
          subtitle: "Control Center",
          alertMessage: undefined,
        };
      case "board":
        return {
          title: "Task Board",
          subtitle: "Execution Layer",
          alertMessage: undefined,
        };
      case "team":
        return {
          title: "Team Responsibility",
          subtitle:
            "Real-time capacity and workload distribution overview",
          alertMessage: undefined,
        };
      case "timeline":
        return {
          title: "Project Timeline",
          subtitle: "Autonomous Rover Development • Q4 Sprint",
          alertMessage:
            "2 Critical tasks are blocking the Q4 Sprint completion.",
        };
    }
  };

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardView onNavigate={setActiveView} />;
      case "board":
        return <TaskBoardView />;
      case "team":
        return <TeamResponsibilityView />;
      case "timeline":
        return <ProjectTimelineView />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-[#f9f9fb] dark:bg-[#0c0e14] font-['Inter']">
        <Sidebar
          activeView={activeView}
          onViewChange={setActiveView}
        />
        <Header {...getHeaderProps()} />
        <main className="ml-[240px] mt-16 p-6 min-h-[calc(100vh-64px)]">
          {renderView()}
        </main>

        {/* Global Modals */}
        <RebalanceModal />
        <AddTaskModal />
        <TaskDetailDrawer />
      </div>
    </AppProvider>
  );
}