import React, { useEffect } from "react";
import Project from "./Project";
import styles from "./Projects.module.css";

import sixsigma from "../../public/sixsigma1.jpg";
import nganportfolio from "../../public/nganportfolio.png";
// import lumoso from "../../public/lumoso.jpg";
// import lumoso1 from "../../public/lumoso1.png";
import kmb1 from "../../public/kombucha/kmb1.png";
import kmb2 from "../../public/kombucha/kmb2.webp";
import vlir1 from "../../public/VLIR/vlir1.png";
import vlir2 from "../../public/VLIR/vlir2.png";

import { motion } from "framer-motion";

const projects = [
  {
    name: "KOMBUCHA",
    desc:
      "Kombucha is also known as water ginseng tea, mushroom tea, or Manchu tea Chau is a type of beverage, beverage produced by traditional fermentation technique Traditional, produced from tea fermented by a combination of microorganisms including a number of bacteria and yeasts. This mixed combination forms a powerful symbiosis called SCOBY (symbiotic culture of bacteria and yeast) bacteria and yeasts) or tea fungi, during fermentation Kombucha tea contains trace amounts of Alcohol varies from 0.5 to 1.5, depending on the time of anaerobic fermentation and the rate of microorganisms.The fermentation process also leads to the formation of a polymeric cell layer of cellulose due to the activity of some strains of Acetobacter sp",
    images: [kmb1, kmb2],
    result:
      "Through our research, we have come to the following conclusions. Avocado seeds, after being collected, will be processed to become avocado seed tea which is a potential substrate for the growth of kombucha fermentation. Although avocado seed tea has antibacterial activity, forms a microflora original kombucha in a new substrate, suitable for use in processes research later. Propose the production process of avocado seed Kombucha tea with the main ingredient being in avocado seed tea. The results give the main technical parameters in the regulation.The production process of avocado seed kombucha tea includes the volume of avocado seed tea used as for every 23g, 110g of sugar and 1.6L of water will be added as well as additional 1 Scoby stock and 10% bait water. In this condition, the process yeast will take place most optimally when the highest consumption capacity is achieved soluble dry matter, the ability to generate alcohol suitable for commercial products is 0.5 and the highest content of organic acids produced was 95.3 °T."
  },
  {
    name: "VLIR PROJECT",
    desc:
      "In this project, a close collaboration will be setup with the local university and local authorities to improve the safety of fresh produce by supporting the adequate design and implementation of a tailored food safety management system based on good agricultural practices (GAP) and good hygienic practices (GHP) along the fresh produce chain (farmers,collectors/traders and traditional wholesalers/market sellers) in the region of Da Nang, Vietnam.After a gap analysis, tailored materials for the implementation of adequate procedures and quick start-up factsheets will be developed as well as a website/app facilitating access to food safety information and training to ensure long-life application of these GAP & GHP procedures in place. Systemic innovation pilots will be set up with the local farmers, traders and sellers and after an impact assessment, final multi-stakeholder workshops will be organised to strengthen the Action Plan with commercial market actors and as such, to encourage farmers and chain actors in daily application of good practices and food safety management.",
    images: [vlir1, vlir2],
    result:
      "Microbiological research with contact plates, swabs, cloths or sponges are less accurate than the results obtained when counting microorganisms in a sample . That is why the results are often processed into so-called hygiene scores. There are hygiene scores for various applications. Which one to use depends very much on the surface examined. In addition, it is important that the places of sampling are recorded and that the research is carried out regularly so that any trends can be observed....",
    link:
      "https://drive.google.com/file/d/1POHT7f5Rom0Y0zSt2KVji5YF98IHZG8B/view?usp=sharing"
  }
];

export default function Projects() {
  // useEffect(() => {
  //   console.log(projects[0]);
  // }, []);
  return (
    <motion.div>
      <div id="projects" className={styles.projects}>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <div className={styles.title}>My Works</div>
        </motion.div>
        <div className={styles.projectsList}>
          {projects &&
            projects.map((project) => {
              return (
                <Project
                  key={project.name}
                  name={project.name}
                  desc={project.desc}
                  images={project.images}
                  result={project.result}
                  link={project.link}
                />
              );
            })}
        </div>
      </div>
    </motion.div>
  );
}
