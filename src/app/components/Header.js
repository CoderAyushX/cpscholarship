"use client"
import React from "react";
import Link from "next/link";
import styles from "@/app/style/header.module.css";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail} from "react-icons/io5";

import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();

  const toHomePage = () => {
    router.push("/");
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Image
            src="/logo_img.png"
            className="logo_img"
            layout="fill"
            alt="logo"
            onClick={toHomePage}
          />
        </div>

        <div className={styles.container_2}>
          <ul className={styles.nav_info}>
            <li>
              <div>
                <BsFillTelephoneFill className={styles.icon} /> 
                9024465253,
                9672977537, 9079934699
              </div>
            </li>
            <li>
              <div>
                <IoMail className={styles.icon} />
                info@cpil.in
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
