
import React from "react";
import { motion } from "framer-motion";
import articleBanner from "../assets/article_sec/article_banner.png";
import characterImg from "../assets/article_sec/character_1.png";
import characterBg from "../assets/article_sec/character_bg.png";
import girlCharacterImg from "../assets/article_sec/girl_character.png";
import girlCharacterBg from "../assets/article_sec/girl_character_bg.png";
import playBanner from "../assets/article_sec/play_banner.png";
import playCharacter from "../assets/article_sec/play_character.png";
import GamesCards from "./GamesCards";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";


const Article = () => {
   const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const imageRightAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const contentAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sectionAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div
        className="main_artice_sec backdrop-invert"
        style={{ backgroundImage: `url(${articleBanner})` }}
      >
        <div className="px-4 md:px-8 lg:px-20 overflow-visible">
          <div className="relative flex flex-col lg:flex-row justify-around items-center gap-10 pt-20">
            <motion.div
              className="card_div relative w-full h-full backdrop-invert bg-cover bg-center rounded-2xl overflow-visible p-6 sm:p-8 md:p-10"
              style={{ backgroundImage: `url(${characterBg})` }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardAnimation}
              transition={{ duration: 0.7 }}
            >
              <motion.img
                src={characterImg}
                alt="character"
                className="absolute left-0 bottom-0 h-52 sm:h-64 md:h-72 z-20"
                variants={imageAnimation}
                transition={{ duration: 0.5, delay: 0.3 }}
              />

              <motion.div
                className="relative z-30 text-white content_sec"
                variants={contentAnimation}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-semibold leading-tight">
                  Refer Your Friend
                  <br />
                  and Earn Rewards!
                </h1>
                <p className="mt-3 text-sm sm:text-base text-white">
                  Refer your friends and enjoy exclusive bonuses and discounts.
                </p>
                <motion.button
                  className="mt-4 btn_play article_btn"
                 
                >
                  Play Now
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="card_div girl_character_div relative w-full h-full backdrop-invert bg-cover bg-center rounded-2xl overflow-visible p-6 sm:p-8 md:p-10"
              style={{ backgroundImage: `url(${girlCharacterBg})` }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardAnimation}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.img
                src={girlCharacterImg}
                alt="girl_character"
                className="absolute right-0 bottom-0 h-52 sm:h-64 md:h-72 z-20"
                variants={imageRightAnimation}
                transition={{ duration: 0.5, delay: 0.5 }}
              />

              <motion.div
                className="relative z-30 text-white girl_content_sec"
                variants={contentAnimation}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-semibold leading-tight">
                  Where the excitement
                  <br />
                  knows no bounds
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[#e6dce7]">
                  Experience unparalleled joy with our exclusive perks, from
                  high-stakes adventures to unforgettable triumphs!
                </p>
                <motion.button
                  className="mt-4 article_btn btn_play"
                  
                >
                  Play Now
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="py-5 text-center mt-10 relative sm:py-10 md:py-15 lg:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardAnimation}
            transition={{ duration: 0.7 }}
          >
            <img
              src={playCharacter}
              alt="playCharacter Image"
              className="absolute right-0 bottom-0 z-20 banner_character_img"
            />
            <div
              className="relative w-full play_banner_sec overflow-visible"
              style={{ backgroundImage: `url(${playBanner})` }}
            >
              <div className="absolute inset-0 bg-[rgb(0 0 0/25%)] rounded-[18px]"></div>
              <button className="relative z-30 play_off_btn mt-8 sm:mt-10">
                Play Off Market Games 
              </button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionAnimation}
            transition={{ duration: 0.6 }}
          >
            <GamesCards />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionAnimation}
            transition={{ duration: 0.6 }}
          >
            <Contact />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionAnimation}
            transition={{ duration: 0.6 }}
          >
            <SocialMedia />
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Article


