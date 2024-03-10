var botao1 = document.getElementById('botao1_secao6');
var botao2 = document.getElementById('botao2_secao6');
var botao3 = document.getElementById('botao3_secao6');
var botao4 = document.getElementById('botao4_secao6');
var botao5 = document.getElementById('botao5_secao6');
var botao6 = document.getElementById('botao6_secao6');



/*
display: flex;
    flex-direction: column;
    width: 50%;
*/
var div_1 = document.getElementById('div_botao1');
botao1.addEventListener('click', function(event) {
    event.preventDefault();
    if (div_1.style.display === "flex") {
        div_1.style.display = "none";
    } else {
        div_1.style.display = "flex";
        div_1.style.flexDirection = "column";
        div_1.style.width = "40%";
    }
});

/*BOTÃO 2 */
var div_2 = document.getElementById('div_botao2');
botao2.addEventListener('click', function(event) {
    event.preventDefault();
    if (div_2.style.display === "flex") {
        div_2.style.display = "none";
    } else {
        div_2.style.display = "flex";
        div_2.style.flexDirection = "column";
        div_2.style.width = "40%";
    }
});

/*BOTÃO 3 */
var div_3 = document.getElementById('div_botao3');
botao3.addEventListener('click', function(event) {
    event.preventDefault();
    if (div_3.style.display === "flex") {
        div_3.style.display = "none";
    } else {
        div_3.style.display = "flex";
        div_3.style.flexDirection = "column";
        div_3.style.width = "40%";
    }
});

/*BOTÃO 4 */
var div_4 = document.getElementById('div_botao4');
botao4.addEventListener('click', function(event) {
    event.preventDefault();
    if (div_4.style.display === "flex") {
        div_4.style.display = "none";
    } else {
        div_4.style.display = "flex";
        div_4.style.flexDirection = "column";
        div_4.style.width = "40%";
    }
});
/*BOTÃO 5 */
var div_5 = document.getElementById('div_botao5');
botao5.addEventListener('click', function(event) {
    event.preventDefault();
    if (div_5.style.display === "flex") {
        div_5.style.display = "none";
    } else {
        div_5.style.display = "flex";
        div_5.style.flexDirection = "column";
        div_5.style.width = "40%";
    }
});
/*BOTÃO 6 */
var div_6 = document.getElementById('div_botao6');
botao6.addEventListener('click', function(event) {
    event.preventDefault();
    if (div_6.style.display === "flex") {
        div_6.style.display = "none";
    } else {
        div_6.style.display = "flex";
        div_6.style.flexDirection = "column";
        div_6.style.width = "40%";
    }
});