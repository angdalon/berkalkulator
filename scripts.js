
/*
let doAll = () => {
    calcValues();
    radioCalculation();
}
*/



let calcValues = () => {
    if(document.forms["bruttoInputForm"]["bruttoValue"].value != "" && document.forms["bruttoInputForm"]["bruttoValue"].value > 0	) {

        
        

        
        
        $('#havibruttoValue').text(parseInt(bruttoValue.value) + " Ft");
        $('#szjaValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.15)) + " Ft");
        $('#tbValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.185)) + " Ft");
        
        $('#evesadoalapValue').text(parseInt(parseInt(bruttoValue.value)*12) + " Ft");
        $('#evesszamitottadoValue').text(parseInt(parseInt($("#szjaValue").text())*12) + " Ft");




        $('#osszkoltsegValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(1.17)) + " Ft");
        $('#osszberkoltsegValue').text($('#osszkoltsegValue').text());

        $('#szochoValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.155)) + " Ft");
        $('#szakkepzesiValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.015)) + " Ft");
        $('#munkaltatoijarulekokValue').text(parseInt($('#szochoValue').text()) + parseInt($('#szakkepzesiValue').text()) + " Ft");
        $('#bruttoberValue').text($('#havibruttoValue').text());
        

        $('#nettoValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.665)) + parseInt($("#megsporolhatoValue").text())  + " Ft");
        
        if ($("#checkHazas").is(':checked')) {
            $('#nettoValue').text(parseInt($('#nettoValue').text()) + 5000 + " Ft");

        };
        
        if ($("#checkFogyatekos").is(':checked')) {
            $('#nettoValue').text(parseInt($('#nettoValue').text()) + 8370 + " Ft");
        };
        
        if ($("#checkNyugdijas").is(':checked')) {
            $('#nettoValue').text(parseInt($('#nettoValue').text()) + parseInt($('#tbValue').text()) + " Ft");
            $('#tbValue').text("0 Ft");
            $('#osszkoltsegValue').text($('#havibruttoValue').text())
            $('#osszberkoltsegValue').text($('#osszkoltsegValue').text());
            $('#szochoValue').text("0 Ft");
            $('#szakkepzesiValue').text("0 Ft");
            $('#munkaltatoijarulekokValue').text("0 Ft");

        };



        
        if (parseInt($('#nettoValue').text()) > parseInt($('#bruttoValue').val())) {
            $('#nettoValue').text($('#bruttoValue').val() + " Ft");
        };
        
        $('#munkavallaloiadokValue').text(parseInt($("#szjaValue").text())+parseInt($("#tbValue").text()) + " Ft");





    } else {
        $(".calculated").text("0 Ft");
       
};

};


let radioCalculation = (radioValue) =>  {
    switch (parseInt(radioValue)) {
    case 0: {
        $("#kedvezmenyValue").text(0 + " Ft");
        $("#megsporolhatoValue").text(0 + " Ft");
        //$('#nettoValue').text(parseInt(parseInt($("#nettoValue").text()) + 10000) + " Ft");
        break;
    } case 1: {
        $("#kedvezmenyValue").text(66670 + " Ft");
        $("#megsporolhatoValue").text(10000 + " Ft");
        break;
    } case 2: {
        $("#kedvezmenyValue").text(2 * 133330 + " Ft");
        $("#megsporolhatoValue").text(40000 + " Ft");
        break;
    } case 3: {
        $("#kedvezmenyValue").text(3 * 220000 + " Ft");
        $("#megsporolhatoValue").text(99000 + " Ft");
        break;
    } case 4: {
        $("#kedvezmenyValue").text(4 * 220000 + " Ft");
        $("#megsporolhatoValue").text(132000 + " Ft");
        break;
    } default: {
        console.log(parseInt(radioValue));
    }
    };   
};

$('#numberOfChildrenFieldset input:radio').on('change', function() {
    let rV = $(this).val();
    radioCalculation(rV);
});






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

