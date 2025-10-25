import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-tr from-pink-500 to-amber-400 text-neutral-900 font-black">U</div>
              <span className="text-lg font-extrabold tracking-widest">URBN</span>
            </div>
            <p className="mt-3 text-sm text-neutral-400 max-w-xs">
              Elevated streetwear engineered for everyday hustle. Designed in NYC.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-semibold">Shop</h5>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><a href="#tops" className="hover:text-white">Tops</a></li>
              <li><a href="#bottoms" className="hover:text-white">Bottoms</a></li>
              <li><a href="#accessories" className="hover:text-white">Accessories</a></li>
              <li><a href="#" className="hover:text-white">Sale</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold">Stay in the loop</h5>
            <p className="mt-3 text-sm text-neutral-400">Sign up for drops, events, and exclusives.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-neutral-700 focus:outline-none"
              />
              <button type="submit" className="whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:opacity-90">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} URBN. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-300">Terms</a>
            <a href="#" className="hover:text-neutral-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
