# METODOS PARA STRING


## STRINGS PODEM SER OBJETOS por meio da definição da palavra new
```
var nome = new String("John") --> retorna um tipo objeto
```

### Dica: 
* Não crie strings como objetos. Isso diminui a velocidade de execução.

* Utilizando esste metodo a string original não é alterada mas sim é retornada uma copa alterada.

## DIFERENTES TIPOS
```
var palavras = "Hello";
```

*Length*
```
palavras.length;
```
* Usado para descobrir o comprimento da string tambem serve em arrays.

*IndexOf*
```
palavras.indexOf("Palavra");
```
* Palavra é o item de busca referente na frase

*lastIndexOf*
```
palavras.lastIndexOf("palavra");
```
* Assim como o indexOf retorna a localização do primeiro caracter da palavra procurada, porem caso aja mais de uma da mesma palavra será retornado a localização do primeiro caracter da ULTIMA PALAVRA

*Search*
```
palavras.search("Palavra", posiçãoInicial)
```
* posição inicial é referente as posiçoes das letras na frase ou seja por qual letra ele começará, lembrando que a contagem é iniciada por 0;
* Executa as mesmas açoes de indexOf porem apresenta diferença entre por conta da passagem de parametro de inicio de busca
```
EX:
var str = "Hello dev";
var n = str.search("dev")  //-->6 (index do inicio da string)
```

*slice*
```
palavras.slice(indexInicial, indexFim)
```
* extrai uma parte selecionada de uma string e retorna uma nova string
* Se um parâmetro for negativo, a posição será contada a partir do final da string.
```
EX:
var fruits = ["Banana","Orange","Lemon"];
var citrus = fruits.slice(1,3); //--> ["Orange", "Lemon"]
```

*substring*
```
palavras.substring(indexInicial, indexFim)
```
* Faz o mesmo procedimento de slice porem este metodo não aceita um parametro negativo

*split*
```
palavras.split(separador, limite)
```
* separador -- caractere especifico usado para separar a string
* Se o separador for uma string vazia, a var será convertido em um array de caracteres.



*trim*
```
palavras.trim()
```
* retorna um texto sem whitespaces sendo assim ele. Remove os espaço em branco do inicio e/ou fim de um texto
