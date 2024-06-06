import React from 'react';

interface ControlPanelProps {
  fetchJokes: (term: string) => void;
  fetchRandomJoke: () => void;
  term: string;
  setTerm: (term: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  fetchJokes,
  fetchRandomJoke,
  term,
  setTerm,
}) => {
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
        placeholder="Enter topic"
      />
      <button onClick={handleRandomJoke}>Get Random Joke</button>
      <button onClick={handleSearch}>Browse Jokes</button>
    </div>
  );
};

export default ControlPanel;