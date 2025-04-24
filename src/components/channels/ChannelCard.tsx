
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Channel } from "@/types/channel";

interface ChannelCardProps {
  channel: Channel;
  icon: React.ReactNode;
}

const ChannelCard = ({ channel, icon }: ChannelCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
        <img 
          src={channel.imageUrl || "/placeholder.svg"} 
          alt={channel.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
            {icon}
          </div>
          <CardTitle>{channel.title}</CardTitle>
        </div>
        <CardDescription>{channel.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{channel.members} участников</p>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">Присоединиться</Button>
      </CardFooter>
    </Card>
  );
};

export default ChannelCard;
