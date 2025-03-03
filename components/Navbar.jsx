"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import Logo from "../../images/logo.png";
// import { navLinks } from '../../data/constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [menuOpen]);

  return (
    <nav className="w-full bg-orange py-4 text-white">
      <div className=" flex items-center justify-between px-10">
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
        </Link>
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          {/* Icon when menu is closed */}
          <svg
            className={`size-6 ${menuOpen ? "hidden" : "block"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {/* Icon when menu is open */}
          <svg
            className={`size-6 ${menuOpen ? "block" : "hidden"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link href="/about" className="pb-[20px] navbar-hover ">
              About
            </Link>
          </li>
          <li>
            <Link href="/notices" className="pb-[20px]">
              Notices
            </Link>
          </li>
          <li>
            <Link href="/updates" className="pb-[20px]">
              Updates
            </Link>
          </li>
          <li>
            <Link href="/episodes" className="pb-[20px]">
              Episodes
            </Link>
          </li>
          <li>
            <Link href="/podcast-list" className="pb-[20px]">
              Podcast List
            </Link>
          </li>
        </ul>
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link
              href="/contact"
              className="text-orange rounded-full bg-secondary px-4 py-2"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/sign-in" className="hover:text-gray-300">
              Sign In
            </Link>
          </li>
        </ul>
        <div
          className={`h-[100vh] absolute top-[70px] left-0 right-0 w-full lg:static lg:hidden ${
            menuOpen ? "block" : "hidden"
          } bg-orange`}
        >
          <ul>
            <li className="pb-[20px] border-b-[1px] border-[#fa4e57] p-[1rem] px-9 transition-all duration-300 hover:bg-dark hover:border-dark">
              <Link href="/about" className="font-medium text-md">
                About
              </Link>
            </li>
            <li className="pb-[12px] border-b-[1px] border-[#fa4e57] p-[1rem] px-9 transition-all duration-300 hover:bg-dark hover:border-dark">
              <Link href="/notices" className="font-medium text-md">
                Notices
              </Link>
            </li>
            <li className="pb-[12px] border-b-[1px] border-[#fa4e57] p-[1rem] px-9 transition-all duration-300 hover:bg-dark hover:border-dark">
              <Link href="/updates" className="font-medium text-md">
                Updates
              </Link>
            </li>
            <li className="pb-[12px] border-b-[1px] border-[#fa4e57] p-[1rem] px-9 transition-all duration-300 hover:bg-dark hover:border-dark">
              <Link href="/episodes" className="font-medium text-md">
                Episodes
              </Link>
            </li>
            <li className="pb-[12px]  p-[1rem] px-9 transition-all duration-300 hover:bg-dark hover:border-dark">
              <Link href="/podcast-list" className="font-medium text-md">
                Podcast List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
