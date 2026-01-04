
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Shehzad Rahim's professional portfolio.
Your job is to answer questions about Shehzad Rahim.

Bio Information:
- Name: Shehzad Rahim
- Role: Senior Full Stack Engineer & UI/UX Specialist
- Expertise: React, TypeScript, Node.js, Tailwind CSS, Gemini AI Integration, Cloud Architecture.
- Experience: 8+ years in the software industry.
- Passion: Building high-performance, aesthetically pleasing web applications.
- Location: Dubai, UAE (Open to remote worldwide).
- Achievements: Led teams of 10+ developers, architecture lead for major e-commerce platforms, open-source contributor.

Be professional, concise, and helpful. If you don't know an answer about Shehzad specifically, offer to have the user contact him via the contact form on the page.
`;

export const getGeminiResponse = async (userMessage: string) => {
  if (!API_KEY) {
    return "The AI assistant is currently offline as the API Key is missing. Please contact Shehzad via the form below.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error processing your request. Please try again later.";
  }
};
