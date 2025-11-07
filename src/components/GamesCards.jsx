import {useState} from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import hitTheRoute from "../assets/games_cards/card_1.png";
import luckyDamaMuerta1 from "../assets/games_cards/card_2.png";
import luckyDamaMuerta2 from "../assets/games_cards/card_3.png";
import luckyBlue from "../assets/games_cards/card_4.png";
import luckAndMagic from "../assets/games_cards/card_5.png";
import helloEaster from "../assets/games_cards/card_6.png";
import jogoDoBicho from "../assets/games_cards/card_7.png";
import jokerQueen from "../assets/games_cards/card_8.png";
import journeyFlirt from "../assets/games_cards/card_9.png";
import ladyWolfMoon from "../assets/games_cards/card_10.png";

const GamesCards = () => {
  const [liked, setLiked] = useState({});

   const handleLike = (id) => {
     setLiked((prev) => ({
       ...prev,
       [id]: !prev[id],
     }));
   };

 const games = [
   { id: 1, image: hitTheRoute },
   { id: 2, image: luckyDamaMuerta1 },
   { id: 3, image: luckyDamaMuerta2 },
    { id: 4, image: luckyBlue },
   { id: 5, image: luckAndMagic },
   { id: 6, image: helloEaster },
   { id: 7, image: jogoDoBicho },
   { id: 8, image: jokerQueen },
   { id: 9, image: journeyFlirt },
    { id: 10, image: ladyWolfMoon }
 ];

  return (
    <>
      <section className="popular_sec relative text-center py-8 px-4 rounded-xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl drop-shadow-lg">
          Popular Games
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8">
          {games.map((game) => (
            <motion.div
              key={game.id}
              className="relative rounded-xl overflow-hidden  card_games_div"
              initial={{
                boxShadow: "0 0 0 rgba(0, 255, 100, 0)",
                backdropFilter: "blur(0px) saturate(0%)",
                WebkitBackdropFilter: "blur(0px) saturate(0%)",
              }}
              whileHover={{
                backdropFilter: "blur(100px) saturate(180%)",
                WebkitBackdropFilter: "blur(100px) saturate(180%)",
                boxShadow: [
                  "0 0 0 rgba(0, 255, 100, 0)",
                  "0 0 25px 3px rgba(0, 255, 100, 0.4)",
                  "0 0 10px 2px rgba(0, 255, 100, 0.3)",
                  "0 0 0 rgba(0, 255, 100, 0.2)",
                ],
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  times: [0, 0.3, 0.6, 1],
                },
              }}
            >
              <div
                className="absolute z-10 text-white rounded-full fav_icon cursor-pointer"
                onClick={() => handleLike(game.id)}
              >
                {liked[game.id] ? (
                  <FaHeart className="w-4 h-4 text-[#FF00EE]" />
                ) : (
                  <FaRegHeart className="w-4 h-4 text-white" />
                )}
              </div>

              <img
                src={game.image}
                alt={game.title}
                className="w-full rounded-xl"
              />

              <button className="play_now_btn btn_play">Play Now</button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GamesCards;
