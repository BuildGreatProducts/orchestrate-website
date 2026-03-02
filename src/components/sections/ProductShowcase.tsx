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
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />

            {/* Browser mockup overlay */}
            <div className="relative mx-3 sm:mx-8 md:mx-16 lg:mx-[14%] py-[6%]">
              <BrowserMockup />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
