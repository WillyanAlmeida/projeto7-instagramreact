import SideBar from "./SideBar";

export default function Body() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <div class="story">
                        <div class="imagem">
                            <img src="assets/img/9gag.svg" alt="9gag" />
                        </div>
                        <div class="usuario">
                            9gag
                        </div>
                    </div>

                    <div class="story">
                        <div class="imagem">
                            <img src="assets/img/meowed.svg" alt="meowed" />
                        </div>
                        <div class="usuario">
                            meowed
                        </div>
                    </div>

                    <div class="story">
                        <div class="imagem">
                            <img src="assets/img/barked.svg" alt="barked" />
                        </div>
                        <div class="usuario">
                            barked
                        </div>
                    </div>

                    <div class="story">
                        <div class="imagem">
                            <img src="assets/img/nathanwpylestrangeplanet.svg" alt="nathanwpylestrangeplanet" />
                        </div>
                        <div class="usuario">
                            nathanwpylestrangeplanet
                        </div>
                    </div>

                    <div class="story">
                        <div class="imagem">
                            <img src="assets/img/wawawicomics.svg" alt="wawawicomics" />
                        </div>
                        <div class="usuario">
                            wawawicomics
                        </div>
                    </div>

                    <div class="story">
                        <div class="imagem">
                            <img src="assets/img/respondeai.svg" alt="respondeai" />
                        </div>
                        <div class="usuario">
                            respondeai
                        </div>
                    </div>

                    <div class="story">
                        <div class="imagem">
                            <img src="assets/img/filomoderna.svg" alt="filomoderna" />
                        </div>
                        <div class="usuario">
                            filomoderna
                        </div>
                    </div>

                    <div class="story">
                        <div class="imagem">
                            <img src="assets/img/memeriagourmet.svg" alt="memeriagourmet" />
                        </div>
                        <div class="usuario">
                            memeriagourmet
                        </div>
                    </div>

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src="assets/img/meowed.svg" alt="meowed" />
                                meowed
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img src="assets/img/gato-telefone.svg" alt="gato-telefone" />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src="assets/img/respondeai.svg" alt="respondeai" />
                                <div class="texto">
                                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src="assets/img/barked.svg" alt="barked" />
                                barked
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img src="assets/img/dog.svg" alt="dog" />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
                                <div class="texto">
                                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SideBar />


        </div>

    );
}