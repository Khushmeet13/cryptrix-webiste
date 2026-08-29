import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const DocsPrevNext = ({ pages }) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const container = document.querySelector("#docs-scroll-container");

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

    pages.forEach((page) => {
      const el = document.getElementById(page.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pages]);

  const index = pages.findIndex((p) => p.id === activeId);
  const prev = pages[index - 1];
  const next = pages[index + 1];

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-20 grid grid-cols-2 gap-6">
      {prev ? (
        <button
          onClick={() => scrollTo(prev.id)}
          className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl px-6 py-3.5 text-left hover:border-white/20 transition cursor-pointer"
        >
          <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
            <ChevronLeft size={16} /> Previous
          </div>
          <div className="text-blue-400 font-medium text-sm">
            {prev.title}
          </div>
        </button>
      ) : <div />}

      {next && (
        <button
          onClick={() => scrollTo(next.id)}
          className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl px-6 py-3.5 text-right hover:border-white/20 transition cursor-pointer"
        >
          <div className="flex justify-end items-center gap-1 text-gray-500 text-sm mb-1">
            Next <ChevronRight size={16} />
          </div>
          <div className="text-blue-400 font-medium text-sm">
            {next.title}
          </div>
        </button>
      )}
    </div>
  );
};

export default DocsPrevNext;
