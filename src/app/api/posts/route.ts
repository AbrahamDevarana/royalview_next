export const dynamic = 'force-dynamic' // defaults to auto

import {  NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { type NextRequest } from 'next/server'
import { getServerSession } from "next-auth/next"
import authOptions from "@/libs/options";
import { uploadFile } from "@/service/files";


interface GetPostsProps {
    limit? : number;
}

// GET /api/posts - Get all posts
export async function GET(request: NextRequest) {

    const limit = request.nextUrl.searchParams.get('limit');
    const published = request.nextUrl.searchParams.get('published');


    try {
        const posts = await prisma.post.findMany({
            where: {
                published: published === 'true' ? true : undefined,
                deleted: false
            },
            take: limit ? Number(limit) : undefined,
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

// POST /api/posts - Create a new post
export async function POST(request: NextRequest) {
    
    const session = await getServerSession(authOptions);
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

       if(session && session.user && session.user.email) {

            const author = await prisma.user.findUnique({
                where: {
                    email: session.user.email
                }
            });

            let porttrait = '';

            if(!author) return NextResponse.json({message: 'No autorizado'}, {status: 401});

            if(file) {
                porttrait = await uploadFile({file: file, folder: 'posts'})
            }    
            
            const post = await prisma.post.create({
                data: {
                    title: data.title as string,
                    subtitle: data.subtitle as string,
                    content: data.content as string,
                    published: data.published === 'true' ? true : false,
                    urlSlug: data.urlSlug as string,
                    metaDescription: data.metaDescription as string,
                    metaKeywords: data.metaKeywords as string,
                    porttrait: porttrait as string,
                    author: {
                        connect: {
                            id: author.id
                        }
                    }
                }
            });
            return NextResponse.json(post);

       }else {
              return NextResponse.json({message: 'No autorizado'}, {status: 401});
        }
        

        

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}