import { useState, useRef, useEffect } from "react";
import Button from "./MyButton";

function CounterCard() {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.backgroundColor =
        count === 5
          ? cardRef.current.classList.add("green-bg")
          : cardRef.current.classList.remove("green-bg");
    }
  }, [count]);

  return (
    <div ref={cardRef} className="card">
      <h3>This is a Counter Card</h3>
      <h1 id="counter">{count}</h1>

      <Button text={"+"} onClick={() => setCount(count + 1)} id={"add-btn"} />

      <Button text={"reset"} onClick={() => setCount(0)} id={"reset-btn"} />
    </div>
  );
}

export default CounterCard;
