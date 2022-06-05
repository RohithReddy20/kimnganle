import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import insta from "../../public/Insta.svg";
import linkedin from "../../public/Linkedin.svg";
import github from "../../public/fb.png";
import Link from "next/link";
// import menu from "../../public/menu.svg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [iconDisplay, setIconDisplay] = useState(true);

  const handleMenu = (e) => {
    e.stopPropagation();
    setIconDisplay(!iconDisplay);
  };

  useEffect(() => {
    document.addEventListener("click", () => {
      setIconDisplay(true);
    });
    return () => {
      document.addEventListener("click", () => {
        setIconDisplay(true);
      });
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogoNav}>
        <div className={styles.navbarLogo}>FOOD ENGINEER</div>
        <div className={styles.navbarList}>
          <Link href="#home">
            <a className={styles.navbarListItem}>Home</a>
          </Link>
          <Link href="#projects">
            <a className={styles.navbarListItem}>Projects</a>
          </Link>
          <Link href="#about">
            <a className={styles.navbarListItem}>About</a>
          </Link>
        </div>
      </div>
      <div className={styles.navbarIcons}>
        <div>
          <a target="_blank" href="https://www.instagram.com/ngan.beos/">
            <Image src={insta} alt="insta" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/ngan55533/">
            <Image src={linkedin} alt="insta" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.facebook.com/kimngan55533">
            <Image src={github} alt="fb" width="32px" height="32px" />
          </a>
        </div>
      </div>
      <div className={styles.menu}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          id="menu"
          onClick={handleMenu}
        >
          {iconDisplay ? <MenuIcon /> : <CloseIcon />}
        </IconButton>
      </div>
      <div
        className={`${iconDisplay ? styles.navbarMobile : ""} ${
          !iconDisplay ? styles.navbarMobileF : ""
        }`}
      >
        <div className={styles.navbarListMobile}>
          <Link href="#home">
            <a className={styles.navbarListItem}>Home</a>
          </Link>
          <Link href="#projects">
            <a className={styles.navbarListItem}>Projects</a>
          </Link>
          <Link href="#about">
            <a className={styles.navbarListItem}>About</a>
          </Link>
        </div>
        <div className={styles.navbarIcons + " " + styles.navbarIconsM}>
          <div>
            <a target="_blank" href="https://www.instagram.com/ngan.beos/">
              <Image src={insta} alt="insta" />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/ngan55533/">
              <Image src={linkedin} alt="insta" />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.facebook.com/kimngan55533">
              <Image src={github} alt="fb" width="32px" height="32px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
