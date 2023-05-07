

export default function Post(props){
const datapost = props.Postsdata;


    return(
        <div className="post">
        <div className="topo">
            <div className="usuario">
                <img src={datapost.userpost.imagem} alt={datapost.userpost.alt} />
                {datapost.userpost.user}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img src={datapost.postconteudo.imagem} alt={datapost.postconteudo.alt} />
        </div>

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={datapost.postcurtida[0].imagem} alt={datapost.postcurtida[0].alt} />
                <div className="texto">
                    Curtido por <strong>{datapost.postcurtida[0].user}</strong> e <strong>outras {datapost.postcurtida[0].curtidas} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )
}