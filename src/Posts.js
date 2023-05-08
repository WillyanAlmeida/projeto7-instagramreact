import Post from "./Post"

let postdata =[{userpost:{imagem:"assets/img/reservadedopamina.jpg", alt:"reservatoriodedopamina", user:"reservatoriodedopamina"}, 
postconteudo:{imagem:"assets/img/RD.jpg", alt:"rd"},
postcurtida:[{imagem:"assets/img/respondeai.svg", alt:"respondeai", user:"barked", curtidas:98}]},

{userpost:{imagem:"assets/img/barked.svg", alt:"barked", user:"barked"}, 
postconteudo:{imagem:"assets/img/dog.svg", alt:"dog"},
postcurtida:[{imagem:"assets/img/adorable_animals.svg", alt:"adorable_animals", user:"meowed", curtidas:99}]},

{userpost:{imagem:"assets/img/meowed.svg", alt:"meowed", user:"meowed"}, 
postconteudo:{imagem:"assets/img/gato-telefone.svg", alt:"gato-telefone"},
postcurtida:[{imagem:"assets/img/9gag.svg", alt:"9gag", user:"9gag", curtidas:101}]}

]

export default function Posts() {
    return (
        <div className="posts">
             {postdata.map((post) => <Post key={post.userpost.imagem} Postsdata={post} />)}
        </div>)
     
}