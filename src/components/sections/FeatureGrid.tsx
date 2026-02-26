"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { featureItems } from "@/lib/constants";

export function FeatureGrid() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featureItems.map((feature, i) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.1,
              }}
            >
              <h3 className="text-white text-lg sm:text-[21px] font-normal tracking-[-0.01em]">
                {feature.number} - {feature.title}
              </h3>
              <p className="mt-4 sm:mt-6 text-muted text-base leading-[22px] tracking-[-0.01em]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
