import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white px-4">
      <p className="text-sm tracking-widest text-gray-400 mb-4">ERROR</p>

      <h1 className="text-7xl md:text-8xl font-bold mb-8 flex items-center gap-2">
        404
      </h1>

      {/* Planet Graphic */}
      <div className="relative w-96 h-52 mb-10 flex items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/1129597161/photo/page-not-found-message.jpg?s=612x612&w=0&k=20&c=HXptpzdN080p7k3Xn7teM99MIUcnP69i3JLGMe0gQ8Y="
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Dark fade overlay to blend with black background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 rounded-2xl"></div>
      </div>

      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-3">
        Uh Oh. Sorry there's something wrong.
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        We couldn't find the page you're looking for.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition font-medium shadow-lg"
      >
        Go To Home
      </Link>
    </div>
  );
}
