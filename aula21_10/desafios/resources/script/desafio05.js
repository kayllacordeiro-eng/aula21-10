
const tarefas = [
  "Estudar Matemática",
  "Ler capítulo de História",
  "Fazer trabalho de Programação",
  "Revisar Biologia",
  "Organizar a secretária"
];


console.log("--- Lista de Tarefas Inicial ---");
console.log(tarefas);

tarefas.splice(1, 1);

tarefas.splice(2, 1, "Fazer exercícios de Físico-Química");

console.log("\n--- Lista de Tarefas Atualizada ---");
console.log(tarefas);