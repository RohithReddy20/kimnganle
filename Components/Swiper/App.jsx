import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import styles from "./App.module.css";

import Carlsberg from "../../public/Intern/Carlsberg.jpg";
import carls1 from "../../public/Intern/carls1.jpg";
import carls2 from "../../public/Intern/carls2.webp";
import carls3 from "../../public/Intern/carls3.jpg";
import carls4 from "../../public/Intern/carls4.jpg";
import carls5 from "../../public/Intern/carls5.jpg";
import carls6 from "../../public/Intern/carls6.png";

import Image from "next/image";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <div className={styles.internship}>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.iTitle}
        >
          Internship at Carlsberg
        </motion.div>
        <div className={styles.iInfo}>
          <motion.div
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
            viewport={{ once: true }}
            className={styles.iImg}
          >
            <Image placeholder="blur" src={carls2} />
          </motion.div>
          <div className={styles.iText}>
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
              viewport={{ once: true }}
              className={styles.position}
            >
              <span>Position:</span> Quality Management Intern
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
              viewport={{ once: true }}
              className={styles.dept}
            >
              <span>Department:</span>Supply Chain at Hue Brewery
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
              viewport={{ once: true }}
              className={styles.purpose}
            >
              <span>Purpose:</span>
              Sustain and improve the IMS to secure that consistent standard are
              implemented across functional department according to customer,
              legal and Carlsberg COM requirements.
            </motion.div>
            <ul className={styles.ilists}>
              <li>
                <motion.div
                  initial={{ opacity: 0, y: "50px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    y: { duration: 0.7 },
                    default: { duration: 1 }
                  }}
                  viewport={{ once: true }}
                  className={styles.purpose}
                >
                  Worked as QC Lab and Online Technician: do hard skills in
                  chemical analysis (pH, Color , Bitter Unit, Iodine, VDK, RDF ,
                  Ea, ABV , CO2, Haze, SO2, Pasteurize Unit, Total Packaged
                  Oxygen,) for the samples of wortfermentation-bright
                  beer-finished
                </motion.div>
              </li>
              <li>
                <motion.div
                  initial={{ opacity: 0, y: "50px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    y: { duration: 0.7 },
                    default: { duration: 1 }
                  }}
                  viewport={{ once: true }}
                  className={styles.purpose}
                >
                  Key contact for final results to related sites (Brewing and
                  Processing, Packaging, Maintenance & Utility) to ensure
                  compliance with requirement of ISO, food safety , customer
                  regulation and Carlsberg Operator Manual.
                </motion.div>
              </li>
              <li>
                <motion.div
                  initial={{ opacity: 0, y: "50px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    y: { duration: 0.7 },
                    default: { duration: 1 }
                  }}
                  viewport={{ once: true }}
                  className={styles.purpose}
                >
                  Used to be in performing tasks in compliance with company
                  procedures, HSE regulations, contributing in activities to
                  ensure Safety and Quality and toward to Lean Manufaturing -
                  Excellence Operation
                </motion.div>
              </li>
              <li>
                <motion.div
                  initial={{ opacity: 0, y: "50px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    y: { duration: 0.7 },
                    default: { duration: 1 }
                  }}
                  viewport={{ once: true }}
                  className={styles.purpose}
                >
                  Support Process and Performance Management: Delivering
                  effective the document control from all site quality and food
                  safety systems and procedures. Driving improvements in
                  Integrated Management System of all quality assurance and
                  control activities.
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
        viewport={{ once: true }}
        className={styles.memories}
      >
        Some of my memories at Carlsberg
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
        viewport={{ once: true }}
        style={{ marginBottom: "50px" }}
      >
        {" "}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          // spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          // pagination={{
          //   clickable: true
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper myMemories"
        >
          <SwiperSlide>
            <Image width="500" height="500" src={carls3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image width="500" height="500" src={carls5} />
          </SwiperSlide>
          <SwiperSlide>
            <Image width="500" height="500" src={carls4} />
          </SwiperSlide>

          <SwiperSlide>
            <Image width="500" height="500" src={carls6} />
          </SwiperSlide>
        </Swiper>
      </motion.div>
      {/* <div className={styles.header}>
        <div className={styles.title}>Some Generous Words</div>{" "}
        <div className={styles.note}>
          Some of my favorite testimonials from my previous employers
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        // spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.review}>
            <div className={styles.say}>
              I had grown a little bit disappointed when I realized that my work
              would not be taking me in any new, creative design directions.
              Thankfully, I found Salman Khan and his creativity that goes above
              and beyond, proving to be exactly what I needed to take.
            </div>
            <div className={styles.employer}>Techsyneric Technologies </div>
            <div className={styles.contact}>
              <a target="_blank" href="https://www.techsyneric.com/">
                Visit
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.review}>
            <div className={styles.say}>
              I had grown a little bit disappointed when I realized that my work
              would not be taking me in any new, creative design directions.
              Thankfully, I found Salman Khan and his creativity that goes above
              and beyond, proving to be exactly what I needed to take.
            </div>
            <div className={styles.employer}>Seek App</div>
            <div className={styles.contact}>
              <a target="_blank" href="https://www.theseekapp.com/intro">
                visit
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}
