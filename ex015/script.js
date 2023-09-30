function verificar() {
  // window.alert("FUNCIONOU!") Comando teste do clicar
  var data = new Date()
  var ano = data.getUTCFullYear()
  var fano = document.getElementById("txtano")
  var res = document.querySelector("div#res")

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados novamente")
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    //res.innerHTML = `Idade calculada: ${idade}` Comando teste ao digitar idade
    var genero = ""
    var img = document.createElement("img")
    img.setAttribute("id", "foto")

    if (fsex[0].checked) {
      genero = "Homem"
      if (idade >= 0 && idade < 10) {
        //bebe
        img.setAttribute("src", "foto-bebe-m.png")
      } else if (idade < 14) {
        //criança
        img.setAttribute("src", "foto-criança-m.png")
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "foto-jovem-m.png")
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "foto-adulto-m.png")
      } else {
        //idoso
        img.setAttribute("src", "foto-idoso-m.png")
      }
    } else if (fsex[1].checked) {
      genero = "Mulher"
      if (idade >= 0 && idade < 10) {
        //bebe
        img.setAttribute("src", "foto-bebe-f.png")
      } else if (idade < 14) {
        //criança
        img.setAttribute("src", "foto-criança-f.png")
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "foto-jovem-f.png")
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "foto-adulto-f.png")
      } else {
        //idoso
        img.setAttribute("src", "foto-idoso-f.png")
      }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
