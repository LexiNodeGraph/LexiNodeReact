import Link from "next/link";
import Image from "next/image";

import {BsDot} from "react-icons/bs";

function UserCard({user}: any) {
    return (
        <div className="w-full max-w-sm bg-white rounded-lg border border-neutral-200 shadow-md dark:bg-neutral-800 dark:border-neutral-700">
            <div className="flex flex-col items-center pt-4 pb-10">
                <Image
                    className="rounded-full md:w-96 "
                    src={
                        user?.picture ||
                        "https://imgs.search.brave.com/95uqrX0sPNStAH-hNb9IC1Dq-eZQGRKKEUFV6PMDY_U/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5k/cm9kZC5jb20vaW1h/Z2VzMTQvd2hpdGUx/LmpwZw"
                    }
                    alt={user?.name || "Não encontrado"}
                    width="130"
                    height="130"
                />
                <span className="flex flex-col items-left m-4">
                    <h5 className=" text-xl font-bold text-neutral-900 dark:text-white">{user.name}</h5>
                    <span className="inline-flex items-center gap-1">
                        <span className="text-sm mb-2 text-neutral-500 dark:text-neutral-400">@{user.nickname}</span>
                        <BsDot className="text-sm mb-2 text-neutral-500 dark:text-neutral-400" />
                        <span className="text-sm mb-2 text-neutral-500 dark:text-neutral-400">
                            {user?.email?.includes("@ifc.edu.br") ? "Autor" : "Usuário"}
                        </span>
                    </span>

                    <p className="mb-4 text-sm font-light  dark:text-white">
                        Ta ficando potente essa pagina pprt ta lindao. Alias faz ai a rota pra peguar todas essa informções do usuário
                    </p>

                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <button className=" w-full  items-center py-2 px-4 text-sm font-medium text-center text-neutral-600 border-2 rounded-lg focus:ring-4 focus:outline-none dark:border-neutral-500 dark:text-neutral-400">
                            Editar Perfil
                        </button>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default UserCard;
