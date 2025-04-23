"use client"

import { Quicksand } from "next/font/google"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

import { PrettyLink } from "@/components/pretty-link"
import { DownArrow } from "@/components/down-arrow"

const quicksand = Quicksand({
  subsets: ["latin"]
})

export default function Home() {
  return (
    <main>
      <header>
        <nav></nav>
      </header>
      <Parallax pages={5} style={{ top: 0, left: 0 }} className="bg-neutral-900">
        <ParallaxLayer offset={0} speed={0.8}>
          <div className="w-full h-full flex items-end justify-center pb-15">
            <DownArrow />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className={`w-full h-full mx-auto max-w-prose px-4 py-10 cursor-default sm:px-6 sm:text-lg md:text-xl md:py-15 lg:px-0 lg:py-20 lg:text-2xl ${quicksand.className}`}>
            <p>
              Hey,<br/><br/>
              Welcome to my portfolio. Here you can find a collection of my deployed work.
              If you would like to contact me, you can fill out the <PrettyLink href="#">form below</PrettyLink>, 
              or you can reach out to me on <PrettyLink href="#">LinkedIn</PrettyLink>. Thank you for visiting, 
              I hope you enjoy.<br/><br/>
              - Anthony Piegaro
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <div>Project 1</div>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <div>Project 2</div>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <div>Project 3</div>
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <div>Contact Info</div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
