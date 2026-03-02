import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  LinkedInBanner,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

type ThemeMode = 'dark' | 'light';

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  try {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  } catch {
    // ignore read errors
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
};

function App() {
    const [mode, setMode] = useState<ThemeMode>(() => getInitialTheme());

    const handleModeChange = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    // Persist theme + sync with <html> element
    useEffect(() => {
        if (typeof window === 'undefined') return;

        try {
            window.localStorage.setItem('theme', mode);
        } catch {
            // ignore write errors
        }

        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(mode);
        root.setAttribute('data-theme', mode);
    }, [mode]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <LinkedInBanner/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;