// components/SplashScreen.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className="splash-screen"
      >
        <div className="splash-content">
          <h1>
            <Typewriter
              words={["Welcome"]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h1>
        </div>
      </motion.div>
    )
  );
};

export default SplashScreen;
