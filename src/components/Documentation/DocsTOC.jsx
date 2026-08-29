import { Github, Menu, ArrowUp } from "lucide-react";
import React, { useEffect, useState, useRef, Fragment } from "react";

/* Helper: flatten nested items for indicator movement */
const flattenItems = (items, level = 0) =>
  items.flatMap((item) => [
    { id: item.id, level },
    ...(item.children ? flattenItems(item.children, level + 1) : []),
  ]);

/* Recursive TOC Item */
const TocItem = ({ item, level = 0, activeId, onClick }) => {
  const isActive = activeId === item.id;

  return (
    <Fragment>
      <li
        className={`cursor-pointer transition-colors leading-snug
          ${isActive ? "text-white font-medium" : "text-gray-500 hover:text-gray-300"}
        `}
        style={{ paddingLeft: `${level * 16}px` }}
        onClick={() => onClick(item.id)}
      >
        {item.label}
      </li>

      {item.children?.map((child) => (
        <TocItem
          key={child.id}
          item={child}
          level={level + 1}
          activeId={activeId}
          onClick={onClick}
        />
      ))}
    </Fragment>
  );
};

const DocsTOC = ({ items }) => {
  const [activeId, setActiveId] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const indicatorRef = useRef(null);

  const flatItems = flattenItems(items);

  /* Observe sections */
  useEffect(() => {
    const container = document.querySelector("#docs-scroll-container");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: container,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    flatItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  /* Move indicator */
  useEffect(() => {
    const index = flatItems.findIndex((i) => i.id === activeId);
    if (indicatorRef.current && index !== -1) {
      indicatorRef.current.style.transform = `translateY(${index * 30}px)`;
    }
  }, [activeId]);

  /* Show Scroll To Top */
  useEffect(() => {
    const container = document.querySelector("#docs-scroll-container");
    if (!container) return;

    const onScroll = () => {
      setShowScrollTop(container.scrollTop > 300);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    document
      .querySelector("#docs-scroll-container")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className="w-64 sticky top-4 h-[calc(100vh-5rem)] text-sm text-gray-400">
      {/* Header */}
      <div className="flex items-center gap-1 mb-4 text-gray-500 font-medium text-base">
        <Menu size={16} /> Table of Contents
      </div>

      {/* TOC */}
      <div className="relative pl-4">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-white/10">
          <div
            ref={indicatorRef}
            className="absolute top-0 w-[2px] h-6 bg-blue-400 transition-transform duration-300"
          />
        </div>

        <ul className="space-y-2">
          {items.map((item) => (
            <TocItem
              key={item.id}
              item={item}
              activeId={activeId}
              onClick={(id) =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          ))}
        </ul>
      </div>

      {/* Edit Page */}
      <div className="mt-4 text-gray-500 flex items-center gap-2 cursor-pointer hover:text-white">
        <Github size={14} /> Edit Page
      </div>

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="mt-3 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition"
        >
          <ArrowUp size={14} />
          Back to top
        </button>
      )}
    </aside>
  );
};

export default DocsTOC;
