import { NextRequest } from "next/server";

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;


export async function POST(req: NextRequest) {
  try {
    const { userMessage } = await req.json();;

    // Отправка пользователю
        const chatId = CHAT_ID;
        const res =  await fetch(TELEGRAM_API, {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ chat_id: Number(chatId) , text: userMessage }),
      });
          const data = await res.json();

          return new Response(JSON.stringify({ success: true, data }), {status: 200})
  } catch (error) {
    console.error("Telegram send error:", error);
        return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}


