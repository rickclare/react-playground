import Button from "../components/Button";
import ShoppingList from "../components/ShoppingList";

export function App() {
  return (
    <div className="grid justify-center gap-2">
      <h2>Welcome!</h2>

      <Button />
      <Button bgClass="bg-indigo-500" />

      <ShoppingList />
    </div>
  );
}

export default App;
