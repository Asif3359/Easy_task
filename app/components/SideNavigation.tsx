import React from "react";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

function SideNavigation() {
  const navItems = [
    { icon: IoHome, active: true, label: "Home", href: "/" },
    { icon: FaUser, active: false, label: "About", href: "#resume" },
    {
      icon: FaBriefcase,
      active: false,
      label: "Portfolio",
      href: "#portfolio",
    },
    { icon: FaFileAlt, active: false, label: "Blog", href: "#blog" },
    { icon: FaPhoneAlt, active: false, label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-48 left-14 flex flex-col gap-8 z-50">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            key={index}
            href={item.href}
            className={`relative group transition-all duration-300 ${
              item.active
                ? "text-amber-400 scale-110"
                : "text-gray-400 hover:text-gray-300 hover:scale-105"
            }`}
            aria-label={item.label}
          >
            {item.active && (
              <span className="absolute inset-0 rounded-full bg-amber-400/30 blur-lg animate-pulse" />
            )}
            <Icon className="text-2xl relative z-10" />
          </Link>
        );
      })}
    </nav>
  );
}

export default SideNavigation;
