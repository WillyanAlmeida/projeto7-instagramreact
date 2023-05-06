
export default function Suggestion(props){
    const {imagem, alt, nome, razao} = props.sugestion
    return(
        <div className="sugestao">
        <div className="usuario">
            <img src={imagem} alt={alt} />
            <div className="texto">
                <div className="nome">{nome}</div>
                <div className="razao">{razao}</div>
            </div>
        </div>
        <div className="seguir">Seguir</div>
    </div>
    )
}