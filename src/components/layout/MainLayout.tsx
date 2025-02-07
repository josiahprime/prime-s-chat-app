import React from "react";
import BottomNav from "../navigation/BottomNav";
import TopNav from "../navigation/TopNav";

interface MainLayoutProps {
  children?: React.ReactNode;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const MainLayout = ({
  children,
  activeTab = "feed",
  onTabChange = () => {},
}: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation - Only visible on desktop */}
      <TopNav activeTab={activeTab} onTabChange={onTabChange} />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>

      {/* Bottom Navigation - Only visible on mobile */}
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};

export default MainLayout;
