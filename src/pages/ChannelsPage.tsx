
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GamepadIcon, 
  Trophy, 
  Music, 
  Film, 
  BookOpen, 
  Bike,  // Заменил Football на Bike
  Github, 
  Code 
} from "lucide-react";

const ChannelsPage = () => {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Тематические каналы</h1>
        <p className="text-muted-foreground">Выберите интересующую категорию и присоединяйтесь к сообществам единомышленников</p>
      </header>
      
      <Tabs defaultValue="games" className="w-full">
        <TabsList className="w-full justify-start mb-6 overflow-x-auto">
          <TabsTrigger value="games">Игры</TabsTrigger>
          <TabsTrigger value="sport">Спорт</TabsTrigger>
          <TabsTrigger value="entertainment">Развлечения</TabsTrigger>
          <TabsTrigger value="education">Образование</TabsTrigger>
          <TabsTrigger value="technology">Технологии</TabsTrigger>
        </TabsList>
        
        <TabsContent value="games" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} icon={<GamepadIcon className="w-5 h-5" />} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sport" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} icon={<Bike className="w-5 h-5" />} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="entertainment" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entertainmentChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} icon={<Film className="w-5 h-5" />} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="education" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} icon={<BookOpen className="w-5 h-5" />} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="technology" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} icon={<Code className="w-5 h-5" />} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface Channel {
  id: number;
  title: string;
  description: string;
  members: number;
  imageUrl: string;
}

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

const gameChannels: Channel[] = [
  {
    id: 1,
    title: "Dota 2 Россия",
    description: "Крупнейшее сообщество по Dota 2",
    members: 25600,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "CS2 Стратегии",
    description: "Тактики, стратегии и советы по игре",
    members: 12300,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Minecraft Строители",
    description: "Креативное сообщество строителей",
    members: 8700,
    imageUrl: "/placeholder.svg"
  }
];

const sportChannels: Channel[] = [
  {
    id: 4,
    title: "Футбол 24/7",
    description: "Обсуждение футбольных матчей и новостей",
    members: 15400,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "NBA фанаты",
    description: "Всё о баскетболе и NBA",
    members: 7800,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Боевые искусства",
    description: "Сообщество любителей единоборств",
    members: 5600,
    imageUrl: "/placeholder.svg"
  }
];

const entertainmentChannels: Channel[] = [
  {
    id: 7,
    title: "Кино и сериалы",
    description: "Обсуждение премьер и классики",
    members: 18900,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 8,
    title: "Музыкальные новинки",
    description: "Новые релизы и музыкальные тренды",
    members: 14200,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 9,
    title: "Аниме клуб",
    description: "Для любителей японской анимации",
    members: 11500,
    imageUrl: "/placeholder.svg"
  }
];

const educationChannels: Channel[] = [
  {
    id: 10,
    title: "Изучаем английский",
    description: "Разговорная практика и обучение",
    members: 9800,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 11,
    title: "История цивилизаций",
    description: "Для любителей истории и археологии",
    members: 7200,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 12,
    title: "Научпоп",
    description: "Научно-популярные темы и открытия",
    members: 8500,
    imageUrl: "/placeholder.svg"
  }
];

const technologyChannels: Channel[] = [
  {
    id: 13,
    title: "Frontend разработка",
    description: "React, Vue, Angular и другие фреймворки",
    members: 12700,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 14,
    title: "Machine Learning",
    description: "Искусственный интеллект и машинное обучение",
    members: 9300,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 15,
    title: "Киберзащита",
    description: "Безопасность и защита информации",
    members: 6800,
    imageUrl: "/placeholder.svg"
  }
];

export default ChannelsPage;
