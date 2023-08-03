// components/Header.js
import React from "react";
import Link from "next/link";
import styles from "@/app/style/header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.image_container}>
        <Image
          src={"/logo.png"}
          layout="fill"
          className={styles.image}
          quality={100}
        />
      </div>
      <div className={styles.navbar__actions}>
        <p>Contact us</p>
        <Link href="/apply" className={styles.apply_button}>
          Apply Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
