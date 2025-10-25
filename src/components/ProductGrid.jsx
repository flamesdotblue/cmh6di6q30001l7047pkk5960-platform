import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Boxy Oversized Tee",
    price: "$45",
    tag: "Heavyweight",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Tech Cargo Pants",
    price: "$98",
    tag: "Water-repellent",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Hooded Zip Jacket",
    price: "$125",
    tag: "Drop shoulder",
    image:
      "https://images.unsplash.com/photo-1592878904946-b3cd4172a84e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Canvas Work Jacket",
    price: "$138",
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "City Runner Sneaker",
    price: "$160",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Nylon Coach Jacket",
    price: "$110",
    tag: "Windproof",
    image:
      "https://images.unsplash.com/photo-1490482138751-2443b7c35621?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Relaxed Denim",
    price: "$98",
    tag: "Washed",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Beanie",
    price: "$28",
    tag: "Staple",
    image:
      "https://images.unsplash.com/photo-1533907650686-70576141c030?q=80&w=1964&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  return (
    <section id="new" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <p className="mt-1 text-sm text-neutral-400">Curated drops for the season.</p>
        </div>
        <a href="#" className="text-sm font-semibold text-white hover:opacity-80">View all</a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, idx) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-900">{product.tag}</span>
            </div>

            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="text-sm font-semibold leading-tight">{product.name}</h3>
                <p className="mt-1 text-xs text-neutral-400">Unisex • URBN Standard</p>
              </div>
              <div className="text-sm font-bold">{product.price}</div>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:opacity-90">
                Add to cart
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <PromoBanners />
    </section>
  );
}

function PromoBanners() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40"
      >
        <img
          src="https://images.unsplash.com/photo-1520975867597-0f152a2f2e00?q=80&w=2069&auto=format&fit=crop"
          alt="Promo"
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h4 className="text-sm font-semibold">Free shipping over $100</h4>
          <p className="mt-1 text-xs text-neutral-400">Fast, tracked, and eco-packed.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40"
      >
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2069&auto=format&fit=crop"
          alt="Promo"
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h4 className="text-sm font-semibold">Members get 10% off</h4>
          <p className="mt-1 text-xs text-neutral-400">Unlock early access and rewards.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40"
      >
        <img
          src="https://images.unsplash.com/photo-1517538433477-919f8abc3b7f?q=80&w=2069&auto=format&fit=crop"
          alt="Promo"
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h4 className="text-sm font-semibold">Sustainable fabrics</h4>
          <p className="mt-1 text-xs text-neutral-400">Organic cotton and recycled blends.</p>
        </div>
      </motion.div>
    </div>
  );
}
