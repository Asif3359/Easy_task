import React from "react";

function Contact() {
  return (
    <section className="mt-12 px-3 md:px-8 sm:mt-16 md:ml-18 pb-16">
      <section className="w-full lg:w-3/4 lg:ml-auto">
        <h2 id="contact" className="text-3xl font-semibold mb-6">
          Contact
        </h2>

        <form className="bg-transparent grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="text-sm sm:text-xl">
              Fast name*
            </label>
            <input
              id="firstName"
              type="text"
              className="bg-black border h-12 border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName" className="text-sm sm:text-xl">
              Last name*
            </label>
            <input
              id="lastName"
              type="text"
              className="bg-black border h-12 border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm sm:text-xl">
              Email*
            </label>
            <input
              id="email"
              type="email"
              className="bg-black border h-12 border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm"
              suppressHydrationWarning
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm sm:text-xl">
              Phone*
            </label>
            <input
              id="phone"
              type="tel"
              className="bg-black border h-12 border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-1">
            <label htmlFor="message" className="text-sm sm:text-xl">
              Message*
            </label>
            <textarea
              id="message"
              rows={4}
              className="bg-black border min-h-28 border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm resize-none"
            />
          </div>
          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full px-6 py-2 rounded-lg text-base sm:text-lg text-white font-semibold
              bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)] 
              hover:opacity-90 transition"
            >
              Send message
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Contact;
