let calcValues = () => {
    if(document.forms["bruttoInputForm"]["bruttoValue"].value != "" && document.forms["bruttoInputForm"]["bruttoValue"].value > 0	) {
        
        $('#havibruttoValue').text(parseInt(bruttoValue.value) + " Ft");
        $('#szjaValue').text(parseInt(parseInt(bruttoValue.value)*parseFloat(0.15)) - parseInt($("#megsporolhatoValue").text()) + " Ft");
        
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
            $('#szjaValue').text(parseInt($('#szjaValue').text()) - 5000 + " Ft");

        };
        
        if ($("#checkFogyatekos").is(':checked')) {
            $('#nettoValue').text(parseInt($('#nettoValue').text()) + 8370 + " Ft");
            $('#szjaValue').text(parseInt($('#szjaValue').text()) - 8370 + " Ft");

        };
        
        let taxDiff = $('#szjaValue').text();
        if (parseInt(taxDiff) < 0) {
            $('#szjaValue').text("0 Ft");
            $('#tbValue').text(parseInt($('#tbValue').text()) + parseInt(taxDiff) + " Ft");
            if (parseInt($('#tbValue').text()) < 0) {
                $('#tbValue').text("0 Ft");
            }
        };

        $('#evesszamitottadoValue').text(parseInt(parseInt($("#szjaValue").text())*12) + " Ft");



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


let radioCalculation = (childInputValue) =>  {
    if (parseInt(childInputValue) < 5) 
    {switch (parseInt(childInputValue)) {
    case 0: {
        $("#kedvezmenyValue").text(0 + " Ft");
        $("#megsporolhatoValue").text(0 + " Ft");
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
        $("#kedvezmenyValue").text(0 + " Ft");
        $("#megsporolhatoValue").text(0 + " Ft");
    }
    };
    } else {
        $("#kedvezmenyValue").text(childInputValue * 220000 + " Ft");
        $("#megsporolhatoValue").text(childInputValue * 33000 + " Ft");
    };
};

$('#numberOfChildrenForm input').on('input', function() {
    let childInputV = $(this).val();
    radioCalculation(childInputV);
});



$('#minusOneChild').on('click', () => {
    let cChildNum = parseInt($('#childNumCurrent').val());
    if (parseInt(cChildNum) > 0) {
    let newChildNum = parseInt(cChildNum) - 1;
    $('#childNumCurrent').val(newChildNum);
    radioCalculation(newChildNum);
    calcValues();
    };
});

$('#plusOneChild').on('click', () => {
    let cChildNum = parseInt($('#childNumCurrent').val());
    if (parseInt(cChildNum) < 10) {
    let newChildNum = parseInt(cChildNum) + 1;
    $('#childNumCurrent').val(newChildNum);
    radioCalculation(newChildNum);
    calcValues();
    } else if ($('#childNumCurrent').val() == false) {
    $('#childNumCurrent').val(1);
    radioCalculation(1);
    calcValues();
    };
});





















