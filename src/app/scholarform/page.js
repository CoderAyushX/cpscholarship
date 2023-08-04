"use client";

import React, { useState } from "react";
import styles from "@/app/style/form.module.css";

const Scholarform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fathersName: "",
    age: "",
    mobileNo: "",
    email: "",
    selectedClass: "",
    previousClassMarks: "",
    selectedTestDate: "",
    selectedTimeSlot: "",
    selectedScholarship: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className={styles.scholar_head}>
        <h2>Scholarship Form 2023</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.entry_box}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.entry_box}>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label>
            Father&apos;s Name:
            <input
              type="text"
              name="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.entry_box}>
          <label>
            Mobile No:
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.entry_box}>
          <label>
            Class:
            <select
              name="selectedClass"
              value={formData.selectedClass}
              onChange={handleChange}
            >
              <option value="">Select Class</option>
              <option value="Class VIth">Class VIth</option>
              <option value="Class VIIth">Class VIIth</option>
              <option value="Class VIIItH">Class VIIIth</option>
              <option value="Class IXth">Class IXth</option>
              <option value="Class Xth">Class Xth</option>
              <option value="Class XIth">Class XIth</option>
              <option value="Class XIIth">Class XIIth</option>
            </select>
          </label>

          <label>
            Previous Class Marks:
            <select
              name="previousClassMarks"
              value={formData.previousClassMarks}
              onChange={handleChange}
            >
              <option value="">Select Marks</option>
              <option value="90-100%">90-100%</option>
              <option value="80-90%">80-90%</option>
              <option value="70-80%">70-80%</option>
              <option value="60-70%">60-70%</option>
              <option value=">60%">below 60%</option>
              
            </select>
          </label>
        </div>
        <div className={styles.entry_box}>
          <label>
            Test Date:
            <select
              name="selectedTestDate"
              value={formData.selectedTestDate}
              onChange={handleChange}
            >
              <option value="">Select Test Date</option>
              <option value="2023-08-10">August 10, 2023</option>
              <option value="2023-08-15">August 15, 2023</option>
              <option value="2023-08-20">August 20, 2023</option>
            </select>
          </label>

          <label>
            Time Slot:
            <select
              name="selectedTimeSlot"
              value={formData.selectedTimeSlot}
              onChange={handleChange}
            >
              <option value="">Select Time Slot</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
            </select>
          </label>
        </div>
        <div className={styles.entry_box}>
          <label>
            Scholarship For:
            <select
              name="selectedScholarship"
              value={formData.selectedScholarship}
              onChange={handleChange}
            >
              <option value="">Select Scholarship</option>
              <option value="Below 10th class">Below class 10th</option>
              <option value="NEET">NEET</option>
              <option value="JEE">JEE</option>
            </select>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Scholarform;
