/* eslint-disable react/jsx-no-target-blank */
import { GitHub, Linkedin, Mail, Phone } from "react-feather";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import Head from "next/head";
import { useState, useRef } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mlevjjpg");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRef = useRef();
  const messageRef = useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await handleSubmit(event);
    setIsSubmitting(false);

    if (state.succeeded) {
      alert("Message sent");
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <div className="contact" id="contact">
      <Head>
        <title>Contact me</title>
      </Head>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
      >
        <div className="contact-info">
          <Mail />
          <a href="mailto:laniranjohnpault@gmail.com">
            laniranjohnpault@gmail.com
          </a>
        </div>
        <div className="contact-info">
          <Phone />
          <a href="tel:+2349121169737">+2349121169737</a>
        </div>
        <form onSubmit={handleFormSubmit} className="contact-form">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            ref={emailRef}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            ref={messageRef}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting || isSubmitting}>
            {isSubmitting ? (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="spinner"
                >
                  <circle
                    className="path"
                    cx="12"
                    cy="12"
                    r="10"
                    strokeWidth="4"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {state?.errors && (
          <div className="error-message">
            <p key={index}>{error?.message}. Please try again</p>
          </div>
        )}

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
