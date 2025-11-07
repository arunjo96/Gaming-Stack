
import React from "react";
import { motion } from "framer-motion";
import socialMediaBanner from "../assets/social_media/social_media_bg.png";
import {
  FaYoutube,
  FaAngleDoubleRight,
  FaInstagram,
  FaTwitch,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const SocialMedia = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <section className="social_media_sec relative text-center py-8 px-4 rounded-xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-center bg-contain bg-no-repeat social_media_bg h-96 w-full flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${socialMediaBanner})` }}
        >
          <div className="social_media_div">Social Media</div>

          <div className="main_social_media_div">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-semibold text-white flex justify-center items-center gap-2 mb-3"
            >
              Follow Us on
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <FaAngleDoubleRight />
              </motion.span>
            </motion.h2>

         

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl social_media_icons"
            >
              <motion.a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-white flex items-center no-underline appearance-none bg-transparent border-none font-inherit p-0 m-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-red-600 rounded-full p-2 mr-2"
                >
                  <FaYoutube className="text-white text-xl" />
                </motion.div>
                <span>Youtube</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-white flex items-center no-underline appearance-none bg-transparent border-none font-inherit p-0 m-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 rounded-full p-2 mr-2"
                >
                  <FaInstagram className="text-white text-xl" />
                </motion.div>
                <span>Instagram</span>
              </motion.a>

              <motion.a
                href="https://www.twitch.tv/"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-white flex items-center no-underline appearance-none bg-transparent border-none font-inherit p-0 m-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="bg-purple-700 rounded-full p-2 mr-2"
                >
                  <FaTwitch className="text-white text-xl" />
                </motion.div>
                <span>Twitch</span>
              </motion.a>

              <motion.a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-white flex items-center no-underline appearance-none bg-transparent border-none font-inherit p-0 m-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="bg-blue-600 rounded-full p-2 mr-2"
                >
                  <FaFacebook className="text-white text-xl" />
                </motion.div>
                <span>Facebook</span>
              </motion.a>

              <motion.a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-white flex items-center no-underline appearance-none bg-transparent border-none font-inherit p-0 m-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="bg-green-500 rounded-full p-2 mr-2"
                >
                  <FaWhatsapp className="text-white text-xl" />
                </motion.div>
                <span>WhatsApp</span>
              </motion.a>

              <motion.a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-white flex items-center no-underline appearance-none bg-transparent border-none font-inherit p-0 m-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full p-2 mr-2"
                >
                  <FaTiktok className="text-white text-xl" />
                </motion.div>
                <span>Tik Tok</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default SocialMedia;

