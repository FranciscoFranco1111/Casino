var aposta_input = document.getElementById("aposta")
var x;
var y = document.getElementById("y")
var submit = document.getElementById("submit")
var check = document.getElementById("check")
var pistas = document.getElementById("pistas")
var button = document.getElementById("sortear")
var submit = document.getElementById("submit") 
var resultado = document.getElementById("resultado")
var maior = document.getElementById("maior")
var img = document.getElementById("setas")
var tfoot = document.getElementById("tfoot")

function onLoad(){
    y.disabled = true
    submit.disabled = true
}

function createButton(){
    var resultado = document.getElementById("resultado")
    var newButton = document.createElement('button')
    newButton.textContent = 'Reset'
    newButton.className = "newButton"
    resultado.appendChild(newButton)

    newButton.addEventListener('click', () => {
        reset()
    });

    return newButton
}

for (var i = 0; i < 1; i++) {
    function historico(){
        var y = document.getElementById("y")
        var y_value = (y.value)
        if(isNaN(y_value) == false && y_value>=0 && y_value<=10){
        var y = document.getElementById("y")
        var y_value = (y.value)
        var tfoot = document.getElementById("tfoot")

        const tr = document.createElement("tr")
        tr.id = "tr"
        const th1 = document.createElement("th")
        const th2 = document.createElement("th")
                
        th1.innerHTML = i++ + " tentativa"
        th2.innerHTML = y_value
        th2.colSpan = 2

        tfoot.appendChild(tr)
        tr.appendChild(th1)
        tr.appendChild(th2)   
        } 
    }
}

function reset(){
    pistas.innerHTML= ""
    tfoot.innerHTML =""
    check.disabled = false
    button.disabled = false
    aposta_input.disabled = false
    y.value= ""
    resultado.innerHTML = ""
    maior.innerHTML = ""
    img.src = ""
    document.body.style.backgroundColor = ""
    i = 1
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


var saldo = parseInt(document.getElementById("saldo").innerHTML) 

  function adicionarAoResultado(valor) {
    saldo += valor;
    document.getElementById('saldo_atual').innerHTML = 'Carregar saldo para: ' + saldo + "€"    
  }


function carregar(){
  modal.style.display = "none"

  document.getElementById("saldo").innerHTML = saldo + "€"
}
  
function sortear(){
    var aposta = parseInt(document.getElementById("aposta").value)
     if(saldo - aposta >= 0){
     
     x = Math.floor(Math.random() * 10) + 1
     if(check.checked == true){
         if(x <= 5){
             pistas.innerHTML = "<h3>Pistas</h3> O número sorteado está entre 1 e 5"  
           }else if(x>5){
               pistas.innerHTML = "<h3>Pistas</h3> O número sorteado está entre 6 e 10"
           }
     }
     button.disabled = true
     check.disabled = true
     aposta_input.disabled =true
     y.disabled = false
     submit.disabled = false
     }else if(saldo <= 0){
         window.alert("Tens de carrega o saldo")
     }else if(aposta>saldo){
         window.alert("Não podes fazer uma aposta maior que o saldo.")
     }
 }

 function validar(){
    var aposta = parseInt(document.getElementById("aposta").value)
    var y_value = (y.value)
        if(isNaN(y_value) == false && y_value>=0 && y_value<=10){
            if(saldo-aposta >=0){
                if(x == y_value){
                    if(check.checked == false){
                        saldo = saldo + aposta
                        document.getElementById("saldo").innerHTML = saldo + "€"
                    }else if(check.checked == true){
                        saldo = saldo + (aposta* 0.90)
                        document.getElementById("saldo").innerHTML = saldo + "€"
                    }
                    document.body.style.backgroundColor = "rgb(43, 184, 43)"
                    resultado.className = "resultado1"
                    submit.disabled = true
                    y.disabled = true
                    resultado.innerHTML = "Acertaste" 
                    createButton()
                    maior.innerHTML = "Acertaste"  
                    window.alert("Ganhaste")
                }else if(y_value>x){
                    saldo = saldo - aposta
                    document.getElementById("saldo").innerHTML = saldo + "€"
                    document.body.style.backgroundColor = "rgb(236, 76, 48)"
                    maior.innerHTML = "O número é menor"
                    resultado.innerHTML = "Falhaste"
                }else if(y_value<x){
                    saldo = saldo - aposta
                    document.getElementById("saldo").innerHTML = saldo + "€"
                    document.body.style.backgroundColor = "rgb(236, 76, 48)"
                    maior.innerHTML = "O número é maior"
                    resultado.innerHTML = "Falhaste"
                }}else if(saldo-aposta < 0 ){
                    submit.disabled = true
                    y.disabled = true
                    window.alert("Estás falido, tens de carregar o saldo.")
                    createButton()
                }
        
    }   
}
