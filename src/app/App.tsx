import Button from "../components/Button";
import ShoppingList from "../components/ShoppingList";
import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="grid justify-center gap-2">
      <h2>Welcome!</h2>

      <Button count={count} onClick={handleClick} />
      <Button bgClass="bg-indigo-500" count={count} onClick={handleClick} />

      <ShoppingList />
    </div>
  );
}

export default App;
