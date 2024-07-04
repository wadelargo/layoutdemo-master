// document.addEventListener('DOMContentLoaded',()=>{
//     const dt = new Date()

//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     document.querySelector('.todays_div_header-value').innerText = `${dt.toLocaleString('en-us',{weekday:'short'})}, ${dt.toLocaleString('en-us',{day:'2-digit'})} ${dt.toLocaleString('en-us',{month:'short'})}`

//     // Tomorrow day
//     dt.setDate(new Date().getDate() + 1);
//     document.querySelector('.other_day.yellow_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.yellobw_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 3rd day from today
//     dt.setDate(new Date().getDate() + 2);
//     document.querySelector('.other_day.blue_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.blue_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 4th day from today
//     dt.setDate(new Date().getDate() + 3);
//     document.querySelector('.other_day.green_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.green_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 5th day from today
//     dt.setDate(new Date().getDate() + 4);
//     document.querySelector('.other_day.darkPurple_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.darkPurple_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 6th day from today
//     dt.setDate(new Date().getDate() + 5);
//     document.querySelector('.other_day.purple_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.purple_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 7th day from today
//     dt.setDate(new Date().getDate() + 6);
//     document.querySelector('.other_day.red_Cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.red_Cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

// })
// let alertsDropdown = document.getElementById("alertsDropdown");
// let alertDetails = document.getElementById("alertDetails");
// alertDetails.style.display = "none";
// alertsDropdown.addEventListener("click", () => {
//     if (alertDetails.style.display == "none") {
//         alertDetails.style.display = "";
//         messageAlertDetails.style.display = "none";

//     } else {
//         alertDetails.style.display = "none";
//     }
// })

// let messagesDropdown = document.getElementById("messagesDropdown");
// let messageAlertDetails = document.getElementById("messageAlertDetails");
// messageAlertDetails.style.display = "none";

// messagesDropdown.addEventListener("click", () => {
//     if (messageAlertDetails.style.display == "none") {
//         messageAlertDetails.style.display = "";
//         alertDetails.style.display = "none";

//     } else {
//         messageAlertDetails.style.display = "none";
//     }
// })
// let adminSettingBox = document.getElementById("adminSettingBox");
// adminSettingBox.style.display = "none";
// let dropbtnMyfunction = document.getElementById("dropbtnMyfunction");
// dropbtnMyfunction.addEventListener("click", () => {
//     if (adminSettingBox.style.display === "none") {
//         adminSettingBox.style.display = "";
//     } else {
//         adminSettingBox.style.display = "none";
//     }
// })


// // Advanced Patient Search
// const optionMap = new Map();
// optionMap.set("patient_name", '<input type="text" placeholder="Contains"/>');
// optionMap.set("has_contact_number", '<select><option value="has_contact_number">Yes</option><option value="no">No</option></select>');
// optionMap.set("contact_number", '<input type="text" placeholder="Contains 0123456789"/>');
// optionMap.set("age_is", '<input type="number" value="39"/>');
// optionMap.set("age_more_than", '<input type="number" value="39"/>');
// optionMap.set("age_less_than", '<input type="number" value="39"/>');
// optionMap.set("has_date_of_birth", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
// optionMap.set("date_of_birth", '<input type="date"/>');
// optionMap.set("date_of_birth_more_than", '<input type="date"/>');
// optionMap.set("date_of_birth_less_than", '<input type="date"/>');
// optionMap.set("birthday_is_in", '<input type="date"/>');
// optionMap.set("has_patient_id", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
// optionMap.set("patient_id", '<input type="text" placeholder="Contains"/>');
// optionMap.set("has_aadhaar_id", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
// optionMap.set("aadhaar_id", '<input type="text" placeholder="Contains"/>');
// optionMap.set("has_email", '<select><option value="yes">Yes</option><option value="no">No</option>');
// optionMap.set("email", '<input type="email" placeholder="Contains xyz@gmail.com"/>');
// optionMap.set("has_gender", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
// optionMap.set("gender", '<select><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select>');
// optionMap.set("has_pincode", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
// optionMap.set("pincode", '<input type="text" placeholder="Contains"/>');
// optionMap.set("has_street_address", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
// optionMap.set("street_address", '<input type="text" placeholder="Contains"/>');
// optionMap.set("has_blood_group", '<select><option value="yes">Yes</option><option value="no">No</option></select>')
// optionMap.set("blood_group", '<select><option value="aP">A+</option><option value="aN">A-</option><option value="bP">B+</option><option value="bN">B-</option><option value="oP">O+</option><option value="oN">O-</option><option value="abP">AB+</option><option value="abN">AB-</option></select>');
// optionMap.set("was_referred_by_someone", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
// optionMap.set("referred_by_someone", '<select><option value="another_patient">Another Patient</option><option value="google">Google</option><option value="just_dial">Just Dial</option><option value="welldone_health_care">welldonehealthcare.in</option></select>');


// const categoryList = ["Patient Name", "Has Contact Number", "Contact Number", "Age is", "Age is More Than", "Age is Less Than", "Has Date of Birth", "Date of Birth is", "Date of Birth is More Than", "Date of Birth is Less Than", "Birthday is in", "Has Patient ID", "Patient ID", "Has Aadhaar ID", "Aadhaar ID", "Has Email", "Email", "Has Gender", "Gender is", "Has Pincode", "Pincode", "Has Street Address", "Street Address", "Has Blood Group", "Blood Group", "Was Referred By Someone", "Referred By"];

// let isCategoriesShown = false;

// function GetControl(selectedCategory) {
//     const getControl = optionMap.get(selectedCategory);
//     if (getControl === undefined) {
//         $("#divControl").html("No Corrosponding Control Found.");
//     } else {
//         $("#divControl").html(getControl + '<i class="fa fa-times-circle" style="display:none;" id="errorShow"></i>');
//     }
// }

// function ShowNoDataMessage() {
//     $("#divNoData").show();
//     $("#errorShow").show();
// }

// function HandleCancel() {
//     $("#divNoData").hide();
//     $("#errorShow").hide();
// }

// $(document).ready(function() {
//     const firstCategory = $("#ddlInfo option:first").val();
//     GetControl(firstCategory);

//     $("#ddlInfo").change(function(event) {
//         const selectedCategory = $(this).val();
//         GetControl(selectedCategory);
//     });

//     $("#btnAddMore").click(function() {
//         if (isCategoriesShown === false) {
//             categoryList.map((category) => {
//                 $("#divCategories").append('<input name="category" type="radio" id="' + category + '" value="' + category + '"><label for="' + category + '">' + category + '</label><br />');
//             });
//             isCategoriesShown = true;
//         }
//     });

//     $('#divCategories').on('change', "input[name=category]", function(event) {
//         $("#ddlInfo option:contains(" + event.target.value.trim() + ")").prop('selected', 'selected');
//         $('#ddlInfo').trigger('change');
//         $("#divCategories").html("");
//         isCategoriesShown = false;
//     });
// });


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
        document.getElementById("leftright").style.width = "83.5%"
    } else {
        document.getElementById("leftright").style.width = "95.5%";
    }
    if (document.getElementById("navbar-fourth").style.width === "96%" || document.getElementById("navbar-fourth").style.width === "") {
        document.getElementById("navbar-fourth").style.width = "83.5%";
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
        document.getElementById("Appointment").style.marginLeft = "300px";
    } else if (document.getElementById("Appointment").style.marginLeft === "300px") {
        document.getElementById("Appointment").style.marginLeft = "480px"
    } else if (document.getElementById("Appointment").style.marginLeft === "180px") {
        document.getElementById("Appointment").style.marginLeft = "10px"
    } else if (document.getElementById("Appointment").style.marginLeft === "10px") {
        document.getElementById("Appointment").style.marginLeft = "180px"
    }
}
var table1 = document.getElementById("table1");
var table2 = document.getElementById("table2");
var table3 = document.getElementById("table3");

var selection = document.getElementById("Chooseday");

selection.addEventListener("change", function () {

    if (selection.value == 'Day') {
        table1.style.display = 'table';
        table2.style.display = 'none';
        table3.style.display = 'none';
    } else if (selection.value == 'Week') {
        table1.style.display = 'none';
        table2.style.display = 'table';
        table3.style.display = 'none';
    } else if (selection.value == 'Month') {
        table1.style.display = 'none';
        table2.style.display = 'none';
        table3.style.display = 'table';
    }

});

$('.print').click(function () {
    $("#printRight").append($(".MainCalender"));
    $("#table1 tbody tr td:first-child").css("color", "white");
    $("#table1 tbody tr td:first-child").css("background-color", "#ACD4F1");
    $("#table2 tbody tr td:first-child").css("color", "white");
    $("#table2 tbody tr td:first-child").css("background-color", "#ACD4F1");
    $("#table3 tbody tr td").css("background-color", "white");
    $("#table3 tbody tr td").css("color", "#007185");
    $("table thead tr th:first-child").css("background-color", "#7CD8FF");
    $("table thead tr th").css("color", "#007185");
    $("table thead tr th").css("background-color", "#7CD8FF");
    $("table thead tr th div").css("border", "none");
    $("table thead tr th div").css("background-color", "#7CD8FF");
});

var select = document.getElementById("selectDays");

select.addEventListener("change", function () {

    if (select.value == 'day') {
        table1.style.display = 'table';
        table2.style.display = 'none';
        table3.style.display = 'none';
    } else if (select.value == 'week') {
        table1.style.display = 'none';
        table2.style.display = 'table';
        table3.style.display = 'none';
    } else if (select.value == 'month') {
        table1.style.display = 'none';
        table2.style.display = 'none';
        table3.style.display = 'table';
    }

});

var selectFontSize = document.getElementById("selectFontSize");

selectFontSize.addEventListener("change", function () {

    if (selectFontSize.value == 'smallest') {
        $("table thead tr th").css("font-size", "4px");
        $("table tbody tr td").css("font-size", "4px");

    } else if (selectFontSize.value == 'smaller') {
        $("table thead tr th").css("font-size", "6px");
        $("table tbody tr td").css("font-size", "6px");

    } else if (selectFontSize.value == 'small') {
        $("table thead tr th").css("font-size", "8px");
        $("table tbody tr td").css("font-size", "8px");

    } else if (selectFontSize.value == 'normal') {
        $("table thead tr th").css("font-size", "10px");
        $("table tbody tr td").css("font-size", "10px");

    } else if (selectFontSize.value == 'big') {
        $("table thead tr th").css("font-size", "12px");
        $("table tbody tr td").css("font-size", "12px");

    } else if (selectFontSize.value == 'bigger') {
        $("table thead tr th").css("font-size", "14px");
        $("table tbody tr td").css("font-size", "14px");

    } else if (selectFontSize.value == 'biggest') {
        $("table thead tr th").css("font-size", "16px");
        $("table tbody tr td").css("font-size", "16px");
    }

});

var selectOrientation = document.getElementById("selectOrientation");

selectOrientation.addEventListener("change", function () {

    if (selectOrientation.value == 'auto') {
        $(".MainCalender").css("padding", "10px");

    } else if (selectOrientation.value == 'portrait') {
        $(".MainCalender").css("padding", "100px");

    } else if (selectOrientation.value == 'landscape') {
        $(".MainCalender").css("padding", "10px");
    }
});

var selectColor = document.getElementById("selectColor");

selectColor.addEventListener("change", function () {

    if (selectColor.value == 'outline') {


    } else if (selectColor.value == 'fullcolor') {
        $("#printRight").append($(".MainCalender"));
        $("#table1 tbody tr td:first-child").css("color", "white");
        $("#table1 tbody tr td:first-child").css("background-color", "#ACD4F1");
        $("#table2 tbody tr td:first-child").css("color", "white");
        $("#table2 tbody tr td:first-child").css("background-color", "#ACD4F1");
        $("#table3 tbody tr td").css("background-color", "white");
        $("#table3 tbody tr td").css("color", "#007185");
        $("table thead tr th:first-child").css("background-color", "#7CD8FF");
        $("table thead tr th").css("color", "#007185");
        $("table thead tr th").css("background-color", "#7CD8FF");
        $("table thead tr th div").css("border", "none");
        $("table thead tr th div").css("background-color", "#7CD8FF");

    } else if (selectColor.value == 'black-white') {
        $("table tbody tr td:first-child").css("background-color", "#e7e7e7");
        $("table tbody tr td").css("color", "black");
        $("table thead tr th").css("background-color", "#d3d3d3");
        $("table thead tr th div").css("background-color", "#d3d3d3");
        $("table thead tr th").css("color", "black");
        $("#table3 tbody tr td").css("background-color", "white");
    }
});

$('#btnCancel').click(function () {
    $(".RightSideMAin").append($(".MainCalender"));
    $("table tbody tr td").css("color", "black");
    $("table tbody tr td").css("background-color", "white");
    $("table thead tr th").css("color", "black");
    $("table thead tr th").css("background-color", "white");
    $("table thead tr th div").css("background-color", "white");
    $("table thead tr th div .dateColor").css("border", "1px solid");
    $("table thead tr th div .dateColor").css("background-color", "rgba(182, 255, 255, 1)");
    $(".MainCalender").css("padding", "10px");
    $("table thead tr th").css("font-size", "1rem");
    $("table tbody tr td").css("font-size", "1rem");
});

$('.MainCalender').on('click', function () {
    $("#exampleModal").modal("show");
});

$(document).ready(function () {
    document.getElementById("Appointment").style.background = "rgba(217, 239, 255, 1)";
    document.getElementById("Reminder").style.background = "white";
    document.getElementById("BlockCalender").style.background = "white";
});
$(document).ready(function () {
    $("#Appointment").click(function () {
        $("div.ToggleAppointment").show();
        $("div.toggleReminder").hide();
        $("div.toggleBlockCalender").hide();

        document.getElementById("Appointment").style.background = "rgba(217, 239, 255, 1)";
        document.getElementById("Reminder").style.background = "white";
        document.getElementById("BlockCalender").style.background = "white";
    });
});

$(document).ready(function () {
    $("#Reminder").click(function () {
        $("div.ToggleAppointment").hide();
        $("div.toggleReminder").show();
        $("div.toggleBlockCalender").hide();
        document.getElementById("Reminder").style.background = "rgba(217, 239, 255, 1)";
        document.getElementById("Appointment").style.background = "white";
        document.getElementById("BlockCalender").style.background = "white";
    });
});
$(document).ready(function () {
    $("#BlockCalender").click(function () {
        $("div.ToggleAppointment").hide();
        $("div.toggleReminder").hide();
        $("div.toggleBlockCalender").show();

        document.getElementById("BlockCalender").style.background = "rgba(217, 239, 255, 1)";
        document.getElementById("Reminder").style.background = "white";
        document.getElementById("Appointment").style.background = "white";
    });
});

function oncustom() {
    $('#myModal').modal('show');
}

function onAllday() {
    $('#myModal').modal('hide');
}

function displayDivDemo(elementValue) {
    if (elementValue.value == 0) {
        document.getElementsByClassName('RepeatOnWeek')[0].style.display = 'none';
        document.getElementsByClassName('RepeatOnMonth')[0].style.display = 'none';

    } else if (elementValue.value == 1) {
        document.getElementsByClassName('RepeatOnWeek')[0].style.display = 'block';
        document.getElementsByClassName('RepeatOnMonth')[0].style.display = 'none';

    } else if (elementValue.value == 2) {
        document.getElementsByClassName('RepeatOnWeek')[0].style.display = 'none';
        document.getElementsByClassName('RepeatOnMonth')[0].style.display = 'flex';
    } else {
        document.getElementsByClassName('RepeatOnWeek')[0].style.display = 'none';
        document.getElementsByClassName('RepeatOnMonth')[0].style.display = 'none';

    }
}

function onBlockList() {
    document.getElementsByClassName('BlockHidediv')[0].style.display = 'block';
    document.getElementsByClassName('AlldayHideDiv')[0].style.display = 'none';
}

function onAllday2() {
    document.getElementsByClassName('AlldayHideDiv')[0].style.display = 'block';
    document.getElementsByClassName('BlockHidediv')[0].style.display = 'none';
}

$(document).on('change', 'input[type=color]', function () {
    this.parentNode.style.backgroundColor = this.value;
});

function printData() {
    var dayToPrint = document.getElementById("table1");
    var weekToPrint = document.getElementById("table2");
    var monthToPrint = document.getElementById("table3");

    if (dayToPrint.style.display == "table") {
        dayToPrint.style.width = "100%";
        dayToPrint.style.height = "100%";
        newWin = window.open("");
        newWin.document.write(dayToPrint.outerHTML);
        newWin.print();
        newWin.close();

    } else if (weekToPrint.style.display == "table") {
        weekToPrint.style.width = "100%";
        weekToPrint.style.height = "100%";
        newWin2 = window.open("");
        newWin2.document.write(weekToPrint.outerHTML);
        newWin2.print();
        newWin2.close();

    } else if (monthToPrint.style.display == "table") {
        monthToPrint.style.width = "100%";
        monthToPrint.style.height = "100%";
        newWin3 = window.open("");
        newWin3.document.write(monthToPrint.outerHTML);
        newWin3.print();
        newWin3.close();
    }
}

$('#btnPrint').on('click', function () {
    printData();
});

// Alert Dropdown

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
});

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
});

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
        document.getElementById("leftright").style.width = "83.5%"
    } else {
        document.getElementById("leftright").style.width = "95.5%";
    }
    if (document.getElementById("navbar-fourth").style.width === "96%" || document.getElementById("navbar-fourth").style.width === "") {
        document.getElementById("navbar-fourth").style.width = "83.5%";
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
        document.getElementById("Appointment").style.marginLeft = "300px";
    } else if (document.getElementById("Appointment").style.marginLeft === "300px") {
        document.getElementById("Appointment").style.marginLeft = "480px"
    } else if (document.getElementById("Appointment").style.marginLeft === "180px") {
        document.getElementById("Appointment").style.marginLeft = "10px"
    } else if (document.getElementById("Appointment").style.marginLeft === "10px") {
        document.getElementById("Appointment").style.marginLeft = "180px"
    }
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

$(document).ready(function () {
    const firstCategory = $("#ddlInfo option:first").val();
    GetControl(firstCategory);

    $("#ddlInfo").change(function (event) {
        const selectedCategory = $(this).val();
        GetControl(selectedCategory);
    });

    $("#btnAddMore").click(function () {
        if (isCategoriesShown === false) {
            categoryList.map((category) => {
                $("#divCategories").append('<input name="category" type="radio" id="' + category + '" value="' + category + '"><label for="' + category + '">' + category + '</label><br />');
            });
            isCategoriesShown = true;
        }
    });

    $('#divCategories').on('change', "input[name=category]", function (event) {
        $("#ddlInfo option:contains(" + event.target.value.trim() + ")").prop('selected', 'selected');
        $('#ddlInfo').trigger('change');
        $("#divCategories").html("");
        isCategoriesShown = false;
    });
});

// Code for appointment @anjudewangan

$("#PatientNameInput").change(function () {
    var inputvalues = $(this).val();
    var nameFilter = /^[a-zA-Z ]+$/;
    if (!nameFilter.test(inputvalues)) {
        $("#PatientNameInput").val("");
        alert("Invalid Name");
        return nameFilter.test(inputvalues);
    }
});

$("#MobileNumberInput").change(function () {
    var inputvalues = $(this).val();
    var mobNumberFilter = /^(0|\+91)?[789]\d{9}$/;
    if (!mobNumberFilter.test(inputvalues)) {
        $("#MobileNumberInput").val("");
        alert("Invalid Mobile Number");
        return mobNumberFilter.test(inputvalues);
    }
});

$("#EmailId").change(function () {
    var inputvalues = $(this).val();
    var emailFilter = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (!emailFilter.test(inputvalues)) {
        $("#EmailId").val("");
        alert("Invalid Email ID");
        return emailFilter.test(inputvalues);
    }
});

const addAppointment = [];
addAppointment.map((patientName, mobileNumber, emailID) => {
    $(".container-1").append('<div class="row"><div class="col-2"><a class="user-img-link" href="#"><img src="../images/ava3.jfif" class="user-img-second" id="dvUserImage" /></a></div><div class="col-10"><h5>' + patientName + '</h5><div class="row"><div class="col"> 25Y 2M Old</div><div class="col"><span class="spanGender"><i class="fa fa-mars" aria-hidden="true"></i></span><span>Male</span></div></div><div class="row"><div class="col"><span class="spanWeight"><i class="fa fa-line-chart" aria-hidden="true"></i></span> 25 kg</div><div class="col"><span class="spanBloodGroup"><i class="fa fa-tint" aria-hidden="true"></i></span><span>B+</span></div></div></div><div class="row my-2"><div class="col"><i class="fa fa-phone" aria-hidden="true"></i><span class="spanMobile">' + mobileNumber + '</span></div><div class="col"><i class="fa fa-envelope-o" aria-hidden="true"></i><span class="spanEmail">' + emailID + '</span></div></div><div class="row my-2"><div class="col"><img src="../images/insurance.jpg" class="insurance-img" /><span class="spanInsurance">Individual Health Insurance Policy</span></div></div><div class="row my-2"><div class="col">Address - <span class="spanAddress">Mumbai, Maharashtra</span></div></div><div class="row my-2"><div class="col">Language -<span class="spanLanguage">Gujrati, Hindi</span></div></div></div>');
});

$("#btn-done").click(function () {
    const getPatientName = $("#PatientNameInput").val().trim();
    const getMobileNumber = $("#MobileNumberInput").val().trim();
    const getEmailID = $("#EmailId").val().trim();

    addAppointment.push(getPatientName);
    addAppointment.push(getMobileNumber);
    addAppointment.push(getEmailID);

    $(".container-1").append('<div class="row"><div class="col-2"><a class="user-img-link" href="#"><img src="../images/ava3.jfif" class="user-img-second" id="dvUserImage" /></a></div><div class="col-10"><h5 id="eventPatientName">' + getPatientName + '</h5><div class="row"><div class="col"> 25Y 2M Old</div><div class="col"><span class="spanGender"><i class="fa fa-mars" aria-hidden="true"></i></span><span> Male</span></div></div><div class="row"><div class="col"><span class="spanWeight"><i class="fa fa-line-chart" aria-hidden="true"></i></span> 25 kg</div><div class="col"> <span class="spanBloodGroup"><i class="fa fa-tint" aria-hidden="true"></i></span><span>B+</span></div></div></div><div class="row my-2"><div class="col"><i class="fa fa-phone" aria-hidden="true"></i><span class="spanMobile" id="eventMobileNumber"> ' + getMobileNumber + '</span></div><div class="col"><i class="fa fa-envelope-o" aria-hidden="true"></i><span class="spanEmail" id="eventEmailId"> ' + getEmailID + '</span></div></div><div class="row my-2"><div class="col"><img src="../images/insurance.jpg" class="insurance-img" /><span class="spanInsurance">Individual Health Insurance Policy</span></div></div><div class="row my-2"><div class="col">Address - <span class="spanAddress">Mumbai, Maharashtra</span></div></div><div class="row my-2"><div class="col">Language -<span class="spanLanguage">Gujrati, Hindi</span></div></div></div>');

    $("#PatientNameInput").val("");
    $("#MobileNumberInput").val("");
    $("#EmailId").val("");
    return false;
});

// Code for appointment @anjudewangan


// Code for calendar popup event @anjudewangan

$(document).on('click', ".MainCalender table tbody tr td", function (e) {
    $(e.target).css('background-color', '#2196F3');
    $(e.target).css('border-radius', '10px');

    $("#btnCollectPayment").click(function () {
        const getPatientName = $("#eventPatientName").html();
        const getMobileNumber = $("#eventMobileNumber").html();
        const getEmailID = $("#eventEmailId").html();

        addAppointment.push(getPatientName);
        addAppointment.push(getMobileNumber);
        addAppointment.push(getEmailID);
        $(e.target).append('<div style="padding: 0 10px; color: white;"><h6>' + getPatientName + '</h6><div><i class="fa fa-phone" aria-hidden="true"></i><span class="spanMobile"> ' + getMobileNumber + '</span></div><div><i class="fa fa-envelope-o" aria-hidden="true"></i><span class="spanEmail"> ' + getEmailID + '</span></div></div>');
    });

});

// Code for calendar popup event @anjudewangan

