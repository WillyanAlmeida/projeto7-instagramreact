import { useState } from "react";

export default function Post(props) {
    let datapost = props.Postsdata;
    let [curtida, setCurtida] = useState('heart-outline');
    let [salve, setSalve] = useState('bookmark-outline');
    let [curt, setCurt] = useState(datapost.postcurtida[0].curtidas);
    let [heart, setHeart] = useState('');

    function curtiuimg() {
        if (curtida === 'heart-outline') {
            setCurtida('heart-sharp')
            setCurt(curt + 1)
            setHeart('redheart')
        }
    }
    function curtiuicon() {
        if (curtida === 'heart-outline') {
            setCurtida('heart-sharp')
            setHeart('redheart')
            setCurt(curt + 1)
        } else {
            setCurtida('heart-outline')
            setCurt(curt - 1)
            setHeart('')
        }
    }

    return (
        <div data-test="post" className="post">
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
                <img data-test="post-image" onDoubleClick={curtiuimg} src={datapost.postconteudo.imagem} alt={datapost.postconteudo.alt} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                       <span className={heart}><ion-icon data-test="like-post" onClick={curtiuicon} name={curtida}></ion-icon></span>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={() => salve !== 'bookmark-outline' ? setSalve('bookmark-outline') : setSalve('bookmark-sharp')} name={salve}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={datapost.postcurtida[0].imagem} alt={datapost.postcurtida[0].alt} />
                    <div className="texto">
                        Curtido por <strong>{datapost.postcurtida[0].user}</strong> e <strong data-test="likes-number">outras {curt} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}