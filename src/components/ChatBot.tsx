"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { generateBotReply, ChatMessage } from "@/lib/chatEngine";
import { businessInfo } from "@/data/siteConfig";
import ChatMessages from "./ChatMessages";

export default function ChatBot() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: t(
      "Hi! 👋 I'm PowerCell AI. How can I help you find the perfect battery?",
      "Hai! 👋 Saya AI PowerCell. Bagaimana saya boleh bantu cari bateri?"
    )},
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => { const t = setTimeout(() => setOpen(true), 5000); return () => clearTimeout(t); }, []);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    setMessages(p => [...p, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages(p => [...p, generateBotReply(userMsg.content)]);
      setTyping(false);
    }, 800 + Math.random() * 700);
  };

  const quickReplies = [t("Car battery","Bateri kereta"),t("Myvi","Myvi"),t("Prices","Harga"),t("Installation","Pemasangan")];

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center text-2xl shadow-lg shadow-[#00ff88]/20 hover:scale-110 transition-transform cursor-pointer" aria-label="Chat">
        {open ? "✕" : "🤖"}
      </button>
      {!open && <span className="fixed bottom-[72px] right-6 z-50 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold animate-bounce">1</span>}

      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[70vh] glass-strong flex flex-col animate-slide-up overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-white/5 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center text-xl">🤖</div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">PowerCell AI</p>
              <p className="text-[#00ff88] text-xs flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-pulse"/>{t("Online","Dalam talian")}</p>
            </div>
          </div>

          <ChatMessages messages={messages} typing={typing} scrollRef={scrollRef} whatsapp={businessInfo.whatsapp}/>

          {/* Quick replies */}
          <div className="px-4 pb-2 flex gap-1.5 overflow-x-auto shrink-0">
            {quickReplies.map(q=>(
              <button key={q} onClick={()=>setInput(q)} className="whitespace-nowrap text-[11px] px-3 py-1 rounded-full glass text-white/50 hover:text-white hover:bg-white/10 cursor-pointer shrink-0">{q}</button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/5 flex gap-2 shrink-0">
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder={t("Type a message...","Taip mesej...")} className="glass-input flex-1 px-4 py-2.5 text-sm !rounded-xl"/>
            <button onClick={send} className="btn-neon !py-2.5 !px-4 !rounded-xl cursor-pointer">➤</button>
          </div>
        </div>
      )}
    </>
  );
}
