function crearCuenta() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const peso = parseInt(document.getElementById("peso").value);
    const objetivo = document.getElementById("objetivo").value;

    localStorage.setItem("email", email);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("peso", peso);
    localStorage.setItem("objetivo", objetivo);

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Cuenta creada exitosamente!";
}

function buscarRecetas() {
    const recetas = ["Ensalada de quinoa", "Batido verde"];
    const listaRecetas = document.getElementById("listaRecetas");
    listaRecetas.innerHTML = ""; 
    recetas.forEach(function (receta) {
        const listItem = document.createElement("li");
        listItem.textContent = receta;
        listaRecetas.appendChild(listItem);
    });
}

function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("pesoIMC").value);

    const imc = peso / (altura * altura);

    const resultadoIMC = document.getElementById("resultadoIMC");
    resultadoIMC.textContent = "Tu Índice de Masa Corporal (IMC) es: " + imc.toFixed(2);
}

function guardarHabitos() {
    const agua = parseInt(document.getElementById("agua").value);
    const sueno = parseInt(document.getElementById("sueno").value);
    const actividad = parseInt(document.getElementById("actividad").value);

    const registroHabitos = {
        fecha: new Date().toLocaleDateString(),
        agua: agua,
        sueno: sueno,
        actividad: actividad
    };

    let registrosAnteriores = JSON.parse(localStorage.getItem("registrosHabitos")) || [];
    registrosAnteriores.push(registroHabitos);

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Hábitos guardados exitosamente.";
}
