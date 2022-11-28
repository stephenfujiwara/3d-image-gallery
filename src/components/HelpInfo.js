import React from "react";
import { motion } from "framer-motion";

export default function HelpInfo() {
  return (
    <motion.div
      className="helpinfo-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="helpinfo-title">
        <h1>Photo Clicked!</h1>
      </div>
      <ul>
        <li>
          <h2>Click the photo again to return home.</h2>
        </li>
        <li>
          <h2>Or click on another image to move to that one.</h2>
        </li>
        <li>
          <h2>Or click into open space to return home as well.</h2>
        </li>
        <h3>
          *Also, if an icon is greyed out, then there is no link available for
          the particular platform.
        </h3>
      </ul>
    </motion.div>
  );
}
