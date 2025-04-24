
import { Outlet, NavLink } from "react-router-dom";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { HomeIcon, Trophy, Newspaper, Radio, Users, Gamepad2, Football } from "lucide-react";
import ChannelsSidebar from "./ChannelsSidebar";

const MainLayout = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full overflow-hidden bg-sidebar">
        <Sidebar>
          <SidebarHeader className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Связь PM</h1>
          </SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <NavLink to="/" end className={({isActive}) => isActive ? "w-full" : ""}>
                  {({isActive}) => (
                    <SidebarMenuButton isActive={isActive} tooltip="Главная">
                      <HomeIcon className="h-5 w-5" />
                      <span>Главная</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <NavLink to="/subscriptions" className={({isActive}) => isActive ? "w-full" : ""}>
                  {({isActive}) => (
                    <SidebarMenuButton isActive={isActive} tooltip="Подписки">
                      <Users className="h-5 w-5" />
                      <span>Подписки</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <NavLink to="/tournaments" className={({isActive}) => isActive ? "w-full" : ""}>
                  {({isActive}) => (
                    <SidebarMenuButton isActive={isActive} tooltip="Турниры">
                      <Trophy className="h-5 w-5" />
                      <span>Турниры</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <NavLink to="/news" className={({isActive}) => isActive ? "w-full" : ""}>
                  {({isActive}) => (
                    <SidebarMenuButton isActive={isActive} tooltip="Новости">
                      <Newspaper className="h-5 w-5" />
                      <span>Новости</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <NavLink to="/channels" className={({isActive}) => isActive ? "w-full" : ""}>
                  {({isActive}) => (
                    <SidebarMenuButton isActive={isActive} tooltip="Каналы">
                      <Radio className="h-5 w-5" />
                      <span>Каналы</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="flex">
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
          <ChannelsSidebar />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
