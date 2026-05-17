import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomBar from "../components/BottomBar";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function MainLayout() {
  useEffect(() => {
    const stopOverscroll = (e) => {
      if (window.scrollY === 0 && e.deltaY < 0) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", stopOverscroll, { passive: false });
    window.addEventListener("touchmove", stopOverscroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", stopOverscroll);
      window.removeEventListener("touchmove", stopOverscroll);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-indigo-950 -z-50" />

      <div className="relative min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />

        <BottomBar />
{/* 
        <ChatbotWidget /> */}
        <div className="h-[22vh]" />
      </div>
    </>
  );
}
