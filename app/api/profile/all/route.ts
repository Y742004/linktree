import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await auth()

const toRead = await db.profile.findMany({
  
 });
 console.log(session)
return NextResponse.json(toRead);
}
 
 

 