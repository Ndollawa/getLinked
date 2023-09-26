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
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { toast } from "react-toastify";
import Toastify from "@/components/Toastify";
import Swal from "sweetalert2";
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
import { PulseLoader } from "react-spinners";

const url = config.baseURL + "/hackathon/registration";
async function registerUser(url: string, { arg }: { arg: string }) {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function Register() {
  const createrange = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

  const groupNoOptions = createrange(12);

  const fetcher = async (...args: any[]) => {
    const response = await (fetch as (...args: any[]) => Promise<Response>)(
      ...args
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const [success, setSuccess] = useState(false);
  const {
    trigger,
    isMutating,
    error: formError,
  } = useSWRMutation(url, registerUser /* options */);

  useEffect(() => {
    async function animate() {
      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default;

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
    animate();
  }, []);
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR(config.baseURL + "/hackathon/categories-list", fetcher);
  // console.log(data);

  const formParams = {
    email: undefined,
    phone_number: undefined,
    team_name: undefined,
    group_size: 1,
    project_topic: undefined,
    category: undefined,
    privacy_poclicy_accepted: false,
  };
  const [formData, setFormData] = useState(formParams);
  const canSave = Object.values(formData).every(Boolean); //&& !isLoading

  const handleInput: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "privacy_poclicy_accepted"
          ? e.target.value === "true"
            ? true
            : false
          : e.target.value,
    }));
  };

  const handleSubmit: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.privacy_poclicy_accepted) {
      return toast.error("You must agree to our terms and conditions", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    const result = await trigger(formData);
    if (formError) {
      return toast.error("Opps! An error occured", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    setSuccess(true);
    setFormData(formParams);
  };
  return (
    <>
      <Toastify />
      {success && <Success show={success} />}
      <main className="main h-[100vh]">
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
                <form action="" method="POST" onSubmit={handleSubmit}>
                  <div className="form__box">
                    <div className="form__group">
                      <label htmlFor="">{"Team's Name"}</label>
                      <input
                        type="text"
                        name="team_name"
                        onChange={handleInput}
                        placeholder="Enter the name of your group"
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Phone</label>
                      <input
                        type="text"
                        name="phone_number"
                        onChange={handleInput}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        name="email"
                        onChange={handleInput}
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="form__group">
                      <label htmlFor="">Project Topic</label>
                      <input
                        type="text"
                        name="project_topic"
                        onChange={handleInput}
                        placeholder="Enter your group project topic"
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Category</label>
                      <select
                        name="category"
                        onChange={handleInput}
                        id="category"
                      >
                        {categories?.map((c: { id: string; name: string }) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}{" "}
                      </select>
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Group Size</label>
                      <select
                        name="group_size"
                        onChange={handleInput}
                        id="groupNo"
                      >
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
                    <input
                      type="checkbox"
                      onChange={handleInput}
                      name="privacy_poclicy_accepted"
                      value={"true"}
                      id=""
                    />
                    <p>
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </div>
                  <div className="grid grid-cols-1 place-items-center">
                    <button
                      type="submit"
                      className="cta-btn"
                      disabled={!canSave || isMutating}
                    >
                      {!isMutating ? (
                        "Register Now"
                      ) : (
                        <>
                          Registering{" "}
                          <PulseLoader size={"0.5rem"} color="#fff" />
                        </>
                      )}
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
