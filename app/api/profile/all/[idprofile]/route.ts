import { db } from "@/lib/db";
import { get } from "http";
import { NextRequest, NextResponse } from "next/server";
export async function GET(res: NextRequest, { params }: any) {

  
    const getData = await db.profile.findFirst({
      where: {
        userId: params.idprofile,
      },
      include: { user: true,  },
    });
    return NextResponse.json(getData);
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
  