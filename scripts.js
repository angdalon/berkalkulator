
// ez ok, de lehet felesleges ennyi variable
/*
let calcNetto = () => {
    let nettoErtek = parseInt(bruttoValue.value)*parseFloat(0.665);
    $('#nettoValue').text(nettoErtek + " Ft");
};
*/


// no variable version

/*
let calcNetto = () => {
    $('#nettoValue').text(parseInt(bruttoValue.value)*parseFloat(0.665) + " Ft");
};
*/


let calcValues = () => {
    if(document.forms["testForm"]["bruttoValue"].value != "" && document.forms["testForm"]["bruttoValue"].value > 0	) {

        $('#nettoValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.665)) + " Ft");
        $('#osszkoltsegValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(1.17)) + " Ft");

        $('#havibruttoValue').text(parseInt(bruttoValue.value) + " Ft");
        $('#szjaValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.15)) + " Ft");
        $('#tbValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.185)) + " Ft");
        $('#munkavallaloiadokValue').text(parseInt($("#szjaValue").text())+parseInt($("#tbValue").text()) + " Ft");
        $('#evesadoalapValue').text(parseInt(parseInt(bruttoValue.value)*12) + " Ft");
        $('#evesszamitottadoValue').text(parseInt(parseInt($("#szjaValue").text())*12) + " Ft");
    } else {
        $("#nettoValue").text("0 Ft");
        $("#osszkoltsegValue").text("0 Ft");

        $("#havibruttoValue").text("0 Ft");
        $("#szjaValue").text("0 Ft");
        $("#tbValue").text("0 Ft");
        $("#munkavallaloiadokValue").text("0 Ft");
        $("#evesadoalapValue").text("0 Ft");
        $("#evesszamitottadoValue").text("0 Ft");

        
   
}

};


/*

    else {
        $("#bruttoValue").val(0);
        
   
}
*/


/*
if ($("#checkHazas").is(':checked')) {
    console.log("valami")
}

if($("#checkHazas").checked == true) {
    console.log("valami");
}
*/

