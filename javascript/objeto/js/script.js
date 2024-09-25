//Objeto Literals
const objetoPessoa = {
    nome:"João",
    idade: 30,

};

console.log(objetoPessoa.nome);
console.log(objetoPessoa.idade);
console.log(typeof objetoPessoa);

//removendo uma propriedade do objeto
//propriedade o que é? é os dados e o tipo de dados 
//objetos é uma coleção de pares chaves e valor como se fosse uma entidade
const pessoa = {
    nome: "Morgana",
    idade: 40,
};
console.log(pessoa);

//removendo
delete pessoa.idade;
console.log(pessoa);

//adicionando propriedade ao objeto
const funcionario ={
    nome:"Luis",
    matricula:34567
};

console.log(funcionario);
//adicionando
funcionario.sobrenome = "Santana";
console.log(funcionario);

//metodo assign
const objeto1 = {
    nome:"Juliano",
    idade:30,
};

const objeto2 = {
    altura: 1.80,
    genero:"masculino",
};

const objetoDestino = {};
Object.assign(objetoDestino,objeto1,objeto2);
console.log(objetoDestino);

//medoto keys

const objeto ={
    nome:"Fernada",
    idade: 29,
};

const chaves = Object.keys(objeto);
console.log(chaves);

//Exibindo os valores no array
const valores = Object.values(objeto);
console.log(valores);

//Mutação de objeto
const hospede = {
    nome:"Alberto",
};

hospede.nome = "Junior";
console.log(hospede.nome);


//mutação -inserção

hospede.sobrenome = "Lima";
console.log(hospede);

//mutação operador de adição
const hospedeNovo = {

nome:"Meiriane",
idade:29, 
};

hospedeNovo.idade += 2;
console.log(hospedeNovo.idade)

//mutação deletar 

delete  hospedeNovo.nome;
console.log(hospedeNovo)