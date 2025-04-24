
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MessageSquare, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NewsPage = () => {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Новости киберспорта</h1>
        <p className="text-muted-foreground">Актуальные новости из мира киберспорта и игровой индустрии</p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        <FeaturedNews />
        
        <Separator className="my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedNews = () => {
  return (
    <Card className="border-none shadow-none bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="col-span-3 p-6">
          <Badge className="mb-4 bg-purple-600">Главная новость</Badge>
          <h2 className="text-3xl font-bold mb-4">Valve анонсирует радикальные изменения в формате The International</h2>
          <p className="mb-6 text-muted-foreground">
            Компания Valve объявила о значительном изменении формата проведения своего главного турнира по Dota 2 — The International. 
            Новая структура предусматривает несколько региональных квалификаций и расширенный групповой этап.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Василий Киберспортивный</p>
              <p className="text-sm text-muted-foreground">Опубликовано 2 часа назад</p>
            </div>
          </div>
          <Button>Читать полностью</Button>
        </div>
        <div className="col-span-2 lg:h-full h-60 bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
          <img 
            src="/placeholder.svg" 
            alt="The International" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
};

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  commentsCount: number;
}

const NewsCard = ({ newsItem }: { newsItem: NewsItem }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
        <img 
          src={newsItem.imageUrl || "/placeholder.svg"} 
          alt={newsItem.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="text-xs">{newsItem.category}</Badge>
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            {newsItem.date}
          </div>
        </div>
        <CardTitle className="text-xl">{newsItem.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">
          {newsItem.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarFallback>{newsItem.author.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{newsItem.author}</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MessageSquare className="w-4 h-4" />
            <span className="sr-only">Комментарии</span>
          </Button>
          <span className="text-xs text-muted-foreground">{newsItem.commentsCount}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="w-4 h-4" />
            <span className="sr-only">Поделиться</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Team Spirit выигрывает ESL One Berlin",
    excerpt: "Российская команда Team Spirit стала победителем турнира ESL One Berlin, обыграв в финале китайский коллектив PSG.LGD со счетом 3:1.",
    category: "Dota 2",
    author: "Иван Игровой",
    date: "Сегодня",
    imageUrl: "/placeholder.svg",
    commentsCount: 42
  },
  {
    id: 2,
    title: "Обновление CS2 добавляет новую карту",
    excerpt: "Последнее обновление Counter-Strike 2 добавляет новую карту 'Фавела' и вносит значительные изменения в баланс оружия.",
    category: "Counter-Strike 2",
    author: "Петр Патронов",
    date: "Сегодня",
    imageUrl: "/placeholder.svg",
    commentsCount: 28
  },
  {
    id: 3,
    title: "Расписание матчей LoL World Championship",
    excerpt: "Опубликовано полное расписание предстоящего чемпионата мира по League of Legends, который пройдет в Южной Корее.",
    category: "League of Legends",
    author: "Ольга Игрова",
    date: "Сегодня",
    imageUrl: "/placeholder.svg",
    commentsCount: 15
  },
  {
    id: 4,
    title: "NAVI анонсирует изменения в составе",
    excerpt: "Организация Natus Vincere объявила о изменениях в составе своей команды по CS2 после неудачного выступления на последнем Major-турнире.",
    category: "Counter-Strike 2",
    author: "Алексей Аимботов",
    date: "Сегодня",
    imageUrl: "/placeholder.svg",
    commentsCount: 56
  },
  {
    id: 5,
    title: "Новый герой в Dota 2",
    excerpt: "Valve представила тизер нового героя в Dota 2, который будет добавлен в игру с следующим большим обновлением.",
    category: "Dota 2",
    author: "Мария Мидова",
    date: "Сегодня",
    imageUrl: "/placeholder.svg",
    commentsCount: 33
  },
  {
    id: 6,
    title: "Турнир с рекордным призовым фондом",
    excerpt: "Организаторы объявили о проведении нового кибеспортивного турнира с призовым фондом в 10 миллионов долларов.",
    category: "Киберспорт",
    author: "Дмитрий Денежный",
    date: "Сегодня",
    imageUrl: "/placeholder.svg",
    commentsCount: 21
  }
];

export default NewsPage;
