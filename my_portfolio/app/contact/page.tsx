"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  FileText,
  ExternalLink,
  Copy,
  X,
} from "lucide-react";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsGithub, BsInstagram } from "react-icons/bs";

const ContactPage = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const contactInfo = {
    email: "architpulkit2003@gmail.com",
    phone: "+91 6386392717",
    resumeLink: "/Archit_Srivastava_resume_2025.pdf",
    socialLinks: [
      {
        name: "GitHub",
        icon: <BsGithub size={20} />,
        url: "https://github.com/archit-srivastava-d2k",
        color: "hover:text-[#d4d4d4]",
      },
      {
        name: "LinkedIn",
        icon: <LiaLinkedinIn size={20} />,
        url: "https://www.linkedin.com/in/srivastavarchit",
        color: "hover:text-[#4ea4e6]",
      },
      {
        name: "Instagram",
        icon: <BsInstagram size={20} />,
        url: "https://www.instagram.com/archit.ian",
        color: "hover:text-[#e877b8]",
      },
      {
        name: "Twitter(X)",
        icon: <X size={20} />,
        url: "https://x.com/Architsri2026",
        color: "hover:text-[#1da1f2]",
      },
    ],
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const socialLinkVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] border border-[#2a2a2a] w-full max-w-[1100px] mx-auto mt-[20rem] lg:mt-[8rem] text-[#c5c5c5] p-4 sm:p-6  font-mono overflow-x-hidden relative">
      <div className="border-b border-[#333] pb-4 mb-6 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <motion.h1
          className="text-xl md:text-2xl text-[#569cd6] font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact.tsx
        </motion.h1>
      </div>

      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl text-[#569cd6] mb-2">// Get in touch</h2>
          <p className="text-[#a8a8a8] mb-8">
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#9cdcfe]">contactMe</span> = () =&gt; {"{"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 ml-2">
          {["email", "phone"].map((type, i) => {
            const info =
              type === "email" ? contactInfo.email : contactInfo.phone;
            const icon =
              type === "email" ? <Mail size={24} /> : <Phone size={24} />;
            const bg = type === "email" ? "bg-[#3794ff]" : "bg-[#4ec9b0]";
            const text = type === "email" ? "text-[#9cdcfe]" : "text-[#b5cea8]";
            return (
              <motion.div
                key={type}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={contactItemVariants}
                className="relative bg-[#252526] p-4 rounded-md border border-[#333] flex flex-col sm:flex-row sm:items-center gap-2"
              >
                <div className={`${bg} p-2 rounded-md text-white`}>{icon}</div>
                <div className="flex-grow break-words">
                  <p className="text-sm text-[#a8a8a8]">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </p>
                  <p className={`${text} break-words`}>{info}</p>
                </div>
                <motion.button
                  variants={socialLinkVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => copyToClipboard(info, type)}
                  className="p-2 hover:bg-[#3a3d41] rounded-md"
                  aria-label={`Copy ${type}`}
                >
                  <Copy size={18} />
                  {copiedText === type && (
                    <span className="absolute top-0 right-0 mt-1 mr-1 bg-[#3a3d41] text-xs px-2 py-1 rounded z-10">
                      Copied!
                    </span>
                  )}
                </motion.button>
              </motion.div>
            );
          })}

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={contactItemVariants}
            className="bg-[#252526] p-4 rounded-md border border-[#333] flex flex-col sm:flex-row sm:items-center gap-2"
          >
            <div className="bg-[#dcdcaa] p-2 rounded-md text-black">
              <FileText size={24} />
            </div>
            <div className="flex-grow">
              <p className="text-sm text-[#a8a8a8]">Resume</p>
              <p className="text-[#dcdcaa]">Download CV</p>
            </div>
            <motion.a
              variants={socialLinkVariants}
              whileHover="hover"
              whileTap="tap"
              href={contactInfo.resumeLink}
              download="Resume.pdf"
              className="p-2 hover:bg-[#3a3d41] rounded-md"
            >
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-xl text-[#569cd6] mb-6">// Social Connections</h2>

          <div className="bg-[#252526] p-6 rounded-md border border-[#333]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {contactInfo.socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={contactItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-4 bg-[#1e1e1e] rounded-md border border-[#333] hover:border-[#444] transition-colors ${link.color}`}
                >
                  <motion.div
                    className="text-[#c5c5c5] mb-2"
                    variants={socialLinkVariants}
                  >
                    {link.icon}
                  </motion.div>
                  <span className="text-sm text-center break-words">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
