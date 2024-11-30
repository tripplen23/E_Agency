"use server";
import { FASTAPI_URL } from "./const";

interface ChatBotRequest {
  context?: string;
  prompt: string;
}

interface ChatBotResponse {
  result: string;
}

export async function promptChatBot(
  data: ChatBotRequest
): Promise<ChatBotResponse> {
  try {
    const response = await fetch(`${FASTAPI_URL}/prompt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        context: data.context || "",
        prompt: data.prompt,
      }),
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("Chat Bot Response:", result);
    return result as ChatBotResponse;
  } catch (error) {
    console.error("Error calling chat bot:", error);
    throw error;
  }
}
