import React from "react";

function Contact() {
  return (
    <section className="mt-16 px-8 flex flex-row justify-end items-start">
      <section className="w-3/4 px-12">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <form className="bg-transparent grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="text-xs">
              Fast name*
            </label>
            <input
              id="firstName"
              type="text"
              className="bg-black border border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName" className="text-xs">
              Last name*
            </label>
            <input
              id="lastName"
              type="text"
              className="bg-black border border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs">
              Email*
            </label>
            <input
              id="email"
              type="email"
              className="bg-black border border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-xs">
              Phone*
            </label>
            <input
              id="phone"
              type="tel"
              className="bg-black border border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-1">
            <label htmlFor="message" className="text-xs">
              Message*
            </label>
            <textarea
              id="message"
              rows={4}
              className="bg-black border border-[#f5bd4d33] rounded-md px-3 py-2 outline-none focus:border-amber-400 text-sm resize-none"
            />
          </div>
          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full px-6 py-2 rounded-full text-sm font-semibold
              bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)] 
              text-black hover:opacity-90 transition"
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
