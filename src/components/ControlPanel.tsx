import React from 'react';
import translations from '../locales'; // Import translations

interface ControlPanelProps {
  fetchJokes: (term: string) => void;
  fetchRandomJoke: () => void;
  term: string;
  setTerm: (term: string) => void;
  language: string; // Pass language as prop
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  fetchJokes,
  fetchRandomJoke,
  term,
  setTerm,
  language
}) => {
  const t = translations[language]; // Get translations

  const handleSearch = () => {
    fetchJokes(term);
    setTerm(''); // Clear the term after searching jokes
  };

  const handleRandomJoke = () => {
    fetchRandomJoke();
    setTerm(''); // Clear the term after fetching a random joke
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder={t.enterTopic}
      />
      <button onClick={handleRandomJoke}>{t.getRandomJoke}</button>
      <button onClick={handleSearch}>{t.browseJokes}</button>
    </div>
  );
};

export default ControlPanel;
