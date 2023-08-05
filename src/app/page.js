import React from "react";
import Header from "./components/Header";
import styles from "@/app/style/home.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaUserCheck,
  FaMoneyBill,
  FaCalendarCheck,
  FaBookReader,
  FaHourglass,
} from "react-icons/fa";
import Howto from "./components/Howto";

import ProgramItem from "./components/ProgramItem";
function page() {
  return (
    <>
      <Header />
      {/* banner image */}
      <div className={styles.banner_img}>
        <Image
          src={"/banner.jpeg"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="hero image"
        />
      </div>
      {/*This is the hero section of front page*/}
      <div className={styles.herosection}>
        {/* text div */}
        <div className={styles.childDiv}>
          <h1>
            Career Point Scholarship
            <br />
            Test <span>VI-XIIth</span>
          </h1>
          <p>
            Welcome to Carrear Point - Where Excellence and Scholarships Meet!
            At Carrear Point, we believe in unlocking the full potential of
            every student through personalized tuition and comprehensive
            scholarship programs. Our dedicated tutors and modern teaching
            methods ensure a transformative learning experience that sets you on
            the path to success. <br />
            Enroll now and seize the opportunity to excel with us!
          </p>
          <Link href="scholarform" className={styles.apply_button}>
            Apply Now <FaArrowRight className={styles.icon} />
          </Link>
        </div>
        {/* image div */}
        <div className={styles.childDiv}>
          <Image
            src={"/hero.png"}
            layout="fill"
            className={styles.image}
            alt="hero image"
          />
        </div>
      </div>
     {/* program item zone */}
     <div className={styles.howto_head_box}>
        <h2>CP Star Exam Details</h2>
      </div>
      <div className={styles.program_item_div}>
        <ProgramItem
          icon={<FaUserCheck className={styles.icon} />}
          head="Eligibility"
          desc="Class Vll, Vlll, lX, X, XI, XII Studying Students"
        />
        <ProgramItem
          icon={<FaMoneyBill className={styles.icon} />}
          head="Exam Fee"
          desc="Free"
        />
        <ProgramItem
          icon={<FaCalendarCheck className={styles.icon} />}
          head="Exam Date"
          desc="1st October & 29th October
          2023"
        />
        <ProgramItem
          icon={<FaBookReader className={styles.icon} />}
          head="Syllabus"
          desc="Current Studying class of student"
        />
        <ProgramItem
          icon={<FaHourglass className={styles.icon} />}
          head="Offline Exam Timing & Duration"
          desc="11:00 AM - 12:00"
          desc2="NOON Duration: 01 Hour"
        />
        <ProgramItem
          icon={<FaCalendarCheck className={styles.icon} />}
          head="Last Date For Registration"
          desc="Phase 1 : 27th September 2023"
          desc2="Phase 2 : 25th October 2023"
        />
      </div>
      {/* How to enroll code */}
      <div className={styles.howto_head_box}>
        <h2>How To Enroll For Scholarship</h2>
      </div>
      <Howto title="Fill online form and get your admit card" img="/form.png" />
      <div className={styles.arrow_box}>
        <Image
          src="/arrow.png"
          alt="arrow"
          layout="fill"
          className={styles.down_arrow}
        />
      </div>
      <Howto title="Give a offline test at carrer point" img="/test.png" />
      <div className={styles.arrow_box}>
        <Image
          src="/arrow.png"
          alt="arrow"
          layout="fill"
          className={`${styles.down_arrow} ${styles.flip_horizontal}`}
        />
      </div>
      <Howto
        title="Get selected! For the scholarship programme"
        img="/message.png"
      />
      {/* Testimonial by students */}
      <div className={styles.howto_head_box}>
        <h2>Testimonial by students</h2>
      </div>

      <div className={styles.other_says_box}>
        <div className={styles.other_says_word_container}>
          <div className={styles.other_says_words}>
            <div className={styles.other_says_image}>
              <Image src="/qoute.png" alt="qoute-sign" layout="fill" />
            </div>
            <p className={styles.other_says_box_details}>
              Career Point Coaching Center&apos expert faculty and encouraging
              atmosphere empowered me to excel academically. Their personalized
              approach and continuous support helped me build confidence in my
              abilities. I wholeheartedly recommend Career Point to all students
              striving for success.
            </p>
            <hr />
            <p className={styles.other_says_name}>Ayush Kumar</p>
          </div>

          <div className={styles.other_says_words}>
            <div className={styles.other_says_image}>
              <Image src="/qoute.png" alt="qoute-sign" layout="fill" />
            </div>

            <p className={styles.other_says_box_details}>
              Career Point Coaching Center&apos dedicated instructors and
              motivating environment played a crucial role in my academic
              achievements. The personalized attention and guidance helped me
              reach my full potential. I confidently recommend Career Point to
              every student seeking excellence.
            </p>
            <p className={styles.other_says_name}>Shubham kumar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
