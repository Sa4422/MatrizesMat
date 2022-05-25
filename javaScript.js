document.write('<h1 class="block">Soma de Matrizes aleatórias de 0 a 50 :</h1>')
document.write('<div class= block>');

//declaraçãoi matriz 1 ///////////////////////////////////////////////////

var matriz = [];

var tamanho = prompt("defina um tamanho para a matriz :" );

for(var i = 0 ; i < tamanho ; i++){
    matriz.push([0,0,0]);
    for(var x = 0 ; x< tamanho ; x++){
          matriz[i][x] = Math.floor(Math.random() * 50)
    }
}

//declaração matriz 2/////////////////////////////////////////////////////////

var matriz2 = [];

for(var i = 0 ; i < tamanho ; i++){
    matriz2.push([0,0,0]);
    for(var x = 0 ; x< tamanho ; x++){
//        matriz2[i][x] = prompt("digite a linha :" + i + "coluna : "+ x );
          matriz2[i][x] = Math.floor(Math.random() * 50)
    }
}


//matriz 1 //////////////////////////////////////////////////////////////

document.write("<table border='1' class= esquerda>");
for( i = 0 ; i < tamanho ; i++){
    var linha = "<tr>" ; 
    for( x = 0 ; x < tamanho ; x++){
        linha = linha + "<td>" + matriz [i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");

//matriz 2 ///////////////////////////////////////////////////////

document.write("<h1 class=mais>  +  </h1>");

document.write("<table border='1'");
for( i = 0 ; i < tamanho ; i++){
    var linha2 = "<tr>" ; 
    for( x = 0 ; x < tamanho ; x++){
        linha2 = linha2 + "<td>" + matriz2 [i][x] + "</td>";
    }
    linha2 = linha2 + "</tr>";
    document.write(linha2);
}
document.write("</table>");

//matriz 3 resultado soma///////////////////////////////////////////////////////////////////////////////////////

var matriz3 = [];

for(var i = 0 ; i < tamanho ; i++){
    matriz3.push([0,0,0]);
    for(var x = 0 ; x < tamanho ; x++){
        matriz3[i][x] = matriz[i][x] + matriz2[i][x];
    }
}
document.write("<h1 class=mais>  =  </h1>");

document.write("<table border='1' class=direita");
for( i = 0 ; i < tamanho ; i++){
    var linha3 = "<tr>" ; 
    for( x = 0 ; x < tamanho ; x++){
        linha3 = linha3 + "<td>" + matriz3 [i][x] + "</td>";
    }
    linha3 = linha3 + "</tr>";
    document.write(linha3);
}
document.write("</table>");


document.write('</div> <br> <br>');

//matriz 4/////////////////////////////////////////////////////////////////

document.write('<h1 class="block">Subtração da Matriz acima:</h1>')

document.write('<div class= block>');

document.write("<table border='1' class= esquerda>");
for( i = 0 ; i < tamanho ; i++){
    var linha = "<tr>" ; 
    for( x = 0 ; x < tamanho ; x++){
        linha = linha + "<td>" + matriz [i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");

//matriz 5 ///////////////////////////////////////////////

document.write("<h1 class=mais>   -   </h1>");

document.write("<table border='1'");
for( i = 0 ; i < tamanho ; i++){
    var linha2 = "<tr>" ; 
    for( x = 0 ; x < tamanho ; x++){
        linha2 = linha2 + "<td>" + matriz2 [i][x] + "</td>";
    }
    linha2 = linha2 + "</tr>";
    document.write(linha2);
}
document.write("</table>");

//Matriz 6 resultado subtração///////////////////////////////////////////////////////////////////////////////////////////////

var matriz4 = [];

for(var i = 0 ; i < tamanho ; i++){
    matriz4.push([0,0,0]);
    for(var x = 0 ; x < tamanho ; x++){
        matriz4[i][x] = matriz[i][x] - matriz2[i][x];
    }
}
document.write("<h1 class=mais>  =  </h1>");

document.write("<table border='1' class=direita");
for( i = 0 ; i < tamanho ; i++){
    var linha4 = "<tr>" ; 
    for( x = 0 ; x < tamanho ; x++){
        linha4 = linha4 + "<td>" + matriz4 [i][x] + "</td>";
    }
    linha4 = linha4 + "</tr>";
    document.write(linha4);
}
document.write("</table>");

document.write('</div> <br> <br>');