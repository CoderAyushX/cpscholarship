import { connectionStr } from "@/app/database/dbconnect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Students } from "@/app/database/module/scholarshipForm";
import Document from "./document";
import { chromium } from 'playwright';
mongoose
  .connect(connectionStr)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Error connecting to MongoDB:", e));

export async function POST(req) {
  const response = await req.json();
  let studentData = await Students.findOne({ rollNo: response.data });

  const browser = await chromium.launch();

  const page = await browser.newPage();
  await page.setContent(Document(studentData));

  const pdfBuffer = await page.pdf({ format: "A4" });

  await browser.close();

  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: headers,
  });
}
