// src/App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import Upload from "./components/Upload.jsx";
import Landing from "./components/Landing.jsx";
import Navbar from "./components/Navbar.jsx";
import Chat from "./components/Chat.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./components/Home.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [interviewId, setInterviewId] = useState("");
  const [user, setUser] = useState();

  const setUsername = (user) => setUser(user);
  const handleLogin = () => {setIsAuthenticated(true); console.log('LoginAuthenticated: ' + `${isAuthenticated}` )};
  const handleLogout = () => {setIsAuthenticated(false);console.log(`LogoutAuthenticated: ${isAuthenticated}`)};
  const handleUpload = (questions, interviewId) => {
    setQuestions(questions);
    setInterviewId(interviewId);
  };
  const token = localStorage.getItem('access_token');
  useEffect(()=> {
    if (token) {
    console.log('Token found');
    handleLogin()}
    else {console.error('No Token found');
      handleLogout()
    }
  },[token]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar onLogout={handleLogout}authenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={isAuthenticated ? (
            <Navigate to="/home" />
              ) : (
                <Landing />
              )} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <LoginForm onLogin={handleLogin} userName={setUsername} />
              )
            }
          />
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <Home username={user} />
              ) : (
                <Navigate to="/login" />
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
    </ThemeProvider>
  );
}

export default App;
