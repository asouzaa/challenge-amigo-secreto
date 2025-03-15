// Lista para armazenar os nomes
let listaAmigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
   let inputNome = document.getElementById("amigo");
   let nome = inputNome.value.trim();
   if (nome && !listaAmigos.includes(nome)) {
       listaAmigos.push(nome);
       atualizarLista();
       inputNome.value = "";  // Limpa o campo após adicionar
   } else {
       alert("Nome inválido ou já adicionado!");
   }
}
// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
   let ul = document.getElementById("listaAmigos");
   ul.innerHTML = "";
   listaAmigos.forEach(nome => {
       let li = document.createElement("li");
       li.textContent = nome;
       ul.appendChild(li);
   });
}
// Função para sortear um único amigo secreto
function sortearAmigo() {
   if (listaAmigos.length < 2) {
       alert("Adicione pelo menos 2 amigos para o sorteio!");
       return;
   }
   let sorteioValido = false;
   let amigoSorteado = "";
   let amigoQueTirou = "";
   while (!sorteioValido) {
       let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
       let indiceQuemTira = Math.floor(Math.random() * listaAmigos.length);
       if (indiceSorteado !== indiceQuemTira) {
           amigoSorteado = listaAmigos[indiceSorteado];
           amigoQueTirou = listaAmigos[indiceQuemTira];
           sorteioValido = true;
       }
   }
   exibirSorteio(amigoQueTirou, amigoSorteado);
}
// Função para exibir o nome sorteado
function exibirSorteio(amigoQueTirou, amigoSorteado) {
   let ul = document.getElementById("resultado");
   ul.innerHTML = ""; 
   let li = document.createElement("li");
   li.textContent = `Seu amigo secreto é: ${amigoSorteado}`; 
   ul.appendChild(li);
}