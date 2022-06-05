import React from "react";
import { motion } from "framer-motion";
import styles from "./Home1.module.css";
import Image from "next/image";
import homeImg from "../../public/homeImg3.jpg";
import next from "../../public/Next.svg";
import Link from "next/link";

const dragConstraints = {
  top: -100,
  left: -50,
  right: 100,
  bottom: 100
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
      id="home"
      className={styles.home}
    >
      <motion.div
        initial={{ x: "-300px" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.homeInfo}
      >
        <div className={styles.homeHello}>
          <span role="img">👋</span> Hello All
        </div>
        <div className={styles.homeIntro}>
          I'm Kim Ngan, <br></br>A Food Engineer
        </div>
        <div className={styles.homeButtons}>
          <motion.button
            // drag
            // dragConstraints={dragConstraints}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.myWork}
            onClick={() => {
              document.getElementById("projects").scrollIntoView();
            }}
          >
            View My Work <Image src={next} alt="next" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.contact}
            onClick={() => {
              document.getElementById("contact").scrollIntoView();
            }}
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "300px" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className={styles.homeImg}
      >
        <Image placeholder="blur" src={homeImg} />
      </motion.div>
    </motion.div>
  );
}
