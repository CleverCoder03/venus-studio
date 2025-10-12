"use client"

import { useEffect, useState } from "react";
import {AnimatePresence, motion} from "motion/react"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [toggle]);
  return (
    <>
      <div className={`fixed top-0 left-0 w-dvw text-white ${!toggle ? "mix-blend-difference" : "text-black"} z-12`}>
        <div className="absolute w-full p-5">
          <nav className="flex items-center justify-between">
            <div className="font-roc-Grotesk-Condensed-bold uppercase text-5xl">
              VENUS
            </div>
            <div className="nav_btn">the studio</div>
            <div className="nav_btn">playground</div>
            <div className="nav_btn">get in touch</div>
            <div className={`menu_btn cursor-pointer transition-all duration-700 ${toggle && "bg-white text-black"}`} onClick={() => setToggle(!toggle)}>{toggle ? "back" : "menu"}</div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
        <motion.div initial={{y: "-100%"}} animate={{y: 0}} exit={{ y: "-100%" }} transition={{ease: "easeInOut", duration: 0.7}} className="fixed top-0 left-0 bg-[#ff4823] z-10 h-dvh w-dvw">

        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
