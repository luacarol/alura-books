import Input from "../Input";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { livros } from './dadosPesquisa';
import { getLivros } from "../../servicos/livros";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const livrosAPI = getLivros()
        setLivros(livrosAPI)
    }, [livros])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura." 
                onBlur={e => {
                    const textoDigitado = e.target.value 
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }} 
            />
            {livrosPesquisados.map(livro => (
                <div>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt={livro.id} />
                </div>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;