/**
 * Conversion de unidades (metros, pulgadas, pies y yardas)
 * @method cambiarUnidades
 * @param {string} id - id de los inputs de metros, pulgadas, pies o yardas
 * @param {number} valor - valor de los inputs de metros, pulgadas, pies o yardas
 * @return
 */
function cambiarUnidades(id, valor) {
    let met, pul, pie, yar;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = " ";
        pul = " ";
        pie = " ";
        yar = " ";
    } else if (id == "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id == "pulgada") {
        pul = valor;
        met = valor * 0.0254;
        pie = valor * 0.08333;
        yar = valor * 0.027778;
    } else if (id == "pie") {
        pie = valor;
        met = valor * 0.3048;
        pul = valor * 12;
        yar = valor * 0.333333;
    } else if (id == "yarda") {
        yar = valor;
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
    }
    document.lasUnidades.unid_metro.value = Number(met).toFixed(2);
    document.lasUnidades.unid_pulgada.value = Number(pul).toFixed(2);
    document.lasUnidades.unid_pie.value = Number(pie).toFixed(2);
    document.lasUnidades.unid_yarda.value = Number(yar).toFixed(2);
}

function gradosYradianes(id) {
    var grad, rad;
    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
    if (valorMO == "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO == "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcularSuma() {
    var num1, num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);

    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}

function calcularResta() {
    var num1, num2;

    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);

    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}

function calcularMultiplicacion() {
    var num1, num2;

    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);

    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
}

function calcularDivision() {
    var num1, num2;

    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);

    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
}

function cargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp)
}

function cargarResultado() {
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

function guardarLocalStorage() {
    let distancia, unidad;

    distancia = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distancials", distancia);
    localStorage.setItem("unidadesls", unidad);

    window.open("2_Web.html");
}

function cargarLocalStorage() {
    let cant, un;

    cant = localStorage.getItem("distancials");
    un = localStorage.getItem("unidadesls");

    document.getElementById("dist").value = cant + " " + un;
}

function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;

    ctx.fillStyle = "#ef8711";
    ctx.fillRect(0 + margen, yMax - 40 - margen, 40, 40);

    ctx.arc(xMax / 2, yMax / 2, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#ef1111";
    ctx.fill();
}

var bandera;

function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };

    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var altMax = canvas.height;
    var anchoMax = canvas.width;

    ctx.beginPath();
    for (var i = 0; i < altMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#1b0b52";
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath()

    ctx.beginPath();
    for (var i = 0; i < anchoMax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, altMax);
        ctx.strokeStyle = "#1b0b52";
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchoMax / 2, 0);
    ctx.lineTo(anchoMax / 2, altMax);
    ctx.strokeStyle = "#70b8e1";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, altMax / 2);
    ctx.lineTo(anchoMax, altMax / 2);
    ctx.strokeStyle = "#70b8e1";
    ctx.stroke();
    ctx.closePath();

}

function dibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function () {
        ctx.drawImage(img, posX, posY);
    }
}

x = 0;
dx = 2;

function animarAuto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        ctx.drawImage(img, x, 100);
    }

    if (x > canvas.width) {
        x = 0;
    }

    x += dx;
}