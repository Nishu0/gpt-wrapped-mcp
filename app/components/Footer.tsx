"use client";

export function Footer() {
  return (
    <footer className="py-16 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-12">
          <h2 className="text-[8vw] md:text-[120px] font-bold tracking-tighter text-zinc-900 hover:text-white transition-colors duration-300 leading-none select-none cursor-default">
            GPT WRAPPED
          </h2>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-600">
            Created by{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Nisarg
            </a>
            {" "}• Inspired by{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              X&apos;s tweet
            </a>
          </p>
          <p className="text-xs text-zinc-700 mt-2">
            Not affiliated with OpenAI. A community project.
          </p>
        </div>
      </div>
    </footer>
  );
}
