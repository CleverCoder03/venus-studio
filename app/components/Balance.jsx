"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Copy from "./Copy";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Balance = () => {
  const balanceRef = useRef();
  const balImgRef = useRef();
  const balImgRef2 = useRef();
  const isMobile = useMediaQuery({maxWidth: 768})


    useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: balanceRef.current,
        start: "top center",
        end: isMobile ? "bottom top" : "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      balImgRef.current,
      {
        y: isMobile ? 40 : "-0vw",
      },
      {
        y: isMobile ? -40 : "-20vw",
        ease: "none",
      }
    ).fromTo(
      balImgRef2.current,
      {
        y: isMobile ? -200 : "-20vw",
      },
      {
        y: isMobile ? -260 : "-60vw",
        ease: "none",
      },
      "<"
    )
  }, []);

  return (
    <div ref={balanceRef} className="py-10 px-4">
      <div>
        <div className="headline">
          <h1 className="md:text-right">the balance</h1>
          <h1 className="text-center">between</h1>
        </div>
      </div>

      <div className="-mt-10 md:flex md:justify-center md:w-full">
        <div id="bal_img_wrapper_3" className="md:w-[80vw]">
          <div className="relative bal_img_3 h-[55vw] md:h-[50vw] w-full overflow-hidden">
            <motion.div
              ref={balImgRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
              className="relative w-full h-[60vh] lg:h-[70vh] xl:h-[100vh]"
            >
              <Image
                src={"/venus_game.png"}
                alt="header image"
                className="object-cover object-top scale-110 md:scale-125   opacity-85 md:rotate-12 lg:rotate-0"
                fill
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative -mt-5 z-[-1] md:z-0 md:mt-4">
        <div className="headline">
          <h1>Creativity &</h1>
          <div className="md:flex md:justify-center md:gap-4 lg:gap-6 xl:gap-8">
            <h1 className="text-center">Common</h1>
          <h1 className="">Sense.</h1>
          </div>
        </div>

        <div className="flex justify-center md:justify-start md:absolute md:top-0 md:right-0">
          <div className="relative w-90 md:w-[30vw] md:mr-[4vw]">
            <Copy>
              <h1 className="sub-headline text-center">
                Venus is the power and efficiency of "home-made", a carefully crafted, agile and committed method, with just the right amount of creativity and pragmatism.
              </h1>
            </Copy>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-center md:w-full">
        <div id="bal_img_wrapper_4" className="md:w-[80vw]">
          <div className="relative bal_img_4 h-[60vw] md:h-[50vw] w-full overflow-hidden">
            <motion.div
              ref={balImgRef2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
              className="relative w-full h-[60vh] md:h-[100vw] lg:h-[110vw]"
            >
              <Image
                src={"/venus_game.png"}
                alt="header image"
                className="object-cover scale-110 opacity-85"
                fill
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
