
var cont = 0;
var bt = document.getElementById("bt");//DIV ID BT
var et = document.getElementById("et"); //DIV ID ET
var html = "";
var html2 = "";
var empExtra = 0;

function reset() {
    $("#nombre").val("");
    $("#ganancias").val("1000.00");
    $("#empleados").val("10");
    $("#nombre").focus();
}


$('#reset').click(function () {
    reset();
});
$('#agregar').click(function () {
    var flag = 0; //PARA VALIDACION DE CAMPOS
    var flag2 = 0; //PARA VERIFICAR SI SE LE HAN QUITADO EMPLEADOS
    var name = "";
    var monto = 0;
    var emp = 0;

    if (!$("#nombre").val()) {
        alertify.error('El campo Nombre no debe quedar vacio');

    } else {
        name = $("#nombre").val();
        flag += 1;
    }

    if (!$("#ganancias").val() || $("#ganancias").val() < 1000) {
        alertify.error('El campo Ganancias no debe quedar vacio, y las ganancias deben ser mayores a 1000');
    } else {
        flag += 1;
        monto = $("#ganancias").val();

    }

    if (!$("#empleados").val() || $("#empleados").val() < 10) {
        alertify.error('El campo Empleados no debe quedar vacio y el nunmero de empleados debe ser mayor a 10');
    } else {
        flag += 1;
        emp = $("#empleados").val();
    }

    if (flag == 3) {//SI TODOS LOS DATOS FUERON ENTRODUCIDOS CORRECTAMENTA
        reset();
        cont += 1;
        $("#legend").text("Ingresar Sucursal #" + (cont + 1));
        alertify.success('Sucursal ingresada');
        if (cont == 1) {
            //SI POSEE MAS DE 20 EMPLEADOS GUARDARA 1 O 2 PARA TRASLADAR A OTRA SUCURSAL
            if (emp == 21) {
                empExtra += 1;
                emp -= 1;
                flag2 += 1;
            } else if (emp > 21) {
                empExtra += 2;
                emp -= 2;
                flag2 += 1;
            }
        }

        if (monto < 30000) { //SUCURSALES CON GANANCIAS MENORES A 300000
            html += "<div class='col'> <div class='card'>";
            html += "<h5 class='card-header'> Sucursal: " + name + "<strong> (Buen trabajo)</strong></h5>";
            html += "<div class='card-body'> <p class='card-title'> Ganancias: $" + monto + "</p>";
            if (flag2 == 1) {
                html += "<p class='card-text'>Empleados: " + emp + "</p></div></div></div>";
            } else {
                if (empExtra > 0) {
                    emp =  parseInt(emp) +1;
                    html += "<p class='card-text'>Empleados: " +emp + "</p></div></div></div>";
                    empExtra -= 1;
                }
            }
            bt.innerHTML = html;
        } else if (monto >= 30000) {//SUCURSALES CON GANANCIAS MAYORES O IGUALES A 300000
            html2 += "<div class='col'> <div class='card'>";
            html2 += "<h5 class='card-header'> Sucursal: " + name + "<strong> (Excelente trabajo)</strong></h5>";
            html2 += "<div class='card-body'> <p class='card-title'> Ganancias: $" + monto + "</p>";
            if (flag2 == 1) {
                html2 += "<p class='card-text'>Empleados: " + emp + "</p></div></div></div>";
            } else {
                if (empExtra > 0) {
                    emp =  parseInt(emp) +1;
                    html2 += "<p class='card-text'>Empleados: " + emp + "</p></div></div></div>";
                    empExtra -= 1;
                }
            }

            et.innerHTML = html2;
        }

        if (cont == 3) {
            $("#legend").text("Sucursales ingresadas");
            $("#form").prop("disabled", true);
        }
    }


});
