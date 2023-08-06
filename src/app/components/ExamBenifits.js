import React from "react";
import styles from "@/app/style/exambenifits.module.css"; // Import the CSS module
import {
  FaUserCheck,
  FaChalkboard,
  FaClipboardList
  
} from "react-icons/fa";
const ExamBenifits = () => {
  return (
    <div className={styles.exam_benifits_box}>
      <div className= {`${styles.exam_benifits} ${styles.bg_1}`}>
        <div className={styles.icon_box}>
          <FaUserCheck className={styles.icon} />
        </div>
        <h5>Upto 100% Scholarship in Fee for CP Classroom Program</h5>
      </div>

      <div className={`${styles.exam_benifits} ${styles.bg_2}`}>
        <div className={styles.icon_box}>
          <FaChalkboard className={styles.icon} />
        </div>
        <h5>1,00,000 students will be awarded by scholarship, based on their performance in the exam for their academic support</h5>
      </div>

      <div className={`${styles.exam_benifits} ${styles.bg_3}`}>
        <div className={styles.icon_box}>
          <FaClipboardList className={styles.icon} />
        </div>
        <h5>Get National Rank</h5>
      </div>
    </div>
  );
};

export default ExamBenifits;
