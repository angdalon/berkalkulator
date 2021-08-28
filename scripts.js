
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
};