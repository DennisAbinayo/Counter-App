import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center ">
      <h1 className="text-9xl my-20">Count: {count}</h1>
      <button
        className="bg-stone-400 hover:bg-red-400  p-4 rounded-full text-center mr-20 text-3xl cursor-pointer"
        onClick={(event) => {
          event.preventDefault();
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button
        className="bg-stone-400 hover:bg-red-400 p-4 rounded-full mr-20 text-center text-3xl cursor-pointer"
        onClick={(event) => {
          event.preventDefault();
          setCount(count - 1);
        }}
      >
        Minus
      </button>
      <button
        className="bg-stone-400 hover:bg-red-400 p-4 rounded-full text-center text-3xl cursor-pointer"
        onClick={(event) => {
          event.preventDefault();
          setCount(0); // Reset count to 0
        }}
      >
        Reset
      </button>
    </div>
  );
}
