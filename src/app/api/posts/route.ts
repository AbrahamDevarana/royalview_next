export const dynamic = 'force-dynamic' // defaults to auto

import {  NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { type NextRequest } from 'next/server'

interface GetPostsProps {
    limit?: number;
}

export async function GET(request: NextRequest, { params }: { params : GetPostsProps}) {
    try {
        const posts = await prisma.post.findMany({
            where: {
                published: true,
            },
            take: params?.limit,
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(posts);        
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
