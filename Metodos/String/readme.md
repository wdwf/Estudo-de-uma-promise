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

*Nota:*
* Uma string é em resumo um conjunto de caracteres então podemos entender este conjunto como um array
* A contagem de um array é iniciada com 0. 

*Length*
```
palavras.length;
```
* Usado para descobrir o comprimento/quantidade de elementos da string tambem serve em arrays.
* A contagem se inicia com 1 inves do 0.

*IndexOf*
```
palavras.indexOf("Palavra");
```
* Metodo para encontrar uma substring dentro da string principal
* É retornado o valor do indice da primeira letra encontrada ex: palavra: Hello --> busca: llo --> Retorno: 2
* Caso a substring não seja localizada dentro da string principal será retornado -1
* Palavra é o item de busca referente na frase

*Slice*
```
palavras.slice(indexInicial, indexFim)
```
* extrai uma parte selecionada de uma string e retorna uma nova string
* Ele recebe dois parametros:
  - 1° é a posição do caractere a partir da qual será iniciada a extração. 
  - 2° é a posição seguinte do último caractere a ser extraído.
* Se um parâmetro for negativo, a posição será contada a partir do final da string.
```
EX:
var fruits = ["Banana","Orange","Lemon"];
var citrus = fruits.slice(1,3); //--> ["Orange", "Lemon"]
```

*ToLowerCase*
```
palavras.toLowerCase();
```
* Cria uma string modificação em caixa baixa.

*ToUpperCase*
```
palavras.toUpperCase();
```
* Cria uma string modificação em caixa alta.

*LastIndexOf*
```
palavras.lastIndexOf(substring, fromIndex);
```
* Assim como o indexOf retorna a localização do primeiro caracter da substring, porem caso aja mais de uma da mesma substring será retornado a localização do primeiro caracter da ULTIMA substring encontrada.
* É pesquisado de trás para frente a partir de fromIndex. Retorna -1 se o valor não for encontrado.
* Recebe dois parametros:
  - 1° substring -- palavra que se vai fazer a busca.
  - 2° fromIndex -- O índice no qual a pesquisa será iniciada de trás para frente.

*Replace*
```
palavra.replace("subString", "stringSubstituta");
```
* Localiza a subString especificada e substitui pela string do segundo parametro
* Recebe dois parametros:
  - 1° substring -- palavra que se vai fazer a busca.
  - 2° stringSubstituta -- palavra que ira substituir o espaço da substring.

*substring*
```
palavras.substring(indexInicial, indexFim)
```
* Faz o mesmo procedimento de slice porem este metodo não aceita um parametro negativo

*split*
```
palavras.split(separador, limite)
```
* Metodo usado para dividir uma string em um array de strings.
* O ele gera um array que deve ser armazenado em uma variavel.
* Recebe dois parametros:
  - 1° separador -- Especifica os caracteres a serem usado para separar a string
  - 2° limite -- (opcional) Especifica ate qual separador ele deve armazenar

*trim*
```
palavras.trim()
```
* retorna um texto sem whitespaces. Sendo assim ele remove os espaço em branco do inicio e/ou fim de um texto

*Concat*
```
str.concat(string2, string3, [... stringN])
```
* O metodo combina o texto de duas ou mais strings e retorna uma nova string
* Muito utilizada com arrays e objetos
