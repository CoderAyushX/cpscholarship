"use client";

import React, { useState, useRef } from "react";
import styles from "@/app/style/pdfdownload.module.css";
import Header from "../components/Header";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Document from "./document"; // Update the import path accordingly
import { useRouter } from "next/navigation";

const PdFDownload = () => {
  const [isClicked, setIsClicked] = useState(false);
  const searchParams = useSearchParams();
 ;

  const generatePDF = async () => {
    setIsClicked(true);

    try {
      const queryParameter = searchParams.get("rollNo");
      const response = await axios.post("/api/pdfmaker", {
        data: queryParameter,
      });

      const htmlContent = Document(response.data); // Assuming response.data is the parsed HTML content

      const newWindow = window.open("", "_blank");
      newWindow.document.write(htmlContent);

      const style = document.createElement("style");
      style.innerHTML = `
        @media print {
           @page {
          margin: 0;
          size: 211mm 295mm; /* Set the A4 dimensions */
       }
      html, body {
         width: 211mm;
         height: 99%;
         margin: 0;
         padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
     }
    }
`;
      newWindow.document.head.appendChild(style);
      newWindow.document.title = `cp ${response.data.firstName} admit card`;

      newWindow.document.close();

      const closeWindowAfterInteraction = () => {
        newWindow.close();
        // router.push( '/');
      };

      newWindow.document.body.addEventListener(
        "click",
        closeWindowAfterInteraction
      );
      newWindow.print({ filename: "amdit-card.pdf" });
      // setTimeout(() => {
      //   newWindow.close();
      // }, 1000);

      setIsClicked(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setIsClicked(false);
    }
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
};

export default PdFDownload;
