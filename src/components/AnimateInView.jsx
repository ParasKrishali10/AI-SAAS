"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AnimateInView({children,delay=0.0}){
    const [ref,inView]=useInView({
        triggerOnce:true,
        rootMargin:"-100px 0px",
    })
    const variants={
        hidden:{opacity:0,y:50},
        visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay + 0.2,
        ease: "easeOut",
      },
    }}
      return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );

}