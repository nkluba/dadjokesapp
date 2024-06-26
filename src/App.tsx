import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ControlPanel from './components/ControlPanel';
import JokeList from './components/JokeList';
import SelectedJoke from './components/SelectedJoke';
import axios from 'axios';
import './App.css';  // Import CSS

interface Joke {
  id: string;
  joke: string;
}

type ViewType = 'random' | 'list';

const App: React.FC = () => {
  const [language, setLanguage] = useState<string>('en');
  const [theme, setTheme] = useState<string>('light');
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [selectedJoke, setSelectedJoke] = useState<string | null>(null);
  const [term, setTerm] = useState<string>('');
  const [view, setView] = useState<ViewType>('list');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const savedTheme = localStorage.getItem('theme');
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    localStorage.setItem('theme', theme);
    // Apply theme class to body
    if (document.body) {
      document.body.className = theme;
    }
  }, [language, theme]);

  const fetchJokes = async (term = '') => {
    const response = await axios.get(`https://icanhazdadjoke.com/search?term=${term}`, {
      headers: { Accept: 'application/json' },
    });
    setJokes(response.data.results);
    setSelectedJoke(null); // Clear the selected joke when browsing jokes
    setView('list');       // Set view to list
  };

  const fetchRandomJoke = async () => {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    setJokes([]); // Clear the joke list when fetching a random joke
    setSelectedJoke(response.data.joke);
    setView('random');   // Set view to random
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
      <div className="control-panel">
        <ControlPanel
          fetchJokes={fetchJokes}
          fetchRandomJoke={fetchRandomJoke}
          term={term}
          setTerm={setTerm}
          language={language} // Pass language prop
        />
      </div>
      {view === 'list' && (
        <ul className="joke-list">
          <JokeList
            jokes={jokes}
            setSelectedJoke={setSelectedJoke}
          />
        </ul>
      )}
      {selectedJoke && (
        <div className="selected-joke">
          <SelectedJoke
            joke={selectedJoke}
            language={language} // Pass language prop
          />
        </div>
      )}
    </div>
  );
};

export default App;
