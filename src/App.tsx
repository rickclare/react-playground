import { APITester } from "./APITester";
import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl p-8 text-center">
      <div className="mb-8 flex items-center justify-center gap-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-24 scale-120 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#fef3c7aa]"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-24 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#7dd3fcaa] motion-safe:animate-spin motion-safe:[animation-duration:20s]"
        />
      </div>

      <h1 className="text-5xl leading-none">Bun &amp; React</h1>

      <APITester />
    </div>
  );
}

export default App;
