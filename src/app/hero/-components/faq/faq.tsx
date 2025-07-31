"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import bg from "@/../public/assets/img/faq/faq2.png";

const faqData = [
  {
    id: 1,
    question: "How can I implement this for my business?",
    answer:
      "Our implementation process is tailored to your business needs. We start with a comprehensive analysis of your current systems, then develop a customized solution that integrates seamlessly with your existing workflow. The process typically takes 2-4 weeks depending on complexity.",
  },
  {
    id: 2,
    question: "What are the latest trends in IT security?",
    answer:
      "Current IT security trends include Zero Trust Architecture, AI-powered threat detection, cloud security posture management, and enhanced endpoint protection. We stay updated with the latest security protocols to protect your business from emerging threats.",
  },
  {
    id: 3,
    question: "How do I protect my network from cyber threats?",
    answer:
      "We implement multi-layered security including firewalls, intrusion detection systems, regular security audits, employee training, and 24/7 monitoring. Our approach combines preventive measures with rapid response capabilities to minimize risks.",
  },
  {
    id: 4,
    question: "What's the best backup and recovery solution?",
    answer:
      "Our backup solutions include automated daily backups, cloud storage redundancy, and disaster recovery planning. We ensure your data is protected with multiple recovery points and can restore your systems quickly in case of any incidents.",
  },
  {
    id: 5,
    question: "What is Cyber Security Sentinel?",
    answer:
      "Cyber Security Sentinel is our comprehensive security monitoring service that provides 24/7 threat detection, real-time alerts, and automated response to security incidents. It includes advanced analytics and reporting to keep your business protected.",
  },
];

// const contactInfo = [
//   {
//     icon: MapPin,
//     label: "Address",
//     value: "2118 Thornridge Cir. Syracuse",
//   },
//   {
//     icon: Phone,
//     label: "Number",
//     value: "207555-0119",
//   },
//   {
//     icon: Mail,
//     label: "E-Mail",
//     value: "Jessica.Hanson@Example.Com",
//   },
// ];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-16  relative overflow-hidden bg-gradient-to-br from-slate-50/80 via-white to-emerald-50/30"
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-emerald-400/10 via-emerald-300/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-l from-blue-400/8 via-cyan-300/6 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-100/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100/80 text-emerald-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Ask Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
              Questions
            </span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Get instant answers to your most common questions about our
            comprehensive IT services and solutions
          </p>
        </div>

        {/* Main Content Grid - Updated proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-16 gap-6 lg:gap-8 xl:gap-16 items-start">
          {/* Center - Image (35% - 6 columns) */}
          <div
            className={`lg:col-span-6 flex justify-center transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              {/* Background Image */}
              <div className=" w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[500px]">
                <Image
                  src={bg}
                  alt="FAQ Background"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - FAQ (65% - 10 columns) */}
          <div
            className={`lg:col-span-10 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="mb-6 lg:mb-8">
              <span className="text-[#25C331] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                FAQ
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mt-2">
                Ask Question
              </h3>
            </div>

            <div className="space-y-2 lg:space-y-3">
              {faqData.map((item, index) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 pb-2 lg:pb-3"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-2 lg:py-3 text-left flex items-center justify-between group"
                  >
                    <span className="font-medium text-gray-900 pr-3 lg:pr-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#25C331] transition-colors duration-200">
                      <ChevronDown
                        className={`w-2.5 h-2.5 lg:w-3 lg:h-3 text-gray-500 transition-all duration-300 group-hover:text-[#25C331] ${
                          openItems.has(item.id)
                            ? "rotate-180 text-[#25C331]"
                            : ""
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.has(item.id)
                        ? "max-h-96 opacity-100 mt-2 lg:mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed pr-6 lg:pr-8">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
