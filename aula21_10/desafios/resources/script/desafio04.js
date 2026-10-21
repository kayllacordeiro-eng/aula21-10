
const livros = ["O Alquimista","1984","Dom Casmurro","O Senhor dos Anéis","O Princepizinho"
];

const livroProcurado = "Dom Casmurro";[cite, 1]


const posicao = livros.indexOf(livroProcurado);


if (posicao === -1) {
  
  console.log(`O livro "{livroProcurado}" não foi encontrado.`);
} else {
  
  console.log(`O livro "{livroProcurado}" foi encontrado na posição (índice): {posicao}`);
}