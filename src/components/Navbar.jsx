import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/tobams-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    "About",
    "What We Do",
    "Jobs",
    "Projects",
    "TG Academy",
    "Strategic Partnership",
    "Pricing",
    "Book a Consultation",
  ];

  return (
    <nav className="bg-white border-b border-[#DDD0DA]">
      <div className="flex justify-between items-center py-4 px-6 xl:py-6 xl:px-16">
        <img
          src={logo}
          className="h-10 xl:h-16 w-auto "
          alt="Tobams Group logo"
        />

        {/* Desktop-only buttons */}
        <div className="hidden xl:flex items-center gap-3">
          <button className="flex items-center justify-center gap-3 w-[167px] px-4 py-2 bg-primary rounded-sm border border-primary text-white text-sm font-medium">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
              <User className="w-3.5 h-3.5 text-[#DDD0DA]" />
            </span>
            Account
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center w-[167px] h-12 px-4 py-2 bg-secondary text-white rounded-sm border font-medium text-sm gap-3">
            Take Assessment
          </button>
        </div>

        {/* Mobile/tablet hamburger toggle */}
        <button
          className="xl:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop-only nav links row */}
      <div className="hidden xl:flex items-center justify-center gap-8 px-16 py-4 text-sm text-main-text border-t border-[#DDD0DA]">
        <a
          href="#"
          className="flex items-center gap-1 text-primary font-normal text-lg text-center underline underline-offset-4"
        >
          About
          <ChevronDown className="w-3.5 h-3.5" />
        </a>
        <a
          href="#"
          className="flex items-center gap-1 font-normal text-lg hover:text-primary hover:underline transition-colors"
        >
          What We Do
          <ChevronDown className="w-3.5 h-3.5" />
        </a>
        <a
          href="#"
          className="hover:text-primary hover:underline hover:underline-offset-4 transition-colors font-normal text-lg"
        >
          Jobs
        </a>
        <a
          href="#"
          className="hover:text-primary hover:underline hover:underline-offset-4 transition-colors font-normal text-lg"
        >
          Projects
        </a>
        <a
          href="#"
          className="hover:text-primary hover:underline hover:underline-offset-4 transition-colors font-normal text-lg"
        >
          TG Academy
        </a>
        <a
          href="#"
          className="hover:text-primary hover:underline hover:underline-offset-4 transition-colors font-normal text-lg"
        >
          Strategic Partnership
        </a>
        <a
          href="#"
          className="hover:text-primary hover:underline hover:underline-offset-4 transition-colors font-normal text-lg"
        >
          Pricing
        </a>
        <a
          href="#"
          className="hover:text-primary hover:underline hover:underline-offset-4 transition-colors font-normal text-lg"
        >
          Book a Consultation
        </a>
      </div>

      {/* Mobile/tablet dropdown menu */}
      {menuOpen && (
        <div className="xl:hidden flex flex-col gap-4 px-4 py-6 border-t border-[#DDD0DA]">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`text-base ${
                link === "About" ? "text-primary font-medium" : "text-gray-700"
              }`}
            >
              {link}
            </a>
          ))}

          <div className="flex flex-col gap-3 pt-4">
            <button className="flex items-center justify-center gap-3 w-full h-12 px-4 rounded-sm bg-primary border border-primary text-white text-sm font-medium">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                <User className="w-3.5 h-3.5 text-primary" />
              </span>
              Account
              <ChevronDown className="w-4 h-4" />
            </button>

            <button className="w-full h-12 px-4 rounded-sm bg-[#E24C4B] text-white text-sm font-medium">
              Take Assessment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
