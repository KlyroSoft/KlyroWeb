"use client";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber = ({ target, suffix = "", duration = 2000 }: AnimatedNumberProps) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setNumber(target);
        clearInterval(interval);
      } else {
        setNumber(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <>
      {number}
      {suffix}
    </>
  );
};

export default AnimatedNumber;

