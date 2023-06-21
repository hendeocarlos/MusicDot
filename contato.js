function validar(){
    var form = document.forms["validaForm"];
    
    var name = form["name"].value;
    var phone = form["phone"].value;
    var e_mail = form["e_mail"].value;
    var mensagemUsuario = form["mensagemUsuario"].value;

    if(name == ""){
        alert("Será necessário inserir o nome completo");
        return false;
    }
    if(name.length <10){
        alert("O nome inserido possui menos de 10 caracteres.")
    }
    if(phone == ""){
        alert("Será necessário inserir o número de telefone.");
        return false;
    }
    if(phone.length != 10){
        alert("O número inserido possui menos de 10 caracteres.")
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
      
    if(validateEmail(e_mail) == false){
        alert("O campo e-mail está vazio ou o e-mail inserido é inválido.");
        return false;
    }
    if(mensagemUsuario == "" || mensagemUsuario.length >50 || mensagemUsuario.length <10){
        alert("Campo Opiniao vazio ou com caracteres menores que 10 ou maiores que 50");
        return false;
    }
}