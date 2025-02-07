import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  online?: boolean;
}

interface ConversationsListProps {
  conversations?: Conversation[];
  onSelectConversation?: (id: string) => void;
  selectedId?: string;
}

const defaultConversations: Conversation[] = [
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
  {
    id: "3",
    name: "Emma Thompson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    lastMessage: "Thanks for your help!",
    timestamp: "2h ago",
    unreadCount: 1,
    online: true,
  },
];

const ConversationsList = ({
  conversations = defaultConversations,
  onSelectConversation = () => {},
  selectedId = "1",
}: ConversationsListProps) => {
  return (
    <div className="h-full w-[280px] border-r bg-background">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Messages</h2>
      </div>

      <ScrollArea className="h-[calc(100%-65px)]">
        <div className="px-2">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-3 rounded-lg mb-2 cursor-pointer hover:bg-accent transition-colors ${
                selectedId === conversation.id ? "bg-accent" : ""
              }`}
              onClick={() => onSelectConversation(conversation.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage
                      src={conversation.avatar}
                      alt={conversation.name}
                    />
                    <AvatarFallback>
                      {conversation.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="font-medium truncate">{conversation.name}</p>
                    <span className="text-xs text-muted-foreground">
                      {conversation.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.lastMessage}
                  </p>
                </div>

                {conversation.unreadCount && conversation.unreadCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {conversation.unreadCount}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ConversationsList;
