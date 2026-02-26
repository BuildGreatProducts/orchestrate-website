"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { nav } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#141414]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="/" aria-label="Orchestrate home">
          <Image
            src="/images/logo-icon.svg"
            alt="Orchestrate"
            width={28}
            height={29}
            className="w-7 h-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-white transition-colors text-base tracking-[-0.01em]"
            >
              {link.label}
            </a>
          ))}
          <Button href="#waitlist" size="sm">
            {nav.cta}
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#141414]/95 backdrop-blur-md ${
          mobileOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <Container className="flex flex-col gap-4 py-6">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-white transition-colors text-base"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div onClick={() => setMobileOpen(false)}>
            <Button href="#waitlist" className="w-fit">
              {nav.cta}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
