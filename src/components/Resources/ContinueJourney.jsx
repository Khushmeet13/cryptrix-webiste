import { ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Documentation",
    description: "Official SapherChain documentation and API references",
    link: "/docs",
  },
  {
    title: "Community Rules",
    description: "Code snippets and recipes for common tasks",
    link: "/cookbook",
  },
  {
    title: "Use Cases",
    description: "Structured learning paths for SapherChain development",
    link: "/courses",
  },
  {
    title: "Wallets",
    description: "Explore SapherChain wallets to manage your assets",
    link: "/wallets",
  },
  // Add more if needed (Tools, Grants, etc.)
];

export default function ContinueJourney() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-black">
          Continue Your Journey
        </h2>
        <p className="mt-2 text-md text-gray-500 max-w-3xl mx-auto">
          Ready to dive deeper? Explore these essential resources for YourChain developers
        </p>

        {/* Grid of Resources */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {resources.map((item, index) => (
            <div key={index} className="text-left group">
              {/* Title + Button */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-black">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="px-6 py-3 rounded-full border border-gray-700 
                           text-black font-medium flex items-center gap-1
                           hover:border-indigo-500 hover:text-indigo-600
                           transition-all duration-300 text-sm"
                >
                  VIEW ALL
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Divider Line */}
              <div className="mt-4 h-px bg-gradient-to-r from-gray-800 via-gray-600 to-transparent" />

              {/* Description */}
              <p className="mt-4 text-md text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}