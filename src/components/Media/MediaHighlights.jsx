import React from "react";

const events = [
  {
    date: "2017",
    title: "Matic Network Founded",
    desc: "Matic Network is founded.",
    img: "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZXNzfGVufDB8fDB8fHww",
  },
  {
    date: "Jun 20",
    title: "IEO on Binance",
    desc: "Matic Network launches on Binance.",
    img: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByZXNzfGVufDB8fDB8fHww",
  },
  {
    date: "April 19",
    title: "Mainnet Launch",
    desc: "Mainnet launches with POS Chain and Plasma Chain.",
    img: "https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sr0u60I1nxRvq1mZaWAgw2Wf8_YdBOqUWCn6ngQtN_M=",
  },
  {
    date: "2021",
    title: "Rebrand to Sapher",
    desc: "Major rebrand introducing new infrastructure.",
    img: "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZXNzfGVufDB8fDB8fHww",
  },
  {
    date: "2017",
    title: "Matic Network Founded",
    desc: "Matic Network is founded.",
    img: "https://media.istockphoto.com/id/1367616995/photo/customer-feedback-experience-review-concept.jpg?s=612x612&w=0&k=20&c=cMJPKIgixe2htRkeOxIJz_m7PCYnpu-pEFaGvph37Wk=",
  },
  {
    date: "Jun 20",
    title: "IEO on Binance",
    desc: "Matic Network launches on Binance.",
    img: "https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sr0u60I1nxRvq1mZaWAgw2Wf8_YdBOqUWCn6ngQtN_M=",
  },
  {
    date: "April 19",
    title: "Mainnet Launch",
    desc: "Mainnet launches with POS Chain and Plasma Chain.",
    img: "https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sr0u60I1nxRvq1mZaWAgw2Wf8_YdBOqUWCn6ngQtN_M=",
  },
  {
    date: "2021",
    title: "Rebrand to Sapher",
    desc: "Major rebrand introducing new infrastructure.",
    img: "https://media.istockphoto.com/id/1367616995/photo/customer-feedback-experience-review-concept.jpg?s=612x612&w=0&k=20&c=cMJPKIgixe2htRkeOxIJz_m7PCYnpu-pEFaGvph37Wk=",
  },
];

const MediaHighlights = () => {
  return (
    <>
    <div className="w-full py-22 bg-white text-black ">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10 px-20">Media Highlights</h2>
      <div className="relative flex overflow-x-auto scrollbar-hide pl-20">
        {events.map((item, i) => (
          <div key={i} className="relative flex flex-col items-center">
            {/* TOP BOX (date or content depending on index) */}
            {i % 2 === 0 ? (
              <DateBox date={item.date} />
            ) : (
              <ContentBox item={item} />
            )}

            {/* BOTTOM BOX (opposite of top) */}
            {i % 2 === 0 ? (
              <ContentBox item={item} />
            ) : (
              <DateBox date={item.date} />
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

/* DATE BOX */
const DateBox = ({ date }) => (
  <div
    className="w-[320px] h-[190px] bg-gray-50
      rounded-sm flex items-center justify-center backdrop-blur-md"
  >
    <div className="text-4xl font-bold text-gray-600 [mask-image:linear-gradient(to_bottom,black,transparent)]">
      {date}
    </div>
  </div>
);

/* CONTENT BOX */
const ContentBox = ({ item }) => (
  <div
    className="relative w-[320px] h-[190px] rounded-sm overflow-hidden 
      shadow-lg bg-black/30 backdrop-blur-xl "
  >
    {/* BG IMAGE */}
    <img
      src={item.img}
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />

    <div className="absolute inset-0 bg-black/50" />

    <div className="relative p-5 text-white">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-white/70 mt-2">{item.desc}</p>
    </div>
  </div>
);

export default MediaHighlights;
