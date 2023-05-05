import ReactDOM from "react-dom";

export default function Sugestion(props){
    return(
        <div class="sugestao">
        <div class="usuario">
            <img src={props.sugestion.imagem} alt={props.sugestion.alt} />
            <div class="texto">
                <div class="nome">{props.sugestion.nome}</div>
                <div class="razao">{props.sugestion.razao}</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>

    )
}