import React from "react";
import { Home, Bell, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TopNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const TopNav = ({
  activeTab = "feed",
  onTabChange = () => {},
}: TopNavProps) => {
  const navItems = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Feed",
      isActive: activeTab === "feed",
      onClick: () => onTabChange("feed"),
    },
    {
      icon: <Bell className="h-5 w-5" />,
      label: "Notifications",
      isActive: activeTab === "notifications",
      onClick: () => onTabChange("notifications"),
    },
    {
      icon: <User className="h-5 w-5" />,
      label: "Profile",
      isActive: activeTab === "profile",
      onClick: () => onTabChange("profile"),
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Chat",
      isActive: activeTab === "chat",
      onClick: () => onTabChange("chat"),
    },
  ];

  return (
    <nav className="hidden lg:flex h-16 bg-background border-b border-border px-4 items-center justify-center gap-2">
      {navItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className={cn(
            "flex items-center gap-2 h-10",
            item.isActive && "bg-accent",
          )}
          onClick={item.onClick}
        >
          {item.icon}
          <span>{item.label}</span>
        </Button>
      ))}
    </nav>
  );
};

export default TopNav;
