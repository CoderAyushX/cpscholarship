import { connectionStr } from "@/app/database/dbconnect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Students } from "@/app/database/module/scholarshipForm";

// Connect to MongoDB once when the application starts
mongoose
  .connect(connectionStr)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Error connecting to MongoDB:", e));

export async function GET() {
  try {
    const data = await Students.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error("Internal server error");
  }
}

const isDataAlreadyExists = async (firstName, fathersName, mobileNo) => {
  try {
    const existingDocument = await Students.findOne({ firstName, fathersName, mobileNo });
    return existingDocument !== null;
  } catch (error) {
    console.error("Error checking data:", error);
    return false;
  }
};

export async function POST(req) {
  const response = await req.json();
  const { firstName, fathersName, mobileNo} = response.data;
  const dataAlreadyExists = await isDataAlreadyExists(firstName,fathersName,mobileNo);
  

  if (dataAlreadyExists) {
    return NextResponse.json(
      { message: "pehle se hai bsdk." },
      { status: 200 }
    );
  }
  try {
    const generatedRollNo = generateRollNo(response.data);
    const studentData = {
      ...response.data,
      rollNo: generatedRollNo,
    };

    const newStudent = new Students(studentData);
    await newStudent.save();

    return NextResponse.json(
      studentData,
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating student record:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

//* Function to generate rollNo (replace this with your logic)
const generateRollNo = (data) => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const randomNo = Math.floor(Math.random() * 100000);
  const firstNameInitials = data.firstName.slice(0, 2);
  const fatherNameInitials = data.fathersName.slice(0, 2);
  return `${fatherNameInitials}${day}${randomNo}${firstNameInitials}`;
};


