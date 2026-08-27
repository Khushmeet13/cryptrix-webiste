import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Link as LinkIcon, Twitter, Check } from "lucide-react";
import { posts, getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import NewsletterSignup from "@/components/Community/NewsletterSignup";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const ContentBlock = ({ block }) => {
  if (block.type === "h2") {
    return <h2 className="text-2xl font-semibold text-white mt-10 mb-4">{block.text}</h2>;
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-2.5 my-6">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-gray-300 leading-relaxed">
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-gray-300 leading-relaxed mb-5">{block.text}</p>;
};

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) navigate("/blog", { replace: true });
    window.scrollTo(0, 0);
  }, [post, navigate]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  if (!post) return null;

  const related = getRelatedPosts(post);
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — fail silently
    }
  };

  const shareOnX = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ───────── Header ───────── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-10 md:pt-36">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to Blog
          </Link>

          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mt-3 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt="" className="w-10 h-10 rounded-full object-cover border border-white/10" />
            <div className="text-sm">
              <div className="text-white font-medium">{post.author.name}</div>
              <div className="text-gray-500 text-xs flex items-center gap-1.5">
                {formatDate(post.date)} · <Clock size={11} /> {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Cover image ───────── */}
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10">
          <img src={post.cover} alt={post.title} className="w-full h-[280px] md:h-[420px] object-cover" />
        </div>
      </section>

      {/* ───────── Article body ───────── */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto grid md:grid-cols-[auto_1fr] gap-10">
          {/* Share rail */}
          <div className="hidden md:flex flex-col items-center gap-3 pt-2">
            <span className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Share</span>
            <button
              onClick={shareOnX}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/25 transition-all"
              aria-label="Share on X"
            >
              <Twitter size={15} />
            </button>
            <button
              onClick={copyLink}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/25 transition-all"
              aria-label="Copy link"
            >
              {copied ? <Check size={15} className="text-emerald-400" /> : <LinkIcon size={15} />}
            </button>
          </div>

          {/* Content */}
          <article>
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}

            {/* Mobile share row */}
            <div className="md:hidden flex items-center gap-3 mt-10 pt-6 border-t border-white/10">
              <span className="text-xs uppercase tracking-widest text-gray-600">Share</span>
              <button
                onClick={shareOnX}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400"
              >
                <Twitter size={14} />
              </button>
              <button
                onClick={copyLink}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <LinkIcon size={14} />}
              </button>
            </div>

            {/* Author bio */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
              <img src={post.author.avatar} alt="" className="w-14 h-14 rounded-full object-cover border border-white/10" />
              <div>
                <div className="text-white font-semibold">{post.author.name}</div>
                <div className="text-sm text-gray-500">{post.author.role} at Cryptrix</div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ───────── Prev / Next ───────── */}
      {(prevPost || nextPost) && (
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}/`}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
              >
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gray-500 mb-2">
                  <ArrowLeft size={12} />
                  Previous
                </span>
                <p className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-blue-100 transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}/`}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 text-right transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
              >
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gray-500 mb-2 justify-end w-full">
                  Next
                  <ArrowRight size={12} />
                </span>
                <p className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-blue-100 transition-colors">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}

      {/* ───────── Related posts ───────── */}
      {related.length > 0 && (
        <section className="px-6 pb-24 border-t border-white/10 pt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-8">More from the blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}/`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/20"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01021f]/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                      {p.category}
                    </span>
                    <h3 className="text-sm font-semibold text-white leading-snug mt-2 group-hover:text-blue-100 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterSignup />
    </div>
  );
};

export default BlogDetail;
