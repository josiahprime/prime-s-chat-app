import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Smile, Paperclip, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  isSelf: boolean;
}

interface ChatWindowProps {
  messages?: Message[];
  activeChatUser?: {
    name: string;
    avatar: string;
    status: "online" | "offline";
  };
  onSendMessage?: (message: string) => void;
}

const defaultMessages: Message[] = [
  {
    id: "1",
    content: "Hey there! How are you?",
    sender: "John Doe",
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
  {
    id: "3",
    content: "Pretty good! Working on some new features.",
    sender: "John Doe",
    timestamp: "10:02 AM",
    isSelf: false,
  },
];

const defaultUser = {
  name: "John Doe",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  status: "online" as const,
};

const ChatWindow = ({
  messages = defaultMessages,
  activeChatUser = defaultUser,
  onSendMessage = () => {},
}: ChatWindowProps) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-200">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b border-gray-200">
        <Avatar className="h-10 w-10">
          <AvatarImage src={activeChatUser.avatar} />
          <AvatarFallback>{activeChatUser.name[0]}</AvatarFallback>
        </Avatar>
        <div className="ml-4 flex-1">
          <h3 className="text-sm font-semibold">{activeChatUser.name}</h3>
          <div className="flex items-center">
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                activeChatUser.status === "online"
                  ? "bg-green-500"
                  : "bg-gray-400"
              }`}
            />
            <span className="text-xs text-gray-500">
              {activeChatUser.status}
            </span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isSelf ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.isSelf
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <span className="text-xs mt-1 block opacity-70">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Smile className="h-5 w-5 text-gray-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Add emoji</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Paperclip className="h-5 w-5 text-gray-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Attach file</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="h-9 w-9"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Send message</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
