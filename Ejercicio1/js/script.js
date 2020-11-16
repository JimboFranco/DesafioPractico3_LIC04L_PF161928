$(document).ready(function () {

    var nombre = []
    var notas = [];
    var cont = 0;
    function reset() {
        $('#nombre').val("");
        $('#nombre').focus();
        $('#not1').val(0); $('#not2').val(0); $('#not3').val(0); $('#not4').val(0); $('#not5').val(0);
    }

    $("#form").submit(function (e) {

        e.preventDefault();
        var prom = parseInt($('#not1').val()) + parseInt($('#not2').val()) + parseInt($('#not3').val()) + parseInt($('#not4').val()) + parseInt($('#not5').val());
        notas[cont] = (prom / 5);
        nombre[cont] = $('#nombre').val();;

        cont++;
        $("#legend").text("Ingresar notas del Estudiante #" + (cont + 1));
        if (cont == 3) {
            var field = document.getElementById("result");;
            var card = "";
            var max = Math.max(...notas);
            var min = Math.min(...notas);

            for (var i = 0; i < 3; i++) {

                if (max > 8) {
                    notas[i] += 1;
                } else if(max<8){
                    notas[i] -= 1;
                }


                if (notas[i] >= 7) {
                    card += "<div class='card text-white bg-success mt-4'><h5 class='card-header'>" + nombre[i] + " (Aprobado)</h5>";
                } else if (notas[i] >= 4 && notas[i] < 7) {
                    card += "<div class='card text-white bg-info mt-4'><h5 class='card-header'>" + nombre[i] + " (Regular)</h5>";
                } else {
                    card += "<div class='card text-white bg-danger mt-4'><h5 class='card-header'>" + nombre[i] + " (Reprobado)</h5>";
                }

                var max2 = Math.max(...notas);
                var min2 = Math.min(...notas);


                if (max2 == notas[i]) {
                    card += "<div class='card-body'><p class='card-text'>Promedio: " + notas[i] + "<strong> (Mayor Promedio)</strong></p>  </div></div>";
                } else if (min2 == notas[i]) {
                    card += "<div class='card-body'><p class='card-text'>Promedio: " + notas[i] + "<strong> (Menor Promedio)</strong> </p> </div></div>";
                } else {
                    card += "<div class='card-body'><p class='card-text'>Promedio: " + notas[i] + "</p></div></div>";
                }
            }
            $("#fieldset1").prop("disabled", true);
            $("#legend").text("Notas ingresadas");
            field.innerHTML = card;

        }

        reset();

    });

});