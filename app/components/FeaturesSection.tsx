"use client";

import { useState } from "react";
import {
  LayersIcon,
  SunIcon,
  FlameIcon,
  HelpCircleIcon,
  CompassIcon,
  BrainCircuitIcon,
  QuoteIcon,
  SlidersIcon,
  ImageIcon,
  LockIcon,
  ArrowRightIcon,
  PartyPopperIcon,
  BriefcaseIcon,
  HeartIcon,
  SparklesIcon,
  MessageCircleIcon,
} from "./icons";

const categories = [
  { icon: SunIcon, label: "Top Vibes", color: "text-yellow-400" },
  { icon: FlameIcon, label: "Chaotic Moments", color: "text-red-400" },
  { icon: HelpCircleIcon, label: "Wild Questions", color: "text-blue-400" },
  { icon: CompassIcon, label: "Creative Quests", color: "text-green-400" },
  { icon: BrainCircuitIcon, label: "Personality Insights", color: "text-purple-400" },
  { icon: QuoteIcon, label: "Iconic Quotes", color: "text-cyan-400" },
  { icon: MessageCircleIcon, label: "Your Playlist", color: "text-pink-400" },
  { icon: SparklesIcon, label: "Closing Words", color: "text-orange-400" },
];

const tones = [
  { id: "silly", label: "Silly", icon: PartyPopperIcon },
  { id: "pro", label: "Professional", icon: BriefcaseIcon },
  { id: "roast", label: "Roast Me", icon: FlameIcon },
  { id: "wholesome", label: "Wholesome", icon: HeartIcon },
];

export function FeaturesSection() {
  const [selectedTone, setSelectedTone] = useState("silly");

  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Everything, Unwrapped.
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg">
            We analyze the metadata of your conversations to extract meaningful
            patterns, silly moments, and generate beautiful visualizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-x-4 gap-y-4">
          <div className="col-span-1 md:col-span-2 row-span-2 glass-card rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-800/50 rounded-lg">
                <LayersIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white">
                8 Wrapped Categories
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default"
                >
                  <cat.icon className={`w-[18px] h-[18px] ${cat.color}`} />
                  <span className="text-sm text-zinc-300">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 row-span-2 glass-card rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white">Pick Your Tone</h3>
              <SlidersIcon className="w-[18px] h-[18px] text-zinc-500" />
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              How should the AI judge you? Choose wisely.
            </p>

            <div className="flex flex-col gap-2 flex-grow">
              {tones.map((tone) => (
                <div key={tone.id} className="relative">
                  <input
                    type="radio"
                    name="tone"
                    id={`tone-${tone.id}`}
                    className="peer hidden custom-radio"
                    checked={selectedTone === tone.id}
                    onChange={() => setSelectedTone(tone.id)}
                  />
                  <label
                    htmlFor={`tone-${tone.id}`}
                    className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all hover:bg-zinc-800 ${
                      selectedTone === tone.id
                        ? "border-white/20 bg-white/10 text-white"
                        : "border-zinc-800 bg-zinc-900/50 text-zinc-400"
                    }`}
                  >
                    <span className="text-sm font-medium">{tone.label}</span>
                    <tone.icon className="w-4 h-4" />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 row-span-2 glass-card flex flex-col group hover:border-zinc-700 transition-colors rounded-xl p-6 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ImageIcon className="w-[18px] h-[18px] text-blue-400" />
                <h3 className="text-lg font-medium text-white">
                  Visual Generator
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Generate prompts to create shareable visuals of your wrapped
                insights. Works with DALL-E, Midjourney, and other AI image generators.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Spotify Wrapped style</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                  <span>Synthwave aesthetic</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Minimalist design</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>Status</span>
                <span className="flex items-center gap-1.5 text-green-400">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  Ready
                </span>
              </div>
            </div>
          </div>

          <div
            id="privacy"
            className="col-span-1 md:col-span-2 lg:col-span-4 glass-card rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent pointer-events-none"></div>
            <div className="flex items-start gap-4 z-10">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <LockIcon className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Privacy First Architecture
                </h3>
                <p className="text-sm text-zinc-400 max-w-xl">
                  We do not store your data. Your chat history is parsed locally
                  on your device by the client, and only the generated insights
                  are temporarily held to create the display. Zero persistence.
                </p>
              </div>
            </div>
            <div className="z-10 flex-shrink-0">
              <a
                href="#"
                className="text-sm text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
              >
                Read Security Policy
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
