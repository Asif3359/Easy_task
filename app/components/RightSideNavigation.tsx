import React from "react";

function RightSideNavigation() {
  const languages = [
    { code: "Fr", active: true },
    { code: "En", active: false },
  ];

  return (
    <nav className="hidden lg:flex fixed top-64 -right-18 flex flex-col items-center gap-2 z-50">
      <div className="text-gray-400 text-xs h-40 flex items-start">
        <p
          className="whitespace-nowrap origin-center"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "center",
          }}
        >
          © design by themefisher developed by gethugothemes
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        {languages.map((lang, index) => (
          <button
            key={index}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
              lang.active
                ? "bg-[#333333] text-white border-2 border-amber-400"
                : "bg-[linear-gradient(180deg,#F89222_0%,#F5BD4D_100%)] text-white hover:scale-105"
            }`}
            aria-label={`Switch to ${lang.code === "Fr" ? "French" : "English"}`}
          >
            {lang.code}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default RightSideNavigation;
