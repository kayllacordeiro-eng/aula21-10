
const nomes = [
  "Mariana",
  "Carlos",
  "Beatriz",
  "Guilherme",
  "Ana",
  "Diogo"
];

console.log("--- Lista Original (fora de ordem) ---");
console.log([...nomes]);

nomes.sort();

console.log("\n--- Lista Ordenada (ordem alfabética) ---");
console.log(nomes);