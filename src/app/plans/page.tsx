"use client";

import { Star, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function PlansPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      id: 1,
      name: "STARTER PACKAGE",
      price: "$45",
      badge: "STARTER PACKAGE",
      badgeColor: "bg-blue-600",
      directReferralBonus: "$0",
      emiralPoints: "$45.00",
      bottles: "3",
      levels: [
        { level: "L1", multiplier: "$4 x 10", amount: "$40" },
        { level: "L2", multiplier: "$2 x 100", amount: "$200" },
        { level: "L3", multiplier: "$2 x 1000", amount: "$2000" },
        { level: "L4", multiplier: "$1 x 10000", amount: "$10000" },
        { level: "L5", multiplier: "$1 x 100000", amount: "$100000" },
        { level: "L6", multiplier: "$1 x 1000000", amount: "$1000000" },
        { level: "L7", multiplier: "$1 x 10000000", amount: "$10000000" },
      ],
      totalCommission: "11,112,240.00 USD",
      returnPercentage: "24693866.67%",
      returnText: "of Invest",
    },
    {
      id: 2,
      name: "SMALL BUSINESS PACKAGE",
      price: "$100",
      badge: "SMALL BUSINESS PACKAGE",
      badgeColor: "bg-[#25c331]",
      directReferralBonus: "$0",
      emiralPoints: "$115.00",
      bottles: "8",
      levels: [
        { level: "L1", multiplier: "$4 x 10", amount: "$40" },
        { level: "L2", multiplier: "$2 x 100", amount: "$200" },
        { level: "L3", multiplier: "$2 x 1000", amount: "$2000" },
        { level: "L4", multiplier: "$1 x 10000", amount: "$10000" },
        { level: "L5", multiplier: "$1 x 100000", amount: "$100000" },
        { level: "L6", multiplier: "$1 x 1000000", amount: "$1000000" },
        { level: "L7", multiplier: "$10 x 1000000", amount: "$10000000" },
      ],
      totalCommission: "101,112,240.00 USD",
      returnPercentage: "10111224%",
      returnText: "of Invest",
      popular: true,
    },
    {
      id: 3,
      name: "BUSINESS PACKAGE",
      price: "$250",
      badge: "BUSINESS PACKAGE",
      badgeColor: "bg-purple-600",
      directReferralBonus: "$0",
      emiralPoints: "$290.00",
      bottles: "21",
      levels: [
        { level: "L1", multiplier: "$4 x 10", amount: "$40" },
        { level: "L2", multiplier: "$2 x 100", amount: "$200" },
        { level: "L3", multiplier: "$2 x 1000", amount: "$2000" },
        { level: "L4", multiplier: "$1 x 10000", amount: "$10000" },
        { level: "L5", multiplier: "$1 x 100000", amount: "$100000" },
        { level: "L6", multiplier: "$1 x 1000000", amount: "$1000000" },
        { level: "L7", multiplier: "$1 x 10000000", amount: "$10000000" },
      ],
      totalCommission: "11,112,240.00 USD",
      returnPercentage: "444896%",
      returnText: "of Invest",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[#25c331]/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#25c331]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#25c331]/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#25c331]/6 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#25c331] rounded-full animate-bounce"></div>
        <div className="absolute top-40 righ  t-20 w-3 h-3 bg-[#25c331]/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#25c331] rounded-full animate-pulse"></div>

        <div className="max-w-7xl min-h-[45vh] mb-6 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated Badge */}
            <div
              className={`inline-block mb-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              }`}
            >
              <div className="bg-[#25c331]/20 mt-5 backdrop-blur-sm border border-[#25c331]/30 rounded-full px-6 py-3 text-[#25c331] font-semibold text-sm tracking-wider">
                <span className="inline-block w-2 h-2 bg-[#25c331] rounded-full mr-2 animate-pulse"></span>
                INVESTMENT OPPORTUNITIES
              </div>
            </div>

            {/* Main Heading with Stagger Animation */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Our{" "}
              <span className="text-[#25c331] relative">
                Plans
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#25c331] to-transparent rounded-full"></div>
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Discover how to maximize your earnings and grow with us
            </p>

            {/* Stats Cards */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <TrendingUp className="w-8 h-8 text-[#25c331] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">3</div>
                <div className="text-gray-300 text-sm">Investment Plans</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <Users className="w-8 h-8 text-[#25c331] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">7</div>
                <div className="text-gray-300 text-sm">Commission Levels</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <Zap className="w-8 h-8 text-[#25c331] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">High</div>
                <div className="text-gray-300 text-sm">Return Potential</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#25c331] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#25c331] font-semibold text-sm tracking-wider uppercase mb-4 block">
              CHOOSE YOUR PATH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Investment <span className="text-[#25c331]">Plans</span>
            </h2>
            <div className="w-20 h-1 bg-[#25c331] rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan that matches your investment goals and
              start your journey to financial success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group text-white ${
                  plan.popular
                    ? "ring-4 ring-[#25c331] ring-opacity-50 scale-105"
                    : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-[#25c331] mt-5 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Plan Badge */}
                <div className="absolute top-0 left-0 z-10">
                  <div
                    className={`${plan.badgeColor} text-white px-4 py-2 text-xs font-bold transform -rotate-45 -translate-x-3 translate-y-6 w-32 text-center shadow-lg`}
                  >
                    {plan.badge.split(" ")[0]}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 pt-12">
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-4xl lg:text-5xl font-bold mb-2">
                      {plan.price}
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">
                        Direct Referral Bonus:
                      </span>
                      <span className="font-semibold">
                        {plan.directReferralBonus}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Emiral Points:</span>
                      <span className="font-semibold">{plan.emiralPoints}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Bottles:</span>
                      <span className="font-semibold">{plan.bottles}</span>
                    </div>
                  </div>

                  {/* Commission Levels */}
                  <div className="space-y-2 mb-6">
                    {plan.levels.map((level, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-blue-100">
                          {level.level}: {level.multiplier}
                        </span>
                        <span className="font-semibold">{level.amount}</span>
                      </div>
                    ))}
                  </div>

                  {/* Total Commission */}
                  <div className="border-t border-blue-400 pt-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-blue-100 mb-1">
                        Total Level Commission:
                      </div>
                      <div className="font-bold text-lg">
                        {plan.totalCommission}
                      </div>
                    </div>
                  </div>

                  {/* Return Percentage */}
                  <div className="text-center mb-6">
                    <div className="text-sm text-blue-100">Return:</div>
                    <div className="font-bold text-xl text-yellow-300">
                      {plan.returnPercentage} {plan.returnText}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-[#25c331] to-[#1ea82a] hover:from-[#1ea82a] hover:to-[#25c331] text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-0">
                    Invest Now
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#25c331]/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#25c331] font-semibold text-sm tracking-wider uppercase mb-4 block">
              SIMPLE PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It <span className="text-[#25c331]">Works</span>
            </h2>
            <div className="w-20 h-1 bg-[#25c331] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#25c331] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Choose Your Plan
              </h3>
              <p className="text-gray-600">
                Select the investment plan that best fits your financial goals
                and budget.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#25c331] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Build Your Network
              </h3>
              <p className="text-gray-600">
                Start building your network and earn commissions from multiple
                levels.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#25c331] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Earn Returns
              </h3>
              <p className="text-gray-600">
                Watch your investment grow through our proven commission
                structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#25c331]/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#25c331]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#25c331]/8 rounded-full blur-2xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your{" "}
            <span className="text-[#25c331]">Investment Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful investors who have chosen Emiral as
            their path to financial freedom.
          </p>
          <button className="bg-gradient-to-r from-[#25c331] to-[#1ea82a] hover:from-[#1ea82a] hover:to-[#25c331] text-white py-4 px-8 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-0 text-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
