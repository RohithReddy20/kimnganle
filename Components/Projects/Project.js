import React from "react";
import styles from "./Project.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Project({ name, desc, images, result, link }) {
  return (
    <div className={styles.project}>
      <div className={styles.projectInfo}>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.name}
        >
          {name}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.desc}
        >
          {desc}
        </motion.div>
      </div>
      <div className={styles.projectImg}>
        {images.map((image) => {
          return (
            <Image
              src={image}
              // width="100%"
              // height="414px"
              // layout="fill"
              // objectFit="fill"
              placeholder="blur"
            />
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
        viewport={{ once: true }}
        className={styles.desc}
      >
        {result}
      </motion.div>
      {link && (
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.link}
        >
          <a target="_blank" href={link}>
            More...
          </a>
        </motion.div>
      )}
    </div>
  );
}
