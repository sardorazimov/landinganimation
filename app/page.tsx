'use client'
import { ParallaxScrollDemo } from "@/components/Gallery";
import { GridBackgroundDemo } from "@/components/Hero";
import { HeroParallaxDemo } from "@/components/Parallax";
import { SignupFormDemo } from "@/components/SignupForm";
import { CardHoverEffectDemo } from "@/components/cart";


export default function Home() {
  return (
    <div className="w-full h-screen bg-black">
      <GridBackgroundDemo />
      <div>
      <h1 className="text-center text-neutral-400 text-5xl">Amazing Parallax Scroll Effect</h1>
        <HeroParallaxDemo />
      </div>
      <h1 className="text-center text-neutral-400 text-5xl">Card Effect </h1>
      <CardHoverEffectDemo />
      <main>
        <ParallaxScrollDemo />
       <SignupFormDemo />
      </main>
    </div>
  );
}
