import { api } from "~/trpc/server";

export default async function Home() {
    // const hello = await api.post.hello.query({ text: "from tRPC" });

    return (
        <main className="bg-black">
            <h1 className="text-white">dawd</h1>
        </main>
    );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }