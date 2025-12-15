import React from "react";
import CustomButton from "../Common/CustomButton";

const caseStudies = [
  {
    year: "2024",
    title: "Sapher x FinTech Corp",
    desc: "How Sapher reduced fraud by 70% with real-time identity layers.",
    img: "https://media.istockphoto.com/id/1345144783/photo/freelancers-working-on-new-projects.webp?a=1&b=1&s=612x612&w=0&k=20&c=neQiphtWClLK42L_swtJz5lX2GImunkn8KvIcDg-5sI=",
  },
  {
    year: "2023",
    title: "Government Blockchain Identity Pilot",
    desc: "Pilot program for digital identity authentication at national scale.",
    img: "https://media.istockphoto.com/id/1345146934/photo/freelancers-working-on-new-projects.webp?a=1&b=1&s=612x612&w=0&k=20&c=BwwGAkz-J_QzGZGG86O0mHzl60ITtss12W6IQ-zbNlE=",
  },
  {
    year: "2022",
    title: "Enterprise Automation Upgrade",
    desc: "Decentralized automation layer adopted by 250+ enterprises.",
    img: "https://media.istockphoto.com/id/635780808/photo/case-study.webp?a=1&b=1&s=612x612&w=0&k=20&c=uyMJ7BEPEvhXDrSxo_sakcRhrFvmt7C0D7yUp_vgI64=",
  },
];

const CaseStudies = () => {
  return (
    <section className="w-full bg-white text-black py-22 px-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-16">Case Studies</h2>

      <div className="max-w-5xl mx-auto pl-6 border-l border-indigo-600 space-y-16">
        {caseStudies.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-6 top-2 w-3 h-3 bg-indigo-600 rounded-full" />

            {/* Text Section */}
            <div className="flex-1">
              <p className="text-indigo-600 text-sm">{item.year}</p>
              <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed mb-4">{item.desc}</p>

             <CustomButton text="View Case Study" bgColor="bg-indigo-600" slideColor="bg-black"/>
            </div>

            {/* Right Side Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-84 h-40 object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
