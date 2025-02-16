
import { NextRequest, NextResponse } from "next/server";


export const POST = async function POST(req: NextRequest) {
    const { userId, eventData } = await req.json();

    if (!userId || !eventData) {
        return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }





    return NextResponse.json({ message: "Subscription updated successfully" }, { status: 200 });



};