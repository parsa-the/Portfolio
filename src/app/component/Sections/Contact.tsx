import React from "react";
import Form from "../ui/Form";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-4xl lg:text-5xl mb-5">
        Let's work together!
      </h1>
      <section
        id="Contact"
        className=" bg-black/20 backdrop-blur-sm border border-gray-600/30 px-8 p-10 rounded-xl text-white/90  hover:bg-black/30  w-16xl  shadow-[inset_-7px_7px_10px_-5px_#2b2b2b,0px_0px_30px_6px_#424242] m-3"
      >
        <h1 className="font-bold text-2xl mb-2">Get in Touch</h1>
        <div className="w-20 h-px bg-gray-300 mb-2"></div>
        <p className="font-light mb-7 w-100">
          Interested in working together or have a question? Feel free to reach
          out — I'd love to hear from you.
        </p>
        <div className="flex gap-0.5">
          <span>@ </span>
          <h2 className="font-medium"> Email</h2>
        </div>
        <p className="font-light text-xs">parsaparvizi018@gmail.com</p>
        <Form />
      </section>
    </div>
  );
};

export default Contact;
