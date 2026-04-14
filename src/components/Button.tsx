import { useState } from "react";

export default function Button({ bgClass = "bg-green-500" }: { bgClass?: string }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleClick}
      className={`${bgClass} cursor-pointer rounded p-2 font-medium text-white hover:brightness-90`}
    >
      Clicked {count} times
    </button>
  );
}
