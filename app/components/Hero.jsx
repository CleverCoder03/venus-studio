"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import Copy from "./Copy";
import {motion} from "motion/react"
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();
  const heroImgRef1 = useRef();
  const heroImgRef2 = useRef();
  const isMobile = useMediaQuery({maxWidth: 768})

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: isMobile ? "center top" : "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      heroImgRef1.current,
      {
        y: isMobile ? 80 : 120,
      },
      {
        y: 40,
        ease: "none",
      }
    ).fromTo(
      heroImgRef2.current,
      {
        y: isMobile ? 20 : 60,
      },
      {
        y: -20,
        ease: "none",
      },
      "<"
    );
  }, []);

  return (
    <div ref={heroRef} className="w-full px-4">
      <div className="pt-40 md:pt-30 lg:pt-45">
        <div className="headline text-right">
          <h1>A committed,</h1>
          <h1 className="md:text-left">Creative and </h1>
          <h1 className="md:text-left">Agile Team.</h1>
        </div>
      </div>

      <div className="relative flex md:justify-center gap-2 md:-mr-25">
        <div className="w-[45%] md:w-[35vw] relative">
          <div id="hero_img_wrapper_1">
            <div className="relative hero_img_1 h-60 md:h-[32vw] overflow-hidden">
              <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }} ref={heroImgRef1} className="relative w-full h-full">
                <Image
                  src={"/header-img-1.avif"}
                  alt="header image"
                  className="object-cover object-top scale-150 md:scale-125 -ml-10 md:-rotate-12"
                  fill
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-[55%] md:w-[40vw] relative -mt-7 md:-mt-[10vw]">
          <div id="hero_img_wrapper_2">
            <div className="relative hero_img_2 h-40 md:h-[25vw] overflow-hidden">
              <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }} ref={heroImgRef2} className="relative w-full h-full">
                <Image
                  src={"/header-img-2.avif"}
                  alt="header image"
                  className="object-cover object-top scale-125 md:scale-110 md:-rotate-12"
                  fill
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <div className="relative w-90 md:w-[30vw] md:-mt-[15vw] md:ml-[52vw]">
          <Copy>
            <h1 className="sub-headline">
              We are Senpai and Kazuo, two passionate guys born in the early
              20s. We enjoy playing with the codes of digital and branding, so
              we founded our studio in 2025 to offer a customized approach to
              our clients.
            </h1>
          </Copy>
        </div>
      </div>
    </div>
  );
};

export default Hero;
