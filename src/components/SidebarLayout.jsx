import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator.jsx";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle.jsx";
import Navbar from "./Navbar";

export default function SidebarLayout({
  user,
  authenticated,
  onLogout,
  children,
}) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar
          user={user}
          authenticated={authenticated}
          onLogout={onLogout}
        />
        <div className="fixed w-full top-0 left-0 bg-transparent z-50">
            <div className="flex items-center gap-4 px-4 py-2">
              <div className="montserrat-alternates-regular antialiased text-2xl py-2">
                interview{" "}
                <span className="bg-gradient-to-r from-[#245395] via-[#874a9a] to-[#d0190f] dark:from-[#3980e3] dark:via-[#d280eb] dark:to-[#ea645d] text-transparent bg-clip-text">
                  valley
                </span>
              </div>
              <SidebarTrigger />
            </div>
        </div>
        <SidebarInset>
          
          <div className="h-screen bg-transparent overflow-auto">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
