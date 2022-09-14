//conectar essa e a outra com os html 
//pra acionar o but e retornar o valor como string pra ser processado no .ino
$("button").click(function() {
    const call = io();
    var button = $(this).val(); //pega o valor atribuido ao btn apertado
    console.log(button); //só pra testar
    call.emit('btnAction', {
        value: button.toString()
    })
})