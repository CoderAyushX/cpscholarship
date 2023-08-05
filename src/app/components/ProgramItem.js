import React from "react";
import styles from "@/app/style/home.module.css";

const ProgramItem = (props) => {
  return (
    <div className={styles.program_item_div}>
      <div className={styles.program_item}>
        <div className={styles.program__icon}>
          {props.icon}
        </div>
        <div className={styles.head_p}>
          <h5>{props.head}</h5>
          <p>{props.desc}</p>
          <p>{props.desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramItem;
