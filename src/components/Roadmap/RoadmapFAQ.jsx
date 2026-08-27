import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How often is this roadmap updated?",
    answer:
      "The roadmap is reviewed quarterly, with status updates as initiatives move between Upcoming, In Progress, and Shipped. Dates are estimates and may shift as priorities evolve.",
  },
  {
    question: "Can I suggest a feature?",
    answer:
      "Yes — feature suggestions and feedback go through the Cryptrix community channels. Popular requests are regularly reviewed for inclusion in future phases.",
  },
  {
    question: "Is this roadmap a binding commitment?",
    answer:
      "No. It reflects current priorities and direction, not guaranteed delivery dates. Blockchain development timelines can shift based on audits, research, and community feedback.",
  },
  {
    question: "Where can I track progress in real time?",
    answer:
      "Live network activity is available on the Ecosystem and Status pages. This roadmap tracks feature and protocol-level milestones rather than moment-to-moment network stats.",
  },
];

const RoadmapFAQ = () => {
  return (
    <section className="relative py-20 md:py-24 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Roadmap questions
          </h2>
        </div>

        <dl className="divide-y divide-white/10">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left cursor-pointer">
                  <span className="text-base font-semibold text-white group-data-open:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusSmallIcon aria-hidden="true" className="size-5 text-gray-400 group-data-open:hidden" />
                    <MinusSmallIcon aria-hidden="true" className="size-5 text-blue-400 group-not-data-open:hidden" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default RoadmapFAQ;
