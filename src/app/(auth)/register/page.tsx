import Image from "next/image";
import Link from "next/link";
import {} from "@/containers";
import "./Register.css";
import { clashDisplay } from "@/utils/fonts/fonts";
import { Reg, Register as cover } from "@/utils/images/images";

export default function Register() {
  const createrange = (n: number) => Array.from({ length: n }, (_, i) => i + 1);
  const groupNoOptions = createrange(12);

  return (
    <>
      <main className="main">
        <section className="registration">
          <div className="flare--one"></div>
          <div className="flare--two"></div>
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
                <form action="form">
                  <div className="form__box">
                    <div className="form__group">
                      <label htmlFor="">{"Team's Name"}</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter the name of your group"
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Phone</label>
                      <input
                        type="text"
                        name="phone"
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
                        name="topic"
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
                      <select name="groupNo" id="groupNo">
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
