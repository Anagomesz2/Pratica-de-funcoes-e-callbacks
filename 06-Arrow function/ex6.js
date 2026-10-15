function processarNumero(numero, callback) {
  callback(numero);
}

processarNumero(5, num => console.log(`O triplo de ${num} é ${num * 3}`));
processarNumero(12, num => console.log(`O triplo de ${num} é ${num * 3}`));
processarNumero(20, num => console.log(`O triplo de ${num} é ${num * 3}`));