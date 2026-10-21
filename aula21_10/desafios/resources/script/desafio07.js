
let notas = [7.5, 10, -2, 8.5, 6.0];

console.log("Notas originais:", notas);


notas.forEach(nota => console.log("Nota:", nota));


let i = 0;
while (i < notas.length) {
  if (notas[i] < 0) {
    notas.splice(i, 1); 
  } else {
    i++;
  }
}


console.log("Tem nota 10?", notas.includes(10));


console.log("Posição da nota 7.5:", notas.indexOf(7.5));


notas.sort((a, b) => a - b);

console.log("Lista final ordenada:", notas);