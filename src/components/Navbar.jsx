import React from "react";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-lg">
      <div className="navbar max-w-6xl mx-auto flex items-center">
        {/* LEFT - LOGO */}
        <div className="flex-1">
          <Link href={"/"}>
            <Image src={logo} width={40} height={40} alt="Logo" />
          </Link>
        </div>

        {/* CENTER - MENU */}
        <div className="flex-none">
          <Link href="/courses">
            <p className="font-medium cursor-pointer">Courses</p>
          </Link>
        </div>

        {/* RIGHT - ACTIONS */}
        <div className="flex-1 flex justify-end items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="flex items-center">
            <div className="mr-4"><button>Sign Up</button></div>
            <div className=""><button className="btn bg-[#FF9500]">Log In</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
