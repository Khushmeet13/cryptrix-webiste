import React, { useState } from "react";
import { ChevronDown } from "lucide-react";



const UseCaseFAQ = ({faqs}) => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 px-6 bg-gray-50 text-black">
      <h2 className="text-3xl font-semibold text-center mb-10">FAQs</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ${
              open === i ? "bg-white shadow" : "bg-gray-100"
            }`}
          >
            <div
              className="flex justify-between items-center p-2 rounded-3xl bg-gray-100 shadow cursor-pointer transition"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <h3 className="text-lg font-medium">{item.q}</h3>

              <div className="bg-gray-200 rounded-full p-2">
                <ChevronDown
                  className={`transition-transform duration-300 text-gray-600 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            <div
              className={`px-6 overflow-hidden transition-max-height duration-500 ease-in-out`}
              style={{
                maxHeight: open === i ? "500px" : "0px",
              }}
            >
              <p className="py-4 text-gray-600">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCaseFAQ;
