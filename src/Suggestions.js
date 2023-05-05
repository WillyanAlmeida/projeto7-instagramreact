import ReactDOM from "react-dom";
import Sugestion from "./Suggestion"


let suggestionsdata = [{imagem:"assets/img/bad.vibes.memes.svg", alt:"bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você" },
{imagem:"assets/img/chibirdart.svg", alt:"chibirdart", nome:"chibirdart", razao:"Segue você" },
{imagem:"assets/img/razoesparaacreditar.svg", alt:"razoesparaacreditar", nome:"razoesparaacreditar", razao:"Novo no Instagram" },
{imagem:"assets/img/adorable_animals.svg", alt:"adorable_animals", nome:"adorable_animals", razao:"Segue você" },
{imagem:"assets/img/smallcutecats.svg", alt:"smallcutecats", nome:"smallcutecats", razao:"Segue você" },
]

export default function Suggestions(){
    return(
        <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {suggestionsdata.map((sugestion)=> <Sugestion sugestion={sugestion} />)}

            </div>
    )
}