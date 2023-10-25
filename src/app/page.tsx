export default function Home() {
    // const hello = await api.post.hello.query({ text: "from tRPC" });

    return (
        <main className="flex flex-grow items-center justify-center">
            <div className="">
                <h1 className="text-8xl font-bold">{"Hello, I'm Emil"} </h1>
                <h1 className="text-6xl ">{"a Full-stack developer"}</h1>
            </div>
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
