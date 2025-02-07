import React from "react";
import { Card } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface PostProps {
  username?: string;
  avatar?: string;
  timestamp?: string;
  image?: string;
  content?: string;
  likes?: number;
  comments?: number;
  shares?: number;
}

const Post = ({
  username = "John Doe",
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  timestamp = "2 hours ago",
  image = "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
  content = "Just another beautiful day! 🌞 #lifestyle",
  likes = 42,
  comments = 12,
  shares = 3,
}: PostProps) => {
  return (
    <Card className="w-full max-w-[600px] mb-4 bg-white">
      <div className="p-4">
        {/* Post Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <img src={avatar} alt={username} className="object-cover" />
            </Avatar>
            <div>
              <h3 className="font-semibold">{username}</h3>
              <p className="text-sm text-gray-500">{timestamp}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Save Post</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Unfollow</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Post Content */}
        <p className="mb-4">{content}</p>

        {/* Post Image */}
        <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden">
          <img
            src={image}
            alt="Post content"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Post Actions */}
        <div className="flex items-center justify-between pt-2 border-t">
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            <span>{shares}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Post;
