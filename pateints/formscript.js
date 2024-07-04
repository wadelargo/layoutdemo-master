//<************************************************************************************************************************************************************>
//functionality for vital signs
//<***************************************************************************************************************************************************************>
function DoneVitalSigns() {
    document.getElementById("vsimg").remove();
    var img = document.createElement("img"); // adding edit icon
    img.src =
        "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    var src = document.getElementById("vitalsigns");
    src.appendChild(img);

    //weight
    var weight = document.getElementById("weightInput").value;
    document.getElementById("pweight").innerText = weight;
    document.getElementById("weightInput").style.display = "none";
    document.getElementById("pweight").style.display = "block";

    //bp
    var sbp = document.getElementById("Systabolicbp").value;
    var dbp = document.getElementById("Diastolicbp").value;

    document.getElementById("pSystabolic").innerText = sbp;
    document.getElementById("pDiastolic").innerText = dbp;

    var bpunit = document.getElementById("bpunit").value;
    document.getElementById("bpunitp").innerText = bpunit;

    var bpposition = document.getElementById("bpposition").value;
    document.getElementById("bppositionp").innerText = " " + bpposition;

    //displaying
    document.getElementById("Systabolicbp").style.display = "none";
    document.getElementById("pSystabolic").style.display = "block";

    document.getElementById("Diastolicbp").style.display = "none";
    document.getElementById("pDiastolic").style.display = "block";

    document.getElementById("bpunit").style.display = "none";
    document.getElementById("bpposition").style.display = "none";

    //pulse

    var pulse = document.getElementById("pulse").value;
    document.getElementById("ppulse").innerText = pulse;

    document.getElementById("pulse").style.display = "none";

    //body tempreture
    var bodytemp = document.getElementById("bodytemp").value;
    var bodytempunit = document.getElementById("bodytempunit").value;
    var bodytemptesting = document.getElementById("bodytemptesting").value;

    document.getElementById("pbodytemp").innerText = " " + bodytemp;
    document.getElementById("pbodytempunit").innerText = " " + bodytempunit + " ";
    document.getElementById("pbodytemptesting").innerText =
        " " + bodytemptesting + " ";

    document.getElementById("bodytemp").style.display = "none";
    document.getElementById("bodytempunit").style.display = "none";
    document.getElementById("bodytemptesting").style.display = "none";

    //respiratory rate 

    var breath = document.getElementById("Breaths").value;
    document.getElementById("pbreath").innerHTML = breath;
    document.getElementById("Breaths").style.display = "none";

    //menstrual cycle

    var mc = document.getElementById("mc");
    document.getElementById("pmc").innerHTML = mc.value;
    mc.style.display = "none";

    //blood glucose level

    var bcl = document.getElementById("bcl");
    document.getElementById("pbcl").innerText = bcl.value;
    bcl.style.display = "none";

    //blood group

    var bg = document.getElementById("bg");
    document.getElementById("pbg").innerText = bg.value;
    bg.style.display = "none";
}

//<************************************************************************************************************************************************************>
//functionality for clinical Notes
//<**********************************************************************************************************************************************************************>
//##########################complaints#############################################################################################################

//complaints hold the div of clinical notes.
var divcomplaints = [];
var complaints = document.getElementById("Complaints");
complaints.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        var p = document.createElement("p");
        p.innerHTML = "<ul><li>" + complaints.value + "</li></ul>";
        divcomplaints.push(p);
        document.getElementById("patientconplain").appendChild(p);
        document.getElementById("Complaints").value = null;
    }
});

function setComplaint() {
    document.getElementById("patientconplain").innerHTML = "";
    divcomplaints.forEach((item) => {
        document.getElementById("complaintslist").appendChild(item);
    });
    document.getElementById("addcomplaints").style.display = "none";
    document.getElementById("deletecomplaints").style.display = "block";
}

function deletecomplaint() {
    console.log("delete complaints");
}

function complaintfile() {
    document.getElementById("complaintfile").style.display = "block";
    document.getElementById("complaintfilelabel").style.display = "none";
    alert("file uploaded successfully");
}

//adding image to contents of complaint
var complaintCam = document.getElementById("complaintcam");
complaintCam.addEventListener("click", complaintimage);

function complaintimage() {
    var complaintcapture = document.getElementById("complaint-capture");
    var streamcomplaints = document.getElementById("streamcomplaints"); //stream area
    var capturecomplaint = document.getElementById("capturecomplaint"); //capture canvas
    var snapshotcomplaint = document.getElementById("snapshotcomplaint"); //snapshot div

    var cameraStream = null;

    function startStreaming() {
        var mediaSupport = "mediaDevices" in navigator;
        document.getElementById("complaintcam").style.display = "none";
        document.getElementById("playareacomplaint").style.display = "block";

        if (mediaSupport && null == cameraStream) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(function(mediaStream) {
                    cameraStream = mediaStream;

                    streamcomplaints.srcObject = mediaStream;

                    streamcomplaints.play();
                })
                .catch(function(err) {
                    console.log("unable to access camera:" + err);
                });
        } else {
            alert("your browser does not support media devices.");
            return;
        }
    }

    startStreaming();
    complaintcapture.addEventListener("click", captureSnapshot);

    function captureSnapshot() {
        document.getElementById("playareacomplaint").style.display = "none";
        document.getElementById("complaintimage").style.display = "block";

        if (null != cameraStream) {
            var ctx = capturecomplaint.getContext("2d");

            var img = new Image();
            ctx.drawImage(
                streamcomplaints,
                0,
                0,
                capturecomplaint.width,
                capturecomplaint.height
            );

            img.src = capturecomplaint.toDataURL("complaint/png");
            img.width = 120;

            snapshotcomplaint.innerHTML = "";

            snapshotcomplaint.appendChild(img);
        }

        function stopstreaming() {
            if (null != cameraStream) {
                var track = cameraStream.getTracks()[0];

                track.stop();

                streamcomplaints.load();

                cameraStream = null;
            }
        }
        stopstreaming();
    }
}

//###########Summary###################################################################################################################
var divsummary = [];
var summarys = document.getElementById("summarytextarea");
summarys.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        var p = document.createElement("p");
        p.innerHTML = "<ul><li>" + summarys.value + "</li></ul>";
        divsummary.push(p);
        document.getElementById("summarys").appendChild(p);
        document.getElementById("summarytextarea").value = null;
    }
});

function setsummary() {
    document.getElementById("summarys").innerHTML = "";
    divsummary.forEach((item) => {
        document.getElementById("summarylist").appendChild(item);
    });
    document.getElementById("addsummary").style.display = "none";
    document.getElementById("deletesummary").style.display = "block";
}

function deletesummary() {
    console.log("delete summary");
}

function summaryfile() {
    document.getElementById("summaryfile").style.display = "block";
    document.getElementById("summaryfilelabel").style.display = "none";
    alert("file uploaded successfully");
}
///adding image and file to contents of summary.
var summaryCam = document.getElementById("summarycam");

summaryCam.addEventListener("click", summaryimage);

function summaryimage() {
    var summarycapture = document.getElementById("summary-capture"); //captureimage btn
    var streamsummary = document.getElementById("streamsummary");
    var capturesummary = document.getElementById("capturesummary"); //capture canvas
    var snapshotsummary = document.getElementById("snapshotsummary");
    var cameraStream = null;

    function startStreaming() {
        var mediaSupport = "mediaDevices" in navigator;
        document.getElementById("summarycam").style.display = "none";
        document.getElementById("playareasummary").style.display = "block";

        if (mediaSupport && null == cameraStream) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(function(mediaStream) {
                    cameraStream = mediaStream;

                    streamsummary.srcObject = mediaStream;

                    streamsummary.play();
                })
                .catch(function(err) {
                    console.log("unable to access camera " + err);
                });
        } else {
            alert("your browser does not support media devices");
            return;
        }
    }
    startStreaming();
    summarycapture.addEventListener("click", captureSnapshot);

    function captureSnapshot() {
        document.getElementById("playareasummary").style.display = "none";
        document.getElementById("summaryimage").style.display = "block";
        if (null != cameraStream) {
            var ctx = capturesummary.getContext("2d");
            var img = new Image();

            ctx.drawImage(
                streamsummary,
                0,
                0,
                capturesummary.width,
                capturesummary.height
            );
            img.src = capturesummary.toDataURL("summary/png");
            img.width = 120;
            snapshotsummary.innerHTML = "";
            snapshotsummary.appendChild(img);
        }

        function stopStreaming() {
            if (null != cameraStream) {
                var track = cameraStream.getTracks()[0];
                track.stop();
                streamsummary.load();

                cameraStream = null;
            }
        }
        stopStreaming();
    }
}


//#########################Observation##########################################################################################################################
var divobservation = [];
var observation = document.getElementById("observationtextarea");

observation.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        var p = document.createElement("p");
        p.innerHTML = "<ul><li>" + observation.value + "</li></ul>";
        divobservation.push(p);
        document.getElementById("observations").appendChild(p);
        document.getElementById("observationtextarea").value = null;
    }
});

function setobservation() {
    document.getElementById("observations").innerHTML = "";
    divobservation.forEach((item) => {
        document.getElementById("observationlist").appendChild(item);
    });
    document.getElementById("addobservation").style.display = "none";
    document.getElementById("deleteobservation").style.display = "block";
}

function deleteobservation() {
    console.log("deleted observation");
}

function observationfile() {
    document.getElementById("observationfilelabel").style.display = "none";
    document.getElementById("observationfile").style.display = "block";
    alert("file uploaded successfully");
}

//add image
var observationCam = document.getElementById("observationcam");

observationCam.addEventListener("click", observationimage);

function observationimage() {
    var observationcapture = document.getElementById("observation-capture");
    var streamobservation = document.getElementById("streamobservation");
    var captureobservation = document.getElementById("captureobservation");
    var snapshotobservation = document.getElementById("snapshotobservation");

    var cameraStream = null;

    function startStreaming() {
        var mediaSupport = "mediaDevices" in navigator;
        document.getElementById("observationcam").style.display = "none";

        document.getElementById("playareaobservation").style.display = "block";

        if (mediaSupport && null == cameraStream) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(function(mediaStream) {
                    cameraStream = mediaStream;

                    streamobservation.srcObject = mediaStream;

                    streamobservation.play();
                })
                .catch(function(err) {
                    console.log("unable to access camera:" + err);
                });
        } else {
            alert("your browser does not support media devices");
            return;
        }
    }
    startStreaming();
    observationcapture.addEventListener("click", captureSnapshot);

    function captureSnapshot() {
        document.getElementById("playareaobservation").style.display = "none";
        document.getElementById("observationimage").style.display = "block";

        if (null != cameraStream) {
            var ctx = captureobservation.getContext("2d");

            var img = new Image();

            ctx.drawImage(
                streamobservation,
                0,
                0,
                captureobservation.width,
                captureobservation.height
            );

            img.src = captureobservation.toDataURL("observation/png");

            img.width = 120;

            snapshotobservation.innerHTML = "";

            snapshotobservation.appendChild(img);
        }

        function stopStreaming() {
            if (null != cameraStream) {
                var track = cameraStream.getTracks()[0];

                track.stop();
                streamobservation.load();

                cameraStream = null;
            }
        }
        stopStreaming();
    }
}

//#####################################daignoses#############################################################################################################################
var divdaignoses = [];
var daignoses = document.getElementById("daignosestextarea");

daignoses.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        var p = document.createElement("p");
        p.innerHTML = "<ul><li>" + daignoses.value + "</li></ul>";
        divdaignoses.push(p);
        document.getElementById("daignoses").appendChild(p);
        document.getElementById("daignosestextarea").value = null;
    }
});

function setdaignoses() {
    document.getElementById("daignosess").innerHTML = "";
    divdaignoses.forEach((item) => {
        document.getElementById("daignoseslist").appendChild(item);
    });
    document.getElementById("adddaignoses").style.display = "none";
    document.getElementById("deletedaignoses").style.display = "block";
}

function deletedaignoses() {
    console.log("deleted daignoses");
}

//add file
function daignosesfile() {
    document.getElementById("daignosesfile").style.display = "block";
    document.getElementById("daignosesfilelabel").style.display = "none";
    alert("file uploaded successfully");
}

//adding cam image to daignoses

var daignosesCam = document.getElementById("daignosescam");
daignosesCam.addEventListener("click", daignosesimage);

function daignosesimage() {
    var daignosescapture = document.getElementById("daignoses-capture");
    var streamdaignoses = document.getElementById("streamdaignoses");
    var capturedaignoses = document.getElementById("capturedaignoses");
    var snapshotdaignoses = document.getElementById("snapshotdaignoses");

    var cameraStream = null;

    function startStreaming() {
        var mediaSupport = "mediaDevices" in navigator;
        document.getElementById("daignosescam").style.display = "none";
        document.getElementById("playareadaignoses").style.display = "block";

        if (mediaSupport && null == cameraStream) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(function(mediaStream) {
                    cameraStream = mediaStream;
                    streamdaignoses.srcObject = mediaStream;

                    streamdaignoses.play();
                })
                .catch(function(err) {
                    console.log("unable to access camera" + err);
                });
        } else {
            alert("your browser does not support medis devices");
            return;
        }
    }
    startStreaming();
    daignosescapture.addEventListener("click", captureSnapshot);

    function captureSnapshot() {
        document.getElementById("playareadaignoses").style.display = "none";
        document.getElementById("daignosesimage").style.display = "block";

        if (null != cameraStream) {
            var ctx = capturedaignoses.getContext("2d");
            var img = new Image();

            ctx.drawImage(
                streamdaignoses,
                0,
                0,
                capturedaignoses.width,
                capturedaignoses.height
            );

            img.src = capturedaignoses.toDataURL("daignoses/png");
            img.width = 120;

            snapshotdaignoses.innerHTML = "";

            snapshotdaignoses.appendChild(img);
        }

        function stopStreaming() {
            if (null != cameraStream) {
                var track = cameraStream.getTracks()[0];

                track.stop();

                streamdaignoses.load();
                cameraStream = null;
            }
        }
        stopStreaming();
    }
}

//######################################Add Notes Button###################################################################################################
var addnote = document.getElementById("addnotes");

function AddNotes() {
    document.getElementById("addnotes-btn").style.display = "none";
    document.getElementById("notestextarea").style.display = "block";
}

//##############################Done button#########################################################################################################################
//Done button trigger of clinical notes.

function DoneClinical() {
    document.getElementById("ClinicalNotes").innerText = "Case Study"; //changing heading to Case study
    var img = document.createElement("img"); // adding edit icon
    img.src =
        "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    var src = document.getElementById("ClinicalNotes");
    src.appendChild(img);
    if (document.getElementById("patientconplain") != null) {
        document.getElementById("patientconplain").remove();
        document.getElementById("addcomplaints").style.display = "none";
        document.getElementById("deletecomplaints").style.display = "block";
    }
    if (document.getElementById("summarys") != null) {
        document.getElementById("summarys").remove();
        document.getElementById("addsummary").style.display = "none";
        document.getElementById("deletesummary").style.display = "block";
    }
    if (document.getElementById("observations") != null) {
        document.getElementById("observations").remove();
        document.getElementById("addobservation").style.display = "none";
        document.getElementById("deleteobservation").style.display = "block";
    }
    if (document.getElementById("daignosess") != null) {
        document.getElementById("daignosess").remove();
        document.getElementById("adddaignoses").style.display = "none";
        document.getElementById("deletedaignoses").style.display = "block";
    }
    if (document.getElementById("addnotesdiv") != null) {
        var para = document.createElement("p");
        var h5 = document.createElement("h5");
        para.innerHTML = document.getElementById("notestextarea").value;
        h5.innerText = "Notes";
        document.getElementById("addnotes").appendChild(h5);
        document.getElementById("addnotes").appendChild(para);
        document.getElementById("notestextarea").remove();
    }
    document.getElementById("pressEnters").remove();
    document.getElementById("pressEntero").remove();
    document.getElementById("pressEnterc").remove();
    document.getElementById("pressEnterd").remove();
}

/////###########Cancel button#####################################################################################################################
function cancledivClinical() {
    console.log("function should reload a div");
}

//<***************************************************************************************************************************************************************************************************************************************************************>
//Prescription
//<*************************************************************************************************************************************************************************************************************************************************************************>
//<#################################Dynamically adding table row###########################################################################################################################################################################################################>

$(document).ready(function() {
    var counter = 0;
    $("#addrow").on("click", function() {
        var newRow = $("<tr>");

        var cols = "";

        cols +=
            "<td class='col-sm-1'><p></p><input type='number' name='Sr.no' class='form-control'" +
            counter +
            "/></td>";

        cols +=
            "<td class='col-sm-2'><p></p><input type='text' name='type'  class='form-control'" +
            counter +
            "/></td>";

        cols +=
            "<td class='col-sm-6'><p></p><input type='text' name='drugname'  class='form-control' style='font-size:large;' placeholder='Name of Tablet'" +
            counter +
            "/><p><input type='text' name='compositon' class='form-control' placeholder='composition of tablet' style='font-size: smaller;'></p></td>";

        cols +=
            "<td class='col-sm-4'><p><select name='' id='' class='oral'><option value='Oral'>Oral</option><option value='injection'>injection</option><option value='saline'>saline</option></select></p></td>";

        var colst = "<td class='dosagef'><p><input type='text'></p>";

        var colsd = "<div class='tables'>Tablet(s)</div>";

        var colf =
            "<p><select name='' id='' class='presopt'><option value='Twice Daily'>Twice Daily</option><option value='Thrice Daily'>Thrice Daily</option><option value='At night'>At night</option>";

        var colopt =
            "<option value='Once Morning'>Once Morning</option><option value='as needed'>as needed</option><option value='once a week'>once a week</option><option value='Four times a day'>Four times a day</option>";

        var coloptn =
            "<option value='twice a week'>twice a week</option><option value='every other day'>every other day</option><option value='every other hour'>every other hour</option><option value='every four hours'>every four hours</option><option value='every 2 hours'>every 2 hours</option></select></p></td>";

        cols += colst + colsd + colf + colopt + coloptn;

        cols +=
            "<td class='col-sm-2'><p><select name='' id=''><option value='After Food'>After Food</option><option value='Before Food'>Before Food</option></select></p></td>";

        cols +=
            "<td><div class='duration'><p><input type='number'></p><p><select name='' id='' class='daysd'><option value='Day(s)'>Day(s)</option><option value='Week(s)'>Week(s)</option><option value='Month(s)'>Month(s)</option></select></p></div></td>";

        cols +=
            "<td class='col-sm-1'><a class='deleteRow'><img src='https://img.icons8.com/material-outlined/24/ff0000/cancel--v1.png' id='crossoout' /></a></td>";

        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });
    $("table.order-list").on("click", "#crossoout", function(event) {
        $(this).closest("tr").remove();
        counter -= 1;
    });
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

//<********************************Files Section****************************************************************************************************************************************************************************************************>

// The buttons to start & stop stream and to capture the image
var btnStart = document.getElementById("btn-start");
var btnCapture = document.getElementById("btn-capture");

// The stream & capture
var stream = document.getElementById("stream");
var stream_1 = document.getElementById("stream-1");
//holds the content of videostream div
var capture = document.getElementById("capture");
//hold the content of capture
var snapshot = document.getElementById("snapshot");
var snapshot_1 = document.getElementById("snapshot-1");
var retake = document.getElementById("retake");
var btnClose = document.getElementById("btn-close");
var btnClose_1 = document.getElementById("btn-close-1");
var btnCancel = document.getElementById("btn-cancel");
var fileName = document.getElementById("file-name");
//hold the snapshot div

// The video stream
var cameraStream = null;

// Attach listeners
btnStart.addEventListener("click", startStreaming);
retake.addEventListener("click", startStreaming);

// Start Streaming
function startStreaming() {
    var mediaSupport = "mediaDevices" in navigator;
    document.getElementById("play-area-sub1").style.display = "block";
    document.getElementById("play-area-sub1-1").style.display = "block";

    if (mediaSupport && null == cameraStream) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function(mediaStream) {
                cameraStream = mediaStream;

                stream.srcObject = mediaStream;
                stream_1.srcObject = mediaStream;

                stream.play();
                stream_1.play();
            })
            .catch(function(err) {
                console.log("Unable to access camera: " + err);
            });
    } else {
        // alert('Your browser does not support media devices.');
        return;
    }
}
btnCapture.addEventListener("click", captureSnapshot);

var images = [];
function captureSnapshot() {
    const lastKnownCount = images.length;
    document.getElementById("play-area-sub1-1").style.display = "none";
    document.getElementById("play-area-sub-1").style.display = "block";

    if (null != cameraStream) {
        var ctx = capture.getContext("2d");
        var img = new Image();
        ctx.drawImage(stream, 0, 0, capture.width, capture.height);
        images.push(capture.toDataURL("image/png"));
        console.log(images);
        img.src = capture.toDataURL("image/png");
        img.width = 200;
        img.height = 200;

        // snapshot_1.innerHTML = '';
        const temp =
            `<div class="image_container d-flex justify-content-center position-relative">
            <img src="` + img.src + `" alt="Image">
            <span class="position-absolute deleteImage">&times;</span>
            </div>`;

        $("#snapshot-1").append(temp);
        LoadImages(lastKnownCount);
        //console.log("Capture", lastKnownCount);
    }
}

$(document).on("click", ".deleteImage", function(e) {
    const src = $(e.target).parent().children(':first-child').attr('src');
    const index = images.indexOf(src);
    if (index !== -1) {
        images.splice(index, 1);
        //console.log("images length",images.length);
        //console.log("images array",images);
        e.target.parentElement.remove();
        //console.log($('#imgContainer_'+index));
        $(".image-container").remove();
    }
    //console.log("images length",images.length)
    const lastKnownCount = images.length;
    LoadImages(0);
    //console.log("Delete", lastKnownCount);
});

btnClose.addEventListener("click", stopStreaming);
btnClose_1.addEventListener("click", stopStreaming);
btnCancel.addEventListener("click", stopStreaming);
btnCapture.addEventListener("click", stopStreaming);

function stopStreaming() {
    if (null != cameraStream) {
        var track = cameraStream.getTracks()[0];

        track.stop();
        stream_1.load();

        cameraStream = null;
    }
}
stopStreaming();

//function for file upload input on change
var uploadImages = [];

function image_select() {
    const lastKnownCount = images.length;
    var image = document.getElementById('image').files;
    for (i = 0; i < image.length; i++) {
        if (image[i].name) {
            uploadImages.push({
                "name": image[i].name,
                "url": URL.createObjectURL(image[i]),
                "file": image[i],
            });
            images.push(URL.createObjectURL(image[i]));
        } else {
            alert("Please select all files at a time.");
        }
    }

    document.getElementById('uploadedfiles').innerHTML = image_show();
    LoadImages(lastKnownCount);
    console.log("Upload", lastKnownCount);
}

function image_show() {
    var image = "";
    uploadImages.forEach((i) => {
        image +=
            `<div class="image_container d-flex justify-content-center position-relative">
            <img src="` + i.url + `" alt="Image">
            <span class="position-absolute" onclick="delete_image(` + uploadImages.indexOf(i) + `)">&times;</span>
            </div>`;
    })
    return image;
}

function delete_image(e) {
    
    console.log("delete_image called at",uploadImages)
    console.log("spliced image at",e)
    uploadImages.splice(e, 1);
    if (e !== -1) {
        images.splice(e, 1);
        //console.log("images length",images.length);
        //console.log("images array",images);
        //console.log($('#imgContainer_'+e));
        $(".image-container").remove();
    }
    LoadImages(0);

    document.getElementById('uploadedfiles').innerHTML = image_show();

    
}

//<*********************************Image Popup functionalities**********************************************************************************>
var CurrentBadge = null;
var picture;

function LoadSavedComments(picture) {
    $(".k-animation-container").remove();
    picture.parent().children().not(".image").remove();
    picture.parent().off();

    let points = picture.data("points");
    if (points === undefined) {
        points = [];
        picture.attr("data-points", JSON.stringify(points));
    }

    const imageId = picture[0].id;

    for (i = 0; i < points.length; i++) {
        const point = points[i];
        const left = point.left - 15;
        const top = point.top - 15;
        const txt = point.data;

        picture
            .parent()
            .append(
                `<span class="comment-badge" id="comment-badge-${imageId}-${i}" style="top:${top}px;left:${left}px" comment="${txt}" data-index=${i}>${
          i + 1
        }</span>`
            );

        $("#comment-badge-" + imageId + "-" + i).kendoBadge({
            themeColor: "warning",
            shape: "pill",
            size: "large",
        });

        $("#comment-badge-" + imageId + "-" + i).kendoTooltip({
            content: txt,
            width: 120,
            position: "top",
            animation: {
                open: {
                    effects: "zoom",
                    duration: 150,
                },
            },
        });

        $("#dvPrintComment").html("<table></table>");
        points.map((point, index) => {
            $("#dvPrintComment").append(
                "<tr><td id='index'>" +
                (index + 1) +
                "</td><td id='data'>" +
                point.data +
                "</td></tr>"
            );
        });
    }
}

function onShow() {
    $("#editDeleteModal").show();
}

function ZoomIn(picture) {
    const currWidth = picture.width;
    if (currWidth == 700) return false;
    else {
        picture.style.width = currWidth + 100 + "px";
    }
}

function ZoomOut(picture) {
    const currWidth = picture.width;
    if (currWidth == 100) return false;
    else {
        picture.style.width = currWidth - 100 + "px";
    }
}

function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function ShowTag() {
    $("#commentTags").show();
}

const tags = [];

function LoadImages(startPoint) {
    const scrollview = $("#scrollView").data("kendoScrollView");
    if (scrollview !== undefined) {
        // Remove the element that was deleted
        const copiedElements = $(".k-scrollview-wrap")[0].innerHTML;
        scrollview.destroy();
        $("#scrollView").html("");
        $("#scrollView").append(copiedElements);
    }

    for (let index = startPoint; index < images.length; index++) {
        console.log("index of uploaded loaded image",index);
        const element =
            '<div class="container image-container" data-role="page" id="imgContainer_' +
            index +
            '"><div class="row image-row"><div class="col data-tagging-container"><img id="image_' +
            index +
            '" src="' +
            images[index] +
            '" data-points="[]" class="image" /></div></div><div class="row rowFileName" id="rowFileName"><div class="col"><span class="file-name"><i class="fa fa-file-image-o" aria-hidden="true"></i>image.name."' +
            index +
            '".jpg</span></div></div></div>';
        $("#scrollView").append(element);
    }

    picture = $("#image_0");

    function onScrollChange(e) {
        picture = $("#image_" + e.nextPage);
        LoadSavedComments(picture);
    }

    $("#scrollView").kendoScrollView({
        enablePager: true,
        contentHeight: "100%",
        change: onScrollChange,
    });
}

$(document).on("click", ".image", function(e) {
    picture = $("#" + e.target.id);
    const x = e.offsetX;
    const y = e.offsetY;
    let data = "";

    kendo.prompt("Add a comment", "").then(function(data) {
        if (data !== null && data.trim() !== "") {
            const _new = {
                left: x,
                top: y,
                data: data,
            };
            const points = picture.data("points");
            points.push(_new);
            picture.attr("data-points", JSON.stringify(points));
            LoadSavedComments(picture);
        }
    });
});

$("#editDeleteModal").kendoDialog({
    title: "Update/Delete Comment",
    closable: true,
    modal: true,
    content: '<input id="txtUpdateComment" />',
    actions: [{
            text: "CANCEL",
        },
        {
            text: "UPDATE",
            action: onUpdate,
        },
        {
            text: "DELETE",
            primary: true,
            action: onDelete,
        },
    ],
    show: onShow,
});

$("#txtUpdateComment").kendoTextBox({
    placeholder: "Comment",
});

$(document).on("dblclick", ".comment-badge", function(e) {
    CurrentBadge = $(this);
    const getComment = e.target.attributes[3].value;
    $("#txtUpdateComment").val(getComment);
    $("#editDeleteModal").data("kendoDialog").open();
});

function onDelete() {
    const index = parseInt(CurrentBadge.data("index"));
    const points = picture.data("points");
    points.splice(index, 1);
    picture.attr("data-points", JSON.stringify(points));
    LoadSavedComments(picture);
}

function onUpdate() {
    const index = parseInt(CurrentBadge.data("index"));
    const points = picture.data("points");
    const updatedComment = $("#txtUpdateComment").val();

    if (updatedComment !== null && updatedComment.trim() !== "") {
        points[index].data = updatedComment;
        picture.attr("data-points", JSON.stringify(points));
        LoadSavedComments(picture);
    }
}

$("button[name='zoomIn']").click(function(e) {
    ZoomIn(picture[0]);
});

$("button[name='zoomOut']").click(function(e) {
    ZoomOut(picture[0]);
});

let deg = 0;
$("button[name='rotate']").on("click", function(e) {
    const direction = e.currentTarget.getAttribute("direction");
    deg = direction === "left" ? deg - 90 : deg + 90;
    $(picture).css({
        "-webkit-transform": "rotate(" + deg + "deg)",
        "-moz-transform": "rotate(" + deg + "deg)",
        transform: "rotate(" + deg + "deg)",
    });
});

$("button[name='download']").click(function() {
    window.print();
});

$("button[name='share']").click(function() {
    console.log("Share");
});

tags.map((tag) => {
    $("#dvTags").append("<strong class='tag'>#" + tag + "</strong>");
});

$("#btnAddTags").click(function() {
    ShowTag();
});

$("#commentTags").on("keypress", function(e) {
    if (e.keyCode == 13) {
        const getTag = $("#commentTags").val().trim();
        tags.push(getTag);
        $("#dvTags").append(
            "<strong class='badge bg-primary tag'>#" + getTag + "</strong>"
        );
        $("#commentTags").val("");
        return false;
    }
});

var myWindow = $("#window");

btnImagePopup = $("#btnImagePopup");

btnImagePopup.click(function() {
    myWindow.data("kendoWindow").open();
    // btnImagePopup.fadeOut();
});

function onClose() {
    btnImagePopup.fadeIn();
}

myWindow
    .kendoWindow({
        width: "600px",
        title: "Capture Image",
        visible: false,
        actions: ["Pin", "Minimize", "Maximize", "Close"],
        close: onClose,
    })
    .data("kendoWindow")
    .center();


//<*********************************Advice div *************************************************************************************************************>
//<**************functionality for advice*****************************************************************>
function setadvise() {
    var img = document.createElement("img");
    img.setAttribute("id", "advicesetting");
    img.src =
        "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    var src = document.getElementById("advicehead");
    src.appendChild(img);
    document.getElementById("advicesetting").remove();
    var val = document.getElementById("adviceinp").value;
    var p = document.createElement("p");
    p.innerText = val;
    document.getElementById("advicediv").appendChild(p);
    document.getElementById("adviceinp").style.display = "none";
}
//
//<********************************************Special Instrucion********************************************************************>
//<*****************************functionality for instruction************************************************************************>
function setsi() {
    var img = document.createElement("img");
    img.setAttribute("id", "sisetting");
    img.src =
        "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    var src = document.getElementById("sihead");
    src.appendChild(img);
    document.getElementById("sisetting").remove();
    var value = document.getElementById("sitextarea").value;
    var p = document.createElement("p");
    p.innerText = value;
    document.getElementById("sip").appendChild(p);
    document.getElementById("sitextareadiv").remove();
    document.getElementById("sinstructionp").remove();
}

//<**********************************************InstructionStamp*********************************************************************>
//*****************************************************************************************************************************************?
function setinsstamp() {
    var img = document.createElement("img");
    img.setAttribute("id", "stampsetting");
    img.src =
        "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    var src = document.getElementById("stamphead");
    src.appendChild(img);
    document.getElementById("stampsetting").remove();
    var val = document.getElementById("stampinp").value;
    var p1 = document.createElement("p");
    p1.innerText =
        "Need for Immunosuppression/DMARD therapy " +
        val +
        " adverse effects explained in Detail";
    document.getElementById("stamp1").appendChild(p1);
    var p2 = document.createElement("p");
    p2.innerText =
        "Nature of the disease, Prognosis and Need for Long Term Treatment is explained with its adverse effect and allergic reaction.";
    document.getElementById("stamp2").appendChild(p2);
    document.getElementById("stamp1").style.display = "block";
    document.getElementById("stamp2").style.display = "block";
    document.getElementById("selectstamp").style.display = "none";
    document.getElementById("readystamp1").style.display = "none";
    document.getElementById("readystamp2").style.display = "none";
    document.getElementById("stampimg").style.display = "block";
}

//<******************************************lAB TEST Advice**********************************************************************************************************************>
//><*********************************************************************************************************************************************************************************************>
var advicetag = "";
$("#testadvice").click(function(event) {
    advicetag = $(event.target).text();
    document.getElementById("searchlabtest");
});

//setting tag in input to add instruction for right side
function setlabtest(event) {
    var tagname = event.target.innerText;
    document.getElementById("searchlabtest").value = tagname;
}
//setting tag in input box of left side
function setlabtest2(event) {
    var tagname = event.target.innerText;
    document.getElementById("testinp1").value = tagname;
}
//
//deleting tag cross function
function deletetest(event) {
    var idi = event.target.id;
    document.getElementById(idi).remove();
}

//adding functioning to add instruction
document.getElementById("addtestins").addEventListener("click", function() {
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("placeholder", "add instruction to tag in searchbar");
    inp.setAttribute("id", "addtestinstruction");
    document.getElementById("addtestins").remove();
    document.getElementById("lefttestinp").appendChild(inp);
    var btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.setAttribute("onclick", "addins()");
    btn.innerHTML = "Add";
    document.getElementById("lefttestinp").appendChild(btn);
});

//functionality after pressing add button in left div.
function addins() {
    var inptest = document.getElementById("searchlabtest").value;
    var ins = document.getElementById("addtestinstruction").value;
    document.getElementById("addtestinstruction").value = "";
    var id = inptest + "1";
    var p = document.createElement("p");
    p.setAttribute("class", "testinstructionp");
    p.innerText = ins;
    document.getElementById(id).appendChild(p);
    var element = document.getElementById(id);
    element.classList.remove("bgcolorStamp");
    element.classList.remove("bgcolorStampl");
    element.removeChild(element.children[1]);

    //get by id element at add p tag in that div h6 and id name same
}

//functionality after pressing add button in right
function addins2() {
    var inptest = document.getElementById("testinp1").value;
    var ins = document.getElementById("testinp2").value;
    document.getElementById("testinp2").value = "";
    var id = inptest + 2;
    var p = document.createElement("p");
    p.setAttribute("class", "testinstructionp");
    p.innerText = ins;
    document.getElementById(id).appendChild(p);
    var element = document.getElementById(id);
    element.classList.remove("bgcolorStamp");
    element.classList.remove("bgcolorStampl");
    element.removeChild(element.children[1]);
}

//function for done button
function donelabtest() {
    document.getElementById("testheading").innerHTML = "";
    var p3 = document.createElement("p");
    p3.innerText = "Lab Test";
    document.getElementById("testheading").appendChild(p3);
    var img1 = document.createElement("img");
    img1.src =
        "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    document.getElementById("testheading").appendChild(img1);
    var x = document.getElementById("rightdiv");
    var y = document.getElementById("leftdiv");
    document.getElementById("lefttestinp").innerHTML = "";
    document.getElementById("righttestinp").innerHTML = "";
    var p1 = document.createElement("p");
    p1.setAttribute("class", "titleleft");
    p1.innerHTML = "<b>Lab Test Advice</b>(Current) ";
    document.getElementById("lefttestinp").appendChild(p1);
    var p2 = document.createElement("p");
    p2.innerHTML = "Tests For Next Visit:";
    p2.setAttribute("class", "titleleft");
    document.getElementById("righttestinp").appendChild(p2);
}

//<************************Reveiw tab functionality**************************************************************************************************************************>
//<*******************************************************************************************************************************************************************************>
function reveiw() {
    document.getElementById("reveiwheading").innerHTML = "";
    var p4 = document.createElement("p");
    p4.innerText = "Reveiw After:";
    document.getElementById("reveiwheading").appendChild(p4);

    var img4 = document.createElement("img");
    img4.src =
        "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
    document.getElementById("reveiwheading").appendChild(img4);

    var day = document.getElementById("byday").value;
    var date = document.getElementById("bydate").value;
    document.getElementById("byday").style.display = "none";

    document.getElementById("pday").innerHTML = day;
    document.getElementById("bydate").style.display = "none";

    document.getElementById("pdate").innerHTML = date;
}

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

//#######################end###############################################################################################################################