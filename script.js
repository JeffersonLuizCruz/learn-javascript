// Conceito de Mutável
console.log("Array Mutável");
const nota = [3, 4, 6]; // Por padrão esse array no javascript é mutável

const novaNota = nota;
novaNota.push(7);

console.log(novaNota);
console.log(nota);
console.log("------ FIM --------");
//FIM

// Conceito de IMUTÁVEL
console.log("Array Imutável");
const nota1 = [3, 4, 6]; // Por padrão esse array no javascript é mutável

const novaNota1 = [...nota1];
novaNota.push(7);

console.log(novaNota1);
console.log(nota1);
console.log("------ FIM --------");
//FIM

console.log("Conceito do uso de Spread Operation'...'")
const address = {
    street: "Cavalo Marinho",
    number: 31
}
const person = {
    name: "Jeff",
    ege: 31,
    ...address
}

console.log(person);
console.log("------ FIM --------");

console.log("Conceito do uso de Spread Operation com dois objetos");
const notaDisciplitaExata = {
    matematica:7,
    fisica:8,
    calculo:9
}

const notaDisciplitaHumana = {
    historia:6,
    portugues:7,
    redacao:5
}

// Uso de Spread Operation garante o conceito de imutabilidade
const totalDeNotas = {
    ...notaDisciplitaExata,
    ...notaDisciplitaHumana
}
notaDisciplitaHumana.geografia = 5; // Adiciona valor no objeto notaDisciplitaHumana
totalDeNotas.geografia = 7; // Adiciona valor no objeto totalDeNotas

console.log(totalDeNotas);
console.log("------ FIM --------");

console.log("Conceito do uso de DESTRUCTURING");

const usuario = {
    nome: "Jeff",
    idade: 31,
    cidade: "Recife",

    nome1: "Hugo",
    idade1:31,
    cidade1:"Porto"
}

//Uso tradicional para chamar as variáveis de instancia
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.cidade
console.log(nome, idade, cidade);

// Usando o Destructuring | reduz linha de código
const {nome1, idade1, cidade1} = usuario;
console.log(nome1, idade1, cidade1);
console.log("------ FIM --------");

console.log("Conceito do uso de DESTRUCTURING para ARRAY");

const arrayDeNome = ["Larah", "Vovo", "Titio", "Portuguesa", "Peperone"];

// Forma de pegar os elementos de um array tradicional
const larah = arrayDeNome[0];
const vovo = arrayDeNome[1];
console.log(larah, vovo);

//Forma de pegar os elementos de um array usando destructuring
const [,,titio, portuguesa, peperone] = arrayDeNome;
console.log(titio, portuguesa, peperone);

console.log("------ FIM --------");