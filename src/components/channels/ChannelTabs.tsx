
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChannelList from "./ChannelList";
import { Channel } from "@/types/channel";
import { 
  GamepadIcon, 
  Bike, 
  Film, 
  BookOpen, 
  Code 
} from "lucide-react";

interface CategoryData {
  channels: Channel[];
  icon: React.ReactNode;
}

interface ChannelTabsProps {
  categories: Record<string, CategoryData>;
}

const ChannelTabs = ({ categories }: ChannelTabsProps) => {
  const categoryLabels: Record<string, string> = {
    games: "Игры",
    sport: "Спорт",
    entertainment: "Развлечения",
    education: "Образование",
    technology: "Технологии"
  };

  return (
    <Tabs defaultValue="games" className="w-full">
      <TabsList className="w-full justify-start mb-6 overflow-x-auto">
        {Object.keys(categories).map((category) => (
          <TabsTrigger key={category} value={category}>
            {categoryLabels[category]}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {Object.entries(categories).map(([category, data]) => (
        <TabsContent key={category} value={category} className="space-y-6">
          <ChannelList channels={data.channels} icon={data.icon} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ChannelTabs;
