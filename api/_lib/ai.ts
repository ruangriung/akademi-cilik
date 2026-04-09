export async function callAI(system: string, user: string, isJson = false) {
  const API_KEY = process.env.POLLINATIONS_API_KEY;
  
  if (!API_KEY) {
    throw new Error("API Key is missing. Please set POLLINATIONS_API_KEY in Vercel Environment Variables.");
  }

  const response = await fetch("https://gen.pollinations.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      messages: [
        { 
          role: "system", 
          content: system,
          cache_control: { type: "ephemeral" }
        },
        { role: "user", content: user }
      ],
      model: "openai",
      modalities: ["text"],
      temperature: 1,
      seed: 42,
      response_format: { type: isJson ? "json_object" : "text" },
      thinking: { type: "disabled", budget_tokens: 1 },
      reasoning_effort: "none"
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`AI request failed (${response.status}): ${errorBody}`);
  }

  const data = await response.json();
  if (!data.choices || !data.choices[0]) {
    throw new Error("Invalid AI response structure");
  }
  
  return data.choices[0].message.content;
}
