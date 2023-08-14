import React from "react";
import styles from "@/app/style/admin.module.css";
import Header from "@/app/components/Header";
import Link from "next/link";
const AdminLink = () => {
  return (
    <>
      <Header />

      <div className={styles.link_container}>
        <Link href="cpadminlink/form-table" className={styles.apply_button}>
          Student Form Data
        </Link>
        <Link href="cpadminlink/today-form-table" className={styles.apply_button}>
          See Who Applied Today
        </Link>
      
      </div>
    </>
  );
};

export default AdminLink;
