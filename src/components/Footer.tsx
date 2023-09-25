import React from "react";
import { clashDisplay } from "@/utils/fonts/fonts";
import "./Footer.css";
import Link from "next/link";
import { FooterStars } from "@/utils/images/images";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="faq-stars -z-2 star--two absolute w-full">
          <Image src={FooterStars} alt="faq-stars" />
        </div>
        <div className="cols-span-12 md:cols-span-6">
          <div>
            <div className="footer__logo">
              <h3 className={clashDisplay.className}>
                get<span>linked</span>
              </h3>
            </div>
            <p className="text-base mb-12">
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
            <h3 className="secondary-text-color font-semibold">Useful Links</h3>
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
              <li className="mb-2 flex tems-center">
                <span className="font-semibold secondary-text-color">
                  Follow Us
                </span>
                <div className="social__icons w-40">
                  <span>
                    <Link href="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </span>
                  <span>
                    <Link href="">
                      <svg
                        width="19"
                        height="17"
                        viewBox="0 0 19 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </span>
                  <span>
                    <Link href="">
                      <svg
                        width="11"
                        height="20"
                        viewBox="0 0 11 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                          fill="#F8F8F8"
                        />
                      </svg>
                    </Link>
                  </span>

                  <span>
                    <Link href="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.93994 5C6.93968 5.53043 6.72871 6.03904 6.35345 6.41392C5.97819 6.78881 5.46937 6.99927 4.93894 6.999C4.40851 6.99874 3.89991 6.78777 3.52502 6.41251C3.15014 6.03725 2.93968 5.52843 2.93994 4.998C2.94021 4.46757 3.15117 3.95897 3.52644 3.58408C3.9017 3.20919 4.41051 2.99874 4.94094 2.999C5.47137 2.99927 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46957 6.93994 5ZM6.99994 8.48H2.99994V21H6.99994V8.48ZM13.3199 8.48H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.9 14.9399 7.13 13.2799 10.16L13.3199 8.48Z"
                          fill="#F8F8F8"
                        />
                      </svg>
                    </Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="cols-span-12 md:cols-span-3">
          {" "}
          <div className="">
            <h3 className="secondary-text-color font-semibold">Contact Us</h3>
            <ul>
              <li className="mb-2 flex items-center space-x-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z"
                    fill="#F8F8F8"
                  />
                  <path
                    d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z"
                    fill="#F8F8F8"
                  />
                </svg>
                <a href="tel:08155393750">08155393750 </a>
              </li>
              <li className="mb-2  flex items-center space-x-2">
                <svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z"
                    fill="#F8F8F8"
                  />
                </svg>
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
