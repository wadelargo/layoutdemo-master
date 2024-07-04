// Code for add item @anjudewangan 
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
// messageAlertDetails.style.display = "none";

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
        document.getElementById("leftright").style.width = "83.5%";
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
//code to add item 

$(document).ready(function () {
    $(".row-SAC").hide();
    $(".row-Exemption").hide();
    $(".div-dig-ser").hide();
    $(".inactive").hide();
    $("#flexRadioDefault1").click(function () {
        $(".row-HSN").show();
        $(".row-SAC").hide();
        $(".row-Exemption").hide();
        $(".div-dig-ser").hide();
        $("input[name='flexRadioDefault1'][value='3']").prop('checked', true);

    });
    $("#flexRadioDefault2").click(function () {
        $(".row-SAC").show();
        $(".row-HSN").hide();
        $(".row-Exemption").show();
        $(".div-dig-ser").show();
        $("input[name='flexRadioDefault1'][value='4']").prop('checked', true);

    });
    $("#flexRadioDefault3").click(function () {
        $(".row-HSN").show();
        $(".row-SAC").hide();
        $(".row-Exemption").hide();
        $(".div-dig-ser").hide();
        $("input[name='flexRadioDefault'][value='1']").prop('checked', true);

    });
    $("#flexRadioDefault4").click(function () {
        $(".row-SAC").show();
        $(".row-HSN").hide();
        $(".row-Exemption").show();
        $(".div-dig-ser").show();
        $("input[name='flexRadioDefault'][value='2']").prop('checked', true);

    });
    $(".active").click(function () {
        $(".inactive").toggle();
        $(".active").toggle();
    });
    $(".inactive").click(function () {
        $(".active").toggle();
        $(".inactive").toggle();
    });
});

$(document).ready(function () {
    $('.js-example-basic-single').select2();
});
// Add new item in table @anjudewangan

// Code for Table row link @anjudewangan

const addNewItem = [];
addNewItem.map((name, des, rate, hs, usage, purchaseAcco, account, purchaseDes, purchaseRate, sku, showInStore, stockOnHand) => {
    $(".container-add-new-item .div-add-item").append('<input type="text" class="form-control" id="inputName" value="' + name + '"><select class="form-select" aria-label="Default select example" id="inputUnit"><option selected>' + usage + '</option></select> <input type="text" class="form-control" id="inputHSN" value="' + hs + '"><input type="text" class="form-control" id="inputSAC" value="' + hs + '"><input type="text" class="form-control" id="inputSelling" value="' + rate + '"><select class="form-select" aria-label="Default select example" id="inputAccount"><option selected>' + account + '</option></select><select class="form-select" aria-label="Default select example" id="inputAccountGoods"><option selected>' + purchaseAcco + '</option></select><input type="text" class="form-control" id="inputCost" value="' + purchaseRate + '"><textarea class="form-control" id="inputDes2">' + purchaseDes + '</textarea><textarea class="form-control" id="inputDes1">' + des + '</textarea>');
});

$("#btnAddNewItem").click(function () {

    const getName = $("#inputName").val().trim();
    const getDes = $("#inputDes1").val().trim();
    const getRate = $("#inputSelling").val().trim();
    const getHS = $("#inputHSN").val().trim();
    const getUsage = $("#inputUnit").val().trim();
    const getPurchaseDes = $("#inputDes2").val().trim();
    const getPurchaseRate = $("#inputCost").val().trim();
    const getPurchaseAcco = $("#inputAccountGoods").val().trim();
    const getAccount = $("#inputAccount").val().trim();
    // const getSKU = $("#inputUnit").val().trim();
    // const getShowInStore = $("#inputUnit").val().trim();
    // const getStockOnhand = $("#inputUnit").val().trim();

    addNewItem.push(getName);
    addNewItem.push(getDes);
    addNewItem.push(getRate);
    addNewItem.push(getHS);
    addNewItem.push(getUsage);
    addNewItem.push(getPurchaseDes);
    addNewItem.push(getPurchaseRate);
    addNewItem.push(getPurchaseAcco);
    addNewItem.push(getAccount);
    // addNewItem.push(getSKU);
    // addNewItem.push(getShowInStore);
    // addNewItem.push(getStockOnhand);

    $(".table-item tbody").append('<tr><td class="text-primary"><input class="form-check-input" type="checkbox" value="" id="">' + getName + '</td><td>' + getDes + '</td><td>' + getRate + '</td><td>' + getHS + '</td><td>' + getUsage + '</td><td>' + getPurchaseAcco + '</td><td>' + getAccount + '</td><td>' + getPurchaseDes + '</td><td>' + getPurchaseRate + '</td></tr>');

    $("#inputName").val("");
    $("#inputDes1").val("");
    $("#inputSelling").val("");
    $("#inputHSN").val("");
    $("#inputUnit").val("");
    $("#inputDes2").val("");
    $("#inputCost").val("");
    $("#inputAccountGoods").val("");
    $("#inputAccount").val("");
    return false;
});

// Add new item in table @anjudewangan

// Code for add item @anjudewangan 