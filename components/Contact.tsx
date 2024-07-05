import React from "react";
import { GitHub, Linkedin } from "react-feather";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mlevjjpg");
  if (state.succeeded) {
    alert("Message sent");
  }
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
      >
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="message" />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </motion.form>

      {/* ------------------------------------------------------- */}
      <motion.div
        className="social_icons"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 6, type: "spring", stiffness: 150 }}
      >
        <a
          href="https://github.com/JaypeeLan"
          target="_blank"
          className="socials"
        >
          <GitHub />
        </a>

        <a
          href="https://www.linkedin.com/in/laniranjohnpaul/"
          target="_blank"
          className="socials"
        >
          <Linkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
