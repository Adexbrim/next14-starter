import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { slug } = params;
    
    try {
        await connectToDb();

        const post = await Post.findOne({ slug });
        return NextResponse.json(post);
    } catch (err) {
       console.log(err);
       throw new Error("Failed to fetch post");
    }
}

export const DELETE = async (request, { params }) => {

    const { slug } = params;
    
    try {
        await connectToDb();

        await Post.deleteOne({ slug });
        return NextResponse.json("Post deleted");
    } catch (err) {
       console.log(err);
       throw new Error("Failed to fetch post!");
    }
}