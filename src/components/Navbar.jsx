"use client";

import React, { useState } from "react";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data, isLoading } = authClient.useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      setOpen(false); // close mobile menu after logout
    } catch (err) {
      console.error(err);
    }
  };

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

          {/* RIGHT SECTION (DESKTOP) */}
          <div className="hidden md:flex items-center gap-3">
            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-40 lg:w-56 rounded-xl focus:outline-none"
            />

            {/* AUTH STATE */}
            {isLoading ? (
              <span className="text-sm">Loading...</span>
            ) : user ? (
              <div className="flex items-center gap-3">
                {/* AVATAR */}
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user.image ||
                        "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                      }
                      alt="user"
                    />
                  </div>
                </div>

                {/* NAME */}
                <span className="font-medium">
                  {user.name || user.email}
                </span>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="btn bg-[#FF9500] text-white rounded-xl"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/register">
                  <button className="font-medium hover:text-[#FF9500] transition cursor-pointer">
                    Sign Up
                  </button>
                </Link>

                <Link href="/login">
                  <button className="btn bg-[#FF9500] text-white rounded-xl cursor-pointer">
                    Log In
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4 space-y-4">
            <div className="flex flex-col gap-3 font-medium">
              <Link href="/courses" onClick={() => setOpen(false)}>
                Courses
              </Link>
              <Link href="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full rounded-xl"
            />

            {/* AUTH STATE (MOBILE) */}
            {isLoading ? (
              <p>Loading...</p>
            ) : user ? (
              <div className="flex flex-col gap-3">
                {/* AVATAR + NAME */}
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                      <img
                        src={
                          user.image ||
                          "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                        }
                        alt="user"
                      />
                    </div>
                  </div>

                  <p className="font-medium">
                    {user.name || user.email}
                  </p>
                </div>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="btn bg-[#FF9500] text-white rounded-xl w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link href="/register">
                  <button className="w-full text-left hover:text-[#FF9500]">
                    Sign Up
                  </button>
                </Link>

                <Link href="/login">
                  <button className="btn bg-[#FF9500] text-white w-full rounded-xl">
                    Log In
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;