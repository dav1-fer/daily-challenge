import React, { useState, useEffect } from 'react';
import Button from './Button';
import ChallengeView from './ChallengeView';

const ChallengeApp = () => {
  const [challenges, setChallenges] = useState([]);
  const [randomChallenge, setRandomChallenge] = useState(null);

  useEffect(() => {
    fetch('/challenges.json')
      .then(response => response.json())
      .then(data => setChallenges(data))
      .catch(error => console.error("Error fetching challenges:", error));
  }, []);

  const generateChallenge = () => {
    if (challenges.length > 0) {
      const randomIndex = Math.floor(Math.random() * challenges.length);
      setRandomChallenge(challenges[randomIndex]); // Now stores { text, category }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${randomChallenge ? "opacity-100" : "opacity-0 hidden"}`}>
        <ChallengeView challenge={randomChallenge} />
      </div>

      <Button onGenerate={generateChallenge} />
    </div>
  );
};

export default ChallengeApp;
