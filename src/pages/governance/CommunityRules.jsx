import NewsletterSignup from "@/components/Community/NewsletterSignup";
import React from "react";
import CustomButton from "@/components/Common/CustomButton";
import { ArrowUpRight } from "lucide-react";

const sections = [
  {
    title: "Core Principles",
    subtitle:
      "The foundational values that guide behavior, decision-making, and collaboration across the SPH ecosystem.",

    bgColor: "bg-white",
    items: [
      {
        title: "Transparency",
        desc: "All actions, decisions, and discussions are open and verifiable.",
        image:
          "https://media.istockphoto.com/id/1892804148/photo/blockchain-technology-empowers-businessman-pointing-icon-with-innovative-solutions.jpg?s=612x612&w=0&k=20&c=pXeQ4a9V8WJGldm7H5w_xFu-zHvUkYzlcNLe84HEeUg=",
      },
      {
        title: "Respect",
        desc: "Treat every member with courtesy and professionalism.",
        image:
          "https://media.istockphoto.com/id/1207635058/photo/abstract-blue-backgrounds.jpg?s=612x612&w=0&k=20&c=zXXs7nZ2hCP0ih0jgfeZ6L1qSCMrg9G7Cx3uHyz9Dcc=",
      },
      {
        title: "Decentralization",
        desc: "Community-driven governance with no central authority.",
        image:
          "https://media.istockphoto.com/id/1376741142/photo/defi-decentralized-finance-innovation-technology-banking-fintech.jpg?s=612x612&w=0&k=20&c=tHXXUS0N7_g4cf0ziGVYpHNHKLDDCrj_8QhjMzOrLuU=",
      },
      {
        title: "Security First",
        desc: "Protect users and assets from malicious activity.",
        image:
          "https://media.istockphoto.com/id/1343499203/photo/lock-data-concept.jpg?s=612x612&w=0&k=20&c=2di3kdMyF-h8_pIIF8sbjAlV3HVR0Sut_wBBbFunc_8=",
      },
      {
        title: "Inclusivity",
        desc: "Every voice matters regardless of stake size or role.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      },
      {
        title: "Accountability",
        desc: "Members are responsible for their actions and decisions.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      },
    ],
  },

  {
    title: "Participation Rules",
    subtitle:
      "Clear guidelines to ensure healthy discussions, prevent abuse, and protect the integrity of the community.",
    bgColor: "bg-gray-50",
    items: [
      {
        title: "No Spam or Scams",
        desc: "No promotional posts, phishing links, or fraud.",
        image:
          "https://media.istockphoto.com/id/1400359666/photo/network-security-security-security-system-technology-internet-safety-big-data-encryption.jpg?s=612x612&w=0&k=20&c=1SxT2Ngr1TowbqY2IpWRpv0mAI02F56sNv876EDEnQE=",
      },
      {
        title: "Respectful Discussions",
        desc: "No harassment, hate speech, or toxic behavior.",
        image:
          "https://media.istockphoto.com/id/2229943365/photo/businesswoman-talking-to-colleague-with-hand-on-shoulder-in-supportive-gesture-at-corporate.jpg?s=612x612&w=0&k=20&c=2SiIcDn-YuiqVuWYcpqoppgKAaBgmzf0NeOq9-v5XRA=",
      },
      {
        title: "No Vote Manipulation",
        desc: "Bribing or coercing votes is strictly prohibited.",
        image:
          "https://media.istockphoto.com/id/2196855890/photo/businessmans-hand-touching-futuristic-technological-interface-financial-planning-cost.jpg?s=612x612&w=0&k=20&c=Bn00YnOGDrOAmbfuYdH3s3tUU9cPKshTviyWLKaQGdU=",
      },
      {
        title: "Stay On Topic",
        desc: "Keep discussions relevant to governance and proposals.",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      },
      {
        title: "One Person, One Voice",
        desc: "Sybil attacks or duplicate accounts are forbidden.",
        image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
      },
    ],
  },

  {
    title: "Governance Conduct",
    subtitle:
      "Standards for creating proposals and voting responsibly to maintain fairness and trust.",
    bgColor: "bg-white",
    items: [
      {
        title: "Ethical Proposal Creation",
        desc: "Proposals must benefit the ecosystem, not individuals.",
        image:
          "https://media.istockphoto.com/id/2167219949/photo/blockchain-technology-concept-revolutionizing-industries-exploring-the-boundless-potential-of.jpg?s=612x612&w=0&k=20&c=R7vWba4-T8bpLPfxMnBcSRJHuI7DWmzc5q9buY7Nbsw=",
      },
      {
        title: "Fair Voting",
        desc: "Votes should be based on merit and long-term value.",
        image:
          "https://media.istockphoto.com/id/1017718838/photo/ballot-box-on-a-laptop-3d-illustration.jpg?s=612x612&w=0&k=20&c=QYWyhp4a-fobcKvbQLjLbSTuSo9b7dBMHjjW4RAjdxs=",
      },
      {
        title: "Informed Decisions",
        desc: "Review proposals thoroughly before voting.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      },
      {
        title: "Conflict Disclosure",
        desc: "Declare conflicts of interest transparently.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      },
      {
        title: "Community Feedback",
        desc: "Engage with community feedback before final submission.",
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      },
    ],
  },

  {
    title: "Enforcement",
    subtitle:
      "Actions taken to address violations and maintain a safe ecosystem.",
    bgColor: "bg-gray-50",
    items: [
      {
        title: "Warnings",
        desc: "Minor violations receive an official warning.",
        image:
          "https://media.istockphoto.com/id/2191724228/photo/futuristic-digital-interface-with-compliance-checklist-and-security-icons-on-dark-background.jpg?s=612x612&w=0&k=20&c=xG43wcOk_e-GbpaW4xb8QgFH5M8Ui8UEyGlPgdU3NPU=",
      },
      {
        title: "Temporary Bans",
        desc: "Repeated violations lead to limited access.",
        image:
          "https://media.istockphoto.com/id/1479348342/photo/yellow-glowing-chains-connecting-multiple-chains-on-black-background.jpg?s=612x612&w=0&k=20&c=FMWkvLVq1-sSn6uLt4tdVm96a4nkXdMH8Zq2_5s8DcA=",
      },
      {
        title: "Permanent Restrictions",
        desc: "Severe violations result in permanent bans.",
        image:
          "https://media.istockphoto.com/id/919742166/photo/bitcoin-blockchain-with-lock-on-encrypted-data.jpg?s=612x612&w=0&k=20&c=zAE9lPagJo_0WvOgK2DAuT-UmEKBAtfoFGM4_bbt9wM=",
      },
      {
        title: "Proposal Rejection",
        desc: "Malicious proposals are immediately rejected.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      },
      {
        title: "DAO Intervention",
        desc: "Critical cases are escalated to DAO voting.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
    ],
  },

  {
    title: "Reporting Violations",
    subtitle: "Simple and transparent ways to report abuse or misconduct.",
    bgColor: "bg-white",
    items: [
      {
        title: "How to Report",
        desc: "Use Discord or submit a governance ticket.",
        image:
          "https://media.istockphoto.com/id/1413177962/photo/data-analysis-business-intelligence-business-analytics-businessman-working-on-laptop-with.jpg?s=612x612&w=0&k=20&c=PksGCFGFW6pB1APAxnAwgRt89UvKQW69TFz2K-y8Xto=",
      },
      {
        title: "What to Include",
        desc: "Provide evidence, timestamps, and usernames.",
        image:
          "https://media.istockphoto.com/id/2178462011/photo/businessman-showing-a-smart-contract-and-executing-a-cryptocurrency-transaction-with.jpg?s=612x612&w=0&k=20&c=Kd3P060NZpnovYtFdYDC1ubZBlvwUBe8XbVBS6ohL7U=",
      },
      {
        title: "Confidentiality",
        desc: "Reports are handled privately and securely.",
        image:
          "https://media.istockphoto.com/id/2216086609/photo/technology-intelligence-concepts-with-fingerprint-identification-personal-identity.jpg?s=612x612&w=0&k=20&c=RB-W4oo-_hH63_b_iwmIx8uUjpFaNxLipe2ZmAz6K7U=",
      },
      {
        title: "Follow-Up Process",
        desc: "Track report status transparently.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      },
      {
        title: "False Reports",
        desc: "Misuse of reporting tools may result in penalties.",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      },
    ],
  },
];

const CommunityRules = () => {
  return (
    <div className="w-full">
      {/* Top Section */}
      <section className="relative h-[30vh] flex items-center justify-center px-6 sm:px-12 lg:px-24 pt-28 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 text-center text-white space-y-3">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl">Community guidelines</h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            Building a respectful, decentralized ecosystem that puts community
            first. Every voice matters, every vote counts, and trust drives our
            growth.
          </p>
        </div>
      </section>

      <div className="relative overflow-hidden">
        {/* All Sections */}
        <div className="">
          {sections.map((section, index) => (
            <section key={index} className={`${section.bgColor} py-24`}>
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Heading */}
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center text-black">
                    {section.title}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-500 text-center mb-12 max-w-2xl">
                    {section.subtitle}
                  </p>
                </div>

                {/* Cards Layout */}
                <div className="space-y-10">
                  {/* Top Row – 2 Cards */}
                  <div className="grid md:grid-cols-2 gap-10">
                    {section.items.slice(0, 2).map((item, i) => (
                      <Card key={i} item={item} />
                    ))}
                  </div>

                  {/* Bottom Row – 3 or 4 Cards */}
                  {section.items.length > 2 && (
                    <div
                      className={`grid gap-10 ${
                        section.items.slice(2).length === 3
                          ? "md:grid-cols-3"
                          : "md:grid-cols-2 lg:grid-cols-4"
                      }`}
                    >
                      {section.items.slice(2).map((item, i) => (
                        <Card key={i} item={item} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="bg-gray-50 py-22">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Ready to take action?
          </h2>

          {/* Sub text */}
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Start by creating a new proposal or learn more about the guidelines.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              className={`relative px-6 py-3 bg-indigo-600 text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-indigo-500/40 transform hover:scale-105`}
            >
              {/* Sliding colored layer */}
              {/* <span
              className={`absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full`}
            /> */}

              {/* Text + Icon */}
              <span className="relative z-10 flex items-center gap-1">
                Create Proposal
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <CustomButton text="View Proposal Guidelines" />
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      <div className="absolute top-8 left-8 z-10">
        <h3 className="text-2xl font-medium text-white drop-shadow-lg">
          {item.title}
        </h3>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10">
        <p className="text-gray-200 text-lg leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
};

export default CommunityRules;
