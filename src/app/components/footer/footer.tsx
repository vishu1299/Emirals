"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/../public/assets/img/logo/logo.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Plans", href: "/plans" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden flex justify-center items-center">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#25c331]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#25c331]/3 rounded-full blur-3xl"></div>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Image
                    src={logo}
                    width={32}
                    height={32}
                    alt="logo"
                    className="object-contain w-16 h-16"
                  />
                </div>
                {/* <span className="text-white text-2xl font-bold">Emiral</span> */}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                Information Technology is a rapidly evolving field that
                encompasses the latest study and innovative solutions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#1DA1F2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#0077B5] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:col-span-2 md:mx-auto">
              <h3 className="text-xl font-bold text-white">Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm lg:text-base">
                    emiralglobal1@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm lg:text-base">
                    +234 806 230 1834
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm lg:text-base">
                    105 Allen Lagos,
                    <br />
                    77099, texas
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 ">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#25c331] transition-colors duration-300 text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © All Right Reserved By Emiral. Developed by{" "}
              <span className="text-blue-500">
                <Link target="_blank" href="https://www.xcrino.com/">
                  Xcrino
                </Link>{" "}
              </span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#25c331] transition-colors duration-300 text-sm"
              >
                Terms & Condition
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#25c331] transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-[#25c331] transition-colors duration-300 text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
