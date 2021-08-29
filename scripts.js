
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


let calcNetto = () => {
    $('#nettoValue').text(parseInt(bruttoValue.value)*parseFloat(0.665) + " Ft");
    $('#osszkoltsegValue').text(parseInt(bruttoValue.value)*parseFloat(1.17) + " Ft");

    $('#havibruttoValue').text(parseInt(bruttoValue.value) + " Ft");
    $('#szjaValue').text(parseInt(bruttoValue.value)*parseFloat(0.15) + " Ft");
    $('#tbValue').text(parseInt(bruttoValue.value)*parseFloat(0.185) + " Ft");
    $('#munkavallaloiadokValue').text(parseInt($("#szjaValue").text())+parseInt($("#tbValue").text()) + " Ft");
    $('#evesadoalapValue').text(parseInt(bruttoValue.value)*12 + " Ft");
    $('#evesszamitottadoValue').text(parseInt($("#szjaValue").text())*12 + " Ft");
};




/*
if ($("#checkHazas").is(':checked')) {
    console.log("valami")
}

if($("#checkHazas").checked == true) {
    console.log("valami");
}
*/

