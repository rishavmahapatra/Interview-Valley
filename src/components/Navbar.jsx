import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import {
  // Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import {logo} from ".../public/iv-dark-horizontal-logo.jpeg"
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger,SidebarProvider } from "./ui/sidebar";

const navigation = [
  // { name: "Home", href: "/home", current: true },
  // { name: "Features", href: "#", current: false },
  // { name: "Skill Extactor", href: "#", current: false },
  // { name: "FAQs", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ authenticated, user, onLogout }) {

const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28); // change 80 to your threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  console.log(authenticated)
  return (
    // bg-stone-950
    <Disclosure
      as="nav"
      // ${authenticated && "hidden"}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? " bg-background" : "bg-transparent"
      }`}
      // className=" dark:bg-zinc-950 backdrop-blur-md dark:shadow-zinc-800 shadow-sm sticky  items-center h-auto top-0 left-0 z-50"
    >
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="absolute left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            {/* <DisclosureButton className="group relative inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton> */}
          </div>
          <div className="flex flex-1 space-x-48 xl:space-x-72 items-center justify-center sm:items-stretch sm:justify-start">
            {/* text-2xl text-primary font-bold */}
            <div  className="flex-shrink-0">
             <Link to="/" className="montserrat-alternates-regular text-xl antialiased relative text-gray-700 dark:text-gray-300 shadow-white">
              {/* interview valley */}
              <span className="bg-gradient-to-r from-[#245395] via-[#874a9a] to-[#d0190f] dark:from-[#3980e3] dark:via-[#d280eb] dark:to-[#ea645d] text-transparent bg-clip-text font-bold">interview valley</span>
            </Link>
          </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex justify-between space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-muted-foreground hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute right-0 flex items-center gap-x-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ModeToggle />
            {authenticated ? (
              <Menu as="div" className="relative ml-3 group">
                <div>
                  <MenuButton className="relative flex rounded-full text-sm">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-sm" src={user?.picture || localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).picture} alt={user?.name} />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white dark:bg-black py-1 shadow-lg ring-1 dark:ring-gray-700 ring-black ring-opacity-5 transition focus:outline-none">
                  {/* <MenuItem> */}
                  <li 
                  className="block px-4 border-b-2 py-2 text-sm text-gray-700 dark:text-gray-300 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-800"
>
                    {localStorage.getItem("user")
                    ? JSON.parse(localStorage.getItem("user")).name
                    : user?.name}
                    <span className="block text-xs">{localStorage.getItem("user")
                    ? JSON.parse(localStorage.getItem("user")).email
                    : user?.email}</span>
                  </li>
                  <MenuItem>
                    <Link
                      onClick={() => {
                        onLogout();
                      }}
                      to="/"
                      className="block px-4 py-2 mx-auto text-center text-sm text-gray-700 dark:text-gray-300 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-800"
                    >
                      Logout
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <div>
              <Button
                className="hidden lg:inline lg:m-1 w-20"
                // variant="outline"
                onClick={() => navigate("/signin")}
              >
                Login
              </Button>
              {/* <Button
                className="hidden lg:inline lg:m-1"
                variant="outline"
                onClick={() => navigate("/signup")}
              >
                Register
              </Button> */}
              </div>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}