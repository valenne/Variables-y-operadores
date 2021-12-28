// Operaciones Matematicas

const operMat = document.getElementById("opeMat");

operMat.addEventListener("click", () => {
  const valorUno = parseInt(prompt("Ingresa el primero numero: "));
  const valorDos = parseInt(prompt("ingresa el segundo numero: "));

  let result = document.getElementById("res");

  if ((valorUno && valorDos) > 0 && valorUno != valorDos) {
    // refleja informacion en html
    document.getElementById("num1").textContent = valorUno;
    document.getElementById("num2").textContent = valorDos;

    // suma
    let btnSum = document.getElementById("sm");

    // funcion de suma que al clickear el elemento, devuelve resultado
    btnSum.addEventListener("click", () => {
      let sum = valorUno + valorDos;
      result.textContent = "sum: " + sum;
    });

    // resta
    let btnRes = document.getElementById("rt");

    // funcion de suma que al clickear el elemento, devuelve resultado
    btnRes.addEventListener("click", () => {
      let res = valorUno - valorDos;
      result.textContent = "res: " + res;
    });

    // multiplicacion
    let btnMulti = document.getElementById("mt");

    // funcion de suma que al clickear el elemento, devuelve resultado
    btnMulti.addEventListener("click", () => {
      let mult = valorUno * valorDos;
      result.textContent = "multiplicacion: " + mult;
    });

    // division
    let btnDivi = document.getElementById("dv");

    // funcion de suma que al clickear el elemento, devuelve resultado
    btnDivi.addEventListener("click", () => {
      let div = valorUno / valorDos;
      result.textContent = "division: " + div;
    });

    // modulo
    let btnModulo = document.getElementById("md");

    // funcion de suma que al clickear el elemento, devuelve resultado
    btnModulo.addEventListener("click", () => {
      let modul = valorUno % valorDos;
      result.textContent = "Modulo o resto: " + modul;
    });
  } else if (valorUno == valorDos) {
    alert("Ingresaste numeros iguales");
  } else {
    alert("ingresaste un numero menor a 0");
  }
});

//////////////////////////////////////////////////////////////////////////////////

// Temperatura
const operTemp = document.getElementById("opeTemp");

operTemp.addEventListener("click", () => {
  let tempCels = parseInt(prompt("Ingresa la Temp. en Celsius: "));

  document.getElementById("temp").textContent = tempCels + "°";

  let gradKel = document.getElementById("grados_kelv");
  let gradFaren = document.getElementById("grados_faren");

  let result = document.getElementById("res_2");
  // temperatura en kelvin
  gradKel.addEventListener("click", () => {
    let tk = tempCels + 273.15;
    result.textContent = "Temp en Kelvin: " + tk + "°";
  });
  // temperatura en fahrenheit
  gradFaren.addEventListener("click", () => {
    let tf = tempCels * (9 / 5) + 32;
    result.textContent = "Temp en Fahrenheit: " + tf + "°";
  });
});

//////////////////////////////////////////////////////////////////////////////////

// cantidad de dias
const operDias = document.getElementById("opeDias");

operDias.addEventListener("click", () => {
  let cantDias = parseInt(prompt("Ingresa la cantidad de dias: "));

  document.getElementById("dias").textContent =
    "Ingresaste " + cantDias + " dias";

  let result = document.getElementById("res_3");

  let datoDias = document.getElementById("btn_dias");
  // calcula la cantidad de años, semanas y dias
  datoDias.addEventListener("click", () => {
    let year = Math.floor(cantDias / 365);
    let week = Math.floor((cantDias % 365) / 7);
    let days = Math.floor(cantDias - year * 365 - week * 7);
    result.textContent = `Son: ${year} año(s) + ${week} semana(s) + ${days} dias`;
  });
});

//////////////////////////////////////////////////////////////////////////////////

//  Consulta 5 numeros y realiza las operaciones

// Elemento key
const operNumeros = document.getElementById("opeNum");

// evento click para solicitar datos
operNumeros.addEventListener("click", () => {
  let numArray = [];
  let numTotal = 0;

  let result = document.getElementById("res_4");

  // solicita y crea la lista con los numeros ingresados mediante prompt
  for (let i = 0; i < 5; i++) {
    numArray[i] = Number(prompt("Ingresa el numero" + " " + (i + 1) + ":"));
    numTotal = numTotal + numArray[i];

    // escribe la informacion ingresada
    document.getElementById("numbers").textContent =
      "Tus numeros son " + numArray;
  }

  let sumTotal = document.getElementById("suma_total");
  // cuando sucesa el evento click, me devuelva la suma de los numeros
  sumTotal.addEventListener("click", () => {
    result.textContent = "La suma total es: " + numTotal;
  });

  let promNumeros = document.getElementById("promedio");

  let cantDatos = numArray.length;
  let promed = numTotal / cantDatos;
  promNumeros.addEventListener("click", () => {
    result.textContent = "El promedio de los numeros es: " + promed;
  });
});
