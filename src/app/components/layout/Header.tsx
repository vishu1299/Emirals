"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, Menu, ChevronDown } from "lucide-react";
import leftShape from "/assets/img/hero/left-shape.png";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", hasDropdown: false },
    { name: "Pages", hasDropdown: true },
    { name: "Services", hasDropdown: true },
    { name: "Projects", hasDropdown: true },
    { name: "Blog", hasDropdown: true },
    { name: "Contact", hasDropdown: false },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/img/hero/hero-3.jpg')`,
        }}
      ></div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Left Shape */}
      <div className="absolute top-0 left-0 z-20">
        <Image
          src={leftShape }
          alt="Left shape decoration"
          priority
        />
      </div>

      {/* Glassmorphism Header */}
      <header className="relative z-40 w-full p-4">
        <div className="mx-auto max-w-7xl">
          <nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-800 rounded-full relative">
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                    <div className="absolute top-1 left-1 w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <span className="text-white text-xl font-bold">TechEdge</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-200">
                      <span className="font-medium">{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>

              {/* Right side icons */}
              <div className="flex items-center space-x-4">
                <button className="text-white hover:text-gray-300 transition-colors duration-200">
                  <Search className="w-5 h-5" />
                </button>

                {/* Mobile menu button */}
                <button
                  className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      className="flex items-center justify-between text-white hover:text-gray-300 transition-colors duration-200 py-2"
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-30 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center min-h-[60vh]">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-8">
                <span className="inline-block bg-[#25C331] text-white px-6 py-3 rounded-lg text-sm font-semibold tracking-wide">
                  IT Technology
                </span>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Tech Solutions
                  <br />
                  <span className="text-gray-300">For Every Need</span>
                  <br />
                  <span className="text-white">Potential</span>
                </h1>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full hover:bg-[#25C331] hover:border-[#25C331] hover:text-white transition-all duration-300 font-semibold tracking-wide"
                >
                  Contact US
                </Link>

                <div className="w-14 h-14 bg-[#25C331] rounded-full flex items-center justify-center hover:bg-[#1ea82a] transition-colors duration-300 cursor-pointer">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Social Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30">
        <div className="grid gap-4 items-center">
          <a
            href="#"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#25C331] transition-colors duration-300"
          >
            <i className="fab fa-facebook-f text-lg"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#25C331] transition-colors duration-300"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#25C331] transition-colors duration-300"
          >
            <i className="fab fa-linkedin-in text-lg"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#25C331] transition-colors duration-300"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
