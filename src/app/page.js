import React from "react";
import Header from "./components/Header";
import styles from "@/app/style/home.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
function page() {
  return (
    <>
      <Header />
      <div className={styles.herosection}>
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
          <Link href="/apply" className={styles.apply_button}>
            Apply Now <FaArrowRight className={styles.icon} />
          </Link>
        </div>
        <div className={styles.childDiv}>
          <Image
            src={"/hero.png"}
            layout="fill"
            className={styles.image}
            quality={100}
          />
        </div>
      </div>
    </>
  );
}

export default page;
