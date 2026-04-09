export async function callAI(system: string, user: string, isJson = false) {
  const API_KEY = process.env.POLLINATIONS_API_KEY;
  
  if (!API_KEY) {
    throw new Error("API Key is missing. Please set POLLINATIONS_API_KEY.");
  }

  const response = await fetch("https://text.pollinations.ai/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "openai",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      response_format: isJson ? { type: "json_object" } : undefined,
      temperature: 0.7
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`AI request failed: ${response.status} ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}
