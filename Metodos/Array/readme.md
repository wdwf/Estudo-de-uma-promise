 # METODOS

  * Os metodos a seguir são exclusivamente para manipulação de arrays

  * A ideia de uma função tanto em javascript quanto qualquer outra linguagem é a de receber um input executar uma determinada tarefa sobre aquele input e retornar uma resposta.

  # OBJETOS

  * É uma forma de 

  * Ela é composta de chave e valor;

  * Acessando os itens de um objeto:

  ```
  let filme = 
  {
    titulo: "Titanic",
    Duracao: 195;
    Nota: 8.5
  }

  console.log( titanic.titulo )
  ``` 
  
  * Quando temos caracteres especiais tais como 'ã', ç, utilizamos uma sintaxe levemente diferente e ela vale tanto para a variavel quanto para a chave:

  ```
    let filme = 
  {
    titulo: "Mr. Bean",
    Duração: 90;
    Nota: 9.5
  }

  console.log( filme['Duração'] )
  ``` 

  # MAP

  ### Segundo a documentação:

  > O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.


  * O map vai pegar o valor do array e passa-los como parametro para a função como se fosse um unico item

  ```
  array.map(function)
  ```

  * Faz uma iteração sobre um array de elementos passando cada valor deste array por uma função e com isso cria um novo array modificado.

  * Ele é utilizado quando se quer aplicar uma função a todos os elementos de um array.

  * Uma função que recebe uma função como parametro.

  Uma outra utilização muito comum do map() é para fazer mapeamento de contratos de apis. Por exemplo:
  
  ```
  [50, 60, 70].map((value) => {price: value} )
  // Returns: 
  // [ { price: 50 }, { price: 60 }, { price: 70 } ]
  ```

  
  # FILTER

  ### Segundo a documentação:

  > O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
  
  * filter: Retorna um array com os valores filtrados.

  * é necessario declarar o mesmo dentro de uma variavel.  
  * ele necessita de uma função de callback: é uma função que se passa como parametro para outra função, e aquela função vai executar a função externa que foi passada como parametro
  * Não se necessita comparar valores booleanos

  array.filter(function)

  * Este metodo tem a função de filtrar o array especifico, se for retornado o valor true será feito o armazenamento do valor em um novo array. Porem caso volte false não sera armazenado tal valor.

  
  # REDUCE
 
  ### Segundo a documentação:
  
  > O método reduce()executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.
  
  Para simplificar, uma função reducer é uma função agregadora. Pode ser para fazer uma soma, encontrar o maior ou menor valor numa lista, entre muitas outras possibilidades. O reducer sempre percorrerá toda a lista e retornará apenas um resultado.

  * reduce: Retorna um array ou valor agragado a partir do array
  * Possibilidades de trabalhos

  * o redulce diferente dos demais não retorna um array apenas ele pode ainda retornar um objeto, um numero, uma string. 
  * este metodo espera dois parametros
  1° Uma function 
  2° Valor inicial (qual o index de inicio) ex: abacaxi -- o b esta no index 1 logo podemos comecar por ele

  ### ==== FUNCIONAMENTO DO REDUCE ====

  ```
  array.reduce(callback, valorInicial)'
  ```
  'callback' - Função que é executada em cada valor no array, recebe quatro argumentos:
  
  * 'Acumulador' - O valor retornado na ultima invocação do callback, ou argumento valor inicial, se fornecido.

  * 'ValorAtual' - O elemento atual que esta sendo processado no array.

  * 'Indice'     - O indice do elemento atual que esta sendo processado no array.

  * 'Array'      - O array ao qual a função 'reduce' foi chamada.

  'valorInicial' - Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função 'callback' 

  # CLASSES

  Serve para incapsular

  É uma foram de organizar o seu codigo em pequenas funçoes de objetos pois uma classe retorna um objeto que vai ter metodos e propriedades que vão servir para uma função especifica 

  # API

  exemplo de funcionamento: 
  
  Cliente                                                 (client)
  Garçon (pedidos, levar seus pedidos, para a cozinha)    (API)
  Cozinha                                                 (Server)

  //O cliente faz a requisição a API cuida para que a requição seja entregue no servidor 
  e que retorne ao usuario

  Acronimo de application Programming Interface (interface de Programação de aplicaçoes)
  é basicamente um conjunto de rotinas e padroes estabelecidos por uma aplicação, 
  para que outras aplicações possam utilizar as funcionalidade desta aplicação.

  - Responsavel por estabelecer comunicação entre diferentes serviços.
  - Meio de campo entre as tecnologias.
  - Intermediador para troca de informação

  # REST -- BOAS PRATICAS

  ### exemplo de uso:

  O cliente chega em um restaurante e deseja um local limpo, organizado que atenda bem e
  deseja aquilo que foi pedido pelo mesmo.

  Em compensação o cliente não pode chegar ao estabelecimento Gritando, xingando

  O REST determina algumas obrigaçoes nesta transferencia de dados.

  A transferencia de dados, geralmente é feita atraves do uso do protocolo HTTP. 
  Acronimo para REpresentational State Trasnfer ( Transferencia de estado Representativo)
  
  //O REST, delimita algumas obrigaçoes nessas transferencias de dados.

  -Os dados no Rest são denominados de Resources seria então, uma entidade, um objeto

  ### 6 NECESSIDADES (constraints) PARA SER RESTful 

  1. Client-Server: Separação do cliente e do armazenamento de dados (servidor), dessa forma,
  poderemos ter uma portabilidade do nossso sitema, usando o React para WEB e React Native
  para o smatphone, por exemplo.

  * O cliente e o servidor precisão estar SEPARADOS, assim se tem
  uma portabilidafde do sistema. (é necessario estar pegando as informaçoes não do front mas sim do banco de dados)

  2. Stateless: Cada requisição que o cliente faz para o servidor, deverá conter todas as 
  informaçoes necessarias para o servidor entender e reponder (RESPONSE) a requisição (REQUEST).

  * Sem estado == Para cada requisição tal precisa estar completas.
  EX: A sessão de usuario deverá ser enviada em todas as requisiçoes, para saber se aquele usuario esta
  autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na
  requisição anterior. Por padrão é necessario usar tokens para a comunicação
  * **É NECESSARIO O REENVIO DAS INFOS.**

  3. Cacheable: As respostas para cada requisição que for feita elas tem que vir explicitas, 
  dizendo se ela pode ser cacheado ou não.


  4. Layered System: O cliente acessa o end-point, sem precisar saber da complexidade, de quais passos
  estão sendo necessarios para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.
  * O cliente vai sempra acessar um end-point(uma URL-ou melhor o caminho)

  5. Code on demand (optional): Dá a posibilidade da nossa aplicação pegar codigos, como JavaScript, e
  executar no cliente.
  * Seria o servidor enviar para o seu cliente algum script para ele rodar no front

  ## BOAS PRATICAS
  - Utilizar vverbos HTTP para as requisiçoes
  - Itilizar plural ou singular na criação dos endpointes(rotas), porem mantenha o padrão
  - Não deixar barras no final dos endpoints

  ## VERBOS HTTP

  **É importante a utilização dos verbos http nas requisiçoes API**

  * GET - Receber dados de um Resource
  *POST - Enviar dados ou informaçoes para serem processados por um Resource  
  * PUT - Atualizar os dados de um Resource
  * DELETE - Deletar um Resource

  **http://localhost:3000/clients**
  **clients seria o resource**


  ## STATUS DAS RESPOSTAS

  É EXTREMAMENTE NECESSARIO ENVIAR UMA RESPOSTA AO USUARIO.
  - 1xx: Informação
  - 2xx: Sucesso
      - 200: OK
      - 201: CREATED
      - 204: Não tem conteudo PUT POST DELETE
  - 3xx: Redirection
  - 4xx: Client Error
      - 400: Bad Request
      - 404: Not Found
  - 5xx: Server error
  - 500: Internal Server Error


  Ser RESTful é cumprir os pradores REST

  O que são web services? 
  -- 
