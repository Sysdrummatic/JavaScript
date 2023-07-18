import React, { useState, useEffect } from "react";

function RandomNumberGenerator() {
  const [numbers, setNumbers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [numOfNumbers, setNumOfNumbers] = useState(0);
  const [timeInterval, setTimeInterval] = useState(0);

  useEffect(() => {
    if (currentIndex < numOfNumbers) {
      const interval = setInterval(() => {
        const newNumbers = [...numbers];
        newNumbers.push(Math.floor(Math.random() * 100));
        setNumbers(newNumbers);
        setCurrentIndex(currentIndex + 1);
      }, timeInterval);
      return () => clearInterval(interval);
    }
  }, [currentIndex, numOfNumbers, numbers, timeInterval]);

  function handleNumOfNumbersChange(event) {
    setNumOfNumbers(parseInt(event.target.value));
  }

  function handleTimeIntervalChange(event) {
    setTimeInterval(parseInt(event.target.value));
  }
s
  function handleUserAnswerChange(event) {
    setUserAnswer(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const correctAnswer = numbers.reduce((sum, num) => sum + num, 0);
    if (parseInt(userAnswer) === correctAnswer) {
      alert("Correct!");
    } else {
      alert(`Incorrect! The correct answer was ${correctAnswer}.`);
    }
    setNumbers([]);
    setCurrentIndex(0);
    setUserAnswer("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Number of Numbers:
          <input
            type="number"
            value={numOfNumbers}
            onChange={handleNumOfNumbersChange}
          />
        </label>
        <br />
        <label>
          Time Interval (in milliseconds):
          <input
            type="number"
            value={timeInterval}
            onChange={handleTimeIntervalChange}
          />
        </label>
        <br />
        <button type="submit">Start</button>
      </form>
      <br />
      {numbers.map((num, index) => (
        <span key={index}>{num} </span>
      ))}
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Answer:
          <input
            type="number"
            value={userAnswer}
            onChange={handleUserAnswerChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RandomNumberGenerator;
