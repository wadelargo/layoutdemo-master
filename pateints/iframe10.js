
//<*******************************Treatment Plan****************************************************************************************************************************************>
//<***************************************************************************************************************************************************************************************>

//##########event listener to add notes1###################################################################################################################################################>
document.getElementById("addn").addEventListener("click", function(event) {
    document.getElementById("addn").style.display = "none";
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("placeholder", "add notes");
    inp.setAttribute("id", "addnbox");
    inp.setAttribute("onchange", "setnotes()");
    document.getElementById("roott").appendChild(inp);
});

function setnotes() {
    var note = document.getElementById("addnbox").value;
    document.getElementById("addnbox").style.display = "none";
    var p0 = document.createElement("p");
    p0.innerText = note;
    document.getElementById("roott").appendChild(p0);
}
//#######################event listner to add notes2######################################################################################>
document.getElementById("addn2").addEventListener("click", function(event) {
    document.getElementById("addn2").style.display = "none";
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("placeholder", "add notes");
    inp.setAttribute("id", "addnbox2");
    inp.setAttribute("onchange", "setnotes2()");
    document.getElementById("roott2").appendChild(inp);
});

function setnotes2() {
    var note = document.getElementById("addnbox2").value;
    document.getElementById("addnbox2").style.display = "none";
    var p0 = document.createElement("p");
    p0.innerText = note;
    document.getElementById("roott2").appendChild(p0);
}
//#########################event listner to add notes3###################################################################################################################################>

document.getElementById("addn3").addEventListener("click", function(event) {
    document.getElementById("addn3").style.display = "none";
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("placeholder", "add notes");
    inp.setAttribute("id", "addnbox3");
    inp.setAttribute("onchange", "setnotes3()");
    document.getElementById("roott3").appendChild(inp);
});

function setnotes3() {
    var note = document.getElementById("addnbox3").value;
    document.getElementById("addnbox3").style.display = "none";
    var p0 = document.createElement("p");
    p0.innerText = note;
    document.getElementById("roott3").appendChild(p0);
}
//##########################treatment plan costs##############################################################################################################################################>
function total() {
    var t = document.getElementById("treatmenttable");
    var len = t.getElementsByTagName("tr").length;
    for (let i = 1; i < len - 1; i++) {
        row = t.getElementsByTagName("tr")[i];
        var col1 = row.getElementsByTagName("td")[1];
        var val1 = col1.getElementsByTagName("input")[0].value;
        var val2 = col1.getElementsByTagName("input")[1].value;
        var ans = eval(val1 * val2);
        var col2 = row.getElementsByTagName("td")[2];
        var val3 = col2.getElementsByTagName("input")[0].value;
        var sign = col2.getElementsByTagName("select")[0].value;
        if (sign == "%") {
            var total = eval(ans - ans * (val3 / 100));
        } else {
            var total = eval(ans - val3);
        }
        var col4 = row.getElementsByTagName("td")[3];
        col4.getElementsByTagName("p")[0].innerText = total;
    }
}
//#######################delete row######################################################################################################################################################>
$("#treatmenttable").on("click", "#cancleout", function(event) {
    $(this).closest("tr").remove();
});

//##########################done treatment button###################################################################################>

function donetreatment() {
    document.getElementById("treatmentheading").innerHTML = "";
    var p4 = document.createElement("p");
    p4.innerText = "Treatment Plan";
    document.getElementById("treatmentheading").appendChild(p4);

    var img4 = document.createElement("img");
    img4.src =
        "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    document.getElementById("treatmentheading").appendChild(img4);

    //setting costs
    var t = document.getElementById("treatmenttable");
    var len = t.getElementsByTagName("tr").length;
    var final = 0;
    for (let i = 1; i < len - 1; i++) {
        var row = t.getElementsByTagName("tr")[i];
        var col1 = row.getElementsByTagName("td")[1];
        var val1 = col1.getElementsByTagName("input")[0].value;
        var val2 = col1.getElementsByTagName("input")[1].value;
        var ans = eval(val1 * val2);
        col1.innerHTML = "";
        col1.innerText = ans;
        var col2 = row.getElementsByTagName("td")[2];
        var val3 = col2.getElementsByTagName("input")[0].value;
        var total = eval(ans - ans * (val3 / 100));
        final += total;
        col2.innerHTML = "";
        col2.innerText = val3 + " " + "%";
        var col4 = row.getElementsByTagName("td")[3];
        col4.getElementsByTagName("p")[0].innerText = total;
    }
    var finalrow = t.getElementsByTagName("tr")[len - 1];
    finalrow.getElementsByTagName("td")[3].innerText = final;
}
