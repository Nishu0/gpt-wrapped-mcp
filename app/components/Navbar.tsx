import { SparklesIcon, ArrowRightIcon } from "./icons";

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-2 py-2 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md rounded-full shadow-lg shadow-black/20">
        <div className="flex items-center gap-2 px-4 group cursor-pointer">
          <SparklesIcon className="w-4 h-4 text-purple-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-semibold tracking-tight text-sm text-white">
            GPT Wrapped
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm text-zinc-400">
          <a
            href="#features"
            className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Features
          </a>
          <a
            href="#setup"
            className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Connect
          </a>
        </div>

        <div className="w-px h-5 bg-zinc-700 mx-2"></div>

        <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full transition-colors">
          Demo
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  );
}
