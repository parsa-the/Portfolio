"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Form = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const templateParams = {
      from_name: `${Firstname} ${Lastname}`,
      from_email: Email,
      subject: Subject,
      message: Message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setFirstname("");
        setLastname("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <div className="flex justify-end px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-black/20 backdrop-blur-sm border border-gray-600/30 px-4 md:px-8 py-6 rounded-lg w-full max-w-md font-extralight"
      >
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            placeholder="First Name"
            value={Firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="border border-gray-600 rounded h-10 px-3 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none"
            required
          />
          <input
            placeholder="Last Name"
            value={Lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border border-gray-600 rounded h-10 px-3 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none"
            required
          />
        </div>

        {/* Other Fields */}
        <div className="space-y-4 mb-6">
          <input
            placeholder="Email"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-600 rounded h-10 px-3 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none"
            required
          />
          <input
            placeholder="Subject"
            value={Subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border border-gray-600 rounded h-10 px-3 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-600 rounded px-3 py-2 w-full bg-white/5 text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none resize-none"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-white text-black py-2 px-6 rounded w-full hover:bg-gray-200 transition-colors font-bold flex items-center justify-center gap-2"
        >
          <Image src="/icons/sent.png" width={22} height={22} alt="send" />
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
