"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { nav } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      </Container>
    </header>
  );
}
