function clicou(){
      document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
      //console.log(document.getElementById("agradecimento"));
      //alert("Obrigado por clicar");
}

function redirecionar(){
      //window.open("https://www.linkedin.com/company/globallabs/about/");
      window.location.href = "https://www.linkedin.com/company/globallabs/about/"
}
function trocar(elemento){
     // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
     elemento.innerHTML = "Obrigado por passar o mouse";
      //alert("trocar texto")
}

function voltar(elemento){
      //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
      elemento.innerHTML ="Passe o mouse aqui";
}
function load(){
      alert("Página carregada")//quando carregar o body, chama a função
}

function funcaoChange(elemento){
      console.log(elemento.value)
}