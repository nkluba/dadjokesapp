import React from 'react';
import translations from '../locales'; // Import translations

interface SelectedJokeProps {
  joke: string;
  language: string; // Pass language as prop
}

const SelectedJoke: React.FC<SelectedJokeProps> = ({ joke, language }) => {
  const t = translations[language]; // Get translations

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([joke], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'joke.txt';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <p>{joke}</p>
      <button onClick={handleDownload}>{t.downloadAsText}</button>
    </div>
  );
};

export default SelectedJoke;