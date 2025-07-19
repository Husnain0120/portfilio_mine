"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/auth/login-dialog";
import { Menu, X, Settings } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-purple-600/60 to-black ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-gray-800/50"
          : "bg-black/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            {/* <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">HR</span> */}
            <Image
              src="/logo-white.png" // Important: add "/" at start
              alt="Logo"
              width={60}
              height={60}
              className="inline-block rounded-full mr-2 align-middle"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  pathname === item.href ? "text-purple-400" : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700/50 text-gray-300 hover:bg-gray-800/50 hover:border-purple-500/30 hover:text-white bg-gray-900/30 backdrop-blur-sm"
              >
                <Settings className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <LoginDialog />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-gray-800/50"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 px-2 border-gray-800/50 bg-black/70 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 border p-2  text-center rounded-full ${
                    pathname === item.href ? "text-purple-400" : "text-gray-300"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-800/50 space-y-2">
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit mx-8 border-gray-700/50 text-gray-300 hover:bg-gray-800/50 hover:border-purple-500/30 hover:text-white bg-gray-500/30 backdrop-blur-sm "
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <LoginDialog />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
