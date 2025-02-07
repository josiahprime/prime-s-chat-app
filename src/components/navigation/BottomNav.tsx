import React from "react";
import { Home, Bell, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const BottomNav = ({
  activeTab = "feed",
  onTabChange = () => {},
}: BottomNavProps) => {
  const navItems: NavItem[] = [
    {
      icon: <Home className="h-6 w-6" />,
      label: "Feed",
      isActive: activeTab === "feed",
      onClick: () => onTabChange("feed"),
    },
    {
      icon: <Bell className="h-6 w-6" />,
      label: "Notifications",
      isActive: activeTab === "notifications",
      onClick: () => onTabChange("notifications"),
    },
    {
      icon: <User className="h-6 w-6" />,
      label: "Profile",
      isActive: activeTab === "profile",
      onClick: () => onTabChange("profile"),
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      label: "Chat",
      isActive: activeTab === "chat",
      onClick: () => onTabChange("chat"),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border h-16 px-4 flex items-center justify-around">
      {navItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className={cn(
            "flex flex-col items-center gap-1 h-14 w-14 p-0",
            item.isActive && "text-primary",
          )}
          onClick={item.onClick}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </Button>
      ))}
    </nav>
  );
};

export default BottomNav;
