"use client"

import React, { useState, useEffect } from "react";
import styles from "@/app/style/pdfdownload.module.css";
import Header from "../components/Header";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Document from "./document"; // Update the import path accordingly
import html2pdf from "html2pdf.js";

const PdFDownload = () => {
  const [isClicked, setIsClicked] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isClicked) {
      generatePDF();
    }
  }, [isClicked]);

  const generatePDF = async () => {
    try {
      const queryParameter = searchParams.get("rollNo");
      const response = await axios.post("/api/pdfmaker", {
        data: queryParameter,
      });

      const htmlContent = Document(response.data);
      const contentElement = document.createElement("div");
      contentElement.innerHTML = htmlContent;

      const pdfOptions = {
        margin: 0,
        filename: "my-admit-card.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      if (typeof window !== "undefined") {
        const html2pdf = require("html2pdf.js");
        html2pdf().from(contentElement).set(pdfOptions).save();
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsClicked(false);
    }
  };

  const handleDownloadClick = () => {
    setIsClicked(true);
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
          <button
            className={styles.downloadButton}
            onClick={handleDownloadClick}
            disabled={isClicked}
          >
            {isClicked ? "Downloading..." : "Download"}
          </button>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Copyright@Careerpoint. All rights reserved</p>
      </footer>
    </>
  );
};

export default PdFDownload;
