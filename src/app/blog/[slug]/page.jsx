import PostUser from "@/components/postUser/postUser"
import styles from "./singlePost.module.css"
import Image from "next/image"
import { Suspense } from "react"

import { getPost } from "@/lib/data";

const getData = async (slug) => {
    const res = await fetch (`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
};

export const generateMetadata = async ({params}) => {
    try {
        const {slug} = params;
        const post = await getPost(slug);
        
        if (!post) {
            return {
                title: "Post Not Found",
                description: "The requested post could not be found"
            };
        }

        return {
            title: post.title,
            description: post.desc
        };
    } catch (error) {
        return {
            title: "Error",
            description: "Error loading post"
        };
    }
}


const SinglePostPage = async ({params}) => {
    try {
        const {slug} = params;
        // const post = await getPost(slug);
        const post = await getData(slug);
        
        if (!post) {
            return (
                <div className={styles.container}>
                    <h1>Post not found</h1>
                </div>
            );
        }

        return (
            <div className={styles.container}>
                {post.img && (
                    <div className={styles.imgContainer}>
                        <Image 
                            src={post.img || "/post-images/postimg2.jpg"}
                            alt=""
                            fill 
                            className={styles.img}
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.detail}>
                        {/* {post.img && (
                            <Image 
                                src={post.img || "/post-images/postimg2.jpg"}
                                alt=""
                                width={50}
                                height={50} 
                                className={styles.avatar}
                            />
                        )} */}
                        {post && (
                            <Suspense fallback={<div>Loading....</div>}>
                                <PostUser userId={post.userId}/>
                            </Suspense>
                        )}
                        <div className={styles.detailText}>
                            <span className={styles.detailPublished}>Published</span>
                            <span className={styles.detailDate}>
                                {new Date(post.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {post.desc}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error in SinglePostPage:", error);
        return (
            <div className={styles.container}>
                <h1>Error loading post</h1>
                <p>{error.message}</p>
            </div>
        );
    }
}

export default SinglePostPage