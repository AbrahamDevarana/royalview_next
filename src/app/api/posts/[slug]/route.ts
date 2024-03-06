export const dynamic = 'force-dynamic' // defaults to auto

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

export async function PUT(request: NextRequest, { params }: {params: {slug: number}}) {
    const { slug: id } = params;
    const data =  await request.json()
    
    try {
        const post = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                title: data.title,
                subtitle: data.subtitle,
                porttrait: data.porttrait,
                content: data.content,
                published: data.published,
                urlSlug: data.urlSlug,
                metaDescription: data.metaDescription,
                metaKeywords: data.metaKeywords,
            },
        });
        return NextResponse.json(post);        
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: {params: {slug: number}}) {
    const { slug: id } = params;
    try {
        const post = await prisma.post.delete({
            where: {
                id: Number(id),
            },
        });
        return NextResponse.json(post);        
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}