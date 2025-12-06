"use client";

import { useState } from "react";
import { SparklesIcon, ZapIcon, MessageCircleIcon, UploadCloudIcon } from "./icons";

export function HeroSection() {
  const [activeCard, setActiveCard] = useState<number>(1);

  const getCardStyles = (cardIndex: number) => {
    const isActive = activeCard === cardIndex;
    const baseZ = isActive ? 30 : 10;
    const scale = isActive ? 1 : 0.9;
    const opacity = isActive ? 1 : 0.6;

    return {
      zIndex: baseZ,
      transform: `scale(${scale})`,
      opacity,
    };
  };

  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 gradient-bg pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Now available for 2025 Chats
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 text-glow">
          Your AI Year, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
            Unwrapped.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Discover the silly insights, personality quirks, and chaotic moments
          hidden in your chat history. Privacy-first, processed locally.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="h-10 px-6 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
            <UploadCloudIcon className="w-4 h-4" />
            Analyze My Chats
          </button>
        </div>
      </div>

      <div className="mt-20 relative max-w-5xl mx-auto h-64 md:h-96 select-none">
        <div
          onClick={() => setActiveCard(0)}
          style={getCardStyles(0)}
          className="absolute left-1/2 top-0 -translate-x-3/4 md:-translate-x-[110%] w-64 md:w-80 h-80 md:h-96 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 rotate-[-6deg] cursor-pointer transition-all duration-300 ease-out hover:scale-95"
        >
          <div className="h-full flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium text-zinc-500">CATEGORY</span>
              <ZapIcon className="w-5 h-5 text-orange-400" />
            </div>
            <div className="overflow-hidden">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-200 mb-1 truncate">
                Chaotic Moments
              </h3>
              <p className="text-sm text-zinc-500 line-clamp-2">
                You asked for a recipe for &quot;Spicy Ice&quot; at 3 AM.
              </p>
            </div>
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-orange-500"></div>
            </div>
          </div>
        </div>

        <div
          onClick={() => setActiveCard(1)}
          style={getCardStyles(1)}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-72 md:w-80 h-80 md:h-96 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl shadow-purple-900/20 cursor-pointer transition-all duration-300 ease-out animate-float"
        >
          <div className="h-full flex flex-col relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 opacity-40"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className="text-xs font-medium text-purple-300 border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 rounded-full">
                TOP VIBE
              </span>
              <SparklesIcon className="w-5 h-5 text-zinc-400" />
            </div>

            <div className="flex-grow flex items-center justify-center relative z-10 overflow-hidden px-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent break-words">
                Curious
                <br />
                Philosopher
              </h2>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between text-xs text-zinc-500 mb-2">
                <span>Deep Questions</span>
                <span>92%</span>
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => setActiveCard(2)}
          style={getCardStyles(2)}
          className="absolute left-1/2 top-0 -translate-x-1/4 md:translate-x-[10%] w-64 md:w-80 h-80 md:h-96 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 rotate-[6deg] cursor-pointer transition-all duration-300 ease-out hover:scale-95"
        >
          <div className="h-full flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium text-zinc-500">STATS</span>
              <MessageCircleIcon className="w-5 h-5 text-pink-400" />
            </div>
            <div className="overflow-hidden">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-200 mb-1 truncate">
                Total Prompts
              </h3>
              <p className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                4,281
              </p>
            </div>
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-pink-500"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
