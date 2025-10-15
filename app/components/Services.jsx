import React from "react";
import Copy from "./Copy";

const Services = () => {
  return (
    <div className="py-10 md:py-15 lg:py-22 px-4 bg-[#1ec5fc] border-t overflow-hidden">
      <div className="">
        <div className="headline">
          <div className="md:flex md:gap-4 lg:gap-6 xl:gap-8 md:justify-end">
            <h1>We'er</h1>
            <h1 className="">Providing</h1>
          </div>
          <div className="md:flex">
            <h1>Full-</h1>
            <h1 className="text-right">Services</h1>
          </div>
        </div>

        <div className="flex justify-center flex-col gap-10 md:flex-row py-15 md:[&>div]:w-1/3">
          <div className="relative w-full">
            <Copy>
              <h1 className="service-headline text-center">Positioning</h1>
              <h1 className="service-headline text-center">Storytelling</h1>
              <h1 className="service-headline text-center">Brand Strategy</h1>
              <h1 className="service-headline text-center">Brand Identity</h1>
            </Copy>
          </div>

          <div className="relative w-full">
            <Copy>
              <h1 className="service-headline text-center">Art Direction</h1>
              <h1 className="service-headline text-center">UX & UI Design</h1>
              <h1 className="service-headline text-center">
                Website & E-Commerce
              </h1>
              <h1 className="service-headline text-center">Mobile App</h1>
            </Copy>
          </div>

          <div className="relative w-full">
            <Copy>
              <h1 className="service-headline text-center">
                Creative Development
              </h1>
              <h1 className="service-headline text-center">
                Front-end Development
              </h1>
              <h1 className="service-headline text-center">
                Back-end Development
              </h1>
              <h1 className="service-headline text-center">Headless CMS</h1>
              <h1 className="service-headline text-center">Wordpress</h1>
            </Copy>
          </div>
        </div>

        <div className="headline">
          <h1>From</h1>
          <h1>Strategy</h1>
          <div className="md:flex md:gap-4 lg:gap-6 xl:gap-8 md:justify-end">
            <h1 className="text-right">To Design</h1>
          <h1 className="text-center">And</h1>
          </div>
          <h1 className="text-center">Development.</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
