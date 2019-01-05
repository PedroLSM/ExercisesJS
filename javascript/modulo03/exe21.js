console.log("Exercicio 21");
console.log("---");

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];

const moviesFiltered = FiltrarFilmes(movies);
console.log(moviesFiltered)

function FiltrarFilmes(movies){
    const moviesCopied = [...movies];

    const output = moviesCopied
                    .filter(movie => movie.year === 2018 && movie.rating >=  4)
                    .sort((m1, m2) => m2.rating - m1.rating)
                    .map(movie => movie.title)
                    .join("\n");

    return output;
}

console.log("");

/*
(SORT)
A  >   B   => -1
B  >   A   =>  1
B ===  A   =>  0
*/