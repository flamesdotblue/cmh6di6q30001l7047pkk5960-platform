import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/60 to-neutral-950" />

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-pink-500" />
          AW25 Drop just landed
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Streetwear built for the city.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-neutral-300"
        >
          Modern silhouettes, heavy weight fabrics, and details that go hard. Designed to move with you from dusk to dawn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#new"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:opacity-90"
          >
            Shop New Arrivals
          </a>
          <a
            href="#tops"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
