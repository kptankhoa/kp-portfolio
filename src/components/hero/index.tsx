"use client";
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion";
import { Heading } from "@components"
import "./hero.css";

interface Props {
  img: string;
  typewriter: string[]
}

const Hero = (props: Props) => {
  return (
    <div>

      <div className="flex justify-center p-5 mt-6">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[420px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-emerald-200 after:via-emerald-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-emerald-700 before:dark:opacity-10 after:dark:from-emerald-900 after:dark:via-[#064e3b] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          whileHover={{ scale: 1.3, rotate: 10 }}
          whileTap={{
            scale: 0.8,
            rotate: -90
          }}
          className="pfp"
        >
          <img src={props.img} alt="" />
        </motion.div>
      </div>

      <Heading firstWord="About" secondWord="Me" />

      <div className="hero-typewriter">
        <h3>I am</h3>
        <Typewriter
          options={{
            strings: props.typewriter,
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriter"
          }}
        />
      </div>
    </div>
  )
};

export default Hero;