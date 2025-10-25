import React, { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-tr from-pink-500 to-amber-400 text-neutral-900 font-black">
            U
          </div>
          <span className="text-lg font-extrabold tracking-widest">URBN</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#new" className="text-sm text-neutral-300 hover:text-white transition-colors">New Drops</a>
          <a href="#tops" className="text-sm text-neutral-300 hover:text-white transition-colors">Tops</a>
          <a href="#bottoms" className="text-sm text-neutral-300 hover:text-white transition-colors">Bottoms</a>
          <a href="#accessories" className="text-sm text-neutral-300 hover:text-white transition-colors">Accessories</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="relative rounded-full p-2 hover:bg-neutral-800/60 focus:outline-none focus:ring-2 focus:ring-neutral-700">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-pink-500 text-[10px] font-bold text-white">2</span>
          </button>
          <button className="rounded-full p-2 hover:bg-neutral-800/60 focus:outline-none focus:ring-2 focus:ring-neutral-700">
            <User className="h-5 w-5" />
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-neutral-200 hover:bg-neutral-800 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-800 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            <a onClick={() => setOpen(false)} href="#new" className="rounded-md px-2 py-2 text-sm text-neutral-200 hover:bg-neutral-800">New Drops</a>
            <a onClick={() => setOpen(false)} href="#tops" className="rounded-md px-2 py-2 text-sm text-neutral-200 hover:bg-neutral-800">Tops</a>
            <a onClick={() => setOpen(false)} href="#bottoms" className="rounded-md px-2 py-2 text-sm text-neutral-200 hover:bg-neutral-800">Bottoms</a>
            <a onClick={() => setOpen(false)} href="#accessories" className="rounded-md px-2 py-2 text-sm text-neutral-200 hover:bg-neutral-800">Accessories</a>
            <div className="mt-2 flex items-center gap-3 border-t border-neutral-800 pt-3">
              <button className="relative rounded-full p-2 hover:bg-neutral-800/60">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-pink-500 text-[10px] font-bold text-white">2</span>
              </button>
              <button className="rounded-full p-2 hover:bg-neutral-800/60">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
