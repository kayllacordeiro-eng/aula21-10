
const senhaCerta = "1234";
let senhaDigitada = "";
let tentativas = 0;


const minhasTentativas = ["0000", "5555", "1234"];

while (senhaDigitada !== senhaCerta && tentativas < 3) {
  senhaDigitada = minhasTentativas[tentativas];
  tentativas++;
}

if (senhaDigitada === senhaCerta) {
  console.log("Acesso liberado!");
} else {
  console.log("Acesso bloqueado!");
}