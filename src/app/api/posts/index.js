import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export default async function handler(req, res) {
    try {
        const { method } = req;

        if (method === "GET") {
            const posts = await prisma.post.findMany({
                where: {
                    published: true,
                },
            });
            return res.status(200).json(posts);
        }
    } catch (error) {
        console.error("Error:", error);
        return res
            .status(500)
            .json({ error: error.message || error.toString() });
    }
}
