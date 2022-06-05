import React, { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

import { StyledEngineProvider } from "@mui/material/styles";
import AlertParent from "../Alert/Alert";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName,
      lastName,
      subject,
      email,
      message
    };
    for (let item in data) {
      if (item === "") {
        setType("warning");
        setResult("Empty fields detected");
        handleClick();
        return;
      }
    }
    fetch("/api/contact1", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        // console.log(res.status, "Hello");
        if (res.status === 200) {
          setType("success");
          setResult("Message sent succesfully");
          handleClick();
          setFirstName("");
          setLastName("");
          setSubject("");
          setMessage("");
          setEmail("");
        } else if (res.status === 561) {
          setType("warning");
          setResult("Empty fields detected");
          handleClick();
        } else {
          setType("error");
          setResult("Failed to send message");
          handleClick();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("success");
  const [result, setResult] = React.useState("Message sent successfully");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div id="contact" className={styles.contact}>
      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Let's Work Together
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: { duration: 0.7 }, default: { duration: 1 } }}
        viewport={{ once: true }}
        className={styles.form}
      >
        <form>
          <div className={styles.name}>
            <input
              value={firstName}
              style={{ width: "50%" }}
              type="text"
              className={styles.firstName}
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              value={lastName}
              style={{ width: "50%" }}
              type="text"
              className={styles.lastName}
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className={styles.semail}>
            <input
              value={subject}
              style={{ width: "30%" }}
              type="text"
              className={styles.subject}
              placeholder="Subject"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <input
              value={email}
              style={{ width: "70%" }}
              type="text"
              className={styles.email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.message}>
            <textarea
              value={message}
              placeholder="Enter your message"
              name="message"
              id=""
              cols="30"
              rows="10"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className={styles.sendButton}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                handleSubmit(e);
              }}
              type="submit"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
      <StyledEngineProvider injectFirst>
        <AlertParent
          type={type}
          open={open}
          setOpen={setOpen}
          handleClick={handleClick}
          handleClose={handleClose}
          result={result}
        />
      </StyledEngineProvider>
    </div>
  );
}
