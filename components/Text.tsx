"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Make your websites look
10x beautiful
Copy paste the most trending components and use them in your websites without having to worry about styling and animations.
High Quality Next.js, Tailwind CSS and Framer Motion Templates that stand out
Carefully crafted website templates that are performance optimized, modern and easy to customize. Perfect for startups 
and business that want a standout website.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
