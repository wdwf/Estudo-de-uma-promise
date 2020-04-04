let carro = {
    //Propriedades e metodos
    marca: "VW", //Isso é uma propriedade

    preco: "1000",

    //O metodo é quando se cria uma função 
    andar: function() {
        console.log("andou");
    }
}

console.log(carro.preco);

//Metodos e atributo de classe

//Classe = é um modelo que a gente define 


//Metodos e atributos de instancia

//Instancia = é uma variavel que se beneficia da utilização da classe definida por meui do camando NEW

//Quando se utiliza classe automaicamente se cria um objeto

//--------------------------------------------
//GET E SET

var _v = 0;

let obj = {
    //GET é usado apenas para leitura
    //Quando se cria um get é necessario se adicionar um return 
    get v(){
        return _v;
    },

    //Retorna um valor modificado
    set v(value){
        _v = value * 2;
    }
}


//obj.v

//obj


//----------------------------------------------
// METODOS DE ARRAYS
//Metodo é uma ação feita sobre um elemento

const lista = ["a", "b", "c"];

//Push - Aadiciona quantos elementos forem requiridos 
lista.push("d", "e");

console.log(lista)


