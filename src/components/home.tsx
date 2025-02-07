import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import FeedSection from "./feed/FeedSection";
import ChatSection from "./chat/ChatSection";
import { useAuth } from "@/hooks/useAuth";

interface HomeProps {
  initialTab?: string;
}

const Home = ({ initialTab = "feed" }: HomeProps) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <MainLayout activeTab={activeTab} onTabChange={setActiveTab}>
      <div className="flex h-[calc(100vh-64px)] bg-background">
        {/* Feed Section - Show when feed tab is active */}
        <div
          className={`w-full lg:w-[800px] transition-all duration-300 ${activeTab === "feed" ? "block" : "hidden lg:block"}`}
        >
          <FeedSection />
        </div>

        {/* Chat Section - Show when chat tab is active on mobile, always show on desktop */}
        <div
          className={`w-full lg:flex-1 transition-all duration-300 ${activeTab === "chat" ? "block" : "hidden lg:block"}`}
        >
          <ChatSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
