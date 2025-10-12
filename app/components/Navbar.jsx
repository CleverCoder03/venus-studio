"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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
      <div
        className={`fixed top-0 left-0 w-dvw text-white ${
          !toggle ? "mix-blend-difference" : "text-black"
        } z-12`}
      >
        <div className="absolute w-full p-5">
          <nav className="flex items-center justify-between [&_div]:cursor-pointer">
            <Link href="/">
              <div className="font-roc-Grotesk-Condensed-bold uppercase text-5xl">
                VENUS
              </div>
            </Link>
            <a
              href="https://velocity-studio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="nav_btn">the studio</div>
            </a>
            <a href="https://vishalmishra.vercel.app" target="_blank" rel="noopener noreferrer">
              <div className="nav_btn">creator</div>
            </a>
            <a
              href="https://www.linkedin.com/in/clever-coder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="nav_btn">get in touch</div>
            </a>
            <div
              className={`menu_btn cursor-pointer transition-all duration-700 ${
                toggle && "bg-white text-black"
              }`}
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? "back" : "menu"}
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ y: "-100%", borderBottomRightRadius: "10%", borderBottomLeftRadius: "10%" }}
            animate={{ y: 0, borderBottomRightRadius: "0%", borderBottomLeftRadius: "0%" }}
            exit={{ y: "-100%", borderBottomRightRadius: "10%", borderBottomLeftRadius: "10%" }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            className="fixed top-0 left-0 bg-[#ff4823] z-10 h-dvh w-dvw"
          >
            <div className="relative z-10 mt-[20vh] [&_div]:bg-white [&_div]:font-roc-Grotesk-Condensed-bold [&_div]:uppercase [&_div]:mx-auto [&_div]:w-80 [&_div]:text-center [&_div]:pt-3 [&_div]:py-1 [&_div]:border [&_div]:text-5xl flex flex-col gap-10">
              <a href="https://velocity-studio.vercel.app" target="_blank" rel="noopener noreferrer">
                <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }} className="-rotate-2" >the studio</motion.div>
              </a>
              <a href="https://vishalmishra.vercel.app" target="_blank" rel="noopener noreferrer">
                <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}  className="rotate-2">the creator</motion.div>
              </a>
              <a href="https://www.linkedin.com/in/clever-coder/" target="_blank" rel="noopener noreferrer">
                <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }} className="-rotate-2">Get in touch</motion.div>
              </a>
            </div>
            <div className="flex w-full justify-between px-5 mt-20 [&_div_div]:bg-white [&_div_div]:border [&_div_div]:text-center [&_div_div]:uppercase [&_div_div]:font-roc-Grotesk-Condensed-bold [&_div_div]:px-4 [&_div]:flex [&_div]:flex-col [&_div]:gap-4">
              <div>
                <a href="https://www.linkedin.com/in/clever-coder/" target="_blank" rel="noopener noreferrer">
                  <div>LinkedIn</div>
                </a>
                <a href="https://twitter.com/CleverCoder0" target="_blank" rel="noopener noreferrer">
                  <div>X/Twitter</div>
                </a>
              </div>
              <div>
                <a href="https://github.com/CleverCoder03" target="_blank" rel="noopener noreferrer">
                  <div>Github</div>
                </a>
                <a href="https://wa.me/+917249084224" target="_blank" rel="noopener noreferrer">
                  <div>Whatsapp</div>
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className={`absolute top-0 flex w-full justify-center items-end h-full left-0 px-5`}
            >
              <div className="relative h-40 sm:h-45 md:h-50 w-1/2">
                <Image src="/nav-img-1.avif" alt="nav-image" fill />
              </div>
              <div className="relative h-40 sm:h-45 md:h-50 w-1/2">
                <Image src="/nav-img-2.avif" alt="nav-image" fill />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
