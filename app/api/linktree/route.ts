import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {

const toRead = await db.linktree.findMany({
//   include: {
//     user: true,
//   }
 });
return NextResponse.json(toRead);
}
 
 

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.linktree.create({
    data: {
       name: wow.name,
       url: wow.url,
    },
  });
  return NextResponse.json(toCreate);
}

export async function PUT(req: NextRequest  , res: NextResponse) {
  const wow = await req.json();
  const toUpdate = await db.linktree.update({
      where: {
          id: wow.id,
      },
      data: {
        name: wow.name,
        url: wow.url
}})
  return NextResponse.json(toUpdate);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toDelete = await db.linktree.delete({
    where: {
      id: wow.id,
    },
  });
  return NextResponse.json(toDelete);
}
