import React,{useState,useEffect} from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  LogOut,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
 // This is sample data.

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Interview",
          url: "/home",
        },
        // {
        //   title: "Starred",
        //   url: "#",
        // },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};
export function AppSidebar({ ...props }) {
  const [profileImg,setProfileImg]=useState(null);


  const { user, authenticated, onLogout } = props;
   useEffect(() => {
   const userData = JSON.parse(localStorage.getItem("user"));
   if(user?.picture){
    setProfileImg(user.picture);
   }
   else if (userData && userData.picture) {
     setProfileImg(userData.picture); // Set the profile image URL from localStorage
   }
  }, []);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}

        <div className="p-4 border-t ">
          <div className="flex text-xs items-center gap-1 mb-2">
            <img
              src={
                profileImg ||
                "/avatars/avatar-1.png"
              }
              alt="user avatar"
              className="w-7 h-7 rounded-full"
            />
            <div className="mx-auto text-start pl-1">
              {localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user")).name
                : user?.name}
              {/* , {user?.email || JSON.parse(localStorage.getItem("user"))?.email} */}
            </div>
          </div>

          {authenticated && (
            <Link
              onClick={() => {
                onLogout();
              }}
              to="/"
              className="flex items-center justify-center gap-2 px-4 text-center rounded-md py-2 text-sm text-white dark:text-black bg-black dark:bg-white data-[focus]:bg-gray-100"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          )}
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
