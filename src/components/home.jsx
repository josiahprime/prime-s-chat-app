import React, { useState } from "react";
import MainLayout from "./layout/MainLayout";
import FeedSection from "./feed/FeedSection";
import ChatSection from "./chat/ChatSection";

const Home = ({ initialTab = "feed" }) => {
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
