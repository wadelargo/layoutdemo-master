
//<**********************Complete procedure**********************************************************************************************************************>

//<#########################after pressing done button###########################################################################################################>

function doneprocedure() {
    var t1 = document.getElementById('tabletocomplete');
    var l = t1.getElementsByTagName('tr').length;
    for (let i = 1; i < l - 3; i++) {
        var row1 = t1.getElementsByTagName('tr')[i];
        var bu1 = row1.getElementsByTagName('button')[0];
        bu1.classList.remove('buttoncolor2');
        bu1.classList.add('buttoncolor1');

    }
    for (let j = 7; j <= 8; j++) {
        var total1 = 0;
        var row2 = t1.getElementsByTagName('tr')[j];
        var col2 = row2.getElementsByTagName('td')[1];
        var inputtag1 = col2.getElementsByTagName('input')[0].value;
        var inputtag2 = col2.getElementsByTagName('input')[1].value;
        col2.innerHTML = "<p>" + eval(inputtag1 * inputtag2) + "</p>";
        var col3 = row2.getElementsByTagName('td')[2];
        var inputtag3 = col3.getElementsByTagName('input')[0].value;
        var select1 = col3.getElementsByTagName('select')[0].value;
        if (select1 == "%") {
            total1 = eval((inputtag1 * inputtag2) - ((inputtag1 * inputtag2) * (inputtag3 / 100)));
            col3.innerHTML = "<p>" + eval((inputtag1 * inputtag2) * (inputtag3 / 100)) + "</p>" + "<p>" + "(" + inputtag3 + select1 + ")" + "</p>";
        } else {
            total1 = eval((inputtag1 * inputtag2) - inputtag3);
            col3.innerHTML = "<p>" + inputtag3 + "</p>" + "<p>" + "(" + inputtag3 + select1 + ")" + "</p>";
        }
        var col4 = row2.getElementsByTagName('td')[3];
        col4.innerText = total1;

    }
    var TotalCost = 0;
    var Totaldiscount = 0;
    var grandtotal = 0;
    for (let k = 1; k < l - 1; k++) {
        var row3 = t1.getElementsByTagName('tr')[k];
        var col3 = row3.getElementsByTagName('td')[1];
        var addervalue = col3.getElementsByTagName('p')[0].innerText;
        TotalCost = eval(TotalCost + Number(addervalue));
        var col4 = row3.getElementsByTagName('td')[2];
        var adderdis = col4.getElementsByTagName('p')[0].innerText;
        Totaldiscount = eval(Totaldiscount + Number(adderdis));
        var col5 = row3.getElementsByTagName('td')[3];
        var addertotal = col5.innerText;
        grandtotal = eval(grandtotal + Number(addertotal));
    }
    var lastrow = t1.getElementsByTagName('tr')[l - 1];
    var colval = lastrow.getElementsByTagName('td')[1].getElementsByTagName('p')[1];
    colval.innerText = TotalCost;
    var coldis = lastrow.getElementsByTagName('td')[2].getElementsByTagName('p')[1];
    coldis.innerText = Totaldiscount;
    var colgrand = lastrow.getElementsByTagName('td')[3].getElementsByTagName('p')[1];
    colgrand.innerText = grandtotal;

    var img2 = document.createElement('img');
    img2.src = "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    img2.setAttribute('onclick', 'editinvoice()');
    document.getElementById('imghead').remove();
    document.getElementById('procedurehead').appendChild(img2);

}
//<####################edit in voice############################################################################################################>
//
function editinvoice() {
    var t1 = document.getElementById('tabletocomplete');
    var l = t1.getElementsByTagName('tr').length;
    for (let j = 7; j <= 8; j++) {
        var rowj = t1.getElementsByTagName('tr')[j];
        var colj1 = rowj.getElementsByTagName('td')[1];
        colj1.innerHTML = "<div class='unitcost'><input type='text' value='2'><img src='https://img.icons8.com/material-outlined/24/000000/delete-sign.png' /><input type='text' value='500'></div>";
        var colj2 = rowj.getElementsByTagName('td')[2];
        colj2.innerHTML = "<div class='discount'><input type='text' value='10'><select name='' id=''><option value='%'>%</option><option value='Rs'>Rs</option></select></div>";
    }
}

//####################add note button functionality ##############################################################################################>

document.getElementById('addnotelevel10').addEventListener('click', function(event) {
    document.getElementById('addnotelevel10').style.display = 'none';
    var inp = document.createElement('input');
    inp.setAttribute('type', 'text');
    inp.setAttribute('placeholder', 'add notes');
    inp.setAttribute('id', 'addnbox10')
    inp.setAttribute('onchange', 'setnotes10()')
    document.getElementById('div10').appendChild(inp);
});

function setnotes10() {
    var note = document.getElementById('addnbox10').value;
    document.getElementById('addnbox10').style.display = 'none';
    var p10 = document.createElement('p');
    p10.innerText = note;
    document.getElementById('div10').appendChild(p10);
}
//###################add note 11#####################################################################################################################>

document.getElementById('addnotelevel11').addEventListener('click', function() {
    document.getElementById('addnotelevel11').style.display = 'none';
    var inp2 = document.createElement('input');
    inp2.setAttribute('type', 'text');
    inp2.setAttribute('placeholder', 'add notes');
    inp2.setAttribute('id', 'addnbox11');
    inp2.setAttribute('onchange', 'setnotes11()');
    document.getElementById('div11').appendChild(inp2);
});

function setnotes11() {
    var note11 = document.getElementById('addnbox11').value;
    document.getElementById('addnbox11').style.display = 'none';
    var p11 = document.createElement('p');
    p11.innerText = note11;
    document.getElementById('div11').appendChild(p11);
}
//#####################delete button functionality#######################################################################################################>

$("#tabletocomplete").on("click", "#cancleout1", function(event) {
    $(this).closest("tr").remove();
});

//#######################end################