import { useState } from "react"
export default function User() {

    let [Nome, setNome] = useState('catanacomics')
    let [Foto, setFoto] = useState("assets/img/catanacomics.svg")

    function mudarnome() {
        let nome1=Nome;
        Nome = prompt('diga seu nome')
        Nome !== '' ? setNome(Nome): setNome(nome1)
    }

    function mudarfoto() {
        let foto1=Foto;
        Foto = prompt('cole link da imagem')
        Foto !== '' ? setFoto(Foto) : setFoto(foto1)
    }

    return (
        <div className="usuario">
            <img data-test="profile-image" onClick={mudarfoto} src={Foto} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong data-test="name" >{Nome}</strong>
                    <ion-icon data-test="edit-name" onClick={mudarnome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}