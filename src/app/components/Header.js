// components/Header.js
import React from "react";
import Link from "next/link";
import styles from "@/app/style/header.module.css";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";

import { IoMail} from "react-icons/io5";
const Header = () => {
  // return (
  //   <header className={styles.navbar}>
  //     <div className={styles.image_container}>
  //       <Image
  //         src={"/logo.png"}
  //         layout="fill"
  //         className={styles.image}
  //         alt="how to image"
  //         quality={100}
  //       />
  //     </div>
  //     <div className={styles.navbar__actions}>
  //     <Link href="/contact" className={styles.contact_us}>
  //         Contact us
  //       </Link>
  //       <Link href="scholarform" className={styles.apply_button}>
  //         Apply Now
  //       </Link>
  //     </div>
  //   </header>
  // );

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Image
            src="/logo_img.png"
            className="logo_img"
            layout="fill"
            alt="logo"
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
