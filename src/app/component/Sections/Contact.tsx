import React from "react";
import Form from "../ui/Form";
import { motion } from "motion/react";
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col h-215 items-center justify-end">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-bold text-center text-4xl lg:text-5xl mb-8"
      >
        Let&apos;s work together!
      </motion.h1>

      <section
        id="Contact"
        className=" border border-gray-600/30 px-4 md:px-8 py-10 rounded-xl text-white/90 hover:bg-black/30 shadow-[inset_-7px_7px_10px_-5px_#2b2b2b,0px_0px_9px_1px_#424242] backdrop-blur-lg"
      >
        <div className="flex flex-col lg:flex-row gap-8">
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
          <div className="flex-1">
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
