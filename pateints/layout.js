let alertsDropdown = document.getElementById("alertsDropdown");
let alertDetails = document.getElementById("alertDetails");
alertDetails.style.display = "none";
alertsDropdown.addEventListener("click", () => {
    if (alertDetails.style.display == "none") {
        alertDetails.style.display = "";
        messageAlertDetails.style.display = "none";

    } else {
        alertDetails.style.display = "none";
    }
})

let messagesDropdown = document.getElementById("messagesDropdown");
let messageAlertDetails = document.getElementById("messageAlertDetails");
messageAlertDetails.style.display = "none";

messagesDropdown.addEventListener("click", () => {
    if (messageAlertDetails.style.display == "none") {
        messageAlertDetails.style.display = "";
        alertDetails.style.display = "none";

    } else {
        messageAlertDetails.style.display = "none";
    }
})

// collapse button function to toggle sidenav barr
function openNav() {
    if (document.getElementById("mySidenav").style.width === "63px" || document.getElementById("mySidenav").style.width === "") {
        document.getElementById("mySidenav").style.width = "250px";
    } else {
        if (window.screen.width <= 767) {
            document.getElementById("mySidenav").style.width = "";
        } else {
            document.getElementById("mySidenav").style.width = "63px";
        }
    }
    if (document.getElementById("leftright").style.width === "95.5%" || document.getElementById("leftright").style.width === "") {
        document.getElementById("leftright").style.width = "83.5%";
    } else {
        document.getElementById("leftright").style.width = "95.5%";
    }
    if (document.getElementById("navbar-fourth").style.width === "83.5%" || document.getElementById("navbar-fourth").style.width === "") {
        document.getElementById("navbar-fourth").style.width = "65%";
        console.log("83")
    } else if (document.getElementById("navbar-fourth").style.width === "78%") {
        document.getElementById("navbar-fourth").style.width = "65%";
        console.log("65")
    } else if (document.getElementById("navbar-fourth").style.width === "65%") {
        document.getElementById("navbar-fourth").style.width = "78%";
        console.log("78")
    } else {
        document.getElementById("navbar-fourth").style.width = "96%";
    }
    // if (document.getElementById("commeddiv").style.marginLeft === "1170px" || document.getElementById("commeddiv").style.marginLeft === ""){
    //   document.getElementById("commeddiv").style.marginLeft = "980px"
    // }
    // else if (document.getElementById("commeddiv").style.marginLeft === "900px" || document.getElementById("commeddiv").style.marginLeft === ""){
    //   document.getElementById("commeddiv").style.marginLeft = "700px"
    // }
    // else if(document.getElementById("commeddiv").style.marginLeft === "980px"){
    //   document.getElementById("commeddiv").style.marginLeft = "1170px";
    // }
    // else if (document.getElementById("commeddiv").style.marginLeft === "700px" || document.getElementById("commeddiv").style.marginLeft === ""){
    //   document.getElementById("commeddiv").style.marginLeft = "900px";
    //   console.log("900")
    // }
    if (document.getElementById("Appointment").style.marginLeft === "480px" || document.getElementById("Appointment").style.marginLeft === "") {
        document.getElementById("Appointment").style.marginLeft = "10px";
    } else if (document.getElementById("Appointment").style.marginLeft === "300px") {
        document.getElementById("Appointment").style.marginLeft = "480px";
    } else if (document.getElementById("Appointment").style.marginLeft === "180px") {
        document.getElementById("Appointment").style.marginLeft = "10px";
    } else if (document.getElementById("Appointment").style.marginLeft === "10px") {
        document.getElementById("Appointment").style.marginLeft = "180px";
    }
}

let adminSettingBox = document.getElementById("adminSettingBox");
adminSettingBox.style.display = "none";
let dropbtnMyfunction = document.getElementById("dropbtnMyfunction");
dropbtnMyfunction.addEventListener("click", () => {
    if (adminSettingBox.style.display === "none") {
        adminSettingBox.style.display = "";
    } else {
        adminSettingBox.style.display = "none";
    }
})


// button for pateimt table
// function showpateintTable() {
//     if (document.getElementById("pateintdropdown").style.display === 'none') {
//         document.getElementById('pateintdropdown').style.display = 'block';
//     }
//     else if (document.getElementById("pateintdropdown").style.display === "block") {
//         document.getElementById("pateintdropdown").style.display = "none";
//     }
//     // document.getElementsById('btnforpateints').style.background = 'yellow';
    
//     if (document.getElementById("vl").style.marginLeft === "10px" || document.getElementById("vl").style.marginLeft === "") {
//         document.getElementById("vl").style.marginLeft = "300px"
//     } 
//     else if (document.getElementById("vl").style.marginLeft === "300px" || document.getElementById("vl").style.marginLeft === "") {
//         document.getElementById("vl").style.marginLeft = "10px"
//     }

//     if (document.getElementById("Appointment").style.marginLeft === "480px" || document.getElementById("Appointment").style.marginLeft === "") {
//         document.getElementById("Appointment").style.marginLeft = "180px";
//     }
//     else if (document.getElementById("Appointment").style.marginLeft === "180px" || document.getElementById("Appointment").style.marginLeft === "") {
//         document.getElementById("Appointment").style.marginLeft = "480px";
//     } 
//     else if (document.getElementById("Appointment").style.marginLeft === "300px") {
//         document.getElementById("Appointment").style.marginLeft = "10px"
//     }
//     else if (document.getElementById("Appointment").style.marginLeft === "10px") {
//         document.getElementById("Appointment").style.marginLeft = "300px"
//     }

//     if (document.getElementById("navbar-fourth").style.width === "96%" || document.getElementById("navbar-fourth").style.width === "") {
//         document.getElementById("navbar-fourth").style.width = "78%";
//         console.log("78")
//     } 
//     else if (document.getElementById("navbar-fourth").style.width === "83.5%") {
//         document.getElementById("navbar-fourth").style.width = "65%";
//         console.log(65)
//     } 
//     else if (document.getElementById("navbar-fourth").style.width === "65%") {
//         document.getElementById("navbar-fourth").style.width = "83.5%";
//         console.log("83")
//     }
//     else if (document.getElementById("navbar-fourth").style.width === "78%") {
//         document.getElementById("navbar-fourth").style.width = "96%";
//         console.log("83")
//     }

// }


// input box for medical history

function makelist() {
    document.getElementById('inputforhistory').style.display = 'block';
    $('.minus').click(function(e) {
        e.target.parentElement.remove();
    });
}

// making list for mdeical history
document.getElementById('inputforhistory').addEventListener('keypress', function(e) {
    if (e.key == 'Enter') {

        var text = document.getElementById('inputforhistory').value;
        document.getElementById('inputforhistory').value = null;
        document.getElementById('inputforhistory').style.display = 'none';
        var li = document.createElement('li');
        li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
        var empyttext = document.getElementById('inputforhistory').value;
        if (empyttext != null) {
            document.getElementById('MedicalHistory').appendChild(li);

        }
    }
});

document.getElementById('inputfordiseases').addEventListener('keypress', function(e) {

    if (e.key == 'Enter') {
        var text = document.getElementById('inputfordiseases').value;
        document.getElementById('inputfordiseases').value = null;
        document.getElementById('inputfordiseases').style.display = 'none';
        var li = document.createElement('li');
        li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
        var empyttext = document.getElementById('inputfordiseases').value;
        if (empyttext != null) {
            document.getElementById('otherdisease').appendChild(li);
        }
    }
});
// input box for other specified diseases
function makelist1() {
    document.getElementById('inputfordiseases').style.display = 'block';
    $('.minus').click(function(e) {
        e.target.parentElement.remove();
    });
}

// input for drug section
function makelist2() {
    document.getElementById('inputfordrug').style.display = 'block';
    $('.minus').click(function(e) {
        e.target.parentElement.remove();
    });

}

document.getElementById('inputfordrug').addEventListener('keypress', function(e) {

    if (e.key == 'Enter') {
        var text = document.getElementById('inputfordrug').value;
        document.getElementById('inputfordrug').value = null;
        document.getElementById('inputfordrug').style.display = 'none';
        var li = document.createElement('li');
        li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
        var empyttext = document.getElementById('inputfordrug').value;
        if (empyttext != null) {
            document.getElementById('drugallergy').appendChild(li);
        }
    }
});

// input for food
function makelist3() {
    document.getElementById('inputforfood').style.display = 'block';
    $('.minus').click(function(e) {
        e.target.parentElement.remove();
    });
}

document.getElementById('inputforfood').addEventListener('keypress', function(e) {

    if (e.key == 'Enter') {
        var text = document.getElementById('inputforfood').value;
        document.getElementById('inputforfood').value = null;
        document.getElementById('inputforfood').style.display = 'none';
        var li = document.createElement('li');
        li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
        var empyttext = document.getElementById('inputforfood').value;
        if (empyttext != null) {
            document.getElementById('foodallergy').appendChild(li);
        }
    }
});
// add button and input for insect
function makelist4() {
    document.getElementById('inputforinsect').style.display = 'block';
    $('.minus').click(function(e) {
        e.target.parentElement.remove();
    });
}

document.getElementById('inputforinsect').addEventListener('keypress', function(e) {

    if (e.key == 'Enter') {
        var text = document.getElementById('inputforinsect').value;
        document.getElementById('inputforinsect').value = null;
        document.getElementById('inputforinsect').style.display = 'none';
        var li = document.createElement('li');
        li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
        var empyttext = document.getElementById('inputforinsect').value;
        if (empyttext != null) {
            document.getElementById('insectallergy').appendChild(li);
        }
    }
});
// input for latex

function makelist5() {
    document.getElementById('inputforlatex').style.display = 'block';
    $('.minus').click(function(e) {
        e.target.parentElement.remove();
    });

}

document.getElementById('inputforlatex').addEventListener('keypress', function(e) {

    if (e.key == 'Enter') {
        var text = document.getElementById('inputforlatex').value;
        document.getElementById('inputforlatex').value = null;
        document.getElementById('inputforlatex').style.display = 'none';
        var li = document.createElement('li');
        li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
        var empyttext = document.getElementById('inputforlatex').value;
        if (empyttext != null) {
            document.getElementById('latexallergy').appendChild(li);
        }
    }
});

// this are input mold
function makelist6() {
    document.getElementById('inputformold').style.display = 'block';
    $('.minus').click(function(e) {
        e.target.parentElement.remove();
    });

}

document.getElementById('inputformold').addEventListener('keypress', function(e) {

    if (e.key == 'Enter') {
        var text = document.getElementById('inputformold').value;
        document.getElementById('inputformold').value = null;
        document.getElementById('inputformold').style.display = 'none';
        var li = document.createElement('li');
        li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
        var empyttext = document.getElementById('inputformold').value;
        if (empyttext != null) {
            document.getElementById('moldallergy').appendChild(li);
        }
    }
});

// input section for pet
function makelist7() {
    document.getElementById('inputforpet').style.display = 'block';
    $('.minus').click(function(e) {
        e.target.parentElement.remove();
    });

}

document.getElementById('inputforpet').addEventListener('keypress', function(e) {

    if (e.key == 'Enter') {
        var text = document.getElementById('inputforpet').value;
        document.getElementById('inputforpet').value = null;
        document.getElementById('inputforpet').style.display = 'none';
        var li = document.createElement('li');
        li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
        var empyttext = document.getElementById('inputforpet').value;
        if (empyttext != null) {
            document.getElementById('petallergy').appendChild(li);
        }
    }
});


function makelist8() {
    document.getElementById('inputforpollen').style.display = 'block';
    $('.minus').click(function(e) {
        e.target.parentElement.remove();
    });
}

document.getElementById('inputforpollen').addEventListener('keypress', function(e) {

    if (e.key == 'Enter') {
        var text = document.getElementById('inputforpollen').value;
        document.getElementById('inputforpollen').value = null;
        document.getElementById('inputforpollen').style.display = 'none';
        var li = document.createElement('li');
        li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
        var empyttext = document.getElementById('inputforpollen').value;
        if (empyttext != null) {
            document.getElementById('pollenallergy').appendChild(li);
        }
    }
});


// add record button for iframes

document.getElementById("AddRecordButton").addEventListener("change", function() {
    console.log("selected: ", this.value);
    var value = this.value;
    document.getElementById("iframes").style.display = "block";
    if (value === "Vital Signs") {
        console.log("iframe1");
        document.getElementById("iframe1").style.display = "block";
    } else if (value === "Clinical Notes") {
        console.log("iframe2");
        document.getElementById("iframe2").style.display = "block";
    } else if (value === "Prescription") {
        console.log("iframe3");
        document.getElementById("iframe3").style.display = "block";
    } else if (value === "Files") {
        console.log("Files");
        document.getElementById("iframe4").style.display = "block";
    } else if (value === "Lab Advice") {
        console.log("Lab Advice");
        document.getElementById("iframe5").style.display = "block";
    } else if (value === "Treatment Plan") {
        console.log("Treatment Plan");
        document.getElementById("iframe10").style.display = "block";
    } else if (value === "Complete Procedure") {
        console.log("Complete Procedure");
        document.getElementById("iframe11").style.display = "block";
    }


});

// create case study function to open button

function openAppointment() {
    if (document.getElementById("AppointmentDetails").style.display = "none") {
        document.getElementById("AppointmentDetails").style.display = "block";
        document.getElementById("iframes").style.display = "none";
    }
    var f = document.querySelectorAll(".iframe");
    for (let i = 0; i < f.length; i++) {
        f[i].style.display = "none";
    }
}
// function to click on veiws and payments
function openPayments() {
    document.getElementById("VeiwsAndPaymentsbutton").style.backgroundColor = "rgb(237, 97, 162)";
    document.getElementById("VeiwsAndPaymentsbutton").style.color = "black";
    document.getElementById("VisitReportButton").style.backgroundColor = "white";
    document.getElementById("VisitReportButton").style.color = "grey";
    document.getElementById("VisitReportButton").style.borderWidth = "1px";
    document.getElementById("VisitReportButton").style.borderStyle = "solid";
    document.getElementById("VisitReportButton").style.borderColor = "grey";
    document.getElementById("ReadyCaseFormatButton").style.backgroundColor = "white";
    document.getElementById("ReadyCaseFormatButton").style.color = "grey";
    if (document.getElementById("AppointmentDetails").style.display = "block") {
        document.getElementById("AppointmentDetails").style.display = "none";
        document.getElementById("VeiwsAndPaymentsContent").style.display = "block"
        document.getElementById("ReadyCaseFormatContent").style.display = "none";
        document.getElementById("iframes").style.display = "none";
    } else if (document.getElementById("AppointmentDetails").style.display = "none") {
        document.getElementById("VeiwsAndPaymentsContent").style.display = "block";
        document.getElementById("ReadyCaseFormatContent").style.display = "none";
        document.getElementById("iframes").style.display = "none";
    }
}

// section for billing button in veiw history
function Billingp() {
    document.getElementById("Billingt").style.display = "block";
    document.getElementById("Billingp").style.backgroundColor = "yellow";
    document.getElementById("paymenthistoryp").style.backgroundColor = "white";
    document.getElementById("paymenthistoryt").style.display = "none";
}


// paymnets history button for t and p
function paymenthistory() {
    document.getElementById("Billingp").style.backgroundColor = "white";
    document.getElementById("paymenthistoryp").style.backgroundColor = "yellow";
    document.getElementById("Billingt").style.display = "none";
    document.getElementById("paymenthistoryt").style.display = "block";
}

// veiw history table
function veiwHistory() {
    document.getElementById("veiwHistoryTable").style.display = "block";
}

//function to open ready case format tab
function OpenReadyCase() {
    document.getElementById("ReadyCaseFormatButton").style.backgroundColor = "rgb(237, 97, 162)";
    document.getElementById("ReadyCaseFormatButton").style.color = "black";
    document.getElementById("VeiwsAndPaymentsbutton").style.backgroundColor = "white";
    document.getElementById("VeiwsAndPaymentsbutton").style.color = "grey";
    document.getElementById("VisitReportButton").style.backgroundColor = "white";
    document.getElementById("VisitReportButton").style.color = "grey";
    document.getElementById("VisitReportButton").style.borderWidth = "1px";
    document.getElementById("VisitReportButton").style.borderStyle = "solid";
    document.getElementById("VisitReportButton").style.borderColor = "grey";
    document.getElementById("VeiwsAndPaymentsContent").style.display = "none";
    document.getElementById("iframes").style.display = "none";
    document.getElementById("ReadyCaseFormatContent").style.display = "block";
    if (document.getElementById("AppointmentDetails").style.display = "block") {
        document.getElementById("AppointmentDetails").style.display = "none";
    }

}

// pateint visit report button functionality
function VisitReport() {
    document.getElementById("VisitReportButton").style.backgroundColor = "rgb(237, 97, 162)";
    document.getElementById("VisitReportButton").style.color = "black";
    document.getElementById("VeiwsAndPaymentsbutton").style.backgroundColor = "white";
    document.getElementById("VeiwsAndPaymentsbutton").style.color = "grey";
    document.getElementById("ReadyCaseFormatButton").style.backgroundColor = "white";
    document.getElementById("ReadyCaseFormatButton").style.color = "grey";
    //document.getElementById("VisitReportButton").style.borderColor = "grey";
    if (document.getElementById("AppointmentDetails").style.display = "block") {
        document.getElementById("AppointmentDetails").style.display = "none";
    }
    if (document.getElementById("ReadyCaseFormatContent").style.display = "block") {
        document.getElementById("ReadyCaseFormatContent").style.display = "none";
    }
    if (document.getElementById("VeiwsAndPaymentsContent").style.display = "block") {
        document.getElementById("VeiwsAndPaymentsContent").style.display = "none";
    }
    if(document.getElementById("iframes").style.display = "none"){
        document.getElementById("iframes").style.display = "block"
        document.getElementById("iframe1").style.display = "block";
        document.getElementById("iframe2").style.display="block";
        document.getElementById("iframe3").style.display="block";
        document.getElementById("iframe4").style.display="block";
        document.getElementById("iframe5").style.display = "block";
        document.getElementById("iframe6").style.display = "block";
        document.getElementById("iframe7").style.display="block";
        document.getElementById("iframe8").style.display="block";
        document.getElementById("iframe9").style.display="block";
        document.getElementById("iframe10").style.display="block";
        document.getElementById("iframe11").style.display="block";

    }

    console.log("clicked")
    // document.getElementById("ReadyCaseFormatContent").style.display = "block";

}

// Code for Advanced Patient Search @anjudewangan
const optionMap = new Map();
optionMap.set("patient_name", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_contact_number", '<select><option value="has_contact_number">Yes</option><option value="no">No</option></select>');
optionMap.set("contact_number", '<input type="text" placeholder="Contains 0123456789"/>');
optionMap.set("age_is", '<input type="number" value="39"/>');
optionMap.set("age_more_than", '<input type="number" value="39"/>');
optionMap.set("age_less_than", '<input type="number" value="39"/>');
optionMap.set("has_date_of_birth", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("date_of_birth", '<input type="date"/>');
optionMap.set("date_of_birth_more_than", '<input type="date"/>');
optionMap.set("date_of_birth_less_than", '<input type="date"/>');
optionMap.set("birthday_is_in", '<input type="date"/>');
optionMap.set("has_patient_id", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("patient_id", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_aadhaar_id", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("aadhaar_id", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_email", '<select><option value="yes">Yes</option><option value="no">No</option>');
optionMap.set("email", '<input type="email" placeholder="Contains xyz@gmail.com"/>');
optionMap.set("has_gender", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("gender", '<select><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select>');
optionMap.set("has_pincode", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("pincode", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_street_address", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("street_address", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_blood_group", '<select><option value="yes">Yes</option><option value="no">No</option></select>')
optionMap.set("blood_group", '<select><option value="aP">A+</option><option value="aN">A-</option><option value="bP">B+</option><option value="bN">B-</option><option value="oP">O+</option><option value="oN">O-</option><option value="abP">AB+</option><option value="abN">AB-</option></select>');
optionMap.set("was_referred_by_someone", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("referred_by_someone", '<select><option value="another_patient">Another Patient</option><option value="google">Google</option><option value="just_dial">Just Dial</option><option value="welldone_health_care">welldonehealthcare.in</option></select>');


const categoryList = ["Patient Name", "Has Contact Number", "Contact Number", "Age is", "Age is More Than", "Age is Less Than", "Has Date of Birth", "Date of Birth is", "Date of Birth is More Than", "Date of Birth is Less Than", "Birthday is in", "Has Patient ID", "Patient ID", "Has Aadhaar ID", "Aadhaar ID", "Has Email", "Email", "Has Gender", "Gender is", "Has Pincode", "Pincode", "Has Street Address", "Street Address", "Has Blood Group", "Blood Group", "Was Referred By Someone", "Referred By"];

let isCategoriesShown = false;

function GetControl(selectedCategory) {
    const getControl = optionMap.get(selectedCategory);
    if (getControl === undefined) {
        $("#divControl").html("No Corrosponding Control Found.");
    } else {
        $("#divControl").html(getControl + '<i class="fa fa-times-circle" style="display:none;" id="errorShow" onclick="HandleCancel()"></i>');
    }
}

function ShowNoDataMessage() {
    $("#divNoData").show();
    $("#errorShow").show();
}

function HandleCancel() {
    $("#divNoData").hide();
    $("#errorShow").hide();
}

$(document).ready(function() {
    const firstCategory = $("#ddlInfo option:first").val();
    GetControl(firstCategory);

    $("#ddlInfo").change(function(event) {
        const selectedCategory = $(this).val();
        GetControl(selectedCategory);
    });

    $("#btnAddMore").click(function() {
        if (isCategoriesShown === false) {
            categoryList.map((category) => {
                $("#divCategories").append('<input name="category" type="radio" id="' + category + '" value="' + category + '"><label for="' + category + '">' + category + '</label><br />');
            });
            isCategoriesShown = true;
        }
    });

    $('#divCategories').on('change', "input[name=category]", function(event) {
        $("#ddlInfo option:contains(" + event.target.value.trim() + ")").prop('selected', 'selected');
        $('#ddlInfo').trigger('change');
        $("#divCategories").html("");
        isCategoriesShown = false;
    });
});