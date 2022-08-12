import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import {useEffect, useState} from "react";
import {useUser} from "@auth0/nextjs-auth0";

const Artigos = () => {
    const {user, error, isLoading} = useUser();

    const [input, setInput] = useState("");
    const [artigos, setArtigos] = useState<any[]>([]);

    useEffect(() => {
        //change fetch to axios
        // https://lexinode.vercel.app/api/dataset
        // http://localhost:3000/api/dataset
        fetch("https://lexinode.vercel.app/api/dataset")
            .then((res) => res.json())
            .then((data) => setArtigos(data.nodes));
        return () => {
            setArtigos([]);
        };
    }, []);

    function toggleFavorite(id: string) {
        // Precisa da rota de favoritos no backend
    }

    return (
        <>
            <NavBar />
            <main className="p-4 ">
                <div className="flex row w-full justify-around p-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="block p-4 mx-2 pl-10 w-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Pesquiar artigos"
                    />
                    <select className="bg-gray-50 border w-1/5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Filtar por</option>
                    </select>
                </div>

                <ul className="p-4">
                    {artigos.map(
                        (artigo) =>
                            artigo.label.toLowerCase().includes(input) && (
                                <li key={artigo.id} className="flex row justify-between m-2 bg-white drop-shadow-lg p-2 rounded">
                                    <div className="flex flex-col w-full p-4">
                                        <a href={artigo.URL} className=" font-bold ">
                                            {artigo.label}
                                        </a>
                                        <span className="text-slate-600 "> NOME AUTOR</span>

                                        <div className="bg-slate-100 my-2 p-2 rounded w-2/4">TAGS E MAIS DETALHES</div>
                                    </div>

                                    {user && <button className="text-xl p-2">{artigo.favorite ? <AiFillStar /> : <AiOutlineStar />}</button>}
                                </li>
                            )
                    )}
                </ul>
            </main>

            <Footer />
        </>
    );
};
export default Artigos;
