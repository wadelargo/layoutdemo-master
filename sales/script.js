// Code for add Sales @anjudewangan 
$(document).ready(function () {
    $(".showInvoiceTable").show();
    $("#showInvoice").hide();

    $(".showCustomerPayTable").show();
    $("#showCustomerPay").hide();

    $(".showEastimateTable").hide();
    $("#hideEastimate").hide();

    $(".showSalesOrderTable").hide();
    $("#hideSalesOrder").hide();

    $(".showSalesOrderTable2").hide();
    $("#hideSalesOrder2").hide();

    $(".showDeliveryChallanTable").hide();
    $("#hideDeliveryChallan").hide();

    $(".showRecurringTable").hide();
    $("#hideRecurring").hide();

    $(".showExpenseTable").hide();
    $("#hideExpense").hide();

    $(".showProjectTable").hide();
    $("#hideProject").hide();

    $(".showJournalsTable").hide();
    $("#hideJournals").hide();

    $(".showBillTable").hide();
    $("#hideBill").hide();

    $(".showCreditTable").hide();
    $("#hideCredit").hide();

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

    $("#showEastimate").click(function () {
        $(".showEastimateTable").show();
        $("#hideEastimate").show();
        $("#showEastimate").hide();
    });
    $("#hideEastimate").click(function () {
        $(".showEastimateTable").hide();
        $("#hideEastimate").hide();
        $("#showEastimate").show();
    });

    $("#showSalesOrder").click(function () {
        $(".showSalesOrderTable").show();
        $("#hideSalesOrder").show();
        $("#showSalesOrder").hide();
    });
    $("#hideSalesOrder").click(function () {
        $(".showSalesOrderTable").hide();
        $("#hideSalesOrder").hide();
        $("#showSalesOrder").show();
    });

    $("#showSalesOrder2").click(function () {
        $(".showSalesOrderTable2").show();
        $("#hideSalesOrder2").show();
        $("#showSalesOrder2").hide();
    });
    $("#hideSalesOrder2").click(function () {
        $(".showSalesOrderTable2").hide();
        $("#hideSalesOrder2").hide();
        $("#showSalesOrder2").show();
    });

    $("#showDeliveryChallan").click(function () {
        $(".showDeliveryChallanTable").show();
        $("#hideDeliveryChallan").show();
        $("#showDeliveryChallan").hide();
    });
    $("#hideDeliveryChallan").click(function () {
        $(".showDeliveryChallanTable").hide();
        $("#hideDeliveryChallan").hide();
        $("#showDeliveryChallan").show();
    });

    $("#showRecurring").click(function () {
        $(".showRecurringTable").show();
        $("#hideRecurring").show();
        $("#showRecurring").hide();
    });
    $("#hideRecurring").click(function () {
        $(".showRecurringTable").hide();
        $("#hideRecurring").hide();
        $("#showRecurring").show();
    });

    $("#showExpense").click(function () {
        $(".showExpenseTable").show();
        $("#hideExpense").show();
        $("#showExpense").hide();
    });
    $("#hideExpense").click(function () {
        $(".showExpenseTable").hide();
        $("#hideExpense").hide();
        $("#showExpense").show();
    });

    $("#showProject").click(function () {
        $(".showProjectTable").show();
        $("#hideProject").show();
        $("#showProject").hide();
    });
    $("#hideProject").click(function () {
        $(".showProjectTable").hide();
        $("#hideProject").hide();
        $("#showProject").show();
    });

    $("#showJournals").click(function () {
        $(".showJournalsTable").show();
        $("#hideJournals").show();
        $("#showJournals").hide();
    });
    $("#hideJournals").click(function () {
        $(".showJournalsTable").hide();
        $("#hideJournals").hide();
        $("#showJournals").show();
    });

    $("#showBill").click(function () {
        $(".showBillTable").show();
        $("#hideBill").show();
        $("#showBill").hide();
    });
    $("#hideBill").click(function () {
        $(".showBillTable").hide();
        $("#hideBill").hide();
        $("#showBill").show();
    });

    $("#showCredit").click(function () {
        $(".showCreditTable").show();
        $("#hideCredit").show();
        $("#showCredit").hide();
    });
    $("#hideCredit").click(function () {
        $(".showCreditTable").hide();
        $("#hideCredit").hide();
        $("#showCredit").show();
    });

    // Code for Table Head @anjuDewangan
    $(".cusTableHead1").show();
    $(".cusTableHead2").hide();

    $(".checkCusHead").click(function () {
        $(".cusTableHead2").show();
        $(".cusTableHead1").hide();
    });
    $("#closeCusHead").click(function () {
        $(".cusTableHead1").show();
        $(".cusTableHead2").hide();
    });

    $(".easTableHead1").show();
    $(".easTableHead2").hide();

    $(".checkEstHead").click(function () {
        $(".easTableHead2").show();
        $(".easTableHead1").hide();
    });
    $("#closeEstHead").click(function () {
        $(".easTableHead1").show();
        $(".easTableHead2").hide();
    });

    $(".salesTableHead1").show();
    $(".salesTableHead2").hide();

    $(".checkSalesHead").click(function () {
        $(".salesTableHead2").show();
        $(".salesTableHead1").hide();
    });
    $("#closeSalesHead").click(function () {
        $(".salesTableHead1").show();
        $(".salesTableHead2").hide();
    });

    $(".packageTableHead1").show();
    $(".packageTableHead2").hide();

    $(".checkPackageHead").click(function () {
        $(".packageTableHead2").show();
        $(".packageTableHead1").hide();
    });
    $("#closePackageHead").click(function () {
        $(".packageTableHead1").show();
        $(".packageTableHead2").hide();
    });

    $(".shipmentTableHead1").show();
    $(".shipmentTableHead2").hide();

    $(".checkShipmentHead").click(function () {
        $(".shipmentTableHead2").show();
        $(".shipmentTableHead1").hide();
    });
    $("#closeShipmentHead").click(function () {
        $(".shipmentTableHead1").show();
        $(".shipmentTableHead2").hide();
    });

    $(".invoiceTableHead1").show();
    $(".invoiceTableHead2").hide();

    $(".checkInvoiceHead").click(function () {
        $(".invoiceTableHead2").show();
        $(".invoiceTableHead1").hide();
    });
    $("#closeInvoiceHead").click(function () {
        $(".invoiceTableHead1").show();
        $(".invoiceTableHead2").hide();
    });

    $(".recPayTableHead1").show();
    $(".recPayTableHead2").hide();

    $(".checkRecPayHead").click(function () {
        $(".recPayTableHead2").show();
        $(".recPayTableHead1").hide();
    });
    $("#closeRecPayHead").click(function () {
        $(".recPayTableHead1").show();
        $(".recPayTableHead2").hide();
    });

    $(".creditNoteTableHead1").show();
    $(".creditNoteTableHead2").hide();

    $(".checkCreditHead").click(function () {
        $(".creditNoteTableHead2").show();
        $(".creditNoteTableHead1").hide();
    });
    $("#closeCreNoteHead").click(function () {
        $(".creditNoteTableHead1").show();
        $(".creditNoteTableHead2").hide();
    });

    // Code for packages section @anjuDewangan
    $(".divPackage1-1").show();
    $(".divPackage1-2").hide();

    $(".checkPackageInput1").click(function () {
        $(".divPackage1-2").show();
        $(".divPackage1-1").hide();
    });
    $("#cancelPackage-1").click(function () {
        $(".divPackage1-1").show();
        $(".divPackage1-2").hide();
    });

    $(".divPackage2-1").show();
    $(".divPackage2-2").hide();

    $(".checkPackageInput2").click(function () {
        $(".divPackage2-2").show();
        $(".divPackage2-1").hide();
    });
    $("#cancelPackage-2").click(function () {
        $(".divPackage2-1").show();
        $(".divPackage2-2").hide();
    });

    $(".divPackage3-1").show();
    $(".divPackage3-2").hide();

    $(".checkPackageInput3").click(function () {
        $(".divPackage3-2").show();
        $(".divPackage3-1").hide();
    });
    $("#cancelPackage-3").click(function () {
        $(".divPackage3-1").show();
        $(".divPackage3-2").hide();
    });
    // Code for packages section @anjuDewangan
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
        $(".table-add-credit tbody").append('<tr><td><i class="fa fa-th text-secondary icon-th-credit" aria-hidden="true" aria-hidden="true" style="margin-left: -44px;"></i><div class="d-flex justify-content-between" style="margin-top: -22px;"><div><i class="fa fa-picture-o text-secondary fs-3" aria-hidden="true" style="opacity: 0.7;"></i><span class="text-secondary">Type or click to select an item</span></div></div></td><td></td><td></td><td class="d-flex justify-content-between"><div>0</div> <select class="form-select" aria-label="Default select example" style="width: 64px;"> <option selected>₹</option><option>%</option></select></td><td class="text-end">₹0.00<div style="margin-right: -62px; margin-top: -23px;"> <i class="fa fa-clone text-primary icon-copy icon-copy-3credit" aria-hidden="true"></i> <i class="fa fa-times-circle-o text-danger icon-delete-credit" aria-hidden="true"></i></div></td></tr>');
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

    $(document).on("click", ".icon-delete-credit", function () {
        $(this).parent().parent().parent('tr').remove();
    });

    // code for add table @anjudewangan

    $(document).ready(function () {
        $('.js-example-basic-single').select2();
    });
});

// Code for Chart @anjudewangan

// Code for Chart @anjudewangan

// Code for add Sales @anjudewangan

// get the name of the file 
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

formFileMultiple.addEventListener("change",()=>{
    let Myfiles=formFileMultiple.files[0];
    fileName.innerHTML=`${Myfiles.name}&nbsp;&nbsp;&nbsp;`;
    fileName.append(span)
    console.log(fileName);
})

function removeName() {
    fileName.innerHTML = ""
}
