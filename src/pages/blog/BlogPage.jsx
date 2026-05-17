import React from "react";

const BlogPage = () => {
  return (
    <div className="w-full">
      {/* Top Section */}
      <section className="relative h-[30vh] flex items-center justify-center px-6 sm:px-12 lg:px-24 pt-28 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 text-center text-white space-y-3">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl">SapherChain’s Blog</h1>

          {/* Blog-focused Subheading */}
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto">
            Insights, updates, and deep dives into SapherChain, blockchain
            innovation, decentralized technologies, and the future of Web3.
          </p>
        </div>
      </section>

      <section>
        
      </section>
    </div>
  );
};

export default BlogPage;
