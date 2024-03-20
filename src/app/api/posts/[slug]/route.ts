export const dynamic = 'force-dynamic' // defaults to auto
export const revalidate = 86400

import {  NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { NextRequest  } from 'next/server'
import { deleteFile, uploadFile } from "@/service/files";



export async function GET(request: NextRequest, { params }: {params: {slug: string}}) {   
    const { slug } = params;

    const includeAll = request.nextUrl.searchParams.get('includeAll');
    
    try {
        const post = await prisma.post.findFirst({
            where: {
                published: !includeAll ? true : undefined,
                urlSlug: slug,
                deleted: false
                
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
    const formData = await request.formData()

    const file = formData.get('porttrait') as unknown as File
    const data = {
        title: formData.get('title'),
        subtitle: formData.get('subtitle'),
        content: formData.get('content'),
        published: formData.get('published'),
        urlSlug: formData.get('urlSlug'),
        metaDescription: formData.get('metaDescription'),
        metaKeywords: formData.get('metaKeywords'),
    }
    
    try {

        const findPost = await prisma.post.findFirst({
            where: {
                id: Number(id),
            },
        });

        let porttrait = findPost?.porttrait

        if(file && typeof file !== 'string') {
            if(porttrait) {
                await deleteFile({fileName: porttrait, folder: 'posts'})
            }
            porttrait = await uploadFile({file: file, folder: 'posts'})
        }    

        const post = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                title: data.title as string,
                subtitle: data.subtitle as string,
                content: data.content as string,
                published: data.published === 'true' ? true : false,
                urlSlug: data.urlSlug as string,
                metaDescription: data.metaDescription as string,
                metaKeywords: data.metaKeywords as string,
                porttrait: porttrait as string,
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
        const post = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                deleted: true,
            },
        });
        return NextResponse.json(post);        
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}