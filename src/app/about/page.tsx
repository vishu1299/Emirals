"use client";

import { Users, Heart, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden ">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[#25c331]/5"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#25c331]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-[#25c331]/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#25c331]/6 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="max-w-7xl min-h-[40vh] mb-6 sm:min-h-[45vh] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mt-2 sm:mt-5">
            {/* Animated Badge */}
            <div
              className={`inline-block mb-4 sm:mb-6 lg:mb-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              }`}
            >
              <div className="bg-[#25c331]/20 mt-10 backdrop-blur-sm border border-[#25c331]/30 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-[#25c331] font-semibold text-xs sm:text-sm tracking-wider">
                <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#25c331] rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                WELLNESS & LIFESTYLE PARTNER
              </div>
            </div>

            {/* Main Heading with Stagger Animation */}
            <h1
              className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              About{" "}
              <span className="text-[#25c331] relative">
                Emiral
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#25c331] to-transparent rounded-full"></div>
              </span>
            </h1>

            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-2 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Your holistic wellness and lifestyle partner
            </p>

            {/* Stats Cards */}
            <div
              className={`grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-12 max-w-4xl mx-auto px-2 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group xs:col-span-1 sm:col-span-1">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#25c331] mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                  10K+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm">
                  Happy Customers
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group xs:col-span-1 sm:col-span-1">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#25c331] mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                  100%
                </div>
                <div className="text-gray-300 text-xs sm:text-sm">
                  Natural Products
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group xs:col-span-2 sm:col-span-1">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#25c331] mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                  5+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4  sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-[#25c331] rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="inline-block">
                <span className="text-[#25c331] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 block">
                  Who We Are
                </span>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Introduction
                </h2>
                <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-[#25c331] rounded-full mt-2 sm:mt-4"></div>
              </div>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Welcome to Emiral, where natural wellness meets financial
                  opportunity. We are a pioneering company in the health and
                  wellness industry, dedicated to transforming lives through
                  premium natural products and innovative business solutions.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Founded on the principles of holistic health and community
                  empowerment, Emiral combines ancient herbal wisdom with modern
                  scientific research to create products that truly make a
                  difference.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Our flagship product, Emiral Elixir, represents years of
                  research and development, offering a comprehensive solution
                  for detoxification, weight management, and overall health
                  enhancement.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-40 xs:h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-[#25c331]/10 to-[#25c331]/5 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
                    alt="Emiral Introduction"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Our Story
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                    Natural wellness innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values/Introduction */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-[#25c331] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 block">
              OUR FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              What We Stand For
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-[#25c331] rounded-full mx-auto mb-3 sm:mb-4 lg:mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Our core values guide everything we do, from product development
              to community building
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100">
              <div className="w-full h-32 xs:h-40 sm:h-48 md:h-56 bg-gradient-to-br from-[#25c331]/10 to-[#25c331]/5 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
                  alt="Quality Excellence"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#25c331] transition-colors duration-300">
                  Quality Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We maintain the highest standards in all our natural wellness
                  products, ensuring safety and efficacy.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100">
              <div className="w-full h-32 xs:h-40 sm:h-48 md:h-56 bg-gradient-to-br from-[#25c331]/10 to-[#25c331]/5 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop"
                  alt="Community Focus"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#25c331] transition-colors duration-300">
                  Community Focus
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Building strong communities through shared wellness goals and
                  mutual support.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100 sm:col-span-2 lg:col-span-1">
              <div className="w-full h-32 xs:h-40 sm:h-48 md:h-56 bg-gradient-to-br from-[#25c331]/10 to-[#25c331]/5 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
                  alt="Innovation"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#25c331] transition-colors duration-300">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Continuously advancing natural wellness solutions through
                  research and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-40 xs:h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-[#25c331]/10 to-[#25c331]/5 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
                    alt="Emiral Mission"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                    Natural wellness for everyone
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="inline-block">
                <span className="text-[#25c331] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 block">
                  OUR PURPOSE
                </span>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Mission Statement
                </h2>
                <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-[#25c331] rounded-full mt-2 sm:mt-4"></div>
              </div>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Our mission is to revolutionize the wellness industry by
                  providing 100% natural, effective health solutions that
                  address modern health challenges.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Emiral Elixir, our flagship product, is designed to detox the
                  body, burn fat, and support overall health while addressing
                  various conditions.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  We believe in the power of nature to heal and restore, using
                  the finest natural ingredients backed by research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="inline-block">
                <span className="text-[#25c331] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 block">
                  OUR FUTURE
                </span>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Vision Statement
                </h2>
                <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-[#25c331] rounded-full mt-2 sm:mt-4"></div>
              </div>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Our vision is to become the leading global provider of natural
                  wellness solutions, creating a world where optimal health and
                  financial prosperity go hand in hand.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Through our innovative network marketing approach, we aim to
                  build a community of health advocates who benefit from our
                  products and share in financial rewards.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  We see Emiral as a movement towards natural health, financial
                  independence, and community empowerment.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-40 xs:h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-[#25c331]/10 to-[#25c331]/5 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
                    alt="Emiral Vision"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Our Vision
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                    Global wellness leadership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Plan */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <span className="text-[#25c331] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 block">
              OUR ROADMAP
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">
              The Strategic Plan of{" "}
              <span className="text-[#25c331]">Emiral Precious</span>
            </h2>
            <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-[#25c331] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-40 xs:h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-[#25c331]/10 to-[#25c331]/5 rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                    alt="Strategic Planning"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p className="hover:text-gray-800 transition-colors duration-300">
                Our strategic plan focuses on sustainable growth through
                innovation, quality assurance, and community building.
              </p>
              <p className="hover:text-gray-800 transition-colors duration-300">
                The plan encompasses research and development of new
                formulations, strategic partnerships with health professionals.
              </p>
              <p className="hover:text-gray-800 transition-colors duration-300">
                We prioritize education and training for our network partners,
                ensuring they have the knowledge and tools necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Plan */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="inline-block">
                <span className="text-[#25c331] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 block">
                  REWARDS SYSTEM
                </span>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Compensation Plan
                </h2>
                <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-[#25c331] rounded-full mt-2 sm:mt-4"></div>
              </div>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Our comprehensive compensation plan is designed to reward
                  dedication, performance, and growth.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  The plan includes retail profits, team bonuses, leadership
                  rewards, and performance incentives.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  We provide ongoing training and support to help our partners
                  maximize their earning potential.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-40 xs:h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-[#25c331]/10 to-[#25c331]/5 rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
                    alt="Compensation Plan"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#25c331]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-[#25c331]/8 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <span className="text-[#25c331] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 block">
              FINAL THOUGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
              Conclusion
            </h2>
            <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-[#25c331] rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 lg:space-y-6 text-gray-300 leading-relaxed text-center text-sm sm:text-base lg:text-lg">
            <p className="hover:text-white transition-colors duration-300">
              Emiral stands at the forefront of the natural wellness revolution,
              combining time-tested herbal wisdom with modern scientific
              innovation.
            </p>
            <p className="hover:text-white transition-colors duration-300">
              Through our comprehensive product line and strategic business
              opportunities, we are building a movement towards better health
              and financial independence.
            </p>
            <p className="hover:text-white transition-colors duration-300">
              Join us in our mission to create a healthier, wealthier world.
              Together, we can make natural wellness accessible to everyone.
            </p>
            <p className="text-[#25c331] font-semibold text-lg sm:text-xl lg:text-2xl hover:text-[#25c331]/80 transition-colors duration-300">
              Emiral - Where Health Meets Wealth, Naturally.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
        }

        @media (max-width: 475px) {
          .xs\:text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          .xs\:h-40 {
            height: 10rem;
          }
          .xs\:text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          .xs\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .xs\:col-span-1 {
            grid-column: span 1 / span 1;
          }
        }
      `}</style>
    </div>
  );
}
