
const jogos = ["Minecraft", "Tetris", "FIFA", "Valorant", "GTA V"];


const temMinecraft = jogos.includes("Minecraft");


if (temMinecraft) {
  console.log("O jogo Minecraft está na lista!");
} else {
  console.log("O jogo Minecraft não foi encontrado na lista.");
}