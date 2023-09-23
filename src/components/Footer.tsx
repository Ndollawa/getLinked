import React from "react";
import { clashDisplay } from "@/utils/fonts/fonts";

const Footer = () => {
  return (
    <footer className="bg-primary footer text-base">
      <div className="grid grid-cols-1 md:grid-cols-3 m-auto container pt-16 px-10 pb-4 gap-10 min-h-[50vh] text-white">
        <div className="cols-span-12 md:cols-span-6">
          <div>
            <div className="footer__logo">
              <h3 className={clashDisplay.className}>
                get<span>linked</span>
              </h3>
            </div>
            <p className="text-base mb-16">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex gap-2">
              <span className="pr-2  border-r-2 border-[--secondary-color]">
                <a href="">Terms of Use</a>
              </span>
              <span className="">
                <a href="">Privacy Policy</a>
              </span>
            </div>
          </div>
        </div>
        <div className="cols-span-12 md:cols-span-3">
          <div className="">
            <h3 className="secondary-text-color">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <a href="">Overview</a>
              </li>
              <li className="mb-2">
                <a href="">Timeline</a>
              </li>
              <li className="mb-2">
                <a href="">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="">Register</a>
              </li>
              <li className="mb-2">
                <span>Follow Us</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="cols-span-12 md:cols-span-3">
          {" "}
          <div className="">
            <h3 className="secondary-text-color">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <a href="tel:08155393750">08155393750 </a>
              </li>
              <li className="mb-2">
                <address># 4 Effiong Ebe Street, Calabar </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright h-20">
        <p className="text-sm p-6 text-center text-white">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
