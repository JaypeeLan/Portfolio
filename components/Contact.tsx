import React from "react";
import { GitHub } from "react-feather";
import { Linkedin } from "react-feather";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mlevjjpg");
  if (state.succeeded) {
    alert("Message sent");
  }
  return (
    <section id="contact">
      <h2>Contact Me</h2>
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
    </section>
  );
};

export default Contact;
