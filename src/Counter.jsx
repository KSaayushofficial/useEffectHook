import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello!");
    document.title = `Increment (${count})`;
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Submit</button>
    </>
  );
}
export default Counter;
