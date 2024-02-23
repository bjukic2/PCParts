import { Proizvod } from "../page";

interface Params{
    proizvodId: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPost = async (id: string): Promise<Proizvod> => {
    const data = await fetch(`${BASE_API_URL}/posts/${id}`);
    return data.json();
};

export default async function ProizvodPost({ params }: { params: Params }) {
    const proizvod = await getPost(params.proizvodId);

    return(
        <main className="flex min-h-screen flex-col items-center p-10">
            <h1 className ="text-3xl font-bold p-10 capitalize">
                <span className="text-neutral-400">Proizvod #{proizvod.id}: {proizvod.title}</span>
            </h1>
            <p className="text-xl p-10">{proizvod.body}</p>
        </main>
    );
}