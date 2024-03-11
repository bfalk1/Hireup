"use client";
import React from "react";
import { HeroParallax } from "~/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://cdn.usegalileo.ai/screenshots/c9b23b04-deaf-4019-bcb4-a499e1f4d3c7.webp",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
 
  
];
