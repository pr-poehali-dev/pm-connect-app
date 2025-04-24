
import { 
  Gamepad2, 
  Football,
  Music,
  Utensils,
  PlayCircle,
  MessageCircle,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ChannelsSidebar = () => {
  return (
    <div className="w-16 flex flex-col items-center py-4 bg-sidebar-accent border-l border-sidebar-border">
      <h3 className="text-xs text-sidebar-foreground/70 mb-2">Мои каналы</h3>
      
      <div className="flex flex-col gap-3 items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200">
              <Gamepad2 className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Киберспорт
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full bg-green-100 text-green-600 hover:bg-green-200">
              <Football className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Спорт
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200">
              <Music className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Музыка
          </TooltipContent>
        </Tooltip>
        
        <Separator className="my-2" />
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Чаты
          </TooltipContent>
        </Tooltip>
        
        <Separator className="my-2" />
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <Plus className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Создать канал
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default ChannelsSidebar;
