import { Post, User } from "./models";
import { connectToDb } from "./utils"
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
    try {
        await connectToDb();
        const posts = await Post.find();
        //console.log("Fetched posts:", posts); // See what data is being returned
        return posts;
    } catch (err) {
        console.log("Error fetching posts:", err);
        throw err;
    }
}

export const getPost = async (slug) => {
    try {
        await connectToDb();
        const post = await Post.findOne({ slug }); // Changed from find() to findOne()
        //console.log("Found post:", post); // Debug log
        if (!post) {
            throw new Error("Post not found");
        }
        return post;
    } catch (err) {
        console.log("Error fetching post:", err);
        throw err;
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        await connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
        
        
    }
};

export const getUsers = async () => {
    try {
        await connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");       
    }
};

