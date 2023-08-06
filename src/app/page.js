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

      {/* question break table */}
      <div styleName={styles.question_break_box}>
        <table className={styles.question_break}>
          <thead>
            <tr>
              <th colspan="2"> Exam Date : 01 October &amp; 29 October 2023</th>
              <th colspan="2" rowspan="1">
                For CP Study Center Network
              </th>
              <th>Question Paper Pattern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="1" rowspan="4">
                <b>Class 7th to 10th</b>
              </td>
              <td>Science</td>
              <td colspan="2" rowspan="1">
                24 Ques (Phy:8, Chem:8, Bio:8) Duration
              </td>
              <td>1 Hour</td>
            </tr>
            <tr>
              <td>Maths</td>
              <td>16 Ques.</td>
              <td>Total Marks</td>
              <td>100</td>
            </tr>
            <tr>
              <td>MAT</td>
              <td>10 Ques.</td>
              <td>Marks/Question</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Total Questions</td>
              <td>50 Ques.</td>
              <td>Negative Marking</td>
              <td>No</td>
            </tr>
            <tr>
              <td colspan="1" rowspan="4">
                <b>Class 11th and 12th (PCM)</b>
              </td>
              <td>Physics</td>
              <td>10 Ques.</td>
              <td>Duration</td>
              <td>1 Hour</td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>10 Ques.</td>
              <td>Total Marking</td>
              <td>120</td>
            </tr>
            <tr>
              <td>Maths</td>
              <td>10 Ques.</td>
              <td>Marks/Question</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Total Questions</td>
              <td>30 Ques.</td>
              <td>Negative Marking</td>
              <td>No</td>
            </tr>
            <tr>
              <td colspan="1" rowspan="4">
                <b>Class 11th and 12th (PCB)</b>
              </td>
              <td>Physics</td>
              <td>10 Ques.</td>
              <td>Duration</td>
              <td>1 Hour</td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>10 Ques.</td>
              <td>Total Marking</td>
              <td>160</td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>20 Ques.</td>
              <td>Marks/Question</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Total Questions</td>
              <td>40 Ques.</td>
              <td>Negative Marking</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* scholarship table */}

      <div styleName={styles.question_break_box}>
        <table className={styles.question_break}>
          <thead>
            <tr>
              <th>Category</th>
              <th>CP Scholar Rank</th>
              <th>Registration Fees</th>
              <th>Tuition Fees</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>A</td>
              <td>Rank 1 to 5</td>
              <td>100% waiver</td>
              <td>100% waiver</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Rank 6 to 10</td>
              <td>100% waiver</td>
              <td>90% waiver</td>
            </tr>
            <tr>
              <td>C</td>
              <td>Rank 11 to 25</td>
              <td>100% waiver</td>
              <td>75% waiver</td>
            </tr>
            <tr>
              <td>D</td>
              <td>Rank 26 to 50</td>
              <td>Chargeable</td>
              <td>70% waiver</td>
            </tr>
            <tr>
              <td>E</td>
              <td>Rank 51 to 100</td>
              <td>Chargeable</td>
              <td>50% waiver</td>
            </tr>
            <tr>
              <td>F</td>
              <td>Rank 101 to 500</td>
              <td>Chargeable</td>
              <td>40% waiver</td>
            </tr>
            <tr>
              <td>G</td>
              <td>Rank 501 to 1000</td>
              <td>Chargeable</td>
              <td>30% waiver</td>
            </tr>
            <tr>
              <td>H</td>
              <td>Rank 1001 to 2000</td>
              <td>Chargeable</td>
              <td>20% waiver</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default page;
