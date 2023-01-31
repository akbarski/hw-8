import React, { useState } from "react";
import { useEffect } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [timerID, setTimerID] = useState();

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    setTimerID(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  setTimeout(() => {
    clearInterval(timerID);
  }, 60000);
  return (
    <div>
      <h1>Timer:{timer}</h1>
    </div>
  );
};
