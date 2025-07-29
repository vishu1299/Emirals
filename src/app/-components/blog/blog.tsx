"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import blogImg01 from "@/../public/assets/img/news/01.jpg";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      date: { day: "30", month: "May" },
      title: "Empowering Innovation Through Digitally The Technology",
      description:
        "Information Technology is a rapidly evolving field that encompasses the study",
      link: "#",
    },
    {
      id: 2,
      date: { day: "30", month: "May" },
      title: "IT Excellence Every Step Of The Elevate Your Business",
      description:
        "Information Technology is a rapidly evolving field that encompasses the study",
      link: "#",
    },
    {
      id: 3,
      date: { day: "30", month: "May" },
      title: "Unleashing The Power Of Seamless Solutions The Power",
      description:
        "Information Technology is a rapidly evolving field that encompasses the study",
      link: "#",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Decorations */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#25c331]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#25c331]/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <p className="text-[#25c331] font-semibold text-sm lg:text-base tracking-wider uppercase mb-4 animate-slide-down">
            OUR BLOG
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight animate-slide-up">
            Our Recent <span className="text-[#25c331]">Blog</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={blogImg01}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-[#25c331] text-white rounded-xl px-3 py-2 text-center min-w-[60px] shadow-lg">
                  <div className="text-lg lg:text-xl font-bold leading-none">
                    {post.date.day}
                  </div>
                  <div className="text-xs lg:text-sm font-medium mt-1">
                    {post.date.month}
                  </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 relative">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#25c331] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {post.description}
                </p>

                {/* Read More Link */}
                <a
                  href={post.link}
                  className="inline-flex items-center text-gray-900 font-semibold text-sm lg:text-base hover:text-[#25c331] transition-all duration-300 group/link relative"
                >
                  <span className="relative z-10">Read Now</span>
                  <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover/link:translate-x-2 group-hover/link:text-[#25c331] transition-all duration-300" />

                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#25c331] group-hover/link:w-full transition-all duration-300"></div>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className="text-center mt-12 lg:mt-16 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-[#25c331] text-white font-semibold rounded-full hover:bg-[#1ea528] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
