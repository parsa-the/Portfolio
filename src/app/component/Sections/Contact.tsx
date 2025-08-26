import React from "react";
import Form from "../ui/Form";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="font-bold text-center text-4xl lg:text-5xl mb-8">
        Let&apos;s work together!
      </h1>

      <section
        id="Contact"
        className="bg-black/20 backdrop-blur-sm border border-gray-600/30 px-4 md:px-8 py-10 rounded-xl text-white/90 hover:bg-black/30 shadow-[inset_-7px_7px_10px_-5px_#2b2b2b,0px_0px_30px_6px_#424242]"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="font-bold text-3xl mb-2">Get in Touch</h1>
            <div className="w-20 h-px bg-gray-300 mb-2"></div>
            <p className="font-light mb-4 max-w-lg text-gray-500">
              Interested in working together or have a question? Feel free to
              reach out — I&apos;d love to hear from you.
            </p>

            <div>
              <div className="flex items-center gap-1 mb-1">
                <span>@</span>
                <h2 className="font-medium">Email</h2>
              </div>
              <p className="font-light text-sm text-gray-300">
                parsaparvizi018@gmail.com
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1">
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
