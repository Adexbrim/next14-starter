import PostUser from "@/components/postUser/postUser"
import styles from "./singlePost.module.css"
import Image from "next/image"
import { Suspense } from "react"

import { getPost } from "@/lib/data";

// With API
// const getData = async (slug) => {
//     const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: "no-store"})

//     if(!res.ok) {
//         throw new Error ("Something went wrong")
//     }

//     return res.json()
// }

export const generateMetadata = async ({params}) => {
    const {slug} = params;
    
    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.desc
    };
}

const SinglePostPage = async ({params}) => {
    
    const {slug} = params;
    // With API
    // const post = await getData(slug);
    
    // Without API
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    src="/post-images/postimg2.jpg" 
                    alt=""
                    fill 
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    <Image 
                        src="/post-images/postimg2.jpg" 
                        alt=""
                        width={50}
                        height={50} 
                        className={styles.avatar}
                    />
                    {post && <Suspense fallback={<div>Loading....</div>}>
                        <PostUser userId={post.userId}/>
                    </Suspense>}
                    <div className={styles.detailText}>
                        <span className={styles.detailPublished}>Published</span>
                        <span className={styles.detailDate}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>

    )
}

export default SinglePostPage