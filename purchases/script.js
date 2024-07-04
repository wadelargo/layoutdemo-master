// Code for add Purchases @anjudewangan 
$(document).ready(function () {
    $(".showInvoiceTable").show();
    $("#showInvoice").hide();

    $(".showCustomerPayTable").show();
    $("#showCustomerPay").hide();

    $(".showPurchaseTable").show();
    $("#showPurchase").hide();

    $(".showVendorTable").show();
    $("#showVendor").hide();

    $(".showReceiveTable").show();
    $("#showReceive").hide();

    $("#showInvoice").click(function () {
        $(".showInvoiceTable").show();
        $("#hideInvoice").show();
        $("#showInvoice").hide();
    });
    $("#hideInvoice").click(function () {
        $(".showInvoiceTable").hide();
        $("#hideInvoice").hide();
        $("#showInvoice").show();
    });

    $("#showCustomerPay").click(function () {
        $(".showCustomerPayTable").show();
        $("#hideCustomerPay").show();
        $("#showCustomerPay").hide();
    });
    $("#hideCustomerPay").click(function () {
        $(".showCustomerPayTable").hide();
        $("#hideCustomerPay").hide();
        $("#showCustomerPay").show();
    });

    $("#showPurchase").click(function () {
        $(".showPurchaseTable").show();
        $("#hidePurchase").show();
        $("#showPurchase").hide();
    });
    $("#hidePurchase").click(function () {
        $(".showPurchaseTable").hide();
        $("#hidePurchase").hide();
        $("#showPurchase").show();
    });

    $("#showVendor").click(function () {
        $(".showVendorTable").show();
        $("#hideVendor").show();
        $("#showVendor").hide();
    });
    $("#hideVendor").click(function () {
        $(".showVendorTable").hide();
        $("#hideVendor").hide();
        $("#showVendor").show();
    });

    $("#showReceive").click(function () {
        $(".showReceiveTable").show();
        $("#hideReceive").show();
        $("#showReceive").hide();
    });
    $("#hideReceive").click(function () {
        $(".showReceiveTable").hide();
        $("#hideReceive").hide();
        $("#showReceive").show();
    });

    // Code for Table Head @anjuDewangan
    $(".vendorsTableHead1").show();
    $(".vendorsTableHead2").hide();

    $(".checkVendorsHead").click(function () {
        $(".vendorsTableHead2").show();
        $(".vendorsTableHead1").hide();
    });
    $("#closeVendorsHead").click(function () {
        $(".vendorsTableHead1").show();
        $(".vendorsTableHead2").hide();
    });

    $(".purOrderTableHead1").show();
    $(".purOrderTableHead2").hide();

    $(".checkPurOrderHead").click(function () {
        $(".purOrderTableHead2").show();
        $(".purOrderTableHead1").hide();
    });
    $("#closePurOrderHead").click(function () {
        $(".purOrderTableHead1").show();
        $(".purOrderTableHead2").hide();
    });

    $(".billTableHead1").show();
    $(".billTableHead2").hide();

    $(".checkBillHead").click(function () {
        $(".billTableHead2").show();
        $(".billTableHead1").hide();
    });
    $("#closeBillHead").click(function () {
        $(".billTableHead1").show();
        $(".billTableHead2").hide();
    });

    $(".paymentTableHead1").show();
    $(".paymentTableHead2").hide();

    $(".checkPaymentHead").click(function () {
        $(".paymentTableHead2").show();
        $(".paymentTableHead1").hide();
    });
    $("#closePaymentHead").click(function () {
        $(".paymentTableHead1").show();
        $(".paymentTableHead2").hide();
    });

    $(".vendorCreTableHead1").show();
    $(".vendorCreTableHead2").hide();

    $(".checkVendorCreHead").click(function () {
        $(".vendorCreTableHead2").show();
        $(".vendorCreTableHead1").hide();
    });
    $("#closeVendorCreHead").click(function () {
        $(".vendorCreTableHead1").show();
        $(".vendorCreTableHead2").hide();
    });

});

// Code for Print @anjudewangan
$("button[name='print']").click(function () {
    window.print();
});
// Code for Print @anjudewangan

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

// editor.document.designMode = "On";

// function transform(option, argument) {
//     editor.document.execCommand(option, true, argument);
// };

//code to edit item 

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

    // Code for Record Payment @anjudewangan
    $(".checkTDS").hide();
    $("#checkTDS").click(function () {
        $(".checkTDS").show();
        $("input[name='checkTax'][value='1']").prop('checked', true);
    });
    $("#checkTax").click(function () {
        $(".checkTDS").hide();
        $("input[name='checkTax'][value='2']").prop('checked', true);
    });
    // Code for Record Payment @anjudewangan

    // Code for Purchase Order @anjudewangan
    $("#divCustomerCheck").hide();
    $("#checkDeliver1").click(function () {
        $("#divCustomerCheck").show();
        $("#divOrganization").hide();
        $("input[name='checkDeliver'][value='2']").prop('checked', true);
    });
    $("#checkDeliver").click(function () {
        $("#divOrganization").show();
        $("#divCustomerCheck").hide();
        $("input[name='checkDeliver'][value='1']").prop('checked', true);
    });
    // Code for Purchase Order @anjudewangan

    // code for add table @anjudewangan
    const addAnotherLine = [];
    addAnotherLine.map(() => {
        $(".table-add-another-line tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td></td><td></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete" aria-hidden="true"></i></div></td></tr>');
    });

    $("#btn-add-another-line").click(function () {
        $(".table-add-another-line tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td></td><td></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-copy-1", function () {
        $(".table-add-another-line tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" style="opacity: 0.7;"></i>AK</div><div class="text-secondary"><div class="dropdown"><button class="btn btn-white text-secondary btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="./editItem.html">Edit Item</a></li><li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#popupItemDetails">View Item Details</a></li></ul><i class="fa fa-times-circle-o" aria-hidden="true"></i></div></div></div><div class="ml-5 mb-2"><textarea class="form-control" placeholder="Add a description to your item" id="floatingTextarea3"></textarea></div><div class="ml-5"><span class="bg-success">SERVICE</span> SAC: <a href="" data-bs-toggle="modal" data-bs-target="#popupSAC">998313 <i class="fa fa-pencil" aria-hidden="true"></i></a></div></td><td class="text-end">1.00</td><td class="text-end">200.00 <div><a href="" data-bs-toggle="modal" data-bs-target="#popupItemDetails">Recent Transaction</a></div></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>%</option><option>₹</option></select></td><td class="text-end">₹200.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-1" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-copy-2", function () {
        $(".table-add-another-line tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" style="opacity: 0.7;"></i>BK</div><div class="text-secondary"><div class="dropdown"><button class="btn btn-white text-secondary btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="./editItem.html">Edit Item</a></li><li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#popupItemDetails">View Item Details</a> </li></ul><i class="fa fa-times-circle-o" aria-hidden="true"></i></div></div></div><div class="ml-5 mb-2"><textarea class="form-control" placeholder="Add a description to your item" id="floatingTextarea3"></textarea></div><div class="ml-5"><span class="bg-info">GOODS</span> HSN: <a href="" data-bs-toggle="modal" data-bs-target="#popupSAC">84716040 <i class="fa fa-pencil" aria-hidden="true"></i></a></div></td><td class="text-end">1.00<div><small>Stock on Hand:</small></div><div><small>50.00 pcs <i class="fa fa-arrow-circle-o-down text-primary"aria-hidden="true" data-bs-toggle="modal"data-bs-target="#popupStockDetails"></i></small></div></td><td class="text-end">200.00 <div><a href="" data-bs-toggle="modal" data-bs-target="#popupItemDetails">Recent Transaction</a></div></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>%</option> <option>₹</option></select></td><td class="text-end">₹200.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-2" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-copy-3", function () {
        $(".table-add-another-line tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td></td><td></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-delete", function () {
        $(this).parent().parent().parent('tr').remove();
    });

    // code for add table @anjudewangan

    $(document).ready(function () {
        $('.js-example-basic-single').select2();
    });

    // Code for add credit notes table @anjudewangan
    const addTableCradit = [];
    addTableCradit.map(() => {
        $(".table-add-credit tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td></td><td></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"><i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
    });

    $("#btn-add-credit").click(function () {
        $(".table-add-credit tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td><select class="form-select bg-light" aria-label="Default select example"><option selected>Sales Account</option></select></td><td class="text-end">1.00</td><td class="text-end">0.00</td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-copy-1credit", function () {
        $(".table-add-credit tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" style="opacity: 0.7;"></i>AK</div><div class="text-secondary"><div class="dropdown"><button class="btn btn-white text-secondary btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="./editItem.html">Edit Item</a></li><li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#popupItemDetails">View Item Details</a></li></ul><i class="fa fa-times-circle-o" aria-hidden="true"></i></div></div></div><div class="ml-5 mb-2"><textarea class="form-control" placeholder="Add a description to your item" id="floatingTextarea3"></textarea></div><div class="ml-5"><span class="bg-success">SERVICE</span> SAC: <a href="" data-bs-toggle="modal" data-bs-target="#popupSAC">998313 <i class="fa fa-pencil" aria-hidden="true"></i></a></div></td><td><select class="form-select bg-light" aria-label="Default select example"><option selected>Sales</option></select></td><td class="text-end">1.00</td><td class="text-end">200.00 <div><a href="" data-bs-toggle="modal" data-bs-target="#popupItemDetails">Recent Transaction</a></div></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>%</option><option>₹</option></select></td><td class="text-end">₹200.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-1credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-copy-3credit", function () {
        $(".table-add-credit tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td><select class="form-select bg-light" aria-label="Default select example"><option selected>Sales Account</option></select></td><td class="text-end">1.00</td><td class="text-end">0.00</td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    // Code for table bills @anjudewangan
    const addTableBills = [];
    addTableBills.map(() => {
        $(".table-add-bills tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td></td><td></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td><select class="form-select"><option selected>Select Customer</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"><i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
    });

    $("#btn-add-bills").click(function () {
        $(".table-add-bills tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td><select class="form-select bg-light" aria-label="Default select example"><option selected>Select a Account</option></select></td><td class="text-end">1.00</td><td class="text-end">0.00</td><td class="d-flex justify-content-between"><div>0</div><select class="form-select" aria-label="Default select example" style="width: 64px;"><option selected>₹</option><option>%</option></select></td><td><select class="form-select"><option selected>Select Customer</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-copy-1credit", function () {
        $(".table-add-bills tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" style="opacity: 0.7;"></i>AK</div><div class="text-secondary"><div class="dropdown"><button class="btn btn-white text-secondary btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="./editItem.html">Edit Item</a></li><li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#popupItemDetails">View Item Details</a></li></ul><i class="fa fa-times-circle-o" aria-hidden="true"></i></div></div></div><div class="ml-5 mb-2"><textarea class="form-control" placeholder="Add a description to your item" id="floatingTextarea3"></textarea></div><div class="ml-5"><span class="bg-success">SERVICE</span> SAC: <a href="" data-bs-toggle="modal" data-bs-target="#popupSAC">998313 <i class="fa fa-pencil" aria-hidden="true"></i></a></div></td><td><select class="form-select bg-light" aria-label="Default select example"><option selected>Inventory Asset</option></select></td><td class="text-end">1.00<div><small>Stock on Hand:</small></div><div><small>50.00 pcs <i class="fa fa-arrow-circle-o-down text-primary"aria-hidden="true" data-bs-toggle="modal"data-bs-target="#popupStockDetails"></i></small></div></td><td class="text-end">200.00 <div><a href="" data-bs-toggle="modal" data-bs-target="#popupItemDetails">Recent Transaction</a></div></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>%</option><option>₹</option></select></td><td><select class="form-select"><option selected>Select Customer</option></select></td><td class="text-end">₹200.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-1credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-copy-3credit", function () {
        $(".table-add-bills tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td><select class="form-select bg-light" aria-label="Default select example"><option selected>Select a Account</option></select></td><td class="text-end">1.00</td><td class="text-end">0.00</td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td><select class="form-select"><option selected>Select Customer</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
        return false;
    });
    // Code for table bills @anjudewangan

    // Code for table vendor credits @anjudewangan
    const addTableVendorCre = [];
    addTableVendorCre.map(() => {
        $(".table-add-vendorCre tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td></td><td></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td><select class="form-select"><option selected>Select Customer</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"><i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
    });

    $("#btn-add-vendorCre").click(function () {
        $(".table-add-vendorCre tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td><select class="form-select bg-light" aria-label="Default select example"><option selected>Select a Account</option></select></td><td class="text-end">1.00</td><td class="text-end">0.00</td><td class="d-flex justify-content-between"><div>0</div><select class="form-select" aria-label="Default select example" style="width: 64px;"><option selected>₹</option><option>%</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-copy-1credit", function () {
        $(".table-add-vendorCre tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" style="opacity: 0.7;"></i>AK</div><div class="text-secondary"><div class="dropdown"><button class="btn btn-white text-secondary btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="./editItem.html">Edit Item</a></li><li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#popupItemDetails">View Item Details</a></li></ul><i class="fa fa-times-circle-o" aria-hidden="true"></i></div></div></div><div class="ml-5 mb-2"><textarea class="form-control" placeholder="Add a description to your item" id="floatingTextarea3"></textarea></div><div class="ml-5"><span class="bg-success">SERVICE</span> SAC: <a href="" data-bs-toggle="modal" data-bs-target="#popupSAC">998313 <i class="fa fa-pencil" aria-hidden="true"></i></a></div></td><td><select class="form-select bg-light" aria-label="Default select example"><option selected>Cost of Goods Sold</option></select></td><td class="text-end">1.00<div><small>Stock on Hand:</small></div><div><small>50.00 pcs <i class="fa fa-arrow-circle-o-down text-primary"aria-hidden="true" data-bs-toggle="modal"data-bs-target="#popupStockDetails"></i></small></div></td><td class="text-end">200.00 <div><a href="" data-bs-toggle="modal" data-bs-target="#popupItemDetails">Recent Transaction</a></div></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>%</option><option>₹</option></select></td><td class="text-end">₹200.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-1credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
        return false;
    });

    $(document).on("click", ".icon-copy-3credit", function () {
        $(".table-add-vendorCre tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td><select class="form-select bg-light" aria-label="Default select example"><option selected>Select a Account</option></select></td><td class="text-end">1.00</td><td class="text-end">0.00</td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
        return false;
    });
    // Code for table vendor credits @anjudewangan

    $(document).on("click", ".icon-delete-credit", function () {
        $(this).parent().parent().parent('tr').remove();
    });

    // code for add table @anjudewangan

    $(document).ready(function () {
        $('.js-example-basic-single').select2();
    });
});

// Code for add Purchases @anjudewangan

// get the name of the file by AakashDave
let formFileMultiple = document.getElementById("formFileMultiple");
let fileName = document.querySelector("#fileName");
let span = document.createElement("span");
span.classList.add("iconify");
span.setAttribute("data-icon", "charm:circle-cross")
span.setAttribute("id", "cancleName");
span.setAttribute("style", "color:red")
span.setAttribute("data-width", "17")
span.setAttribute("data-height", "17")
span.setAttribute("onclick", "removeName()")

formFileMultiple.addEventListener("change", () => {
    let Myfiles = formFileMultiple.files[0];
    fileName.innerHTML = `${Myfiles.name}&nbsp;&nbsp;&nbsp;`;
    fileName.append(span)
    console.log(fileName);
})

function removeName() {
    fileName.innerHTML = ""
}
