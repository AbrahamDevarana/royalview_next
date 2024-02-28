import {  NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, {slug}: {slug: string}) {    
    try {
        const posts = await prisma.post.findMany({
            where: {
                published: true,
                urlSlug: slug,
            },
        });
        return NextResponse.json({posts});        
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
