import styles from "./postUser.module.css"
import { getUser } from "@/lib/data";
import Image from "next/image"
// With API
// const getData = async (userId) => {
//     const res = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)

//     if(!res.ok) {
//         throw new Error ("Something went wrong")
//     }

//     return res.json()
// }

const PostUser = async ({userId}) => {

    // With API
    // const user = await getData(userId);

    // Without API
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <Image 
                src={user.img ? user.img : "/noavatar.png"}
                alt=""
                width={50}
                height={50} 
                className={styles.avatar}
            />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    )
}

export default PostUser