
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
    if(document.forms["bruttoInputForm"]["bruttoValue"].value != "" && document.forms["bruttoInputForm"]["bruttoValue"].value > 0	) {

        $('#nettoValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.665)) + " Ft");
        $('#osszkoltsegValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(1.17)) + " Ft");
        
        $('#havibruttoValue').text(parseInt(bruttoValue.value) + " Ft");
        $('#szjaValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.15)) + " Ft");
        $('#tbValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.185)) + " Ft");
        $('#munkavallaloiadokValue').text(parseInt($("#szjaValue").text())+parseInt($("#tbValue").text()) + " Ft");
        $('#evesadoalapValue').text(parseInt(parseInt(bruttoValue.value)*12) + " Ft");
        $('#evesszamitottadoValue').text(parseInt(parseInt($("#szjaValue").text())*12) + " Ft");
    } else {
        $(".calculated").text("0 Ft");
       
}

};



/*
$('#plusOneChild').on('click', () => {
    if(parseInt($('#numberOfChildren').text() = 0)) {
        let currentChildNum = parseInt($('#numberOfChildren').text());
        $('#numberOfChildren').text(currentChildNum + 1);
    }
    
    
});

$('#minusOneChild').on('click', () => {
    let currentChildNum = parseInt($('#numberOfChildren').text());
    $('#numberOfChildren').text(currentChildNum - 1);
});
*/

/*
if($('#numberOfChildren').val() < 10) {
    $('#plusOneChild').on('click', () => {
        let currentChildNum = parseInt($('#numberOfChildren').val());
        $('#numberOfChildren').val(currentChildNum + 1);
    });
}

$('#minusOneChild').on('click', () => {
    let currentChildNum = parseInt($('#numberOfChildren').val());
    $('#numberOfChildren').val(currentChildNum - 1);
});

<div class="checkboxFlex">
                    <img src=images/minus_sign.svg alt="minusOne" id="minusOneChild">
                    <input id="numberOfChildren" type="number" min="0" value="0" oninput="validity.valid||(value='');" >
                    <img src=images/plus_sign.svg alt="plusOne" id="plusOneChild">
                </div>



*/

















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

