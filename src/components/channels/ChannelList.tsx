
import React from "react";
import ChannelCard from "./ChannelCard";
import { Channel } from "@/types/channel";

interface ChannelListProps {
  channels: Channel[];
  icon: React.ReactNode;
}

const ChannelList = ({ channels, icon }: ChannelListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {channels.map((channel) => (
        <ChannelCard key={channel.id} channel={channel} icon={icon} />
      ))}
    </div>
  );
};

export default ChannelList;
