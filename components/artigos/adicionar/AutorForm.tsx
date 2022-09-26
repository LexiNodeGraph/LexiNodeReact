import {useState, useEffect} from "react";
import Tag from "../../Tag";
import Input from "./Input";
import Button from "../adicionar/Button";

function AutorForm({author, setAuthor, allAuthors, handleAddAuthor}: any) {
    function handleAuthorChange(e: any) {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="px-16">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="authors">
                Autor(es):
            </label>

            <div className="mt-2 rounded w-full inline-flex  flex-wrap gap-2">
                {allAuthors.map((author: any) => (
                    <Tag key={author.name} label={author.name} />
                ))}
            </div>

            <Input placeholder="Nome Completo" label="Nome Completo" type="text" name="name" value={author.name} onChange={(e: any) => handleAuthorChange(e)} />
            <Input label="Email" placeholder="Email" type="text" name="email" value={author.email} onChange={(e: any) => handleAuthorChange(e)} />
            <Input
                label="Autor principal/colaborador"
                placeholder="Autor"
                type="text"
                name="author_role"
                value={author.author_role}
                onChange={(e: any) => handleAuthorChange(e)}
            />
            <div className="flex sm:flex-row flex-col gap-2">
                <Input
                    width="sm:w-3/5 w-full"
                    label="Instituição"
                    placeholder="Instituição"
                    type="text"
                    name="institution"
                    value={author.institution}
                    onChange={(e: any) => handleAuthorChange(e)}
                />

                <Input
                    width="sm:w-2/5 w-full"
                    label="Área de atuação"
                    placeholder="Área de atuação"
                    type="text"
                    name="field"
                    value={author.field}
                    onChange={(e: any) => handleAuthorChange(e)}
                />
            </div>
            <div className="flex sm:flex-row flex-col gap-2 ">
                <Input label="Cidade" placeholder="Cidade" type="text" name="city" value={author.city} onChange={(e: any) => handleAuthorChange(e)} />

                <Input label="País" placeholder="País" type="text" name="country" value={author.country} onChange={(e: any) => handleAuthorChange(e)} />
            </div>
            <Button onClick={() => handleAddAuthor()}>Adicionar novo autor</Button>
        </div>
    );
}

export default AutorForm;
