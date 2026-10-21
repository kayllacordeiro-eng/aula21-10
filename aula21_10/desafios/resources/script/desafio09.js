
const notas = [7.5, 8.0, 4.5, 6.0, 9.0, 5.5];


const temRecuperacao = notas.some(nota => nota < 5);

if (temRecuperacao) {
  console.log("Existe pelo menos um aluno que precisa de recuperação.");
} else {
  console.log("Nenhum aluno possui nota abaixo de 5.");
}