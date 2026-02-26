"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BrowserMockup } from "./BrowserMockup";

export function ProductShowcase() {
  return (
    <section className="pb-8 sm:pb-12">
      <Container>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Landscape background image */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/landscape-bg.png"
              alt="Scenic mountain landscape"
              width={2688}
              height={1792}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Browser mockup overlay */}
          <div className="absolute inset-x-3 bottom-[3%] sm:inset-x-8 md:inset-x-16 lg:inset-x-[14%] top-[6%] sm:top-[6%]">
            <BrowserMockup />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
