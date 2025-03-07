import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectToDb();

        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (err) {
       console.log(err);
       throw new Error("Failed to fetch posts");
    }
}