/* eslint-disable react/jsx-no-target-blank */
import { GitHub, Linkedin } from "react-feather";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mlevjjpg");
  if (state.succeeded) {
    alert("Message sent");
  }
  return (
    <div className="contact" id="contact">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
      >
        <h1 className="title-text"> contact</h1>
        <form onSubmit={handleSubmit}>
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
        </form>

        {/* ------------------------------------------------------- */}
        <div className="social_icons">
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
        </div>
      </motion.div>
    </div>
  );
}
