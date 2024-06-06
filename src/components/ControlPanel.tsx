import React, { useState } from 'react';

interface ControlPanelProps {
  fetchJokes: (term: string) => void;
  fetchRandomJoke: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ fetchJokes, fetchRandomJoke }) => {
  const [term, setTerm] = useState<string>('');

  const handleSearch = () => {
    fetchJokes(term);
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter topic"
      />
      <button onClick={fetchRandomJoke}>Get Random Joke</button>
      <button onClick={handleSearch}>Browse Jokes</button>
    </div>
  );
};

export default ControlPanel;
