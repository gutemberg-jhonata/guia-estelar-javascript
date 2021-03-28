// Manipulando Arrays

let techs = ["html", "css", "jsvascript"];

// adiciona um item no final do array
techs.push("nodejs");

// adiciona um item no inicio do array
techs.unshift("sql");

// remove um item do final do array
techs.pop();

// remover um item do inicio do array
techs.shift();

// pegar somente alguns elementos do array
techs.slice(1, 3);

// remover 1 ou mais items de qualquer posição do array
techs.splice(1, 2);

// encontra a posição de um elemento no array
const index = techs.indexOf("css");