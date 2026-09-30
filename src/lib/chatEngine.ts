import { products, Product } from "@/data/products";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  products?: Product[];
}

const greetings = ["hi", "hello", "hey", "helo", "hai", "apa khabar"];
const batteryKeywords = ["battery", "bateri", "car", "kereta", "motorcycle", "motosikal", "truck", "trak", "marine", "marin", "bot"];

export function generateBotReply(userMsg: string): ChatMessage {
  const msg = userMsg.toLowerCase().trim();

  // Greeting
  if (greetings.some((g) => msg.includes(g))) {
    return {
      role: "assistant",
      content:
        "Hi there! 👋 Welcome to PowerCell Battery Malaysia! I can help you find the perfect battery for your vehicle. Tell me your car model, or choose a category:\n\n🚗 Car  |  🏍️ Motorcycle  |  🚛 Truck  |  ⛵ Marine",
    };
  }

  // Search by car model
  const matchedByCar = products.filter((p) =>
    p.fitsCars.some((car) => msg.includes(car.toLowerCase()))
  );
  if (matchedByCar.length > 0) {
    return {
      role: "assistant",
      content: `Great news! I found ${matchedByCar.length} battery option(s) for your vehicle. Here are my recommendations:`,
      products: matchedByCar,
    };
  }

  // Search by category keyword
  if (msg.includes("car") || msg.includes("kereta")) {
    const carBatteries = products.filter((p) => p.category === "car");
    return { role: "assistant", content: "Here are our car batteries:", products: carBatteries };
  }
  if (msg.includes("motorcycle") || msg.includes("motosikal") || msg.includes("motor")) {
    const mcBatteries = products.filter((p) => p.category === "motorcycle");
    return { role: "assistant", content: "Here are our motorcycle batteries:", products: mcBatteries };
  }
  if (msg.includes("truck") || msg.includes("trak") || msg.includes("lori")) {
    const truckBatteries = products.filter((p) => p.category === "truck");
    return { role: "assistant", content: "Here are our truck/commercial batteries:", products: truckBatteries };
  }
  if (msg.includes("marine") || msg.includes("marin") || msg.includes("boat") || msg.includes("bot")) {
    const marineBatteries = products.filter((p) => p.category === "marine");
    return { role: "assistant", content: "Here are our marine batteries:", products: marineBatteries };
  }

  // Price query
  if (msg.includes("price") || msg.includes("harga") || msg.includes("cheap") || msg.includes("murah")) {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    return {
      role: "assistant",
      content: "Here are our batteries sorted by price (lowest first):",
      products: sorted.slice(0, 4),
    };
  }

  // Warranty query
  if (msg.includes("warranty") || msg.includes("waranti") || msg.includes("guarantee")) {
    return {
      role: "assistant",
      content: "All our batteries come with manufacturer warranty ranging from 12 to 36 months. Premium batteries like the Optima Blue Top come with 36-month warranty! Would you like me to show options by warranty length?",
    };
  }

  // Installation
  if (msg.includes("install") || msg.includes("pasang") || msg.includes("delivery") || msg.includes("hantar")) {
    return {
      role: "assistant",
      content: "🚀 We offer FREE same-day installation for orders placed before 2PM within KL & Selangor! Free delivery for orders above RM200 in Klang Valley. Want to schedule an installation? Fill out our quote form or message us on WhatsApp!",
    };
  }

  // Emergency
  if (msg.includes("emergency") || msg.includes("kecemasan") || msg.includes("roadside") || msg.includes("stuck") || msg.includes("kong")) {
    return {
      role: "assistant",
      content: "🚨 Need emergency help? We offer 24/7 roadside battery replacement! Our technician can reach you within 45 minutes in KL & Selangor. Call us now or tap the WhatsApp button for immediate assistance!",
    };
  }

  // Size/spec search
  const sizeMatch = msg.match(/ns\d+|din\d+|ytx\d+|n\d{3}/i);
  if (sizeMatch) {
    const size = sizeMatch[0].toUpperCase();
    const matched = products.filter((p) => p.specs.size.toUpperCase().includes(size));
    if (matched.length > 0) {
      return { role: "assistant", content: `Found batteries matching size "${size}":`, products: matched };
    }
  }

  // Default fallback
  return {
    role: "assistant",
    content:
      "Thanks for reaching out! 😊 I can help you with:\n\n🔋 **Find a battery** — Tell me your car model (e.g., \"Myvi\", \"Honda City\")\n💰 **Check prices** — Ask about pricing or promotions\n🔧 **Installation** — Same-day service info\n🚨 **Emergency** — 24/7 roadside help\n\nOr just type your car model and I'll recommend the best battery!",
  };
}
