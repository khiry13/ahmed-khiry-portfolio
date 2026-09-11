"use client";

import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark/60 border-t border-primary/20 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-light/60 flex items-center justify-center gap-2">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            by Ahmed © {currentYear}
          </p>
          <p className="text-light/40 text-sm mt-2">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
