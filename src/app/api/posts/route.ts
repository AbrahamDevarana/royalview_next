export const dynamic = 'force-dynamic' // defaults to auto

import {  NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { type NextRequest } from 'next/server'
import { getServerSession } from "next-auth/next"
import authOptions from "@/libs/options";


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

export async function POST(request: NextRequest) {
    
    const session = await getServerSession(authOptions);
    const data =  await request.json()
    
    try {

       if(session && session.user && session.user.email) {


            const author = await prisma.user.findUnique({
                where: {
                    email: session.user.email
                }
            });

            if(!author) return NextResponse.json({message: 'No autorizado'}, {status: 401});
            
            const post = await prisma.post.create({
                data: {
                    title: data.title,
                    subtitle: data.subtitle,
                    porttrait: data.porttrait,
                    content: data.content,
                    published: data.published,
                    urlSlug: data.urlSlug,
                    metaDescription: data.metaDescription,
                    metaKeywords: data.metaKeywords,
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