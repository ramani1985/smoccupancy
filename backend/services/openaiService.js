const { OpenAI } = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function parseQuery(nlQuery) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Extract parameters like floor, zone, desk type, time from user queries.",
      },
      {
        role: "user",
        content: nlQuery,
      },
    ],
  });

  const text = response.choices[0].message.content;
  return JSON.parse(text); // expected: { floor, zone, time, type }
}

module.exports = { parseQuery };
