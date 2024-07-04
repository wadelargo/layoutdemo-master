$("table.order-list").on("click", "#crossoout", function(event) {
    $(this).closest("tr").remove();
    counter -= 1;
});
//<#############################################Edit Button##########################################################################################################.

document.getElementById("Edit-btn").addEventListener("click", function() {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "enter general instruction");
    input.setAttribute("id", "generalinstructioninp");
    document.getElementById("generalintraction").appendChild(input);
    document.getElementById("Edit-btn").style.display = "none";
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "addinstruction");
    btn.innerHTML = "Add";
    document.getElementById("generalintraction").appendChild(btn);
    document.getElementById("Edit-btn").style.display = "none";
    document
        .getElementById("addinstruction")
        .addEventListener("click", function() {
            var ginstruction = document.getElementById("generalinstructioninp").value;
            var p = document.createElement("p");
            p.innerText = ginstruction;
            document.getElementById("generalinstructioninp").remove();
            document.getElementById("addinstruction").remove();
            document.getElementById("generalintraction").appendChild(p);
        });
});

//#############################getting check box checked######################################################################################################################################################>

$("#check").on("click", function() {
    if (document.getElementById("check").checked) {
        document.getElementById("check").remove();
    }
});

//<##########################dosage selection################################################################################################################################################################>

function doseChange(selectObj) {
    var dosage = document.getElementById("customp").innerText;
    if (dosage == "regular") {
        document.getElementById("customp").innerText = "custom";
        document.getElementById("regular").innerHTML = "";

        if ($("#dosagetype").is(":empty")) {
            var inputtab = document.createElement("input");
            inputtab.setAttribute("type", "text");
            document.getElementById("dosagetype").appendChild(inputtab);
        }
        if ($("#dosageopt").is(":empty")) {
            document.getElementById("tablets").innerText = "Tablet(s)";
            var select = document.createElement("select");
            select.setAttribute("class", "presopt");
            select.setAttribute("id", "doseselect");
            document.getElementById("dosageopt").appendChild(select);

            //option1
            var option1 = document.createElement("option");
            option1.setAttribute("value", "Twice Daily");
            var o1 = document.createTextNode("Twice Daily");
            option1.appendChild(o1);
            document.getElementById("doseselect").appendChild(option1);

            //option2
            var option2 = document.createElement("option");
            option2.setAttribute("value", "Thrice Daily");
            var o2 = document.createTextNode("Thrice Daily");
            option2.appendChild(o2);
            document.getElementById("doseselect").appendChild(option2);

            //option3
            var option3 = document.createElement("option");
            option3.setAttribute("value", "At night");
            var o3 = document.createTextNode("At night");
            option3.appendChild(o3);
            document.getElementById("doseselect").appendChild(option3);

            //option4
            var option4 = document.createElement("option");
            option4.setAttribute("value", "Once Morning");
            var o4 = document.createTextNode("Once Morning");
            option4.appendChild(o4);
            document.getElementById("doseselect").appendChild(option4);

            //option5
            var option5 = document.createElement("option");
            option5.setAttribute("value", "as needed");
            var o5 = document.createTextNode("as needed");
            option5.appendChild(o5);
            document.getElementById("doseselect").appendChild(option5);

            //option6
            var option6 = document.createElement("option");
            option6.setAttribute("value", "once a week");
            var o6 = document.createTextNode("once a week");
            option6.appendChild(o6);
            document.getElementById("doseselect").appendChild(option6);

            //option7
            var option7 = document.createElement("option");
            option7.setAttribute("value", "Four times a day");
            var o7 = document.createTextNode("Four times a day");
            option7.appendChild(o7);
            document.getElementById("doseselect").appendChild(option7);

            //option8
            var option8 = document.createElement("option");
            option8.setAttribute("value", "twice a week");
            var o8 = document.createTextNode("twice a week");
            option8.appendChild(o8);
            document.getElementById("doseselect").appendChild(option8);

            //option9
            var option9 = document.createElement("option");
            option9.setAttribute("value", "every other day");
            var o9 = document.createTextNode("every other day");
            option9.appendChild(o9);
            document.getElementById("doseselect").appendChild(option9);

            //option10
            var option10 = document.createElement("option");
            option10.setAttribute("value", "every other hour");
            var o10 = document.createTextNode("every other hour");
            option10.appendChild(o10);
            document.getElementById("doseselect").appendChild(option10);

            //option11
            var option11 = document.createElement("option");
            option11.setAttribute("value", "every four hours");
            var o11 = document.createTextNode("every four hour");
            option11.appendChild(o11);
            document.getElementById("doseselect").appendChild(option11);

            //option12
            var option12 = document.createElement("option");
            option12.setAttribute("value", "every 2 hours");
            var o12 = document.createTextNode("every 2 hours");
            option12.appendChild(o12);
            document.getElementById("doseselect").appendChild(option12);
        }
    }
    if (dosage == "custom") {
        document.getElementById("customp").innerText = "regular";
        document.getElementById("dosageopt").innerHTML = "";
        document.getElementById("dosagetype").innerHTML = "";
        document.getElementById("tablets").innerHTML = "";
        if ($("#regular").is(":empty")) {
            var input1 = document.createElement("input");
            input1.setAttribute("type", "text");
            document.getElementById("regular").appendChild(input1);
            var p1 = document.createElement("p");
            p1.innerText = " - ";
            document.getElementById("regular").appendChild(p1);
            var input2 = document.createElement("input");
            input2.setAttribute("type", "text");
            document.getElementById("regular").appendChild(input2);
            var p2 = document.createElement("p");
            p2.innerText = " - ";
            document.getElementById("regular").appendChild(p2);
            var input3 = document.createElement("input");
            input3.setAttribute("type", "text");
            document.getElementById("regular").appendChild(input3);
        }
    }
}

//<##############################################dosagerow2##################################################################################################################################################>

function doseChange2(selectObj) {
    var dosage = document.getElementById("customp2").innerText;
    if (dosage == "regular") {
        document.getElementById("customp2").innerText = "custom";
        document.getElementById("regular2").innerHTML = "";

        if ($("#dosagetype2").is(":empty")) {
            var inputtab = document.createElement("input");
            inputtab.setAttribute("type", "text");
            document.getElementById("dosagetype2").appendChild(inputtab);
        }
        if ($("#dosageopt2").is(":empty")) {
            document.getElementById("tablets2").innerText = "Tablet(s)";
            var select = document.createElement("select");
            select.setAttribute("class", "presopt");
            select.setAttribute("id", "doseselect2");
            document.getElementById("dosageopt2").appendChild(select);

            //option1
            var option1 = document.createElement("option");
            option1.setAttribute("value", "Twice Daily");
            var o1 = document.createTextNode("Twice Daily");
            option1.appendChild(o1);
            document.getElementById("doseselect2").appendChild(option1);

            //option2
            var option2 = document.createElement("option");
            option2.setAttribute("value", "Thrice Daily");
            var o2 = document.createTextNode("Thrice Daily");
            option2.appendChild(o2);
            document.getElementById("doseselect2").appendChild(option2);

            //option3
            var option3 = document.createElement("option");
            option3.setAttribute("value", "At night");
            var o3 = document.createTextNode("At night");
            option3.appendChild(o3);
            document.getElementById("doseselect2").appendChild(option3);

            //option4
            var option4 = document.createElement("option");
            option4.setAttribute("value", "Once Morning");
            var o4 = document.createTextNode("Once Morning");
            option4.appendChild(o4);
            document.getElementById("doseselect2").appendChild(option4);

            //option5
            var option5 = document.createElement("option");
            option5.setAttribute("value", "as needed");
            var o5 = document.createTextNode("as needed");
            option5.appendChild(o5);
            document.getElementById("doseselect2").appendChild(option5);

            //option6
            var option6 = document.createElement("option");
            option6.setAttribute("value", "once a week");
            var o6 = document.createTextNode("once a week");
            option6.appendChild(o6);
            document.getElementById("doseselect2").appendChild(option6);

            //option7
            var option7 = document.createElement("option");
            option7.setAttribute("value", "Four times a day");
            var o7 = document.createTextNode("Four times a day");
            option7.appendChild(o7);
            document.getElementById("doseselect2").appendChild(option7);

            //option8
            var option8 = document.createElement("option");
            option8.setAttribute("value", "twice a week");
            var o8 = document.createTextNode("twice a week");
            option8.appendChild(o8);
            document.getElementById("doseselect2").appendChild(option8);

            //option9
            var option9 = document.createElement("option");
            option9.setAttribute("value", "every other day");
            var o9 = document.createTextNode("every other day");
            option9.appendChild(o9);
            document.getElementById("doseselect2").appendChild(option9);

            //option10
            var option10 = document.createElement("option");
            option10.setAttribute("value", "every other hour");
            var o10 = document.createTextNode("every other hour");
            option10.appendChild(o10);
            document.getElementById("doseselect2").appendChild(option10);

            //option11
            var option11 = document.createElement("option");
            option11.setAttribute("value", "every four hours");
            var o11 = document.createTextNode("every four hour");
            option11.appendChild(o11);
            document.getElementById("doseselect2").appendChild(option11);

            //option12
            var option12 = document.createElement("option");
            option12.setAttribute("value", "every 2 hours");
            var o12 = document.createTextNode("every 2 hours");
            option12.appendChild(o12);
            document.getElementById("doseselect2").appendChild(option12);
        }
    }
    if (dosage == "custom") {
        document.getElementById("customp2").innerText = "regular";
        document.getElementById("dosageopt2").innerHTML = "";
        document.getElementById("dosagetype2").innerHTML = "";
        document.getElementById("tablets2").innerHTML = "";
        if ($("#regular2").is(":empty")) {
            var input1 = document.createElement("input");
            input1.setAttribute("type", "text");
            document.getElementById("regular2").appendChild(input1);
            var p1 = document.createElement("p");
            p1.innerText = " - ";
            document.getElementById("regular2").appendChild(p1);
            var input2 = document.createElement("input");
            input2.setAttribute("type", "text");
            document.getElementById("regular2").appendChild(input2);
            var p2 = document.createElement("p");
            p2.innerText = " - ";
            document.getElementById("regular2").appendChild(p2);
            var input3 = document.createElement("input");
            input3.setAttribute("type", "text");
            document.getElementById("regular2").appendChild(input3);
        }
    }
}

//<###############################tr row 3####################################################################################################################################################################>

function doseChange3(selectObj) {
    var dosage = document.getElementById("customp3").innerText;
    if (dosage == "regular") {
        document.getElementById("customp3").innerText = "custom";
        document.getElementById("regular3").innerHTML = "";

        if ($("#dosagetype3").is(":empty")) {
            var inputtab = document.createElement("input");
            inputtab.setAttribute("type", "text");
            document.getElementById("dosagetype3").appendChild(inputtab);
        }
        if ($("#dosageopt3").is(":empty")) {
            document.getElementById("tablets3").innerText = "Tablet(s)";
            var select = document.createElement("select");
            select.setAttribute("class", "presopt");
            select.setAttribute("id", "doseselect3");
            document.getElementById("dosageopt3").appendChild(select);

            //option1
            var option1 = document.createElement("option");
            option1.setAttribute("value", "Twice Daily");
            var o1 = document.createTextNode("Twice Daily");
            option1.appendChild(o1);
            document.getElementById("doseselect3").appendChild(option1);

            //option2
            var option2 = document.createElement("option");
            option2.setAttribute("value", "Thrice Daily");
            var o2 = document.createTextNode("Thrice Daily");
            option2.appendChild(o2);
            document.getElementById("doseselect3").appendChild(option2);

            //option3
            var option3 = document.createElement("option");
            option3.setAttribute("value", "At night");
            var o3 = document.createTextNode("At night");
            option3.appendChild(o3);
            document.getElementById("doseselect3").appendChild(option3);

            //option4
            var option4 = document.createElement("option");
            option4.setAttribute("value", "Once Morning");
            var o4 = document.createTextNode("Once Morning");
            option4.appendChild(o4);
            document.getElementById("doseselect3").appendChild(option4);

            //option5
            var option5 = document.createElement("option");
            option5.setAttribute("value", "as needed");
            var o5 = document.createTextNode("as needed");
            option5.appendChild(o5);
            document.getElementById("doseselect3").appendChild(option5);

            //option6
            var option6 = document.createElement("option");
            option6.setAttribute("value", "once a week");
            var o6 = document.createTextNode("once a week");
            option6.appendChild(o6);
            document.getElementById("doseselect3").appendChild(option6);

            //option7
            var option7 = document.createElement("option");
            option7.setAttribute("value", "Four times a day");
            var o7 = document.createTextNode("Four times a day");
            option7.appendChild(o7);
            document.getElementById("doseselect3").appendChild(option7);

            //option8
            var option8 = document.createElement("option");
            option8.setAttribute("value", "twice a week");
            var o8 = document.createTextNode("twice a week");
            option8.appendChild(o8);
            document.getElementById("doseselect3").appendChild(option8);

            //option9
            var option9 = document.createElement("option");
            option9.setAttribute("value", "every other day");
            var o9 = document.createTextNode("every other day");
            option9.appendChild(o9);
            document.getElementById("doseselect3").appendChild(option9);

            //option10
            var option10 = document.createElement("option");
            option10.setAttribute("value", "every other hour");
            var o10 = document.createTextNode("every other hour");
            option10.appendChild(o10);
            document.getElementById("doseselect3").appendChild(option10);

            //option11
            var option11 = document.createElement("option");
            option11.setAttribute("value", "every four hours");
            var o11 = document.createTextNode("every four hour");
            option11.appendChild(o11);
            document.getElementById("doseselect3").appendChild(option11);

            //option12
            var option12 = document.createElement("option");
            option12.setAttribute("value", "every 2 hours");
            var o12 = document.createTextNode("every 2 hours");
            option12.appendChild(o12);
            document.getElementById("doseselect3").appendChild(option12);
        }
    }
    if (dosage == "custom") {
        document.getElementById("customp3").innerText = "regular";
        document.getElementById("dosageopt3").innerHTML = "";
        document.getElementById("dosagetype3").innerHTML = "";
        document.getElementById("tablets3").innerHTML = "";
        if ($("#regular3").is(":empty")) {
            var input1 = document.createElement("input");
            input1.setAttribute("type", "text");
            document.getElementById("regular3").appendChild(input1);
            var p1 = document.createElement("p");
            p1.innerText = " - ";
            document.getElementById("regular3").appendChild(p1);
            var input2 = document.createElement("input");
            input2.setAttribute("type", "text");
            document.getElementById("regular3").appendChild(input2);
            var p2 = document.createElement("p");
            p2.innerText = " - ";
            document.getElementById("regular3").appendChild(p2);
            var input3 = document.createElement("input");
            input3.setAttribute("type", "text");
            document.getElementById("regular3").appendChild(input3);
        }
    }
}

//<############################################Done button to set prescription################################################################################################################################>

function setprescription() {
    var img = document.createElement("img"); // adding edit icon
    img.src =
        "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    var src = document.getElementById("prescription");
    src.appendChild(img);
    document.getElementById("prescriptionsetting").remove();
    var table = document.getElementById("prescriptiontable");
    var l = table.rows.length;

    for (var i = 1; i < l; i++) {
        var l1 = document.getElementById("prescriptiontable").rows[i].cells.length;

        for (var j = 0; j < l1 - 1; j++) {
            var x = document.getElementById("prescriptiontable").rows[i].cells[j];
            var len = x.getElementsByTagName("input").length;
            var len2 = x.getElementsByTagName("select").length;

            if (len == 1 && len2 == 0) {
                var val = x.getElementsByTagName("input")[0].value;
                var p = document.createElement("p");
                p.innerText = val;
                x.getElementsByTagName("p")[0].appendChild(p);
                x.getElementsByTagName("input")[0].remove();
            }
            if (len == 2 && len2 == 0) {
                var val = x.getElementsByTagName("input")[0].value;
                x.getElementsByTagName("p")[0].innerText = val;
                x.getElementsByTagName("input")[0].remove();
                var val2 = x.getElementsByTagName("input")[0].value;
                x.getElementsByTagName("p")[1].innerText = val2;
            }
            if (len == 0 && len2 == 1) {
                var val = x.getElementsByTagName("select")[0].value;
                x.getElementsByTagName("p")[0].innerText = val;
            }
            if (len == 1 && len2 == 1) {
                var val = x.getElementsByTagName("input")[0].value;
                var val2 = x.getElementsByTagName("select")[0].value;
                x.getElementsByTagName("p")[0].innerText = val;
                x.getElementsByTagName("p")[1].innerText = val2;
            }
        }
    }
}

//<#################################cancle button to set prescription###############################################################################################################################################################################>

function cancleprescription() {
    console.log("cancle pressed");
}
