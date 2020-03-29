//FUNÇÃO SINCRONA --> Sem a utilização de promise

function sumNumbers() {
  let result = 1 + 1;

  if (result == 2) {
    sucessCallback();
  } else {
    errorCallback();
  }
}

function sucessCallback() {
  console.log("Yeah! number 2");
}

function errorCallback() {
  console.log("Oops! Something wrong.");
}

sumNumbers();