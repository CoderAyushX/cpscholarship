"use client";

import React, { useState, useEffect, useRef } from "react";
import adminstyles from "@/app/style/admin.module.css";
import styles from "@/app/style/home.module.css";
import Header from "@/app/components/Header";
import axios from "axios";
const Formdata = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    // Fetch data from an API or source
    // For the sake of example, we're using mock data here
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/studentform");
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
    // Regular expression to match the date format
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

    if (typeof dateString === "string" && dateFormatRegex.test(dateString)) {
      const dateObject = new Date(dateString);

      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Asia/Kolkata",
      };

      return dateObject.toLocaleDateString("en-IN", options);
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

  const csvGenerator = () => {
    setIsClicked(true);
    const table = tableRef.current;
    const rows = table.querySelectorAll("tbody tr");

    let csvContent = "";

    // Adding headers
    const headers = Array.from(table.querySelectorAll("thead th")).map(
      (th) => th.textContent
    );
    csvContent += headers.join(",") + "\n";

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      const rowData = Array.from(cells).map((cell) => cell.textContent);
      csvContent += rowData.join(",") + "\n";
    });

    // Create a Blob object
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a download link
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", "table-data.csv");

    // Append the link to the document
    document.body.appendChild(link);

    // Click the link to trigger download
    link.click();

    // Clean up
    document.body.removeChild(link);
    setIsClicked(false);
  };
  return (
    <>
      <Header />
      <div className={adminstyles.textAndButton}>
        <div className={adminstyles.howto_head_box}>
          <h2>Student Form Data</h2>
        </div>
        {isClicked ? (
          <button onClick={csvGenerator} className={adminstyles.downloadButton}>
            downloading....
          </button>
        ) : (
          <button onClick={csvGenerator} className={adminstyles.downloadButton}>
            download csv
          </button>
        )}
      </div>

      <div className={styles.question_break_box}>
        {data.length > 0 ? (
          <table className={styles.question_break} ref={tableRef}>
            <thead>
              <tr>
                <th>No.</th>
                {renderTableHeader()}
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default Formdata;
