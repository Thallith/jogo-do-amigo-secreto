//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Função para limpar o campo
function limparCampo () {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function limparLista() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
}

//Criando uma array para armazenar os nomes
let nomes = [];



function adicionarAmigo() {
let amigo = document.querySelector('input').value;
if (amigo === '') {
    alert('Por favor, insira um nome válido');
} else {
nomes.push(amigo); //Adiciona o nome do amigo na array
console.log(nomes);
listarAmigos();
limparCampo();
}
}

//Função para adicionar cada amigo em uma lista

function listarAmigos() {
   
    let lista = document.querySelector('ul');

   
    lista.innerHTML = ''; 

    
     //Criando um loop for para percorrer o array amigos e criar elementos de lista para cada nome
 
     for (let i = 0; i < nomes.length; i++) {
        let nomeAtual = nomes[i];
        let item = document.createElement('li');
        item.textContent = nomeAtual;
        lista.appendChild(item);
     }
}

   //Função para sortear um amigo aletatoriamente da lista
   function sortearAmigo() {
    if (nomes.length === 0) {
        alert('A lista de amigos está vazia. Adicione alguns amigos primeiro!')
    }else {
        let indiceAleatorio = Math.floor((Math.random() * nomes.length));
        //Usar o índice aleatório para acessar o nome correspondente no array nomes
        let amigoSorteado = nomes[indiceAleatorio];

         let resultado = document.getElementById('resultado');
        resultado.innerHTML = 'O amigo sorteado é: ' + amigoSorteado;

        limparLista();


    }
   }



   
 