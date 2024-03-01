import {  NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: {params: {slug: string}}) {   
    const { slug } = params;
    try {
        const post = await prisma.post.findFirst({
            where: {
                published: true,
                urlSlug: slug,
            },
        });
        return NextResponse.json(post);        
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
