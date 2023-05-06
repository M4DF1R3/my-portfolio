import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Analytics from "@vercel/analytics/react"

function App() {
    useEffect(() => {
        document.title = 'Website Portfolio';
    }, []);
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Analytics />
        </div>
    );
}

export default App;

