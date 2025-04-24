
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Headphones, Radio, Trophy, MessageCircle } from "lucide-react";

const HomePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать в Связь PM</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ваша платформа для общения, звонков и отслеживания киберспортивных событий
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="hover-scale">
          <CardHeader>
            <div className="rounded-full w-12 h-12 bg-purple-100 flex items-center justify-center mb-2">
              <Headphones className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle>Голосовые каналы</CardTitle>
            <CardDescription>Общайтесь с друзьями в голосовых чатах</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Создавайте приватные и публичные голосовые каналы с кристально чистым звуком.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Начать звонок</Button>
          </CardFooter>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <div className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-2">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle>Текстовые каналы</CardTitle>
            <CardDescription>Общайтесь с сообществом по интересам</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Присоединяйтесь к существующим каналам или создавайте свои собственные тематические обсуждения.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Исследовать каналы</Button>
          </CardFooter>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <div className="rounded-full w-12 h-12 bg-amber-100 flex items-center justify-center mb-2">
              <Trophy className="h-6 w-6 text-amber-600" />
            </div>
            <CardTitle>Киберспорт</CardTitle>
            <CardDescription>Следите за турнирами и соревнованиями</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Будьте в курсе всех киберспортивных событий и обсуждайте их с другими фанатами.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Смотреть турниры</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Создайте свой канал прямо сейчас</h2>
          <p className="text-muted-foreground max-w-md">
            Объединяйте единомышленников и создавайте активное сообщество вокруг ваших интересов
          </p>
        </div>
        <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
          Создать канал
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
