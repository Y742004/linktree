import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {

const toRead = await db.skills.findMany({
  include: {
    user: true,
  }
 });
return NextResponse.json(toRead);
}
 
 

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.skills.create({
    data: {
       name: wow.name,
      percent: wow.percent,
       image: wow.image,
       userId: wow.userId
    },
  });
  return NextResponse.json(toCreate);
}

export async function PUT(req: NextRequest  , res: NextResponse) {
  const wow = await req.json();
  const toUpdate = await db.skills.update({
      where: {
          id: wow.id,
      },
      data: {
        name: wow.name,
        percent: wow.percent,
         image: wow.image,
         userId: wow.userId
}})
  return NextResponse.json(toUpdate);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toDelete = await db.skills.delete({
    where: {
      id: wow.id,
    },
  });
  return NextResponse.json(toDelete);
}
