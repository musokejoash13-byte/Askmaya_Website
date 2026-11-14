import { GoogleGenAI } from '@google/genai';

const defaultModel = 'gemini-3.5-flash-lite';

export function createGeminiService({
  apiKey = process.env.GEMINI_API_KEY,
  model = process.env.GEMINI_MODEL || defaultModel,
  client
} = {}) {
  if (!apiKey && !client) {
    throw new Error('GEMINI_API_KEY is required to initialize the Gemini service.');
  }
  if (!/^[a-zA-Z0-9._-]+$/.test(model)) {
    throw new Error('GEMINI_MODEL contains unsupported characters.');
  }

  const gemini = client || new GoogleGenAI({ apiKey });

  return {
    async generateReply(contents, systemInstruction) {
      const response = await gemini.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction,
          temperature: 0.4,
          maxOutputTokens: 400
        }
      });

      return typeof response.text === 'string' ? response.text.trim() : '';
    }
  };
}
