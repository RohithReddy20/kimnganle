import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import mypic from "../../public/ngan1.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.aboutInfo}>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.aboutTitle}
        >
          A Little Bit About Me
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.aboutText}
        >
          I'm a 23 year old engineer majored in Food Technology from Danang
          University of Science and Technology, Vietnam. With more than 2 years
          experience as Researcher and Developer about Food product, 1-year
          experience as analyst Microbiological Food at LAB of DUT and 4-month
          intern at Hue Brewery - Carlsberg Vietnam in the Quality Management
          Dep. Aiming to develop and strive more in Research& Development and
          Quality Management fields. Willing to learn and contribute by doing
          related tests, projects. Looking for all opportunities in other Food
          Science and Technology fields.
          <br></br>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.aboutButton}
        >
          <motion.button
            onClick={() => {
              document.getElementById("contact").scrollIntoView();
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
        viewport={{ once: true }}
        className={styles.aboutImg}
      >
        <Image placeholder="blur" src={mypic} alt="img" />
      </motion.div>
    </div>
  );
}
