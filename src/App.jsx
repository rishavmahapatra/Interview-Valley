// src/App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Upload from "./components/Upload.jsx";
import Landing from "./components/Landing.jsx";
import Navbar from "./components/Navbar.jsx";
import Chat from "./components/Chat.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./components/Home.jsx";
import { SignUp } from "./components/SignUp.jsx";
import { SignIn } from "./components/SignIn.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Land from "./components/Land.jsx";
import { ModeToggle } from "./components/mode-toggle.jsx";
import SidebarLayout from "./components/SidebarLayout.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [interviewId, setInterviewId] = useState("");
  const [user, setUser] = useState();
  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("Login");
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("questions");
    localStorage.removeItem("user");
    console.log("Logout");
  };
  const handleUpload = (questions, interviewId) => {
    setQuestions(questions);
    setInterviewId(interviewId);
  };
  const token = localStorage.getItem("user");
  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated);
  }, []);
  useEffect(() => {
    localStorage.getItem("user") || token
      ? (console.log("User found"),
        handleLogin(),
        console.log("User is: " + localStorage.getItem("user")))
      : console.error("No User found");

    // else {console.error('No Token found');
    //   // handleLogout()
    // }
  }, [token]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GoogleOAuthProvider clientId="750789723123-1sd7uafuq4nrr52b3dm7lk5dhgmf7vn5.apps.googleusercontent.com">
        <Router>
          <Navbar
            onLogout={handleLogout}
            user={user}
            authenticated={isAuthenticated}
          />
          <div className="dark:grid-background "></div>
          <div className="opacity-50 dark:grid-background "></div>
          <div
            className="
    fixed top-20 left-96 w-full h-[90vh] -z-20 max-w-[640px] opacity-15 
    [background-image:radial-gradient(at_27%_37%,_rgb(58,139,253)_0px,_transparent_0%),radial-gradient(at_97%_21%,_rgb(114,254,125)_0px,_transparent_50%),radial-gradient(at_52%_99%,_rgb(253,58,78)_0px,_transparent_50%),radial-gradient(at_10%_29%,_rgb(133,90,252)_0px,_transparent_50%),radial-gradient(at_97%_96%,_rgb(228,199,149)_0px,_transparent_50%),radial-gradient(at_33%_50%,_rgb(140,168,232)_0px,_transparent_50%),radial-gradient(at_79%_53%,_rgb(238,165,186)_0px,_transparent_50%)]
    blur-[100px] saturate-[150%]
    dark:hidden
  "
          ></div>
          <div
            style={{
              backgroundImage: 'url("https://assets.dub.co/misc/grid.svg")',
              position: "absolute",
              zIndex: -1,
              width: "100%",
              height: "100%",
              top: 0,
              opacity: 0.4,
              filter: "invert(1)",
            }}
          ></div>
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/l" /> : <Land />}
            />
            <Route path="*" element={<Navigate to="/" />} />

            <Route
              path="/signin"
              element={
                isAuthenticated ? (
                  <Navigate to="/home" />
                ) : (
                  <SignIn onLogin={handleLogin} user={setUser} />
                )
              }
            />

            <Route
              path="/home"
              element={
                isAuthenticated ? (
                  <SidebarLayout
                    user={user}
                    authenticated={isAuthenticated}
                    onLogout={handleLogout}
                  >
                    <Home user={setUser} />
                  </SidebarLayout>
                ) : (
                  <Navigate to="/signin" />
                )
              }
            />
            <Route
              path="/l"
              element={
                isAuthenticated ? (
                  <SidebarLayout
                    user={user}
                      authenticated={isAuthenticated}
                      onLogout={handleLogout}
                    >
                      {/* Your /l page content here */}
                    </SidebarLayout>
                  ) : (
                    <Navigate to="/signin" />
                  )
                }
              />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
