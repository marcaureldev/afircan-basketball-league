"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Teams",
      href: "/teams",
    },
    {
      label: "Matches",
      href: "/matches",
    },
    {
      label: "Standings",
      href: "/standings",
    },
    {
      label: "About ABL",
      href: "/about-abl",
    },
  ];

  return (
    <div className="flex justify-between items-center py-3 lg:py-5 text-white relative">
      {/* Menu Burger - visible uniquement sur mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden z-50 p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white block origin-left"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-white block"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white block origin-left"
          />
        </div>
      </button>

      {/* Navigation Desktop */}
      <div className="hidden lg:flex items-center p-5 gap-6">
        <ul className="flex gap-6 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-orange-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>

      {/* Logo */}
      <div className="lg:ml-auto">
        <Image
          src="/assets/images/logo/african-basketball-league-logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      {/* Menu Mobile - Slide in from left */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/80 z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-3/4 sm:w-1/2 bg-white/95 dark:bg-black/95 backdrop-blur-lg z-40 border-r border-gray-200 dark:border-orange-400/20"
            >
              <nav className="flex flex-col h-full pt-20 px-6">
                <ul className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg font-medium text-gray-900 dark:text-white hover:text-orange-400 transition-colors py-2"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Theme Toggle dans le menu mobile */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
