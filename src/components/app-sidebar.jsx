import React, { useState, useEffect } from "react";
import {
  AudioWaveform,
  BookOpen,
  ChevronRight,
  Bot,
  LogOut,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "@/components/theme-provider";
import {
  Sidebar,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Interview",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "New Interview",
          url: "/home",
        },
        {
          title: "Settings",
          icon: Settings2,
          url: "/l",
        },
      ],
    },
  ],
};
export function AppSidebar({ ...props }) {
  const [profileImg, setProfileImg] = useState(null);

  const { user, authenticated, onLogout } = props;
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (user?.picture) {
      setProfileImg(user.picture);
    } else if (userData && userData.picture) {
      setProfileImg(userData.picture); // Set the profile image URL from localStorage
    }
  }, []);
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarGroupLabel>
        <Link
          to="/"
          className="montserrat-alternates-regular pt-8 px-4 text-2xl antialiased relative font-sm text-gray-700 dark:text-gray-300 shadow-white"
        >
          interview{" "}
          <span className="bg-gradient-to-r from-[#245395] via-[#874a9a] to-[#d0190f] dark:from-[#3980e3] dark:via-[#d280eb] dark:to-[#ea645d] text-transparent bg-clip-text ">
            valley
          </span>
        </Link>
      </SidebarGroupLabel> */}
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
        <Collapsible>
          <CollapsibleTrigger asChild>
            <div className="flex flex-col items-start w-full">
              <SidebarMenuButton
                className=" cursor-default"
                tooltip="Toggle Theme"
                onClick={toggleTheme}
              >
                  <ModeToggle />
                  <span className="-mx-1 cursor-pointer" onClick={toggleTheme}>
                    Toggle Theme
                  </span>
              </SidebarMenuButton>
              {authenticated && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <SidebarMenuButton tooltip="Logout" className="pl-5">
                      <LogOut className="w-4 h-4 mr-2" />
                      <span>Logout</span>
                    </SidebarMenuButton>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to logout?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => onLogout()}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              <SidebarMenuButton
                className="p-4"
                tooltip={
                  localStorage.getItem("user")
                    ? JSON.parse(localStorage.getItem("user")).name
                    : user?.name
                }
              >
                <div className="flex items-center gap-3">
                  <img
                    src={profileImg || "/avatars/avatar-1.png"}
                    alt="user avatar"
                    className="w-6 h-6 rounded-sm "
                  />
                  <div className="mx-auto text-start">
                    {localStorage.getItem("user")
                      ? JSON.parse(localStorage.getItem("user")).name
                      : user?.name}
                    {/* , {user?.email || JSON.parse(localStorage.getItem("user"))?.email} */}
                  </div>
                </div>
              </SidebarMenuButton>
            </div>
          </CollapsibleTrigger>
        </Collapsible>
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
