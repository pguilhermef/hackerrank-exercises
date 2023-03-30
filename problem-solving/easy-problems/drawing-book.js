// Here I receive as a parameter how many pages a given book has and which page it is open on. The challenge here is figuring out which direction I would have to do the fewest page turns.

// Aqui eu recebo por parâmetro quantas páginas tem um determinado livro e em qual página está aberto. O desafio aqui é descobrir em qual direção eu teria que fazer menos viradas de páginas.

function pageCount(n, p) {
    const maxTurnPage = Math.floor(n/2);
    const begginingToPage = Math.floor(p/2);
    const endToPage = maxTurnPage - begginingToPage;
    return begginingToPage < endToPage ? begginingToPage : endToPage;
}

console.log(pageCount(100, 6));