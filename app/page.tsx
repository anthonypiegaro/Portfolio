"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Quicksand } from "next/font/google"

import { ContactForm } from "@/components/contact-form"
import { DownArrow } from "@/components/down-arrow"
import { PrettyLink } from "@/components/pretty-link"

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

  const projectProgressBar = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["0%", "60%"]
  )

  const projectProgressBarOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0, 1, 1, 0]
  )

  const projectProgressBarTop = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["20%", "20%", "-80%"]
  )

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className="w-dvw h-dvh bg-neutral-900 overflow-auto" ref={container} >
      <div className={`relative w-full h-full mx-auto max-w-prose px-4 pt-10 cursor-default sm:px-6 sm:text-lg md:text-xl md:pt-15 lg:px-0 lg:pt-20 lg:text-2xl ${quicksand.className}`}>
        <p>
          Hey,<br/><br/>
          Welcome to my portfolio. Here you can find a collection of my deployed work.
          If you would like to contact me, you can fill out the <PrettyLink onClick={() => scrollToId("contact")}>form below</PrettyLink>, 
          or you can reach out to me on <PrettyLink href="https://www.linkedin.com/in/anthony-piegaro/" target="_blank">LinkedIn</PrettyLink>. 
          Thank you for visiting, 
          I hope you enjoy.<br/><br/>
          - Anthony Piegaro
        </p>
        <motion.div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: downArrowBottom, opacity: downArrowOpacity }} >
          <DownArrow/>
        </motion.div>
      </div>

      <motion.div 
        className="absolute left-4 md:left-6 lg:left-8 xl:left-10 w-[5px] bg-foreground h-10" 
        style={{ height: projectProgressBar, opacity: projectProgressBarOpacity, top: projectProgressBarTop }} 
      />

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
        >
          Project 3
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full h-full px-4" id="contact">
        <motion.div className="w-full max-w-xl mx-auto border-2 rounded-lg border-forgound">
          <ContactForm />
        </motion.div>
      </div>
    </main>
  );
}
