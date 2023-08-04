import React from 'react'
import styles from '@/app/style/howto.module.css'
import Image from 'next/image';
const Howto = (props) => {
  return (
    <div className={styles.howto_box}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <Image src={props.img} alt="Description" layout="fill" objectFit='contain' />
      </div>
    </div>
  );
};

export default Howto;
