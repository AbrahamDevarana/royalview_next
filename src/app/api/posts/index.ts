import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export default async function handler(req: NextRequest, res: NextResponse) {
    try {
        const { method } = req;

        if (method === "GET") {
            const posts = await prisma.post.findMany({
                where: {
                    published: true,
                },
            });
            return NextResponse.json(posts);
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
