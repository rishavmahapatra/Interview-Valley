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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [interviewId, setInterviewId] = useState("");
  const [user, setUser] = useState();

  
  const setUsername = (user) => setUser(user);
  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("Login");
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log("Logout");
  };
  const handleUpload = (questions, interviewId) => {
    setQuestions(questions);
    setInterviewId(interviewId);
  };
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    token
      ? (console.log("Token found"),handleLogin(), console.log("token is: " + token))
      : console.error("No Token found");
    // handleLogin()
    // }
    // else {console.error('No Token found');
    //   // handleLogout()
    // }
  }, [token]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GoogleOAuthProvider clientId ="750789723123-1sd7uafuq4nrr52b3dm7lk5dhgmf7vn5.apps.googleusercontent.com">
      <Router>
        <Navbar onLogout={handleLogout} authenticated={isAuthenticated} />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <Landing />}
          />
          <Route path="*" element={<Navigate to="/" />} />

          <Route
            path="/signin"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <SignIn onLogin={handleLogin} userName={setUsername} />
              )
            }
          />

          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <Home username={user} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/upload"
            element={
              isAuthenticated ? (
                <Upload onUpload={handleUpload} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />

          <Route
            path="/interview"
            element={
              isAuthenticated ? (
                <Chat questions={questions} interviewId={interviewId} />
              ) : (
                <Navigate to="/" />
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
