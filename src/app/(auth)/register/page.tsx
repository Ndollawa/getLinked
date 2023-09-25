"use client";

import React, {
  useState,
  FormEvent,
  useEffect,
  FormEventHandler,
  ChangeEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "scrollreveal";
import {} from "@/containers";
import "./Register.css";
import { clashDisplay } from "@/utils/fonts/fonts";
import {
  Reg,
  RegistrationStars,
  Register as cover,
} from "@/utils/images/images";
import { config } from "@/utils/config/config";
import Success from "@/components/Success";

async function getCategories() {
  const res = await fetch(config.baseURL + "/hackathon/categories-list", {
    next: { tags: ["categories"], revalidate: 3600 },
  });
  const data = await res.json();
  return data;
}

export default function Register() {
  const createrange = (n: number) => Array.from({ length: n }, (_, i) => i + 1);
  const groupNoOptions = createrange(12);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const shouldInitializeScrollReveal = true;
      if (shouldInitializeScrollReveal) {
        ScrollReveal({
          reset: true,
          distance: "80px",
          duration: 2000,
          delay: 200,
        });

        ScrollReveal().reveal("", { origin: "bottom" });
        ScrollReveal().reveal(
          ".registration__box .registration__box--details",
          {
            origin: "left",
          }
        );
        ScrollReveal().reveal(".registration__box .registration__box--form", {
          origin: "right",
        });
      }
    }
  }, []);
  // console.log(await getCategories());
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 0,
    project_topic: null,
    category: "",
    privacy_poclicy_accepted: false,
  });

  const handleInput: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <Success />
      <main className="main h-[100vh] overflow-hidden">
        <section className="registration relative">
          <div className="flare--one"></div>
          <div className="flare--two"></div>
          <div className="faq-stars -z-2 animate-pulse absolute w-full">
            <Image src={RegistrationStars} alt="reg-stars" />
          </div>
          <div className="registration__box">
            <div className="registration__box--details">
              <div className="details">
                <Image src={cover} width={720} alt="" />
              </div>
            </div>
            <div className="registration__box--form">
              <div className="registration__form">
                <h2 className={clashDisplay.className}>Register</h2>
                <p>
                  Be a part of this movement <Image src={Reg} alt="" />
                </p>
                <h3>Create Your Account</h3>
                <form action="form" onSubmit={handleSubmit}>
                  <div className="form__box">
                    <div className="form__group">
                      <label htmlFor="">{"Team's Name"}</label>
                      <input
                        type="text"
                        name="team_name"
                        placeholder="Enter the name of your group"
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Phone</label>
                      <input
                        type="text"
                        name="phone_number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="form__group">
                      <label htmlFor="">Project Topic</label>
                      <input
                        type="text"
                        name="project_topic"
                        placeholder="Enter your group project topic"
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Category</label>
                      <select name="category" id="category">
                        <option value={"Fintech"}>Fintech</option>
                        <option value={"Education"}>Education</option>
                        <option value={"Health"}>Health</option>
                        <option value={"Government"}>Government</option>
                      </select>
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Group Size</label>
                      <select name="group_size" id="groupNo">
                        {groupNoOptions.map((n, i) => (
                          <option key={i} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <p className="hint">
                    Please review your registration details before submitting
                  </p>
                  <div className="confirmation">
                    <input type="checkbox" name="confirmation" id="" />
                    <p>
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </div>
                  <div className="grid grid-cols-1 place-items-center">
                    <button type="submit" className="cta-btn">
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
