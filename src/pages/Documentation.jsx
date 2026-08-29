import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DocsSidebar from "@/components/Documentation/DocsSidebar";
import DocsTOC from "@/components/Documentation/DocsTOC";
import { BookOpen, Code, Book, LifeBuoy, ThumbsUp, ThumbsDown, Package, FileCode2, FlaskConical, Radio, Download, } from "lucide-react";
import DocsPrevNext from "@/components/Documentation/DocsPrevNext";
import docsConfig, { tocItems} from "@/config/docsConfig";


const slugToTab = {
  docs: "docs",
  api: "api",
  sdk: "sdk",
  cookbook: "cookbook",
  contracts: "contracts",
  testnet: "testnet",
  websocket: "websocket",
  sdk_download: "sdk-download",
  support: "support",
};

const tabs = [
  {
    label: "Documentation",
    icon: BookOpen,
    value: "docs",
  },
  {
    label: "API",
    icon: Code,
    value: "api",
  },
   {
    label: "SDKs",
    icon: Package,
    value: "sdk",
  },
  {
    label: "Cookbook",
    icon: Book,
    value: "cookbook",
  },
  {
    label: "Contracts",
    icon: FileCode2,      
    value: "contracts",
  },
  {
    label: "Testnet",
    icon: FlaskConical,   
    value: "testnet",
  },
  {
    label: "Websocket",
    icon: Radio,           
    value: "websocket",
  },
  {
    label: "SDK Downloads",
    icon: Download,        
    value: "sdk-download",
  },
  {
    label: "Get Support",
    icon: LifeBuoy,
    value: "support",
  },
];


const Documentation = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const activeTab = slugToTab[slug] || "docs";
  const activeConfig = docsConfig[activeTab];

  return (
    <div className="pt-16 bg-[#01021f]">
      <div className="p-3 border-b border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <div className="flex items-center gap-2 text-sm overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() =>
                  navigate(
                    tab.value === "docs" ? "/docs" : `/docs/${tab.value}`
                  )
                }
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap transition hover:cursor-pointer
                  ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="h-screen bg-[#01021f] text-white flex overflow-hidden">
        {/* LEFT SIDEBAR */}
        <DocsSidebar sidebarData={activeConfig.sidebar} />

        {/* CENTER CONTENT (ONLY THIS SCROLLS) */}
        <main
          id="docs-scroll-container"
          className="flex-1 overflow-y-auto px-6 py-8 text-white scrollbar-hide "
        >
          {/* Header */}
          <p className="text-blue-400 text-sm mb-2">Developer Docs</p>
          <h1 className="text-4xl font-semibold mb-10 text-white">
            Cryptrix Documentation
          </h1>

          {/* Getting Started */}
          <section id="getting-started" className="mb-20">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Getting Started
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-white/20 transition">
                <h3 className="text-blue-400 mb-2">Quickstart</h3>
                <p className="text-sm text-gray-400">
                  Build your first Cryptrix program directly in the browser.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-white/20 transition">
                <h3 className="text-blue-400 mb-2">
                  Setup Local Environment
                </h3>
                <p className="text-sm text-gray-400">
                  Install dependencies and tools for Cryptrix development.
                </p>
              </div>
            </div>
          </section>

          {/* Deploy First App */}
          <section id="deploy-first-app" className="mb-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Deploy Your First Cryptrix Application
            </h2>
            <p className="leading-relaxed text-gray-400  ">
              In this guide, you’ll deploy a simple Cryptrix application using
              the Cryptrix SDK. You’ll learn how programs work, how accounts
              are created, and how transactions are executed on Cryptrix.
            </p>
          </section>

          {/* Try Cryptrix */}
          <section id="try-solana" className="mb-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Try Cryptrix: Play 2048
            </h2>
            <p className="leading-relaxed text-gray-400">
              Explore Cryptrix by interacting with a fun on-chain version of
              the 2048 game. This helps you understand transactions, program
              calls, and wallet interactions in a practical way.
            </p>
          </section>

          {/* Start Learning */}
          <section id="start-learning" className="mb-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Start Learning
            </h2>
            <p className="leading-relaxed text-gray-400">
              Begin your Cryptrix journey by understanding core blockchain
              concepts, Cryptrix architecture, and how programs differ from
              traditional smart contracts.
            </p>
          </section>

          {/* Client Side Development */}
          <section id="client-dev" className="mb-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Client Side Development
            </h2>
            <p className="leading-relaxed text-gray-400">
              Learn how to interact with Cryptrix programs from frontend
              applications using JavaScript, TypeScript, and official SDKs.
            </p>
          </section>

          {/* Official SDKs */}
          <section id="official-sdks" className="mb-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Official SDKs
            </h2>
            <p className="leading-relaxed text-gray-400">
              Cryptrix provides official SDKs for Rust and TypeScript to help
              developers build secure and efficient applications.
            </p>
          </section>

          {/* Community SDKs */}
          <section id="community-sdks" className="mb-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Community SDKs
            </h2>
            <p className="leading-relaxed text-gray-400">
              Explore community-maintained SDKs and tools that extend
              Cryptrix’s ecosystem with additional features and integrations.
            </p>
          </section>

          {/* Running Validator */}
          <section id="running-validator" className="mb-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Running a Validator
            </h2>
            <p className="leading-relaxed text-gray-400">
              Validators help secure the Cryptrix network. This section
              explains how to set up, configure, and operate a Cryptrix
              validator node.
            </p>
          </section>

          {/* Getting Support */}
          <section id="getting-support" className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Getting Support
            </h2>
            <p className="leading-relaxed text-gray-400">
              Need help? Reach out through official forums, Discord channels,
              GitHub repositories, and community resources.
            </p>
          </section>

          {/* Footer */}
          <footer className="border-y border-white/10 py-2 text-sm text-gray-500 flex items-center gap-4">
            <span>Is this page helpful?</span>

            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/10 transition cursor-pointer">
                <ThumbsUp size={18} />
              </button>

              <button className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/10 transition cursor-pointer">
                <ThumbsDown size={18} />
              </button>
            </div>
          </footer>

          <DocsPrevNext pages={activeConfig.pages} />
        </main>

        {/* RIGHT TOC */}
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
};

export default Documentation;
