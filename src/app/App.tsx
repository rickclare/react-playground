import { APITester } from "./APITester";
import reactLogo from "../assets/react.svg";

export function App() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl p-8 text-center">
      <div className="flex justify-center">
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-24 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#7dd3fcaa] motion-safe:animate-spin motion-safe:[animation-duration:20s]"
        />
      </div>

      <h1 className="text-5xl leading-none">React Playground</h1>

      <APITester />
    </div>
  );
}

export default App;
