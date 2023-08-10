"use client";

import React, { useState } from "react";
import styles from "@/app/style/pdfdownload.module.css";
import Header from "../components/Header";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { save } from "save-file";
export default function pdFDownload(props) {
  const [isClicked, setIsClicked] = useState(false);
  const searchParams = useSearchParams();

  const generatePDF = async () => {
    setIsClicked(!isClicked);
    try {
      const queryParameter = searchParams.get("rollNo");
      const response = await axios.post(
        "/api/pdfmaker",
        {
          data: queryParameter,
        },
        {
          responseType: "blob", // Specify response type as blob
        }
      );

      save(response.data, "generated-pdf.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
    setIsClicked(false);
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Thanks for Applying for Scholarship</h1>
          <div className={styles.imageWrapper}>
            <Image
              src="/pdf.png"
              alt="PDF Icon"
              width={150}
              height={150}
              className={styles.pdfImage}
            />
          </div>
          {isClicked ? (
            <button className={styles.downloadButton}>Downloding...</button>
          ) : (
            <button className={styles.downloadButton} onClick={generatePDF}>
              Download
            </button>
          )}
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Copyright@Careerpoint. All rights reserved</p>
      </footer>
    </>
  );
}
