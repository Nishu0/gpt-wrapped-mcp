"use client";

import { useState } from "react";
import { OpenAIIcon, ClaudeIcon, CopyIcon, CheckIcon, PlugIcon } from "./icons";

export function SetupSection() {
  const [copiedGpt, setCopiedGpt] = useState(false);
  const [copiedClaude, setCopiedClaude] = useState(false);

  const mcpUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/api/mcp` 
    : "YOUR_VERCEL_URL/api/mcp";

  const copyToClipboard = (text: string, type: "gpt" | "claude") => {
    navigator.clipboard.writeText(text);
    if (type === "gpt") {
      setCopiedGpt(true);
      setTimeout(() => setCopiedGpt(false), 2000);
    } else {
      setCopiedClaude(true);
      setTimeout(() => setCopiedClaude(false), 2000);
    }
  };

  const claudeConfig = `{
  "mcpServers": {
    "gpt-wrapped": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "${mcpUrl}"]
    }
  }
}`;

  return (
    <section id="setup" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-xs font-medium mb-6">
            <PlugIcon className="w-3.5 h-3.5" />
            Easy Integration
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Connect in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">2 Minutes</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            Add GPT Wrapped to your favorite AI assistant. Just paste the URL and start generating your wrapped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                <OpenAIIcon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">ChatGPT</h3>
                <p className="text-xs text-zinc-500">Custom GPT Actions</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-400 mb-3">
                  <span className="text-white font-medium">Step 1:</span> Go to ChatGPT → Create a GPT → Configure → Actions
                </p>
                <p className="text-sm text-zinc-400 mb-3">
                  <span className="text-white font-medium">Step 2:</span> Click &quot;Import from URL&quot; and paste:
                </p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
                <code className="text-sm text-green-400 font-mono truncate flex-1">
                  {mcpUrl}
                </code>
                <button
                  onClick={() => copyToClipboard(mcpUrl, "gpt")}
                  className="flex-shrink-0 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                >
                  {copiedGpt ? (
                    <CheckIcon className="w-4 h-4 text-green-400" />
                  ) : (
                    <CopyIcon className="w-4 h-4 text-zinc-400" />
                  )}
                </button>
              </div>

              <p className="text-sm text-zinc-400">
                <span className="text-white font-medium">Step 3:</span> Save and start using! Ask: <span className="italic text-zinc-300">&quot;Give me my GPT Wrapped&quot;</span>
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                <ClaudeIcon className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Claude</h3>
                <p className="text-xs text-zinc-500">MCP Integration</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-400 mb-3">
                  <span className="text-white font-medium">Step 1:</span> Open Claude Desktop → Settings → Developer
                </p>
                <p className="text-sm text-zinc-400 mb-3">
                  <span className="text-white font-medium">Step 2:</span> Add this to your <code className="text-orange-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">claude_desktop_config.json</code>:
                </p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 relative">
                <button
                  onClick={() => copyToClipboard(claudeConfig, "claude")}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                >
                  {copiedClaude ? (
                    <CheckIcon className="w-4 h-4 text-green-400" />
                  ) : (
                    <CopyIcon className="w-4 h-4 text-zinc-400" />
                  )}
                </button>
                <pre className="text-xs text-orange-400 font-mono overflow-x-auto pr-10">
                  {claudeConfig}
                </pre>
              </div>

              <p className="text-sm text-zinc-400">
                <span className="text-white font-medium">Step 3:</span> Restart Claude and look for the 🔨 icon
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 mb-4">Try these prompts after connecting:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
              &quot;Give me my 2025 GPT Wrapped&quot;
            </span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
              &quot;Make it silly and roast me&quot;
            </span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
              &quot;Generate an image of my personality&quot;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
