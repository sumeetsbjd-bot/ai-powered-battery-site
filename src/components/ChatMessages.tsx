"use client";
import { RefObject } from "react";
import { ChatMessage } from "@/lib/chatEngine";

interface Props {
  messages: ChatMessage[];
  typing: boolean;
  scrollRef: RefObject<HTMLDivElement | null>;
  whatsapp: string;
}

export default function ChatMessages({ messages, typing, scrollRef, whatsapp }: Props) {
  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[45vh]">
      {messages.map((msg, i) => (
        <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
          <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
            msg.role === "user"
              ? "bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0e27] rounded-br-md"
              : "glass text-white/80 rounded-bl-md"
          }`}>
            <p className="whitespace-pre-wrap">{msg.content}</p>
            {msg.products && (
              <div className="mt-3 space-y-2">
                {msg.products.slice(0, 3).map((p) => (
                  <a
                    key={p.id}
                    href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi, I want ${p.name} (RM${p.price})`)}`}
                    target="_blank"
                    className="block glass !rounded-xl p-3 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">{p.name}</span>
                      <span className="text-xs font-bold text-[#00ff88]">RM{p.price}</span>
                    </div>
                    <p className="text-[10px] text-white/40 mt-1">
                      {p.specs.size} • {p.specs.capacity} • ★{p.rating}
                    </p>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {typing && (
        <div className="flex justify-start">
          <div className="glass rounded-2xl rounded-bl-md px-4 py-3">
            <span className="flex gap-1">
              <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
              <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
