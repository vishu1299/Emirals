"use client";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/../public/assets/img/logo/logo.png";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", hasDropdown: false, href: "/" },
    { name: "About", hasDropdown: false, href: "/about" },
    { name: "Shop", hasDropdown: false, href: "/shop" },
    { name: "Plans", hasDropdown: false, href: "/plans" },
    { name: "Blogs", hasDropdown: false, href: "/blogs" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full p-2 sm:p-4">
      <div className="mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[80%]">
        <nav className="bg-black/40 md:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-lg  ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <Image
                src={logo || "/placeholder.svg"}
                width={40}
                height={40}
                alt="logo"
                className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8 xl:space-x-12">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link href={item.href}>
                      <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-200 text-shadow">
                        <span className="font-medium text-sm xl:text-base">
                          {item.name}
                        </span>
                        {item.hasDropdown && (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <Link href="/auth/login">
                <div className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-5 xl:px-6 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base backdrop-blur-sm">
                  Login
                </div>
              </Link>

              <Link href="/auth/signup">
                <button className="bg-[#25C331] hover:bg-[#1ea82a] text-white px-5 xl:px-6 py-2.5 rounded-lg transition-colors duration-300 font-medium text-sm xl:text-base shadow-lg hover:shadow-xl">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                className="text-white hover:text-gray-300 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col space-y-3">
                {/* Navigation Items */}
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} onClick={closeMenu}>
                    <button className="flex items-center justify-between text-white hover:text-gray-300 transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-white/10 text-left">
                      <span className="font-medium text-base">{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>
                  </Link>
                ))}

                {/* Mobile Auth Buttons */}
                <div className="pt-3 border-t border-white/20 space-y-3">
                  <Link href="/auth/login" onClick={closeMenu}>
                    <button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 py-3 px-3 rounded-lg transition-all duration-300 font-medium text-base backdrop-blur-sm">
                      Login
                    </button>
                  </Link>

                  <Link href="/auth/signup" onClick={closeMenu}>
                    <button className="w-full bg-[#25C331] hover:bg-[#1ea82a] text-white py-3 px-3 rounded-lg transition-colors duration-300 font-medium text-base shadow-lg">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
