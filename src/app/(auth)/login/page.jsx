import { signIn } from "@/lib/auth"

const LoginPage =  () => {

    const handleGithubLogin = async () => {
        "use server";
        // await signIn("github");

        try {
          await signIn("github");
        } catch (error) {
          console.error("GitHub sign-in error:", error);
        }
    };

    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
        </div>
    )
}

// const handleGithubLogin = async () => {
//   try {
//     await signIn("github");
//   } catch (error) {
//     console.error("GitHub sign-in error:", error);
//   }
// };


// import { githubSignIn } from "./auth"

// const LoginPage = () => {
//   return (
//     <div>
//       <form action={githubSignIn}>
//         <button>Login with Github</button>
//       </form>
//     </div>
//   )
// }

export default LoginPage;