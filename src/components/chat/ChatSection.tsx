import React from "react";
import ConversationsList from "./ConversationsList";
import ChatWindow from "./ChatWindow";

interface ChatSectionProps {
  onSelectConversation?: (id: string) => void;
  selectedConversationId?: string;
  conversations?: Array<{
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    unreadCount?: number;
    online?: boolean;
  }>;
  messages?: Array<{
    id: string;
    content: string;
    sender: string;
    timestamp: string;
    isSelf: boolean;
  }>;
  activeChatUser?: {
    name: string;
    avatar: string;
    status: "online" | "offline";
  };
  onSendMessage?: (message: string) => void;
}

const defaultConversations = [
  {
    id: "1",
    name: "Sarah Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    lastMessage: "Hey, how are you doing?",
    timestamp: "2m ago",
    unreadCount: 3,
    online: true,
  },
  {
    id: "2",
    name: "James Miller",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    lastMessage: "The meeting is scheduled for tomorrow",
    timestamp: "1h ago",
    online: false,
  },
];

const defaultMessages = [
  {
    id: "1",
    content: "Hey there! How are you?",
    sender: "Sarah Wilson",
    timestamp: "10:00 AM",
    isSelf: false,
  },
  {
    id: "2",
    content: "I'm doing great, thanks! How about you?",
    sender: "Me",
    timestamp: "10:01 AM",
    isSelf: true,
  },
];

const defaultActiveChatUser = {
  name: "Sarah Wilson",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  status: "online" as const,
};

const ChatSection = ({
  onSelectConversation = () => {},
  selectedConversationId = "1",
  conversations = defaultConversations,
  messages = defaultMessages,
  activeChatUser = defaultActiveChatUser,
  onSendMessage = () => {},
}: ChatSectionProps) => {
  return (
    <div className="flex h-full w-full bg-background">
      <ConversationsList
        conversations={conversations}
        onSelectConversation={onSelectConversation}
        selectedId={selectedConversationId}
      />
      <div className="flex-1">
        <ChatWindow
          messages={messages}
          activeChatUser={activeChatUser}
          onSendMessage={onSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatSection;
