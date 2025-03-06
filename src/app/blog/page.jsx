// Modified BlogPage
import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

const getData = async () => {
    const res = await fetch ("http://localhost:3000/api/blog", {next: {revalidate:3600}});

    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
};

const BlogPage = async () => {

    const posts = await getData();

    return (
                <div className={styles.container}>
                    {posts.map((post) => (
                        <div className={styles.post} key={post._id}>
                            <PostCard post={post}/>
                        </div>
                    ))}
                </div>
    );

    // try {
    //     const posts = await getPosts();
        
    //     // const posts = await getData();
    //     console.log("Posts in BlogPage:", posts); // Debug what reaches the component
        
    //     if (!posts || posts.length === 0) {
    //         return (
    //             <div className={styles.container}>
    //                 <h2>No posts found</h2>
    //             </div>
    //         );
    //     }

    //     return (
    //         <div className={styles.container}>
    //             {posts.map((post) => (
    //                 <div className={styles.post} key={post._id}>
    //                     <PostCard post={post}/>
    //                 </div>
    //             ))}
    //         </div>
    //     );
    // } catch (error) {
    //     console.error("Error in BlogPage:", error);
    //     return (
    //         <div className={styles.container}>
    //             <h2>Error loading blog posts</h2>
    //             <p>{error.message}</p>
    //         </div>
    //     );
    // }
};

export default BlogPage;