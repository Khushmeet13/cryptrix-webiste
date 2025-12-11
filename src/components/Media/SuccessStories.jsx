import React from "react";
import CustomButton from "../Common/CustomButton";

const stories = [
  {
    title: "How Sapher Improved Transaction Security by 92%",
    desc: "A deep dive into how Sapher helped enterprises achieve unmatched security with decentralized verification.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Scaling to Millions of Users Seamlessly",
    desc: "See how Sapher infrastructure powered massive scale while keeping costs extremely low.",
    img: "https://media.istockphoto.com/id/1147479504/photo/business-is-winning-when-we-stick-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=YbsybTDWhJf0Z_4Scl9JbDTln5lYlmO5tLHqLtr9t5Y=",
  },
  {
    title: "Global Brand Adoption in 12 Months",
    desc: "How Sapher enabled brands to expand into new countries using blockchain-based trust.",
    img: "https://media.istockphoto.com/id/1471444483/photo/customer-satisfaction-survey-concept-users-rate-service-experiences-on-online-application.jpg?s=612x612&w=0&k=20&c=HFh1o4JU68KWv7PXgbLdIZT0_qepmgePEkvbsLJr5p0=",
  },
];

const SuccessStories = () => {
  return (
    <section className="w-full bg-gray-100 text-black py-22 px-6">
      <h2 className="text-3xl font-semibold text-center mb-16">
        Success Stories
      </h2>

      <div className="max-w-6xl mx-auto space-y-14">
        {stories.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.img}
              className="w-full max-w-[400px] rounded-2xl shadow-lg"
              alt=""
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{item.desc}</p>

              <CustomButton
                text="Read Full Story"
                bgColor="bg-black"
                slideColor="bg-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
