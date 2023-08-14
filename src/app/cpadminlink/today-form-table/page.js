"use client";

import React, { useState, useEffect, useRef } from "react";
import adminstyles from "@/app/style/admin.module.css"
import styles from "@/app/style/home.module.css";
import Header from "@/app/components/Header";
import axios from "axios";
import Link from "next/link";
const Formdata = () => {
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    // Fetch data from an API or source
    // For the sake of example, we're using mock data here
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/studentform/todayform");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderTableHeader = () => {
    if (data.length === 0) return null;
    const headers = Object.keys(data[0]);
    return headers.map((header, index) => <th key={index}>{header}</th>);
  };

  function parseAndFormatDate(dateString) {
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  
    if (typeof dateString === 'string' && dateFormatRegex.test(dateString)) {
      const dateObject = new Date(dateString);
      
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Asia/Kolkata'
      };
  
      return dateObject.toLocaleDateString('en-IN', options);
    } else {
      return dateString;
    }
  }

  const renderTableData = () => {
    return data.map((item, index) => (
      <tr key={index}>
        <td key={index}>{data.length - index}</td>
        {Object.values(item).map((value, index) => (
          <td key={index}>{parseAndFormatDate(value)}</td>
        ))}
      </tr>
    ));
  };


  return (
    <>
      <Header />
      <div className={adminstyles.textAndButton}>
      <div className={adminstyles.howto_head_box}>
        <h2>Today Student Form Data</h2>
      </div>
      <Link href={"form-table"}  className={adminstyles.downloadButton}>
          view full data
        </Link>
      </div>
      
      <div className={styles.question_break_box}>
        {data.length > 0 ? (
          <table className={styles.question_break}>
            <thead>
              <tr>
                <th>No.</th>
                {renderTableHeader()}
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
        ) : (
          <p>No form submited today (loding)...</p>
        )}
      </div>
    </>
  );
};

export default Formdata;
