import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard";
import Login from "./Components/Login";

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
