import connectToDb from "./utils";
import { Post } from "./models"

export const addPost = async (formData) => {
    "use server";

    // const title = formData.get("title"); 
    // const desc = formData.get("desc"); 
    // const slug = formData.get("slug"); 

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        await connectToDb();
        const newPost = new Post ({
            title,
            desc,
            slug,
            userId
        });

        await newPost.save();
        console.log("saved to db");
        
    } catch (err) {
        console.log(err);
        return { error: "Somthing went wrong"}
        
    }

    console.log(title, desc, slug, userId);    
}