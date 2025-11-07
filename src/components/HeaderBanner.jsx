


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import mainBanner from "../assets/hero_banner/main_banner_bg.png";
import textImg from "../assets/hero_banner/main_banner_txt.png";
import rytSideImg from "../assets/hero_banner/Slot_Machine.png";
import cryptoCoin1 from "../assets/hero_banner/crypto_coin_1.png";
import cryptoCoin2 from "../assets/hero_banner/crypto_coin_2.png";
import cryptoCoin3 from "../assets/hero_banner/crypto_coin_3.png";
import cryptoCoin4 from "../assets/hero_banner/crypto_coin_4.png";
import cryptoCoin5 from "../assets/hero_banner/crypto_coin_5.png";
import Batch from "./Batch";


const HeaderBanner = () => {

  const [showScrollButton, setShowScrollButton] = useState(false);

  
  const waveMotion = {
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="relative h-screen flex items-center justify-center bg-cover bg-center backdrop-invert"
        style={{ backgroundImage: `url(${mainBanner})` }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-center justify-between head_banner_div w-full px-4 md:px-8 lg:px-20 gap-8">
          <motion.div
            className="flex flex-col items-center md:items-start space-y-6 w-full md:w-1/2"
            variants={itemVariants}
          >
            <motion.img
              src={textImg}
              alt="banner_text"
              className="w-full max-w-xl mx-auto md:mx-0"
              style={{ transformOrigin: "center center" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                y: [0, 60, 0],
                rotateX: [0, 10, 0],
                scale: [1, 1, 1],
                opacity: 1,
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                y: {
                  delay: 0.8,
                  duration: 5.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
            />
            <button className="relative btn_play px-6 sm:px-10 py-2 sm:py-3 text-xl sm:text-2xl ">
              Play Now
            </button>
          </motion.div>

          <motion.div
            className="relative w-full md:w-1/2 mt-8 md:mt-0 main_ryt_div"
            variants={itemVariants}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute rounded-full"
                style={{
                  top: "5%",
                  left: "10%",
                  width: "80%",
                  height: "80%",
                  background:
                    "radial-gradient(circle at top, #7DEAF6 30%, #FF00EE 100%)",
                  filter: "blur(30px)",
                  zIndex: 0,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  scale: [0.9, 1, 0.9],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  opacity: { duration: 1.2, ease: "easeOut" },
                  scale: {
                    delay: 0.4,
                    ...waveMotion,
                  },
                }}
              />

              <motion.img
                src={rytSideImg}
                alt="Game character"
                className="relative z-10 w-full h-auto banner_ryt_img object-contain"
                style={{ maxHeight: "80vh" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: [1, 1.07, 1],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.5 },
                  y: { duration: 0.8, delay: 0.5 },
                  scale: {
                    delay: 1.2,
                    ...waveMotion,
                  },
                }}
              />
            </div>

            <div className="main_coin_div">
              <motion.div
                className="absolute coin_div"
                initial={{ opacity: 0, scale: 0, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.img
                  src={cryptoCoin1}
                  alt="Crypto coin"
                  className="w-16 md:w-20 lg:w-24"
                  animate={{
                    y: [0, -15, 0, 15, 0],
                    x: [0, 8, 0, -8, 0],
                    rotateZ: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    delay: 0.9,
                    ...waveMotion,
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute coin_div"
                initial={{ opacity: 0, scale: 0, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.img
                  src={cryptoCoin2}
                  alt="Crypto coin"
                  className="w-16 md:w-20 lg:w-24"
                  animate={{
                    y: [0, -15, 0, 15, 0],
                    x: [0, -8, 0, 8, 0],
                    rotateZ: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    delay: 1.1,
                    ...waveMotion,
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute coin_div"
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <motion.img
                  src={cryptoCoin3}
                  alt="Crypto coin"
                  className="w-16 md:w-20 lg:w-45"
                  animate={{
                    y: [0, 15, 0, -15, 0],
                    x: [0, 10, 0, -10, 0],
                    rotateZ: [0, 8, 0, -8, 0],
                  }}
                  transition={{
                    delay: 1.3,
                    ...waveMotion,
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute coin_div"
                initial={{ opacity: 0, scale: 0, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <motion.img
                  src={cryptoCoin4}
                  alt="Crypto coin"
                  className="w-7 md:w-7 lg:w-7"
                  animate={{
                    y: [0, -10, 0, 10, 0],
                    x: [0, 5, 0, -5, 0],
                    rotateZ: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    delay: 1.5,
                    ...waveMotion,
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute coin_div"
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
              >
                <motion.img
                  src={cryptoCoin5}
                  alt="Crypto coin"
                  className="w-20 md:w-20 lg:w-20"
                  animate={{
                    y: [0, 10, 0, -10, 0],
                    x: [0, -10, 0, 10, 0],
                    rotateZ: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    delay: 1.7,
                    ...waveMotion,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Batch />
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 cursor-pointer z-50 bg-[#FF00EE] hover:bg-[#d700c7] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollButton ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <IoIosArrowUp size={20} />
      </button>
    </>
  );
};

export default HeaderBanner;

