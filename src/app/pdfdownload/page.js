"use client";

import React, { useState } from "react";
import styles from "@/app/style/pdfdownload.module.css";
import Header from "../components/Header";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Document from "./document"; // Update the import path accordingly
import  html2pdf  from "html2pdf.js";

const PdFDownload = () => {
  const [isClicked, setIsClicked] = useState(false);
  const searchParams = useSearchParams();

  const generatePDF = async () => {
    setIsClicked(true);

    try {
      const queryParameter = searchParams.get("rollNo");
      const response = await axios.post("/api/pdfmaker", {
        data: queryParameter,
      });

      const htmlContent = Document(response.data); // Assuming response.data is the parsed HTML content
      const contentElement = document.createElement("div");
      contentElement.innerHTML = htmlContent;

      const pdfOptions = {
        margin: 0,
        filename: "my-admit-card.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().from(contentElement).set(pdfOptions).save();

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
