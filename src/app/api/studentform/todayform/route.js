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
    // Get the current date
    const currentDate = new Date();

    // Set the time to the beginning of the day
    currentDate.setHours(0, 0, 0, 0);

    // Set the time to the end of the day
    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999);

    // Find documents with a date field that falls within today
    const results = await Students.find({
        createdAt: {
        $gte: currentDate,
        $lte: endOfDay,
      },
    }, '-_id -__v -updatedAt');

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
