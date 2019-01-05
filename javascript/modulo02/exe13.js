console.log("Exercicio 13");
console.log("---");


const postagem = new Post("Programando JS", "Olá Mundo", "Gustavo")
console.log(postagem);

function Post(title, mensagem, autor) {
    this.title = title;
    this.autor = autor;
    this.mensagem = mensagem;
    this.comentarios = [];
    this.views = 0;
    isLive = false;
    
}

console.log("");