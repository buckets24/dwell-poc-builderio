"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface CounterProps {
  initialCount?: number;
}

function Counter({ initialCount = 99 }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const [persons, setPersons] = useState([]);

  const getPerson = async () => {
    const test = await fetch(`https://swapi.dev/api/people`)
    const data = await test.json()
    return setPersons(data?.results)
  }

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  React.useEffect(() => {
    getPerson()
  }, [])

  return (
    <div className={styles.counter}>
      {/*<button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <h1>{person || "test"}</h1>
      <button className={styles.btn} onClick={increment}>
        +
      </button>*/}
      <h1>Unblk</h1>
      {persons?.map((person: { name: string }) => (
        <div>{person?.name || "-"}</div>
      ))}
    </div>
  );
}

export default Counter;
