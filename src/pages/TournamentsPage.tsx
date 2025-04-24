
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, CalendarDays, Users } from "lucide-react";

const TournamentsPage = () => {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Киберспортивные турниры</h1>
        <p className="text-muted-foreground">Следите за актуальными турнирами и соревнованиями по вашим любимым играм</p>
      </header>
      
      <Tabs defaultValue="dota2" className="w-full">
        <TabsList className="w-full justify-start mb-6 overflow-x-auto">
          <TabsTrigger value="dota2">Dota 2</TabsTrigger>
          <TabsTrigger value="cs2">Counter-Strike 2</TabsTrigger>
          <TabsTrigger value="lol">League of Legends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dota2" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dota2Tournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="cs2" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cs2Tournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="lol" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lolTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface Tournament {
  id: number;
  title: string;
  description: string;
  date: string;
  teams: number;
  prizePool: string;
  imageUrl: string;
}

const TournamentCard = ({ tournament }: { tournament: Tournament }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
        <img 
          src={tournament.imageUrl || "/placeholder.svg"} 
          alt={tournament.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>
      <CardHeader>
        <CardTitle>{tournament.title}</CardTitle>
        <CardDescription>{tournament.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm">
          <CalendarDays className="w-4 h-4 mr-2 text-purple-600" />
          <span>{tournament.date}</span>
        </div>
        <div className="flex items-center text-sm">
          <Users className="w-4 h-4 mr-2 text-purple-600" />
          <span>{tournament.teams} команд</span>
        </div>
        <div className="flex items-center text-sm">
          <Trophy className="w-4 h-4 mr-2 text-purple-600" />
          <span>Призовой фонд: {tournament.prizePool}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">Присоединиться к каналу</Button>
      </CardFooter>
    </Card>
  );
};

const dota2Tournaments: Tournament[] = [
  {
    id: 1,
    title: "The International 2023",
    description: "Крупнейший ежегодный чемпионат по Dota 2",
    date: "15-29 октября 2023",
    teams: 20,
    prizePool: "$40,000,000",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "ESL One Stockholm",
    description: "Мейджор-турнир с участием лучших команд мира",
    date: "20-30 мая 2023",
    teams: 16,
    prizePool: "$1,000,000",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "DreamLeague Season 19",
    description: "Регулярный сезон профессиональной лиги",
    date: "10-25 июня 2023",
    teams: 12,
    prizePool: "$500,000",
    imageUrl: "/placeholder.svg"
  }
];

const cs2Tournaments: Tournament[] = [
  {
    id: 4,
    title: "CS2 Major Berlin",
    description: "Первый мейджор турнир по Counter-Strike 2",
    date: "5-17 ноября 2023",
    teams: 24,
    prizePool: "$1,250,000",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "BLAST Premier: Fall Finals",
    description: "Финальный этап осеннего сезона",
    date: "10-12 декабря 2023",
    teams: 8,
    prizePool: "$425,000",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "ESL Pro League Season 18",
    description: "Профессиональная лига для топовых команд",
    date: "15-30 сентября 2023",
    teams: 24,
    prizePool: "$835,000",
    imageUrl: "/placeholder.svg"
  }
];

const lolTournaments: Tournament[] = [
  {
    id: 7,
    title: "LoL World Championship",
    description: "Чемпионат мира по League of Legends",
    date: "1-28 октября 2023",
    teams: 22,
    prizePool: "$2,225,000",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 8,
    title: "Mid-Season Invitational",
    description: "Международный турнир середины сезона",
    date: "2-21 мая 2023",
    teams: 13,
    prizePool: "$250,000",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 9,
    title: "LEC Spring Split",
    description: "Европейская лига - весенний сезон",
    date: "11 января - 6 марта 2023",
    teams: 10,
    prizePool: "$200,000",
    imageUrl: "/placeholder.svg"
  }
];

export default TournamentsPage;
