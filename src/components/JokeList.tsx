import React from 'react';

interface Joke {
  id: string;
  joke: string;
}

interface JokeListProps {
  jokes: Joke[];
  setSelectedJoke: (joke: string) => void;
}

const JokeList: React.FC<JokeListProps> = ({ jokes, setSelectedJoke }) => {
  return (
    <ul>
      {jokes.map((joke) => (
        <li key={joke.id} onClick={() => setSelectedJoke(joke.joke)}>
          {joke.joke}
        </li>
      ))}
    </ul>
  );
};

export default JokeList;
