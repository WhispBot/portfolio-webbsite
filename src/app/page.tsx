import Upload from "./_components/upload";

export default function Home() {
    return (
        <main className="flex flex-grow items-center justify-center">
            <Upload />
            <div className="">
                <h1 className="text-8xl font-bold">{"Hello, I'm Emil"} </h1>
                <h1 className="text-6xl ">{"a Full-stack developer"}</h1>
            </div>
        </main>
    );
}
