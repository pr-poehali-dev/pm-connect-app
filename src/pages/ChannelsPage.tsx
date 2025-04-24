
import React from "react";
import ChannelTabs from "@/components/channels/ChannelTabs";
import { 
  GamepadIcon, 
  Bike, 
  Film, 
  BookOpen, 
  Code 
} from "lucide-react";
import { 
  gameChannels, 
  sportChannels, 
  entertainmentChannels, 
  educationChannels, 
  technologyChannels 
} from "@/data/channelsData";

const ChannelsPage = () => {
  const categoryData = {
    games: {
      channels: gameChannels,
      icon: <GamepadIcon className="w-5 h-5" />
    },
    sport: {
      channels: sportChannels,
      icon: <Bike className="w-5 h-5" />
    },
    entertainment: {
      channels: entertainmentChannels,
      icon: <Film className="w-5 h-5" />
    },
    education: {
      channels: educationChannels,
      icon: <BookOpen className="w-5 h-5" />
    },
    technology: {
      channels: technologyChannels,
      icon: <Code className="w-5 h-5" />
    }
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Тематические каналы</h1>
        <p className="text-muted-foreground">
          Выберите интересующую категорию и присоединяйтесь к сообществам единомышленников
        </p>
      </header>
      
      <ChannelTabs categories={categoryData} />
    </div>
  );
};

export default ChannelsPage;
