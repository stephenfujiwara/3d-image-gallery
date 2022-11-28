import React from "react";
import { FaYoutube, FaTwitter, FaSpotify, FaSoundcloud } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar({
  artist,
  album,
  title,
  spotify,
  youtube,
  twitter,
  soundcloud,
}) {
  return (
    <motion.div
      className="sidebar-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>{title}</h1>
      <h3>Artist: {artist}</h3>
      <h3>{(album ? "Album: " : "Single: ") + title}</h3>
      <div className="icons-container">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href={youtube}
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube color="red" size={100} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href={twitter}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter color="#1DA1F2" size={100} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href={spotify}
          target="_blank"
          rel="noreferrer"
        >
          <FaSpotify color={spotify === "/" ? "gray" : "#1DB954"} size={100} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href={soundcloud}
          target="_blank"
          rel="noreferrer"
        >
          <FaSoundcloud
            color={soundcloud === "/" ? "gray" : "#ff8800"}
            size={100}
          />
        </motion.a>
      </div>
    </motion.div>
  );
}
