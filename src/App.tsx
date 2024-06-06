import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ControlPanel from './components/ControlPanel';
import JokeList from './components/JokeList';
import SelectedJoke from './components/SelectedJoke';
import axios from 'axios';

interface Joke {
  id: string;
  joke: string;
}

const App: React.FC = () => {
  const [language, setLanguage] = useState<string>('en');
  const [theme, setTheme] = useState<string>('light');
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [selectedJoke, setSelectedJoke] = useState<string | null>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const savedTheme = localStorage.getItem('theme');
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    localStorage.setItem('theme', theme);
  }, [language, theme]);

  const fetchJokes = async (term = '') => {
    const response = await axios.get(`https://icanhazdadjoke.com/search?term=${term}`, {
      headers: { Accept: 'application/json' },
    });
    setJokes(response.data.results);
  };

  const fetchRandomJoke = async () => {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    setSelectedJoke(response.data.joke);
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
      <ControlPanel fetchJokes={fetchJokes} fetchRandomJoke={fetchRandomJoke} />
      <JokeList jokes={jokes} setSelectedJoke={setSelectedJoke} />
      {selectedJoke && <SelectedJoke joke={selectedJoke} />}
    </div>
  );
};

export default App;