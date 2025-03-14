import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await auth()

const toRead = await db.profile.findFirst({
  where: {
    userId: session?.user?.id
  },
  include: {
    user: true,
  }
 });
 console.log(session)
return NextResponse.json(toRead);
}
 
 

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.profile.create({
    data: {
       username: wow.username,
       profilename: wow.profilename,
       coverPhoto: wow.coverPhoto,
       profilePhoto: wow.profilePhoto,
       userId: wow.userId
    },
  });
  return NextResponse.json(toCreate);
}

export async function PUT(req: NextRequest  , res: NextResponse) {
  const wow = await req.json();
  const toUpdate = await db.profile.update({
      where: {
          id: wow.id,
      },
      data: {
        username: wow.username,
       profilename: wow.profilename,
       coverPhoto: wow.coverPhoto,
       profilePhoto: wow.profilePhoto,
       userId: wow.userId
}})
  return NextResponse.json(toUpdate);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toDelete = await db.profile.delete({
    where: {
      id: wow.id,
    },
  });
  return NextResponse.json(toDelete);
}
