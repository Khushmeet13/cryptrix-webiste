import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { posts, categories } from "@/data/blogPosts";
import NewsletterSignup from "@/components/Community/NewsletterSignup";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const EDITORS_PICKS = [
  "how-on-chain-governance-works",
  "second-security-audit-cycle",
  "five-security-mistakes-new-users-make",
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featured = posts.find((p) => p.featured);
  const q = search.trim().toLowerCase();
  const isBrowsing = activeCategory === "All" && !q;

  const gridPosts = (isBrowsing ? posts.filter((p) => p.slug !== featured?.slug) : posts)
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter(
      (p) => !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
    );

  const authors = useMemo(() => {
    const map = new Map();
    posts.forEach((p) => {
      const key = p.author.name;
      if (!map.has(key)) map.set(key, { ...p.author, count: 0 });
      map.get(key).count += 1;
    });
    return Array.from(map.values());
  }, []);

  const picks = posts.filter((p) => EDITORS_PICKS.includes(p.slug));

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-36 md:pb-20">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Blog
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
            Cryptrix's Blog
          </h1>
          <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Insights, updates, and deep dives into Cryptrix, blockchain
            infrastructure, and the future of Web3.
          </p>

          {/* Search */}
          <div className="relative mt-9 max-w-md mx-auto">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.05] transition-all duration-300"
            />
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-12 mt-10">
            <div className="text-center">
              <div className="text-2xl font-semibold text-white">{posts.length}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-gray-500">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-white">{categories.length - 1}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-gray-500">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-white">{authors.length}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-gray-500">Writers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Featured post ───────── */}
      {isBrowsing && featured && (
        <section className="px-6 mb-16">
          <Link
            to={`/blog/${featured.slug}/`}
            className="group block max-w-6xl mx-auto rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01021f]/60 via-transparent to-transparent md:bg-gradient-to-r" />
                <span className="absolute top-5 left-5 text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-blue-300 border border-white/10">
                  Featured
                </span>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4 group-hover:text-blue-100 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">{featured.excerpt}</p>

                <div className="flex items-center gap-3">
                  <img src={featured.author.avatar} alt="" className="w-9 h-9 rounded-full object-cover border border-white/10" />
                  <div className="text-sm">
                    <div className="text-white font-medium">{featured.author.name}</div>
                    <div className="text-gray-500 text-xs flex items-center gap-1.5">
                      {formatDate(featured.date)} · <Clock size={11} /> {featured.readTime}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="ml-auto text-gray-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ───────── Editor's Picks ───────── */}
      {isBrowsing && picks.length > 0 && (
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Editor's Picks
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {picks.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}/`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10">
                    <img src={post.cover} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">
                      {post.category}
                    </span>
                    <h3 className="text-sm font-semibold text-white leading-snug mt-1 line-clamp-2 group-hover:text-blue-100 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Category filters + grid ───────── */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((c) => {
              const isActive = activeCategory === c;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.02] text-gray-400 border-white/10 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {q && (
            <p className="text-center text-sm text-gray-500 mb-8">
              {gridPosts.length} result{gridPosts.length !== 1 ? "s" : ""} for{" "}
              <span className="text-white font-medium">"{search}"</span>
            </p>
          )}

          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}/`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/20"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01021f]/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-blue-300 border border-white/10">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white leading-snug mb-2.5 group-hover:text-blue-100 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2.5">
                      <img src={post.author.avatar} alt="" className="w-7 h-7 rounded-full object-cover border border-white/10" />
                      <div className="text-xs">
                        <div className="text-gray-300 font-medium">{post.author.name}</div>
                        <div className="text-gray-500">
                          {formatDate(post.date)} · {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-gray-400">No articles match your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* ───────── Author spotlight ───────── */}
      <section className="px-6 pb-24 border-t border-white/10 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Meet the writers
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {authors.map((author) => (
              <div
                key={author.name}
                className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 text-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover border border-white/10 mx-auto mb-4"
                />
                <div className="text-white font-semibold text-sm">{author.name}</div>
                <div className="text-gray-500 text-xs mt-1">{author.role}</div>
                <div className="mt-3 text-[11px] font-mono text-blue-400">
                  {author.count} article{author.count !== 1 ? "s" : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default BlogPage;
