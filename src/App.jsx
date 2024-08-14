// src/App.js
import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import Upload from './components/Upload.jsx';
import Landing from './components/Landing.jsx';
import Navbar from './components/Navbar.jsx';
import Chat from './components/Chat.jsx';
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [interviewId, setInterviewId] = useState('');

  const handleLogin = () => setIsAuthenticated(true);
  const handleUpload = (questions, interviewId) => {
    setQuestions(questions);
    setInterviewId(interviewId);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
    <div>
    <Navbar />
    
    <Router>
      <div className="container">
        <Routes>
          <Route path="/signin" element={isAuthenticated ? <Navigate to="/upload" /> : <LoginForm onLogin={handleLogin} />} />
          {/* <Route path="/upload" element={isAuthenticated ? <Upload onUpload={handleUpload} /> : <Navigate to="/" />} />
          <Route path="/interview" element={isAuthenticated ? <Chat questions={questions} interviewId={interviewId} /> : <Navigate to="/" />} /> */}
          <Route path="/upload" element={<Upload onUpload={handleUpload} />} />
          <Route path="/interview" element={isAuthenticated ? <Chat questions={questions} interviewId={interviewId} /> : <Navigate to="/" />} />
          <Route path="/" element= {<Landing />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
          </Router>
     </div>
     </ThemeProvider>
  );
}

export default App;
