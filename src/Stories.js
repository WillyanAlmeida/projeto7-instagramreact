import Story from "./Story"
let storydata = [{ imagem: "assets/img/9gag.svg", alt: "9gag", user: "9gag" },
{ imagem: "assets/img/meowed.svg", alt: "meowed", user: "meowed" },
{ imagem: "assets/img/barked.svg", alt: "barked", user: "barked" },
{ imagem: "assets/img/nathanwpylestrangeplanet.svg", alt: "nathanwpylestrangeplanet", user: "nathanwpylestrangeplanet" },
{ imagem: "assets/img/wawawicomics.svg", alt: "wawawicomics", user: "wawawicomics" },
{ imagem: "assets/img/respondeai.svg", alt: "respondeai", user: "respondeai" },
{ imagem: "assets/img/filomoderna.svg", alt: "filomoderna", user: "filomoderna" },
{ imagem: "assets/img/memeriagourmet.svg", alt: "memeriagourmet", user: "memeriagourmet" }]

export default function Stories() {
    return (
        <div className="stories">

            {storydata.map((story) => <Story key={story.imagem} Story={story} />)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}