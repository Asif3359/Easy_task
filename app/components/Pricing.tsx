import React from "react";

const plans = [
  { name: "Intro", price: "$29", badge: true },
  { name: "Base", price: "$49", badge: true },
  { name: "Popular", price: "$99", badge: true },
  { name: "Enterprise", price: "$199", badge: true },
];

const features = [
  { text: "Interface Design", bold: true },
  { text: "Front-end Code", bold: true },
  { text: "Back-end Development", bold: true },
  { text: "Search Engine Optimization", bold: false },
  { text: "Awesome Support", bold: false },
  { text: "Responsive site", bold: false },
  { text: "Easy in use", bold: false },
  { text: "Useful site", bold: false },
  { text: "Speedy web", bold: false },
];

function Pricing() {
  return (
    <section className="mt-16 px-8 flex flex-row justify-end items-start">
      <section className="w-3/4 px-12">
        <h2 className="text-3xl font-semibold mb-6">Pricing</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="bg-[#000000] rounded-md border border-[#262827] px-8 py-12 flex flex-col justify-between relative overflow-hidden"
            >
              {plan.badge && (
                <span className="absolute w-[100px] align-right -left-[13px] top-4 text-xs px-4 py-3 rounded-full bg-[linear-gradient(89.71deg,#F5BD4D_0.23%,#F89222_59.88%)] text-white z-0">
                  {plan.name}
                </span>
              )}
              <div className="pt-8 relative z-10 bg-[#121414] mt-8 p-4">
                <div className="flex items-baseline gap-2 mb-4">
                  <p className="text-3xl font-semibold text-white">
                    {plan.price}
                  </p>
                  <p className="text-xs text-gray-400">/ month</p>
                </div>
                <ul className="text-xs space-y-1">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={
                        feature.bold
                          ? "text-white font-semibold"
                          : "text-gray-300"
                      }
                    >
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-5 bg-transparent border-2 border-amber-400 text-amber-400 px-6 py-2 rounded-full text-sm font-semibold hover:bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)] hover:text-white hover:border-transparent transition-all duration-300 self-start">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Pricing;
