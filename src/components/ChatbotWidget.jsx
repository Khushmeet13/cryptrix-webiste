"use client";
import { useState, useEffect } from "react";
export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "CHATBOT_OPEN") {
        console.log("it's opened");
        setIsOpen(true);
      }
      if (event.data.type === "CHATBOT_CLOSED") {
        console.log("it's closed");
        setIsOpen(false);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  console.log("chat", isOpen);
  return (
    <div
      className={`fixed right-2 bottom-2 z-50 transition-all duration-300  rounded-xl overflow-hidden ${
        isOpen ? "w-[400px] h-[600px]" : "w-[80px] h-[80px]"
      }`}
    >
      <iframe
        src={ import.meta.env.VITE_CHAT_URL}
        className="w-full h-full border-0"
      />
    </div>
  );
}