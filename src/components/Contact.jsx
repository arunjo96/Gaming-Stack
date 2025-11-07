import { useState} from 'react'
import contactBanner from "../assets/contact/contact_banner_1.png";
import contactBanner2 from "../assets/contact/contact_banner_2.png";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [success, setSuccess] = useState(false);

   const handleSubmit = (e) => {
     e.preventDefault();

     if (email.trim() === "") {
       setMessage("Please enter your email!");
       setSuccess(false);
       return;
     }

     setMessage("Subscribed successfully!");
     setSuccess(true);
     setEmail("");

     setTimeout(() => setMessage(""), 3000);
   };
  return (
    <>
      <section>
        <div className="contact_sec  relative py-12">
          <div
            className="  bg-center bg-contain bg-no-repeat h-96 w-full flex flex-col justify-center items-center contact_img "
            style={{ backgroundImage: `url(${contactBanner})` }}
          >
            <div className="contact_details">
              <h1 className="text-white text-4xl  lg:text-4xl xl:text-5xl drop-shadow-lg  mb-3">
                Subscribe to our news!
              </h1>
              <p className="text-white text-md lg:text-md drop-shadow-lg mb-4">
                Please provide your email to receive regular updates on our
                promotions and tournaments.
              </p>

              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col items-start gap-2 w-full max-w-sm"
              >
                <div className="relative w-full mb-3 input_div">
                  <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D646D0] text-lg" />
                  <input
                    type="email"
                    placeholder="Your Email Address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-80 pl-10 pr-3 py-2 text-white bg-[#72005A] sm:mb-0 text-sm border rounded-lg focus:outline-none border-[#D646D0] placeholder:text-gray-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  className=" btn_play contact_btn  "
                >
                  {success ? "Subscribed ✅" : "Subscribe"}
                </motion.button>
                <AnimatePresence>
                  {message && (
                    <motion.p
                      key="message"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className={`text-sm mt-1 ${
                        success ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.form>
            </div>
          </div>
          <div
            className="  bg-center bg-contain bg-no-repeat h-96 w-full flex flex-col justify-start items-center contact_img "
            style={{ backgroundImage: `url(${contactBanner2})` }}
          >
            <div className="contact_details pt-[4rem]">
              <h1 className="text-white text-4xl  lg:text-4xl xl:text-5xl drop-shadow-lg  mb-3">
                Got any questions?
              </h1>
              <p className="text-white text-md sm:text-md md:text-md lg:text-md drop-shadow-lg mb-4">
                Visit our FAQ section for comprehensive information on
                frequently asked questions.
              </p>
              <button className=" btn_play contact_btn">FAQ Page</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact
