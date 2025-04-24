"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Quicksand } from "next/font/google"

import { PrettyLink } from "@/components/pretty-link"
import { DownArrow } from "@/components/down-arrow"

const quicksand = Quicksand({
  subsets: ["latin"]
})

export default function Home() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({ container: container })

  const downArrowOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0]
  )

  const downArrowBottom = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["0%", "50%"]
  )

  return (
    <main className="w-dvw h-dvh bg-neutral-900 overflow-auto" ref={container} >
      <div className={`relative w-full h-full mx-auto max-w-prose px-4 pt-10 cursor-default sm:px-6 sm:text-lg md:text-xl md:pt-15 lg:px-0 lg:pt-20 lg:text-2xl ${quicksand.className}`}>
        <p>
          Hey,<br/><br/>
          Welcome to my portfolio. Here you can find a collection of my deployed work.
          If you would like to contact me, you can fill out the <PrettyLink href="#">form below</PrettyLink>, 
          or you can reach out to me on <PrettyLink href="#">LinkedIn</PrettyLink>. Thank you for visiting, 
          I hope you enjoy.<br/><br/>
          - Anthony Piegaro
        </p>
        <motion.div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: downArrowBottom, opacity: downArrowOpacity }} >
          <DownArrow/>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Project 1
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Project 2
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Project 3
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <motion.div>
          Contact Info
        </motion.div>
      </div>
    </main>
  );
}
