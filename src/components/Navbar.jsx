import React from "react";
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
  const navigate = useNavigate();
  return (
    // bg-stone-950
    <Disclosure
      as="nav"
      className="fixed w-full z-50 bg-white/70 dark:bg-neutral-950 backdrop-blur-lg dark:shadow-zinc-800 shadow-sm"
      // className=" dark:bg-zinc-950 backdrop-blur-md dark:shadow-zinc-800 shadow-sm sticky  items-center h-auto top-0 left-0 z-50"
    >
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="absolute left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
            </DisclosureButton>
          </div>
          <div className="flex flex-1 space-x-48 xl:space-x-72 items-center justify-center sm:items-stretch sm:justify-start">
            {/* text-2xl text-primary font-bold */}
            <div  className="flex-shrink-0">
             <Link to="/" className="montserrat-alternates-regular text-2xl relative font-sm text-gray-700 dark:text-gray-300 shadow-white">
             {/* <div className=""></div> */}
              interview <span className="bg-gradient-to-r from-[#245395] via-[#874a9a] to-[#d0190f] dark:from-[#3980e3] dark:via-[#d280eb] dark:to-[#ea645d] text-transparent bg-clip-text ">valley</span>
              {/* <Link to="/"> <img className="cursor-pointer h-8 w-auto transition-opacity duration-300 opacity-100" src="logo.png" alt="logo"/></Link> */}
           
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
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full text-sm">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="primary"
                      viewBox="0 0 24 24"
                      strokeWidth={1.0}
                      stroke="white"
                      className="size-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg> */}
                    <img className="w-10 h-10 border-indigo-400 border-2 rounded-full" src={user?.picture || localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).picture} alt={user?.name} />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      onClick={() => {
                        onLogout();
                      }}
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Logout
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <div>
              <Button
                className="hidden lg:inline lg:m-1 border-0"
                variant="outline"
                onClick={() => navigate("/signin")}
              >
                Login
              </Button>
              <Button
                className="hidden lg:inline lg:m-1"
                // variant="outline"
                onClick={() => navigate("/signup")}
              >
                Register
              </Button>
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
