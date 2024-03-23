import { prisma } from "@/libs/prisma";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


export async function GET (req: NextRequest) {
        
        const limit = req.nextUrl.searchParams.get('limit');
        const page = req.nextUrl.searchParams.get('page');

    try {
        const leads = await prisma.leads.findMany({
            take: limit ? Number(limit) : undefined,
            skip: page ? (Number(page) - 1) * Number(limit) : undefined,
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                deleted: false
            }
        });
        
       return NextResponse.json(leads);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
export async function POST (req: NextRequest) {    
    const data = await req.json();

    const { email, nombre: name, telefono:phone, mensaje: message, contacto:origin } = data;

    try {

        const lead = await prisma.leads.create({
            data: {
                email: email,
                name: name,
                phone,
                message,
                origin: origin,
                url_origin: req.headers.get('origin') || '',
            }
        });

        return NextResponse.json(lead);
        
    } catch (error) {

        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
        
    }

}

export async function DELETE (req: NextRequest) {    
    const { id } = await req.json();
    try {
        const lead = await prisma.leads.update({
            where: {
                id: Number(id)
            },
            data: {
                deleted: true
            }
        });

        return NextResponse.json(lead);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}