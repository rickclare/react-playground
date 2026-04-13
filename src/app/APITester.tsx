import { type SyntheticEvent, useRef } from "react";

export function APITester() {
  const responseInputRef = useRef<HTMLTextAreaElement>(null);

  const testEndpoint = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const endpoint = formData.get("endpoint") as string;
      const url = new URL(endpoint, location.href);
      const method = formData.get("method") as string;
      const res = await fetch(url, { method });

      const data = await res.json();
      responseInputRef.current!.value = JSON.stringify(data, null, 2);
    } catch (error) {
      responseInputRef.current!.value = String(error);
    }
  };

  return (
    <div className="mx-auto mt-8 flex w-full max-w-150 flex-col gap-4 text-left">
      <form
        onSubmit={testEndpoint}
        className="box-border flex w-full items-center gap-2 rounded-xl border-2 border-amber-100 bg-neutral-900 p-3 font-mono transition-all duration-300 focus-within:border-amber-200"
      >
        <select
          name="method"
          className="m-0 block w-min shrink-0 appearance-none rounded-lg border-none bg-amber-100 px-3 py-1 text-sm font-bold text-neutral-900"
        >
          <option value="GET">GET</option>
          <option value="PUT">PUT</option>
        </select>
        <input
          type="text"
          name="endpoint"
          defaultValue="/api/hello"
          className="w-full flex-1 border-0 bg-transparent p-1 font-mono text-base text-amber-100 outline-none placeholder:text-amber-100/40 focus:text-white"
          placeholder="/api/hello"
        />
        <button
          type="submit"
          className="rounded-lg border-0 bg-amber-100 px-5 py-1.5 font-bold text-neutral-900 transition-all duration-100 hover:-translate-y-px hover:cursor-pointer hover:bg-amber-200"
        >
          Send
        </button>
      </form>
      <textarea
        ref={responseInputRef}
        readOnly
        placeholder="Response will appear here…"
        className="box-border min-h-30 w-full resize-y rounded-xl border-2 border-amber-100 bg-neutral-900 p-3 font-mono text-amber-100 placeholder:text-amber-100/40 focus:border-amber-200"
      />
    </div>
  );
}
