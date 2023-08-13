import { connectionStr } from "@/app/database/dbconnect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Students } from "@/app/database/module/scholarshipForm";


mongoose
  .connect(connectionStr)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Error connecting to MongoDB:", e));

export async function POST(req) {
  const response = await req.json();
  let studentData = await Students.findOne({ rollNo: response.data });

  console.log(studentData)
  return NextResponse.json(studentData);
}
