let cep = document.querySelector("#cep")
let rua = document.querySelector("#rua")
let bairro = document.querySelector("#bairro")
let cidade = document.querySelector("#cidade")
let estado = document.querySelector("#estado")





cep.addEventListener('blur', function(e){
    let cep = e.target.value;
    let script = document.createElement('script')
    script.src = "https://viacep.com.br/ws/"+cep+"/json/?callback=preencherForm"
    document.body.appendChild(script)
})
 function preencherForm(resposta){

     rua.value = resposta.logradouro;
     bairro.value = resposta.bairro;
     cidade.value = resposta.localidade;
     estado.value = resposta.uf;

 }
