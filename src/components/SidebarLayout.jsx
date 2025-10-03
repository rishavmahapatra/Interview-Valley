import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator.jsx";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle.jsx";

export default function SidebarLayout({ user, authenticated, onLogout, children }) {
  return (
    <SidebarProvider>
      <AppSidebar
        user={user}
        authenticated={authenticated}
        onLogout={onLogout}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="flex flex-1 items-center justify-between">
              <div className="montserrat-alternates-regular antialiased text-xl py-2">
                interview <span className="bg-gradient-to-r from-[#245395] via-[#874a9a] to-[#d0190f] dark:from-[#3980e3] dark:via-[#d280eb] dark:to-[#ea645d] text-transparent bg-clip-text">valley</span>
              </div>
              <ModeToggle className="shrink-0" />
            </div>
          </div>
        </header>
        <div className="h-screen bg-transparent overflow-auto">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}