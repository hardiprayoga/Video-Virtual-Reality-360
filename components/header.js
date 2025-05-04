import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-white text-gray-800 py-4 lg:py-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image src="/logo2.png" alt="Logo" width={60} height={60} />
              <span className="text-xl font-poppins font-semibold">Cipanas Sumursari</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4 font-poppins font-semibold">
              <li><Link href="/"><div className="hover:text-gray-400">Beranda</div></Link></li>
              <li><Link href="/informasi"><div className="hover:text-gray-400">Informasi</div></Link></li>
              <li><Link href="/lokasi"><div className="hover:text-gray-400">Lokasi</div></Link></li>
              <li><Link href="/kontak"><div className="hover:text-gray-400">Kontak</div></Link></li>
            </ul>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none ml-auto"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full right-1 mt-[2px] w-40 bg-gray-800 shadow-lg ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-2 font-poppins font-semibold p-4 text-white">
            <li><Link href="/"><div className="hover:text-gray-400">Beranda</div></Link></li>
            <li><Link href="/informasi"><div className="hover:text-gray-400">Informasi</div></Link></li>
            <li><Link href="/lokasi"><div className="hover:text-gray-400">Lokasi</div></Link></li>
            <li><Link href="/kontak"><div className="hover:text-gray-400">Kontak</div></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
