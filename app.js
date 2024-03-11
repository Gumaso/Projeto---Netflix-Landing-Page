var botao1 = document.getElementById('botao1_secao6');
var botao2 = document.getElementById('botao2_secao6');
var botao3 = document.getElementById('botao3_secao6');
var botao4 = document.getElementById('botao4_secao6');
var botao5 = document.getElementById('botao5_secao6');
var botao6 = document.getElementById('botao6_secao6');

function mostrarDiv(div) {
    if (div.style.display === "flex") {
        div.style.display = "none";
    } else {
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.width = "40%";
    }

}
var div_1 = document.getElementById('div_botao1').addEventListener('click', function(event) {
    event.preventDefault();
});
botao1.addEventListener('click', function() {
    mostrarDiv(div_1);
});

/*BOTÃO 2 */
var div_2 = document.getElementById('div_botao2');
botao2.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarDiv(div_2);
});

/*BOTÃO 3 */
var div_3 = document.getElementById('div_botao3');
botao3.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarDiv(div_3);
});

/*BOTÃO 4 */
var div_4 = document.getElementById('div_botao4');
botao4.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarDiv(div_4);
});
/*BOTÃO 5 */
var div_5 = document.getElementById('div_botao5');
botao5.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarDiv(div_5);
});
/*BOTÃO 6 */
var div_6 = document.getElementById('div_botao6');
botao6.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarDiv(div_6);
});