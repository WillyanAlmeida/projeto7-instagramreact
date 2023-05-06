export default function Story(props) {
    const { imagem, alt, user} = props.Story
    return (
        <div className="story">
            <div className="imagem">
                <img src={imagem} alt={alt} />
            </div>
            <div className="usuario">
                {user}
            </div>
        </div>
    )
}