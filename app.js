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
botao1.addEventListener('mouseover', function() {
    div_1.style.display = "flex";
    div_1.style.flexDirection = "column";
    div_1.style.width = "40%";    
});
botao1.addEventListener('mouseout', function() {
    div_1.style.display = "none";
    div_1.style.flexDirection = "";
    div_1.style.width = "";  
});

var div_2 = document.getElementById('div_botao2');
botao2.addEventListener('mouseover', function() {
    div_2.style.display = "flex";
    div_2.style.flexDirection = "column";
    div_2.style.width = "40%";
});
botao2.addEventListener('mouseout', function() {
    div_2.style.display = "none";
});

var div_3 = document.getElementById('div_botao3');
botao3.addEventListener('mouseover', function() {
    div_3.style.display = "flex";
    div_3.style.flexDirection = "column";
    div_3.style.width = "40%";
});

botao3.addEventListener('mouseout', function() {
    div_3.style.display = "none";
    div_3.style.flexDirection = "";
    div_3.style.width = "";
});
var div_4 = document.getElementById('div_botao4');
botao4.addEventListener('mouseover', function() {
    div_4.style.display = "flex";
    div_4.style.flexDirection = "column";
    div_4.style.width = "40%";
});

botao4.addEventListener('mouseout', function() {
    div_4.style.display = "none";
});

var div_5 = document.getElementById('div_botao5');
botao5.addEventListener('mouseover', function() {
    div_5.style.display = "flex";
    div_5.style.flexDirection = "column";
    div_5.style.width = "40%";
});
botao5.addEventListener('mouseout', function() {
    div_5.style.display = "none";
});

var div_6 = document.getElementById('div_botao6');
botao6.addEventListener('mouseover', function() {
    div_6.style.display = "flex";
    div_6.style.flexDirection = "column";
    div_6.style.width = "40%";
});
botao6.addEventListener('mouseout', function() {
    div_6.style.display = "none";
});