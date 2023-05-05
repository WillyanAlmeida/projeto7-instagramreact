import { useState } from "react"
export default function User(){
   
    let [Nome, setNome] = useState('catanacomics')
    let [Foto, setFoto] = useState("assets/img/catanacomics.svg")

    function mudarnome() {
        Nome = prompt('diga seu nome')
        Nome != '' ? setNome(Nome) : Nome = prompt('Diga seu nome')
    }

    function mudarfoto() {
        Foto = prompt('cole link da imagem')
        Foto != '' ? setFoto(Foto) : Foto = prompt('cole link da imagem')
    }
   
    return(
        <div class="usuario">
        <img onClick={mudarfoto} src={Foto} alt="imagem de perfil" />
        <div class="texto">
            <span>
                <strong>{Nome}</strong>
                <ion-icon onClick={mudarnome} name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}