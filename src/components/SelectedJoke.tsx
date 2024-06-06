import React from 'react';

interface SelectedJokeProps {
  joke: string;
}

const SelectedJoke: React.FC<SelectedJokeProps> = ({ joke }) => {
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
      <button onClick={handleDownload}>Download as Text</button>
    </div>
  );
};

export default SelectedJoke;