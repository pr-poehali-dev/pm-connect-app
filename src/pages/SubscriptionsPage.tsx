
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const SubscriptionsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Подписки</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Выберите подходящий план подписки и получите расширенные возможности
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="border-2 hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-xl">Базовый</CardTitle>
            <CardDescription>Для начинающих пользователей</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">Бесплатно</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Доступ к публичным каналам</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Базовые голосовые вызовы</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Просмотр турниров</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Текущий план</Button>
          </CardFooter>
        </Card>

        <Card className="border-2 border-purple-400 relative hover:shadow-lg transition-all">
          <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
            Популярный
          </div>
          <CardHeader>
            <CardTitle className="text-xl">Премиум</CardTitle>
            <CardDescription>Для активных пользователей</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">299₽</span>
              <span className="text-muted-foreground"> / месяц</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Все функции базового плана</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>HD качество звонков</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Создание до 5 каналов</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Эксклюзивные трансляции турниров</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">Оформить подписку</Button>
          </CardFooter>
        </Card>

        <Card className="border-2 hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-xl">Профессионал</CardTitle>
            <CardDescription>Для создателей контента</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">599₽</span>
              <span className="text-muted-foreground"> / месяц</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Все функции премиум плана</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Неограниченное создание каналов</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Приоритетная техподдержка</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Аналитика по вашим каналам</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Оформить подписку</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
