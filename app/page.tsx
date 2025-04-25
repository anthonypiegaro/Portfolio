"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Quicksand } from "next/font/google"

import { Desktop } from "@/components/desktop"
import { DownArrow } from "@/components/down-arrow"
import { Math } from "@/components/math"
import { Mobile } from "@/components/mobile"
import { PrettyLink } from "@/components/pretty-link"
import { ProjectShowcase } from "@/components/project-showcase"

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
    <main className={`w-dvw h-dvh bg-neutral-900 overflow-auto ${quicksand.className}`} ref={container} >
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
        className="absolute rounded-full left-4 md:left-6 lg:left-8 xl:left-10 w-[5px] bg-foreground h-10" 
        style={{ height: projectProgressBar, opacity: projectProgressBarOpacity, top: projectProgressBarTop }} 
      />

      <div className="flex justify-center items-center w-full min-h-full py-10">
      <motion.div
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ProjectShowcase
            icon={<Mobile size="size-36 md:size-42 lg:size-55" />}
            title="lift"
            subtitle="React Native, React, Expo, SQLite, Drizzle (headless ORM), TypeScript, Prettier, ESLint, Git, GitHub, GitHub Actions, Jest, Next.js (Landing Page), Vercel (Landing Page)."
            href="https://github.com/antpie530/lift"
          >
            Lift is a React Native app built with Expo and TypeScript, designed to help users create, track, and analyze their training programs with ease. The app offers a user-friendly experience for athletes and fitness enthusiasts to manage every aspect of their training, from building fully customizable exercises and workout templates to assembling complete training programs tailored to individual needs. With Lift, users can meticulously track every detail of their workouts, capturing information from individual sets to total workout duration, ensuring that no rep goes unnoticed. The app’s robust analytics provide comprehensive insights, including total workouts, average duration, and weekly statistics. Custom dashboards allow users to dive deeper into their performance trends, enabling them to optimize their training down to the exercise level. Currently in Beta and available through TestFlight, Lift is committed to delivering a powerful and intuitive tool for anyone looking to elevate their fitness journey.
          </ProjectShowcase>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full min-h-full py-10">
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ProjectShowcase 
            icon={<Desktop size="size-48 md:size-56 lg:size-64" />}
            title="OA Reporting"
            subtitle="Next.js, React, PostgreSQL, Drizzle (healess ORM), Clerk, Vercel, TypeScript, Git, GitHub"
            href="https://github.com/anthonypiegaro/OA-Reporting"
          >
            OA Reporting is a comprehensive athlete management and reporting tool designed to empower athletic trainers in overseeing their athletes and streamlining the evaluation process. The platform features an intuitive Users Dashboard, allowing trainers to easily create and manage user profiles, assign roles for role-based authorization, and input key details such as playing level and contact information. With fully customizable assessments and evaluations, trainers can tailor the system to fit a wide range of use cases, creating, updating, or deleting assessments as needed. Evaluations, which are collections of assessments, provide a structured way to test and monitor an athlete’s current abilities. To further enhance efficiency, OA Reporting offers custom templates, enabling trainers to assemble frequently used assessment sets and quickly generate new evaluations. Upon completion of an evaluation, the system automatically generates a detailed Evaluation Report, delivering scores and actionable insights to athletes, all configured by the trainer. Comprehensive analytics accompany every feature, empowering both trainers and athletes to make informed, data-driven decisions to optimize training and performance.
          </ProjectShowcase>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full min-h-full py-10">
      <motion.div
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ProjectShowcase 
            icon={<Math size="size-48 md:size-56 lg:size-64" />}
            title="Neural Network Number Guesser"
            subtitle="Python, Flask, Tensorflow, Vanilla JS, CSS, HTML, Git, GitHub"
            href="https://github.com/anthonypiegaro/Neural-Network-Number-Guesser"
          >
            This interactive web application enables users to draw numbers on a custom whiteboard interface built with vanilla JavaScript, HTML, and CSS. User drawings are sent to a Python Flask backend, where a custom convolutional neural network (CNN) developed with TensorFlow analyzes the image and predicts the number. The prediction is then returned to the front end, providing real-time feedback. The project demonstrates seamless integration between a hand-crafted front-end drawing tool and a machine learning-powered backend, utilizing technologies such as Flask, TensorFlow, Python, and version control with Git and GitHub. The result is an engaging, full-stack experience that highlights both web development and applied machine learning.          </ProjectShowcase>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full h-full px-4" id="contact">
        <div className="flex items-center mx-auto">
          <p className={`text-xl text-center ${quicksand.className}`}>
            Contact me at <PrettyLink href="mailto:anthonypiegaro.dev@gmail.com">anthonypiegaro.dev@gmail.com</PrettyLink><br/>
            (form coming soon)
          </p>
        </div>
      </div>
    </main>
  );
}
