import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import Post from "./Post";

interface FeedPost {
  id: string;
  username: string;
  avatar: string;
  timestamp: string;
  image: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
}

interface FeedSectionProps {
  posts?: FeedPost[];
}

const defaultPosts: FeedPost[] = [
  {
    id: "1",
    username: "Sarah Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    timestamp: "2 hours ago",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    content: "Enjoying a beautiful sunset at the beach! 🌅 #beachlife #sunset",
    likes: 128,
    comments: 24,
    shares: 5,
  },
  {
    id: "2",
    username: "Mike Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    timestamp: "4 hours ago",
    image: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f",
    content: "Just finished my morning workout! 💪 #fitness #motivation",
    likes: 85,
    comments: 12,
    shares: 2,
  },
  {
    id: "3",
    username: "Emily Davis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    timestamp: "6 hours ago",
    image: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931",
    content: "Trying out this new cafe downtown! ☕️ #coffeelover #citylife",
    likes: 156,
    comments: 18,
    shares: 4,
  },
];

const FeedSection = ({ posts = defaultPosts }: FeedSectionProps) => {
  return (
    <div className="w-full max-w-[800px] h-full bg-gray-50">
      <ScrollArea className="h-full px-4 py-6">
        <div className="space-y-6">
          {posts.map((post) => (
            <Post
              key={post.id}
              username={post.username}
              avatar={post.avatar}
              timestamp={post.timestamp}
              image={post.image}
              content={post.content}
              likes={post.likes}
              comments={post.comments}
              shares={post.shares}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FeedSection;
