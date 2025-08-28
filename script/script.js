console.log(document.body);

const ListaItens= document.getElementsByTagName("li");
console.log(ListaItens);

// const botao = document.getElementById('btn');
// botao.addEventListener('click', function() {
//     alert("Você cliclou no botão!")
// });

const cor = document.getElementById('btn');
cor.addEventListener('click', function() {
    document.body.style.backgroundColor= 'purple'
})

