
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Gamepad2, Trophy, SoccerBall, Music, Video, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ChannelsPage = () => {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Каналы</h1>
        <p className="text-muted-foreground">Присоединяйтесь к тематическим каналам и общайтесь с единомышленниками</p>
      </header>
      
      <Tabs defaultValue="games" className="w-full">
        <TabsList className="w-full justify-start mb-6 overflow-x-auto">
          <TabsTrigger value="games" className="flex items-center gap-2">
            <Gamepad2 className="w-4 h-4" />
            <span>Игры</span>
          </TabsTrigger>
          <TabsTrigger value="esports" className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span>Киберспорт</span>
          </TabsTrigger>
          <TabsTrigger value="sports" className="flex items-center gap-2">
            <SoccerBall className="w-4 h-4" />
            <span>Спорт</span>
          </TabsTrigger>
          <TabsTrigger value="music" className="flex items-center gap-2">
            <Music className="w-4 h-4" />
            <span>Музыка</span>
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            <span>Видео и стримы</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="games" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamesChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="esports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {esportsChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="music" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="video" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 p-6 rounded-lg mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Создайте свой канал</h2>
            <p className="text-muted-foreground max-w-lg">
              Хотите обсудить то, что интересно именно вам? Создайте собственный канал и пригласите друзей!
            </p>
          </div>
          <Button size="lg" className="min-w-[150px]">Создать канал</Button>
        </div>
      </div>
    </div>
  );
};

interface Channel {
  id: number;
  name: string;
  description: string;
  members: number;
  category: string;
  imageUrl: string;
  isPopular?: boolean;
  isNew?: boolean;
}

const ChannelCard = ({ channel }: { channel: Channel }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-32 bg-gradient-to-r from-purple-400 to-blue-500 relative flex items-center justify-center">
        <img 
          src={channel.imageUrl || "/placeholder.svg"} 
          alt={channel.name} 
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
        {channel.isPopular && (
          <Badge className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600">
            <Heart className="w-3 h-3 mr-1" />
            Популярный
          </Badge>
        )}
        {channel.isNew && (
          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
            Новый
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{channel.name}</span>
          <Badge variant="outline">{channel.category}</Badge>
        </CardTitle>
        <CardDescription>{channel.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm">
          <Users className="w-4 h-4 mr-2 text-purple-600" />
          <span>{channel.members.toLocaleString()} участников</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">Присоединиться</Button>
      </CardFooter>
    </Card>
  );
};

const gamesChannels: Channel[] = [
  {
    id: 101,
    name: "Dota 2 Сообщество",
    description: "Канал для любителей Dota 2",
    members: 15423,
    category: "MOBA",
    imageUrl: "/placeholder.svg",
    isPopular: true
  },
  {
    id: 102,
    name: "CS2 Стратегии",
    description: "Тактики, стратегии и советы для Counter-Strike 2",
    members: 12754,
    category: "FPS",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 103,
    name: "Minecraft Строители",
    description: "Обсуждение строительства и выживания в Minecraft",
    members: 8932,
    category: "Песочница",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 104,
    name: "League of Legends",
    description: "Всё о LoL: герои, тактики, турниры",
    members: 10289,
    category: "MOBA",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 105,
    name: "Valorant тактики",
    description: "Обсуждение агентов, карт и стратегий в Valorant",
    members: 6845,
    category: "FPS",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 106,
    name: "Fortnite Squad",
    description: "Ищем команду для игры в Fortnite",
    members: 7632,
    category: "Battle Royale",
    imageUrl: "/placeholder.svg"
  }
];

const esportsChannels: Channel[] = [
  {
    id: 201,
    name: "The International",
    description: "Обсуждение главного турнира года по Dota 2",
    members: 11235,
    category: "Dota 2",
    imageUrl: "/placeholder.svg",
    isPopular: true
  },
  {
    id: 202,
    name: "CS2 Major",
    description: "Трансляции и обсуждения мейджор-турниров CS2",
    members: 9876,
    category: "Counter-Strike 2",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 203,
    name: "LoL Worlds",
    description: "Всё о чемпионате мира по League of Legends",
    members: 8521,
    category: "League of Legends",
    imageUrl: "/placeholder.svg"
  }
];

const sportsChannels: Channel[] = [
  {
    id: 301,
    name: "Футбол",
    description: "Обсуждение матчей, трансферов и футбольных новостей",
    members: 9145,
    category: "Спорт",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 302,
    name: "Баскетбол NBA",
    description: "Фанатский канал NBA",
    members: 7523,
    category: "Спорт",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 303,
    name: "Хоккей",
    description: "КХЛ, НХЛ и международные турниры",
    members: 5842,
    category: "Спорт",
    imageUrl: "/placeholder.svg"
  }
];

const musicChannels: Channel[] = [
  {
    id: 401,
    name: "Рок музыка",
    description: "Для любителей рок-музыки всех направлений",
    members: 6328,
    category: "Музыка",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 402,
    name: "Электронная музыка",
    description: "EDM, house, techno и другие направления",
    members: 7842,
    category: "Музыка",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 403,
    name: "Музыкальные новинки",
    description: "Обсуждение новых релизов и музыкальных трендов",
    members: 4523,
    category: "Музыка",
    imageUrl: "/placeholder.svg",
    isNew: true
  }
];

const videoChannels: Channel[] = [
  {
    id: 501,
    name: "Стримеры",
    description: "Обсуждение популярных стримеров и их контента",
    members: 8423,
    category: "Стриминг",
    imageUrl: "/placeholder.svg",
    isPopular: true
  },
  {
    id: 502,
    name: "YouTube новинки",
    description: "Делимся интересными видео и каналами",
    members: 7125,
    category: "Видео",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 503,
    name: "Киноманы",
    description: "Обсуждение фильмов, сериалов и кинопремьер",
    members: 9245,
    category: "Кино",
    imageUrl: "/placeholder.svg"
  }
];

export default ChannelsPage;
