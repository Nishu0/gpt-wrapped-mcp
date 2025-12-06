import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

// Wrapped categories structure
const WRAPPED_CATEGORIES = {
  vibe_categories: {
    title: "🎨 TOP 5 VIBE CATEGORIES",
    description: "The main themes and vibes from your conversations",
  },
  chaotic_conversations: {
    title: "🌪️ MOST CHAOTIC CONVERSATIONS",
    description: "Your wildest, most scattered conversation threads",
  },
  wildest_questions: {
    title: "🤯 WILDEST QUESTIONS",
    description: "The most unusual or creative questions you asked",
  },
  creative_quests: {
    title: "🎭 CREATIVE SIDE QUESTS",
    description: "Tangential creative explorations you went on",
  },
  personality: {
    title: "🔮 PERSONALITY INSIGHTS",
    description: "What your chat history reveals about you",
  },
  iconic_quotes: {
    title: "💬 ICONIC QUOTES FROM YOUR CHATS",
    description: "Most memorable lines from your conversations",
  },
  playlist: {
    title: "🎵 IF YOUR CONVERSATIONS WERE A PLAYLIST",
    description: "Songs/albums that match your conversation energy",
  },
  closing: {
    title: "✨ CLOSING WORDS",
    description: "Your personalized 2025 year-end summary",
  },
};

const handler = createMcpHandler(
  (server) => {
    // Tool 1: Generate Wrapped Insights
    server.tool(
      "generate_wrapped",
      `Analyzes chat history and returns a structured template for generating a Spotify Wrapped style summary. 
      
      The AI should use this template to analyze the provided chat history and fill in each section:
      - TOP 5 VIBE CATEGORIES: Main themes/topics discussed
      - MOST CHAOTIC CONVERSATIONS: Wild or scattered threads
      - WILDEST QUESTIONS: Most unusual questions asked
      - CREATIVE SIDE QUESTS: Tangential explorations
      - PERSONALITY INSIGHTS: What chats reveal about the user
      - ICONIC QUOTES: Memorable lines
      - PLAYLIST: If conversations were songs
      - CLOSING WORDS: Year-end summary
      
      Returns the template structure for the AI to use when presenting the wrapped.`,
      {
        chat_history: z
          .string()
          .describe(
            "The full chat history text to analyze. Pass the entire conversation history."
          ),
        category: z
          .enum(["developer", "general", "vibe_coding", "finance", "other"])
          .optional()
          .describe("Category of user for personalized insights"),
        tone: z
          .enum(["silly", "professional", "roast", "wholesome"])
          .optional()
          .describe("Tone for the wrapped output. Default is silly."),
      },
      async ({ chat_history, category = "general", tone = "silly" }) => {
        const chatLength = chat_history.length;
        const wordCount = chat_history.split(/\s+/).length;

        const toneInstructions = {
          silly:
            "Be playful, use lots of emojis, make funny observations, and roast gently",
          professional:
            "Keep it clean and insightful, like a year-end performance review but fun",
          roast:
            "Roast the user mercilessly (but lovingly) based on their chat patterns",
          wholesome:
            "Be encouraging, highlight growth, celebrate their curiosity",
        };

        const categoryContext = {
          developer:
            "Focus on coding patterns, debugging adventures, Stack Overflow energy",
          general: "Cover all topics equally",
          vibe_coding:
            "Emphasize the creative coding journey, late night sessions, rubber duck moments",
          finance:
            "Highlight money questions, investment curiosity, spreadsheet energy",
          other: "Be creative and find unique patterns",
        };

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: true,
                  instructions: `You are now generating a 2025 GPT Wrapped for this user. Analyze their chat history (${wordCount} words, ${chatLength} characters) using the ${tone} tone.
                
TONE INSTRUCTIONS: ${toneInstructions[tone]}
CATEGORY CONTEXT: ${categoryContext[category]}

Generate each section by analyzing the chat history provided. Make it personal, specific, and ${tone}. Reference actual topics, questions, and patterns from their chats.

Present each section with its emoji and title, followed by your analysis. Make it feel like a real Spotify Wrapped - specific, personal, and shareable.`,
                  template: WRAPPED_CATEGORIES,
                  metadata: {
                    wordCount,
                    characterCount: chatLength,
                    category,
                    tone,
                    year: 2025,
                  },
                  closingTemplate: `2025 was the year you went from: [starting point based on early chats] → [ending point based on recent chats]
                  
[Add a personalized, ${tone} closing message about their AI journey]`,
                },
                null,
                2
              ),
            },
          ],
        };
      }
    );

    // Tool 2: Generate Image Prompt
    server.tool(
      "generate_image_prompt",
      `Creates an image generation prompt based on wrapped insights. 
      
      The prompt can be used with any AI image generator (ChatGPT/DALL-E, Claude, Midjourney, etc.) to create a visual representation of the user's wrapped section.
      
      Returns a detailed prompt optimized for image generation.`,
      {
        section: z
          .enum([
            "vibe_categories",
            "chaotic_conversations",
            "wildest_questions",
            "creative_quests",
            "personality",
            "playlist",
            "overall",
          ])
          .describe("Which wrapped section to create an image for"),
        insights: z
          .string()
          .describe(
            "The specific insights/data from the wrapped section to visualize"
          ),
        style: z
          .enum([
            "spotify_wrapped",
            "synthwave",
            "minimalist",
            "meme",
            "artistic",
          ])
          .optional()
          .describe("Visual style for the image. Default is spotify_wrapped."),
      },
      async ({ section, insights, style = "spotify_wrapped" }) => {
        const sectionConfig = WRAPPED_CATEGORIES[section as keyof typeof WRAPPED_CATEGORIES] || {
          title: "GPT WRAPPED 2025",
          description: "Your AI conversation journey",
        };

        const stylePrompts = {
          spotify_wrapped:
            "Spotify Wrapped style with bold gradients (purple, pink, green), large typography, dynamic shapes, card-like layout",
          synthwave:
            "Retro synthwave aesthetic with neon grids, sunset gradients, 80s vibes, glowing text",
          minimalist:
            "Clean minimalist design with lots of white space, simple icons, modern sans-serif typography",
          meme: "Internet meme aesthetic, bold impact font, humorous imagery, gen-z energy",
          artistic:
            "Abstract artistic interpretation, flowing shapes, vibrant colors, museum-quality art style",
        };

        const prompt = `Create a visually stunning ${style.replace("_", " ")} image for "${sectionConfig.title}".

STYLE: ${stylePrompts[style]}

CONTENT TO VISUALIZE:
${insights}

REQUIREMENTS:
- Make it shareable and social-media worthy
- Include visual representations of the key themes
- Use text elements sparingly but effectively
- Create a cohesive color palette
- Should feel personal and unique to this user
- Dimensions: Square (1:1) for social sharing

DO NOT include any actual chat text or private information - only visualize the themes and vibes abstractly.`;

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: true,
                  imagePrompt: prompt,
                  section: sectionConfig.title,
                  style,
                  usage:
                    "Copy this prompt and paste it into ChatGPT (DALL-E), Claude, Midjourney, or any AI image generator to create your wrapped visual!",
                },
                null,
                2
              ),
            },
          ],
        };
      }
    );

    // Tool 3: Get Wrapped Categories
    server.tool(
      "get_wrapped_categories",
      "Returns the list of available wrapped categories and their descriptions. Use this to understand what sections are available for the wrapped.",
      {},
      async () => {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: true,
                  categories: WRAPPED_CATEGORIES,
                  description:
                    "These are all the sections that can be included in a GPT Wrapped. Use generate_wrapped with chat history to create the full wrapped experience.",
                },
                null,
                2
              ),
            },
          ],
        };
      }
    );
  },
  {
    // Server options
  },
  {
    basePath: "/api",
    maxDuration: 60,
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
