"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import BatteryFinder from "@/components/BatteryFinder";
import Promotions from "@/components/Promotions";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <BatteryFinder />
        <Promotions />
        <Services />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
      <ChatBot />
      <WhatsAppButton />
    </>
  );
}
