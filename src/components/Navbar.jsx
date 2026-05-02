"use client";

import React, { useState } from "react";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} width={40} height={40} alt="Logo" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/courses" className="hover:text-[#FF9500] transition">
              Courses
            </Link>
            <Link href="/services" className="hover:text-[#FF9500] transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-[#FF9500] transition">
              About
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="hidden md:flex items-center gap-3">
            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-40 lg:w-56 rounded-xl focus:outline-none"
            />

            {/* ACTIONS */}
            <Link href="/register">
              <button className="font-medium hover:text-[#FF9500] transition">
                Sign Up
              </button>
            </Link>

            <button className="btn bg-[#FF9500] text-white border-none rounded-xl hover:scale-105 transition">
              Log In
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4 space-y-4">
            <div className="flex flex-col gap-3 font-medium">
              <Link href="/courses">Courses</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full rounded-xl"
            />

            <div className="flex flex-col gap-2">
              <Link href="/register">
                <button className="w-full text-left hover:text-[#FF9500]">
                  Sign Up
                </button>
              </Link>

              <button className="btn bg-[#FF9500] text-white w-full rounded-xl">
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
