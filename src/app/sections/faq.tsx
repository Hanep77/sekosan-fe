"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Bagaimana cara booking kosan?",
    answer: "Gunakan fitur booking atau hubungi pemilik kos langsung melalui platform ini."
  },
  {
    question: "Apakah bisa melihat kosan sebelum memutuskan?",
    answer: "Ya, beberapa kosan menyediakan opsi kunjungan sebelum booking."
  },
  {
    question: "Bagaimana jika saya ingin membatalkan booking?",
    answer: "Kebijakan pembatalan tergantung pada masing-masing pemilik kos."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-screen-md mx-auto pb-8 md:py-20 px-4 md:px-0">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">FAQ - Pertanyaan yang Sering Diajukan</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-5 bg-white text-indigo-600 text-left font-semibold text-lg hover:bg-gray-50 transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"} text-indigo-600`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-5 bg-gray-50 text-gray-800 border-t border-gray-200">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
