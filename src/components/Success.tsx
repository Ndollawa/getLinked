import React from "react";
import "./Success.css";
import Image from "next/image";
import { Congratulations, SuccessStars } from "@/utils/images/images";
import Link from "next/link";

const Success = () => {
  return (
    <section className="success relative">
      <div className="faq-stars -z-2 animate-pulse absolute w-full">
        <Image src={SuccessStars} alt="faq-stars" />
      </div>
      <div className="success__bg--overlay">
        <div className="success__message--container">
          <div className="content">
            <Image src={Congratulations} alt="faq-stars" />
            <h2> Congratulations</h2>
            <h3>you have successfully registered</h3>
            <p>
              Yes, it was easy and you did it! check your mail box for next 😉
            </p>
            <Link href="/" className="cta-btn w-full">
              Back{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
