function encriptar(mensaje) {
  document.querySelector("#warning").removeAttribute("style");
  let textarea = document.querySelector("#texto");
  const texto = textarea.value;
  let area_default = document.querySelector("#default");
  let area_result = document.querySelector("#result");
  let texto_out = document.querySelector("#texto_out");
  if (texto != "") {
    let out = "";
    for (let i = 0; i < texto.length; i++) {
      if ((texto[i] < "a" || texto[i] > "z") && texto[i] != " ") {
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        swal("Ooops!", "Solo letras minúsculas y sin acentos.", "warning");
        return;
      } else if (
        (texto.length == 1 && texto == " ") ||
        texto.replace(/ /g, "") == ""
      ) {
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
      }
      if (texto[i] == "a") {
        out += mensaje["a"];
      } else if (texto[i] == "e") {
        out += mensaje["e"];
      } else if (texto[i] == "i") {
        out += mensaje["i"];
      } else if (texto[i] == "o") {
        out += mensaje["o"];
      } else if (texto[i] == "u") {
        out += mensaje["u"];
      } else {
        out += texto[i];
      }
    }
    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    texto_out.innerHTML = out;
    textarea.value = "";
  }

  return;
}

function desencriptar(mensaje) {
  document.querySelector("#warning").removeAttribute("style");
  let textarea = document.querySelector("#texto");
  let texto = textarea.value;
  let area_default = document.querySelector("#default");
  let area_result = document.querySelector("#result");
  let texto_out = document.querySelector("#texto_out");
  if (texto != "") {
    for (let i = 0; i < texto.length; i++) {
      if ((texto[i] < "a" || texto[i] > "z") && texto[i] != " ") {
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        swal("Ooops!", "Solo letras minúsculas y sin acentos.", "warning");
        return;
      } else if (
        (texto.length == 1 && texto == " ") ||
        texto.replace(/ /g, "") == ""
      ) {
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
      }
    }
    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    texto = texto.replace(new RegExp(mensaje["a"], "g"), "a");
    texto = texto.replace(new RegExp(mensaje["e"], "g"), "e");
    texto = texto.replace(new RegExp(mensaje["i"], "g"), "i");
    texto = texto.replace(new RegExp(mensaje["o"], "g"), "o");
    texto = texto.replace(new RegExp(mensaje["u"], "g"), "u");
    texto_out.innerHTML = texto;
    textarea.value = "";
  }

  return;
}

function clipboard() {
  texto_out.select();
  navigator.clipboard.writeText(texto_out.value);
  swal("Texto Copiado", "", "success");
}

const enc = document.querySelector("#enc");
const des = document.querySelector("#des");
const copy = document.querySelector("#copiar");

let mensaje = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

enc.addEventListener("click", function () {
  encriptar(mensaje);
});
des.addEventListener("click", function () {
  desencriptar(mensaje);
});
copy.addEventListener("click", function () {
  clipboard();
});
