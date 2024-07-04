$(document).ready(function () {
    $("#profile-link").addClass("active-li");
    $("#active-manage").addClass("active");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
    $(".dvAddBranch").css("display", "none");

    $("#about-link").click(function () {
        clickAbout();
    });
    $("#branding-link").click(function () {
        clickBranding();
    });
    $("#profile-link").click(function () {
        clickPracticeProfile();
    });
    $("#details-link").click(function () {
        clickPracticeDetails();
    });
    $("#practice-staff").click(function () {
        manageStaffTable();
    });
    $("#active-manage").click(function () {
        manageStaffTable();
    });
    $("#active-noti").click(function () {
        staffNotiTable();
    });
    $("#active-doctor").click(function () {
        doctorVisitTable();
    });
    $("#btn-other-staff").click(function () {
        clickOtherStaff();
    });
    $("#btn-doctor").click(function () {
        clickDoctor();
    });
    $("#btn-other-staff").click(function () {
        clickOtherStaff();
    });
    $("#btn-other-doctor").click(function () {
        clickDoctor();
    });
    $("#btn-add-doctor").click(function () {
        clickAddDoctor();
    });
    $("#btn-add-staff").click(function () {
        clickAddStaff();
    });
    $("#btnTimeEdit").click(function () {
        doctorOfficeAppoin();
    });
    $("#calendar-link").click(function () {
        clickCalendar();
    });
    $("#active-general").click(function () {
        clickGeneral();
    });
    $("#active-practice-time").click(function () {
        clickPracticeTime();
    });
    $("#active-appoin-category").click(function () {
        clickAppoinCate();
    });
    $("#active-notification").click(function () {
        clickNotification();
    });
    $("#active-subscription").click(function () {
        clickSubscription();
    });
    $("#active-trash-bin").click(function () {
        clickTrashBin();
    });
    $("#communication-link").click(function () {
        clickCommunication();
    });
    $("#active-comm-detail").click(function () {
        clickCommDetail();
    });
    // Code for Appointment Follow, Wish SMS, Emails, Notifications, Pricing Catalog, Clinical Notes Catalog @anjudewangan

    $("#active-appoin-follow").click(function () {
        clickAppoinFollow();
    });
    $("#active-wish-sms").click(function () {
        clickWishSMS();
    });
    $("#active-email").click(function () {
        clickEmails();
    });
    $("#active-notifications").click(function () {
        clickNotifications();
    });
    $("#pricing-link").click(function () {
        clickPricing();
    });
    $("#clinical-link").click(function () {
        clickClinical();
    });
    $("#btncreateNew").click(function () {
        showTemplate();
    });
    $("#btnSavePres").click(function () {
        showPrescription();
    });
    $("#btnSaveLabTestAdvise").click(function () {
        showLabTestAdvise();
    });
    $("#btnSaveSpeInstruction").click(function () {
        showSpeInstruction();
    });
    $("#btnSaveReview").click(function () {
        showReview();
    });
    $(".showTemplates").click(function () {
        showAllTemplate();
    });

    // Code for Appointment Follow, Wish SMS, Emails, Notifications, Pricing Catalog, Clinical Notes Catalog @anjudewangan

    $(".branchCard").click(function () {
        clickAddBranch();
    });

    // Code for Add Doctor @anjudewangan
    $("#btn-cancel").click(function () {
        clickbtnCancelDoctor();
    });

    $("#inputDoctorName").change(function () {
        var inputvalues = $(this).val();
        var nameFilter = /^[a-zA-Z ]+$/;
        if (!nameFilter.test(inputvalues)) {
            $("#inputDoctorName").val("");
            alert("Invalid Name");
            return nameFilter.test(inputvalues);
        }
    });

    $("#inputMobileNumber").change(function () {
        var inputvalues = $(this).val();
        var mobNumberFilter = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
        if (!mobNumberFilter.test(inputvalues)) {
            $("#inputMobileNumber").val("");
            alert("Invalid Mobile Number");
            return mobNumberFilter.test(inputvalues);
        }
    });

    $("#inputEmail").change(function () {
        var inputvalues = $(this).val();
        var emailFilter = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (!emailFilter.test(inputvalues)) {
            $("#inputEmail").val("");
            alert("Invalid Email ID");
            return emailFilter.test(inputvalues);
        }
    });

    const addDoctorList = [];
    addDoctorList.map((doctorName, mobileNumber, emailID, regNumber) => {
        $(".table-manage-staff tbody").append('<tr><td><button type="button" class="btn btn-success position-relative rounded-circle text-light">' + doctorName.charAt(0).toUpperCase() + '<span class="position-absolute top-100 start-100 translate-middle p-2 bg-success border border-light rounded-circle"><span class="visually-hidden">New alerts</span></span></button>' + doctorName + '</td><td>' + mobileNumber + '</td><td>' + emailID + '</td><td>' + regNumber + '</td><td><a href="">Edit/Delete</a></td></tr>');
    });

    $("#btnAddDoctor").click(function () {
        $(".dvPracticeStaff").css("display", "block");
        $(".table-manage-staff").css("display", "block");
        $(".dvButttons").css("display", "block");
        $(".dvAddDoctorButton").css("display", "none");

        const getDoctorName = $("#inputDoctorName").val().trim();
        const getMobileNumber = $("#inputMobileNumber").val().trim();
        const getEmailID = $("#inputEmail").val().trim();
        const getRegNumber = $("#inputRegNumber").val().trim();

        addDoctorList.push(getDoctorName);
        addDoctorList.push(getMobileNumber);
        addDoctorList.push(getEmailID);
        addDoctorList.push(getRegNumber);

        $(".table-manage-staff tbody").append('<tr><td><button type="button" class="btn btn-success position-relative rounded-circle text-light">' + getDoctorName.charAt(0).toUpperCase() + '<span class="position-absolute top-100 start-100 translate-middle p-2 bg-success border border-light rounded-circle"><span class="visually-hidden">New alerts</span></span></button>' + getDoctorName + '</td><td>' + getMobileNumber + '</td><td>' + getEmailID + '</td><td>' + getRegNumber + '</td><td><a href="">Edit/Delete</a></td></tr>');

        $("#inputDoctorName").val("");
        $("#inputMobileNumber").val("");
        $("#inputEmail").val("");
        $("#inputRegNumber").val("");
        return false;
    });
    // Code for Add Doctor @anjudewangan


    // Code for Add Staff @anjudewangan
    $("#btn-staff-cancel").click(function () {
        clickbtnCancelStaff();
    });

    $("#inputStaffName").change(function () {
        var inputvalues = $(this).val();
        var nameFilter = /^[a-zA-Z ]+$/;
        if (!nameFilter.test(inputvalues)) {
            $("#inputStaffName").val("");
            alert("Invalid Name");
            return nameFilter.test(inputvalues);
        }
    });

    $("#inputStaffMobNumber").change(function () {
        var inputvalues = $(this).val();
        var mobNumberFilter = /^(0|\+91)?[789]\d{9}$/;
        if (!mobNumberFilter.test(inputvalues)) {
            $("#inputStaffMobNumber").val("");
            alert("Invalid Mobile Number");
            return mobNumberFilter.test(inputvalues);
        }
    });

    $("#inputStaffEmail").change(function () {
        var inputvalues = $(this).val();
        var emailFilter = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (!emailFilter.test(inputvalues)) {
            $("#inputStaffEmail").val("");
            alert("Invalid Email ID");
            return emailFilter.test(inputvalues);
        }
    });

    const addStaffList = [];
    addStaffList.map((staffName, staffMobNumber, staffEmail) => {
        $(".table-other-staff tbody").append('<tr><td><button type="button" class="btn btn-success position-relative rounded-circle text-light">' + staffName.charAt(0).toUpperCase() + '<span class="position-absolute top-100 start-100 translate-middle p-2 bg-success border border-light rounded-circle"><span class="visually-hidden">New alerts</span></span></button>' + staffName + '</td><td>' + staffMobNumber + '</td><td>' + staffEmail + '</td><td><a href="">Edit/Delete</a></td></tr>');
    });

    $("#btnAddStaff").click(function () {
        $(".dvPracticeStaff").css("display", "block");
        $(".dvOtherStaffButtton").css("display", "block");
        $(".table-other-staff").css("display", "block");
        $(".dvAddStaffButton").css("display", "none");

        const getStaffName = $("#inputStaffName").val().trim();
        const getStaffMobNumber = $("#inputStaffMobNumber").val().trim();
        const getStaffEmailID = $("#inputStaffEmail").val().trim();

        addStaffList.push(getStaffName);
        addStaffList.push(getStaffMobNumber);
        addStaffList.push(getStaffEmailID);

        $(".table-other-staff tbody").append('<tr><td><button type="button" class="btn btn-success position-relative rounded-circle text-light">' + getStaffName.charAt(0).toUpperCase() + '<span class="position-absolute top-100 start-100 translate-middle p-2 bg-success border border-light rounded-circle"><span class="visually-hidden">New alerts</span></span></button>' + getStaffName + '</td><td>' + getStaffMobNumber + '</td><td>' + getStaffEmailID + '</td><td><a href="">Edit/Delete</a></td></tr>');

        $("#inputStaffName").val("");
        $("#inputStaffMobNumber").val("");
        $("#inputStaffEmail").val("");
        return false;
    });

    // Code for Add Staff @anjudewangan


    // Code for setting section > calendar > appointment category > add new category @anjudewangan
    const addNewCategory = [];
    addNewCategory.map((cate) => {
        $(".dvAppoin-Category .dvAdd_new_cate .calendar-form").append('<div class="mb-3 row"><div class="col-sm-10"><h6><span class="badge p-2 bg-warning border border-light rounded-circle"><span class="visually-hidden">New alerts</span></span>' + cate + '</h6></div><div class="col-sm-1"><i class="fa fa-trash-o deleteLabel" aria-hidden="true"></i></div></div>');
    });

    $("#btnAddNewCategory").click(function () {
        const getAddCategory = $("#input-add-category").val().trim();
        addNewCategory.push(getAddCategory);

        $(".dvAppoin-Category .dvAdd_new_cate .calendar-form").append('<div class="mb-3 row"><div class="col-sm-10"><h6><span class="badge p-2 bg-warning border border-light rounded-circle"><span class="visually-hidden">New alerts</span></span>' + getAddCategory + '</h6></div><div class="col-sm-1"><i class="fa fa-trash-o deleteLabel" aria-hidden="true"></i></div></div>');

        $("#input-add-category").val("");
        return false;
    });

    $(document).on("click", ".deleteLabel", function () {
        $(this).parent().parent('div').remove();
    });

    // Code for setting section > calendar > appointment category > add new category @anjudewangan


    // Code for upload img in banner @anjudewangan
    $("label[for='inputGroupFile01']").click(function () {
        uploadBtnHide();
    });
    // Code for upload img in banner @anjudewangan


    // Code for upload img in About Section @anjudewangan
    $("label[for='inputGroupFile02']").click(function () {
        uploadBtnHideAboutSec();
    });
    // Code for upload img in About Section @anjudewangan

    // Doctor's Practice Timings- Office Appointments
    $("#showTable-2").click(function () {
        const x = $(this).is(":checked");
        if (x == true) {
            $(this).parents(".inner_wrap").find("#tableHead").show();
            $(this).parents(".inner_wrap").find("#table-2").show();
            $(".dvtiming").css("height", "830px");
            $(".dvtiming").css("width", "660px");
            $(".inner_wrap ul li").css("background-color", "#ffffff");
        } else {
            $(this).parents(".inner_wrap").find("#tableHead").hide();
            $(this).parents(".inner_wrap").find("#table-2").hide();
            $(".dvtiming").css("height", "435px");
            $(".inner_wrap ul li").css("background-color", "#bfeff5");
        }
    });

    $("#addBreak-1").click(function () {
        $("#trLunch-1").show();
        $("#addBreak-1").hide();
    });
    $("#addBreak-M").click(function () {
        $("#trLunch-M").show();
        $("#addBreak-M").hide();
        $(".dvtiming").css("height", "910px");
    });
    $("#addBreak-Tue").click(function () {
        $("#trLunch-Tue").show();
        $("#addBreak-Tue").hide();
        $(".dvtiming").css("height", "970px");
    });
    $("#addBreak-Wed").click(function () {
        $("#trLunch-Wed").show();
        $("#addBreak-Wed").hide();
        $(".dvtiming").css("height", "1010px");
    });
    $("#addBreak-Thus").click(function () {
        $("#trLunch-Thus").show();
        $("#addBreak-Thus").hide();
        $(".dvtiming").css("height", "1140px");
    });
    $("#addBreak-F").click(function () {
        $("#trLunch-F").show();
        $("#addBreak-F").hide();
        $(".dvtiming").css("height", "1180px");
    });
    $("#addBreak-Sat").click(function () {
        $("#trLunch-Sat").show();
        $("#addBreak-Sat").hide();
        $(".dvtiming").css("height", "1220px");
    });
    $("#addBreak-Sun").click(function () {
        $("#trLunch-Sun").show();
        $("#addBreak-Sun").hide();
        $(".dvtiming").css("height", "1270px");
    });
    $("#check-M").click(function () {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#monday").css("background-color", "#bfeff5");

        } else {
            $("#monday").css("background-color", "#ffffff");
        }
    });
    $("#check-Tue").click(function () {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#tuesday").css("background-color", "#bfeff5");

        } else {
            $("#tuesday").css("background-color", "#ffffff");
        }
    });

    $("#check-Wed").click(function () {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#wednesday").css("background-color", "#bfeff5");

        } else {
            $("#wednesday").css("background-color", "#ffffff");
        }
    });
    $("#check-Thus").click(function () {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#thuesday").css("background-color", "#bfeff5");

        } else {
            $("#thuesday").css("background-color", "#ffffff");
        }

    });
    $("#check-F").click(function () {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#friday").css("background-color", "#bfeff5");

        } else {
            $("#friday").css("background-color", "#ffffff");
        }
        $("#friday").css("background-color", "#bfeff5");

    });
    $("#check-Sat").click(function () {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#saturday").css("background-color", "#bfeff5");

        } else {
            $("#saturday").css("background-color", "#ffffff");
        }

    });
    $("#check-Sun").click(function () {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#sunday").css("background-color", "#bfeff5");

        } else {
            $("#sunday").css("background-color", "#ffffff");
        }

    });

    // Time Difference
    function calculateTime() {
        var valuestart = $("#timeOne").val();
        var valuestartM = $("#timeOne-M").val();
        var valuestartTue = $("#timeOne-Tue").val();
        var valuestartWed = $("#timeOne-Wed").val();
        var valuestartThus = $("#timeOne-Thus").val();
        var valuestartF = $("#timeOne-F").val();
        var valuestartSat = $("#timeOne-Sat").val();
        var valuestartSun = $("#timeOne-Sun").val();

        var valuestop = $("#timeTwo").val();
        var valuestopM = $("#timeTwo-M").val();
        var valuestopTue = $("#timeTwo-Tue").val();
        var valuestopWed = $("#timeTwo-Wed").val();
        var valuestopThus = $("#timeTwo-Thus").val();
        var valuestopF = $("#timeTwo-F").val();
        var valuestopSat = $("#timeTwo-Sat").val();
        var valuestopSun = $("#timeTwo-Sun").val();

        var timeStartH = parseInt(new Date("01/01/2022 " + valuestart).getHours());
        var timeStartMH = parseInt(new Date("01/01/2022 " + valuestartM).getHours());
        var timeStartTueH = parseInt(new Date("01/01/2022 " + valuestartTue).getHours());
        var timeStartWedH = parseInt(new Date("01/01/2022 " + valuestartWed).getHours());
        var timeStartThusH = parseInt(new Date("01/01/2022 " + valuestartThus).getHours());
        var timeStartFH = parseInt(new Date("01/01/2022 " + valuestartF).getHours());
        var timeStartSatH = parseInt(new Date("01/01/2022 " + valuestartSat).getHours());
        var timeStartSunH = parseInt(new Date("01/01/2022 " + valuestartSun).getHours());

        var timeEndH = parseInt(new Date("01/01/2022 " + valuestop).getHours());
        var timeEndMH = parseInt(new Date("01/01/2022 " + valuestopM).getHours());
        var timeEndTueH = parseInt(new Date("01/01/2022 " + valuestopTue).getHours());
        var timeEndWedH = parseInt(new Date("01/01/2022 " + valuestopWed).getHours());
        var timeEndThusH = parseInt(new Date("01/01/2022 " + valuestopThus).getHours());
        var timeEndFH = parseInt(new Date("01/01/2022 " + valuestopF).getHours());
        var timeEndSatH = parseInt(new Date("01/01/2022 " + valuestopSat).getHours());
        var timeEndSunH = parseInt(new Date("01/01/2022 " + valuestopSun).getHours());

        var timeStartM = parseInt(new Date("01/01/2022 " + valuestart).getMinutes());
        var timeStartMM = parseInt(new Date("01/01/2022 " + valuestartM).getMinutes());
        var timeStartTueM = parseInt(new Date("01/01/2022 " + valuestartTue).getMinutes());
        var timeStartWedM = parseInt(new Date("01/01/2022 " + valuestartWed).getMinutes());
        var timeStartThusM = parseInt(new Date("01/01/2022 " + valuestartThus).getMinutes());
        var timeStartFM = parseInt(new Date("01/01/2022 " + valuestartF).getMinutes());
        var timeStartSatM = parseInt(new Date("01/01/2022 " + valuestartSat).getMinutes());
        var timeStartSunM = parseInt(new Date("01/01/2022 " + valuestartSun).getMinutes());

        var timeEndM = parseInt(new Date("01/01/2022 " + valuestop).getMinutes());
        var timeEndMM = parseInt(new Date("01/01/2022 " + valuestopM).getMinutes());
        var timeEndTueM = parseInt(new Date("01/01/2022 " + valuestopTue).getMinutes());
        var timeEndWedM = parseInt(new Date("01/01/2022 " + valuestopWed).getMinutes());
        var timeEndThusM = parseInt(new Date("01/01/2022 " + valuestopThus).getMinutes());
        var timeEndFM = parseInt(new Date("01/01/2022 " + valuestopF).getMinutes());
        var timeEndSatM = parseInt(new Date("01/01/2022 " + valuestopSat).getMinutes());
        var timeEndSunM = parseInt(new Date("01/01/2022 " + valuestopSun).getMinutes());

        var diffH = timeEndH * 60 - timeStartH * 60;
        var diffMH = timeEndMH * 60 - timeStartMH * 60;
        var diffTueH = timeEndTueH * 60 - timeStartTueH * 60;
        var diffWedH = timeEndWedH * 60 - timeStartWedH * 60;
        var diffThusH = timeEndThusH * 60 - timeStartThusH * 60;
        var diffFH = timeEndFH * 60 - timeStartFH * 60;
        var diffSatH = timeEndSatH * 60 - timeStartSatH * 60;
        var diffSunH = timeEndSunH * 60 - timeStartSunH * 60;

        var diffM = timeEndM - timeStartM;
        var diffMM = timeEndMM - timeStartMM;
        var diffTueM = timeEndTueM - timeStartTueM;
        var diffWedM = timeEndWedM - timeStartWedM;
        var diffThusM = timeEndThusM - timeStartThusM;
        var diffFM = timeEndFM - timeStartFM;
        var diffSatM = timeEndSatM - timeStartSatM;
        var diffSunM = timeEndSunM - timeStartSunM;

        $("#time-difference").html((diffH + diffM) + " Minutes");
        $("#time-difference-M").html((diffMH + diffMM) + " Minutes");
        $("#time-difference-Tue").html((diffTueH + diffTueM) + " Minutes");
        $("#time-difference-Wed").html((diffWedH + diffWedM) + " Minutes");
        $("#time-difference-Thus").html((diffThusH + diffThusM) + " Minutes");
        $("#time-difference-F").html((diffFH + diffFM) + " Minutes");
        $("#time-difference-Sat").html((diffSatH + diffSatM) + " Minutes");
        $("#time-difference-Sun").html((diffSunH + diffSunM) + " Minutes");
    };
    $(".show-lunch-time").change(calculateTime);
    calculateTime();
});

function clickBranding() {
    $(".dvAbout").css("display", "none");
    $("#container").css("display", "flex");
    $("#form-1").css("display", "block");
    $("#footer").css("display", "block");

    $("#branding-link").css("color", "#007bff");
    $("#branding-link").css("border-bottom", "5px solid #007bff");
    $("#branding-link").css("border-radius", "3px");

    $("#about-link").css("color", "#686868");
    $("#about-link").css("border-bottom", "none");
    $("#about-link").css("border-radius", "0px");
}

function clickAbout() {
    $(".dvAbout").css("display", "block");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");

    $("#about-link").css("color", "#007bff");
    $("#about-link").css("border-bottom", "5px solid #007bff");
    $("#about-link").css("border-radius", "3px");

    $("#branding-link").css("color", "#686868");
    $("#branding-link").css("border-bottom", "none");
    $("#branding-link").css("border-radius", "0px");
}

function clickPracticeProfile() {
    $("#details-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#profile-link").addClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $("#container").css("display", "flex");
    $("#form-1").css("display", "block");
    $("#footer").css("display", "block");
    $(".head-link").css("display", "block");
    $(".dvAbout").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
    $(".dvAddBranch").css("display", "none");
}

function clickPracticeDetails() {
    $("#details-link").addClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "block");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
    $(".dvAddBranch").css("display", "none");
    $(".dvAddBranch").css("display", "none");

}

function manageStaffTable() {
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").addClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $("#active-manage").addClass("active");
    $("#active-noti").removeClass("active");
    $("#active-doctor").removeClass("active");

    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".head-link").css("display", "none");
    $(".dvAbout").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvPracticeStaff").css("display", "block");
    $(".table-manage-staff").css("display", "block");
    $(".table-other-staff").css("display", "none");
    $(".dvButttons").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
    $(".dvAddBranch").css("display", "none");
}

function staffNotiTable() {
    $("#active-noti").addClass("active");
    $("#active-manage").removeClass("active");
    $("#active-doctor").removeClass("active");

    $(".table-manage-staff").css("display", "none");
    $(".table-doctor-visit").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".dvStaffNoti").css("display", "block");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");

}

function doctorVisitTable() {
    $("#active-doctor").addClass("active");
    $("#active-manage").removeClass("active");
    $("#active-noti").removeClass("active");

    $(".table-manage-staff").css("display", "none");
    $(".table-manage-noti").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "block");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");

}

function clickOtherStaff() {
    $(".table-other-staff th").css("padding", "1.5rem 2.8rem");
    $(".table-other-staff td").css("padding", "1.5rem 2.8rem");
    $(".table-other-staff td span").css("left", "46px");

    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "block");
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "block");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
}

function clickDoctor() {
    $(".dvButttons").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "block");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
}

function doctorOfficeAppoin() {
    $(".dvDVT-office-appoin").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "block");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
}

function clickAddDoctor() {
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "block");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
}

// Code for Add Doctor @anjudewangan
function clickbtnCancelDoctor() {
    $(".dvPracticeStaff").css("display", "block");
    $(".table-manage-staff").css("display", "block");
    $(".dvButttons").css("display", "block");
    $(".dvAddDoctorButton").css("display", "none");
}
// Code for Add Doctor @anjudewangan


// Code for Add Staff @anjudewangan
function clickbtnCancelStaff() {
    $(".dvPracticeStaff").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "block");
    $(".table-other-staff").css("display", "block");
    $(".dvAddStaffButton").css("display", "none");
}
// Code for Add Staff @anjudewangan

function clickAddStaff() {
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "block");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
    $(".dvCalendar").css("display", "none");
}

// Calendar
function clickCalendar() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "block");
    $(".dvWeek").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvAddBranch").css("display", "none");

}

function clickGeneral() {
    $("#active-general").addClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-notification").removeClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvRegion_Time").css("display", "block");
    $(".dvWeek").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");

}

// Set Practice Timings

function clickPracticeTime() {
    $("#calendar-link").removeClass("active-li");
    $("#details-link").addClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $("#active-practice-time").addClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-notification").removeClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "block");
    $(".dvRegion_Time").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
}

function clickAppoinCate() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $("#active-appoin-category").addClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-notification").removeClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "none");
    $(".dvRegion_Time").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvAdd_new_cate").css("display", "block");
}

function clickNotification() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $("#active-notification").addClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "none");
    $(".dvRegion_Time").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvName").css("display", "block");
}

function clickSubscription() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $("#active-subscription").addClass("active");
    $("#active-notification").removeClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "none");
    $(".dvRegion_Time").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dv_Subscription").css("display", "block");
}

function clickTrashBin() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $("#active-trash-bin").addClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-notification").removeClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "none");
    $(".dvRegion_Time").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "block");

}

// Code for Communication, Comm Details, Appointment Follow, Wish SMS, Emails, Notifications, Pricing Catalog, Clinical Notes Catalog @anjudewangan

// Communication
function clickCommunication() {
    $("#communication-link").addClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvAppoin_Detail").css("display", "none");
    $(".dvWish_SMS").css("display", "none");
    $(".dvEmails").css("display", "none");
    $(".divNotifications").css("display", "none");
    $(".dvCommunication").css("display", "block");
    $(".dvPricing").css("display", "none");
    $(".dvClinical").css("display", "none");
    $(".dvAddBranch").css("display", "none");

}

// Coomunication Details
function clickCommDetail() {
    $("#active-comm-detail").addClass("active");
    $("#active-appoin-follow").removeClass("active");
    $("#active-wish-sms").removeClass("active");
    $("#active-email").removeClass("active");
    $("#active-notifications").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvAppoin_Detail").css("display", "none");
    $(".dvWish_SMS").css("display", "none");
    $(".dvEmails").css("display", "none");
    $(".divNotifications").css("display", "none");
    $(".dvComm_Detail").css("display", "block");
}

// Appointment Follow
function clickAppoinFollow() {
    $("#active-appoin-follow").addClass("active");
    $("#active-comm-detail").removeClass("active");
    $("#active-wish-sms").removeClass("active");
    $("#active-email").removeClass("active");
    $("#active-notifications").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvComm_Detail").css("display", "none");
    $(".dvWish_SMS").css("display", "none");
    $(".dvEmails").css("display", "none");
    $(".divNotifications").css("display", "none");
    $(".dvAppoin_Detail").css("display", "block");
}

// Wish SMS
function clickWishSMS() {
    $("#active-wish-sms").addClass("active");
    $("#active-appoin-follow").removeClass("active");
    $("#active-comm-detail").removeClass("active");
    $("#active-email").removeClass("active");
    $("#active-notifications").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvComm_Detail").css("display", "none");
    $(".dvAppoin_Detail").css("display", "none");
    $(".dvEmails").css("display", "none");
    $(".divNotifications").css("display", "none");
    $(".dvWish_SMS").css("display", "block");
}

// Emails
function clickEmails() {
    $("#active-email").addClass("active");
    $("#active-wish-sms").removeClass("active");
    $("#active-appoin-follow").removeClass("active");
    $("#active-comm-detail").removeClass("active");
    $("#active-notifications").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvComm_Detail").css("display", "none");
    $(".dvAppoin_Detail").css("display", "none");
    $(".dvWish_SMS").css("display", "none");
    $(".divNotifications").css("display", "none");
    $(".dvEmails").css("display", "block");
}

// Notifications
function clickNotifications() {
    $("#active-notifications").addClass("active");
    $("#active-email").removeClass("active");
    $("#active-wish-sms").removeClass("active");
    $("#active-appoin-follow").removeClass("active");
    $("#active-comm-detail").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvComm_Detail").css("display", "none");
    $(".dvAppoin_Detail").css("display", "none");
    $(".dvWish_SMS").css("display", "none");
    $(".dvEmails").css("display", "none");
    $(".divNotifications").css("display", "block");
}

// Pricing Catalog
function clickPricing() {
    $("#pricing-link").addClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#clinical-link").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvAppoin_Detail").css("display", "none");
    $(".dvWish_SMS").css("display", "none");
    $(".dvEmails").css("display", "none");
    $(".divNotifications").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "block");
    $(".dvClinical").css("display", "none");
    $(".dvAddBranch").css("display", "none");

}
// Clinical Notes Catalog
function clickClinical() {
    $("#clinical-link").addClass("active-li");
    $("#pricing-link").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvAppoin_Detail").css("display", "none");
    $(".dvWish_SMS").css("display", "none");
    $(".dvEmails").css("display", "none");
    $(".divNotifications").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvPricing").css("display", "none");
    $(".dvTemplate").css("display", "none");
    $(".dvClinical").css("display", "block");
    $(".dvClinical_Notes_Catalog").css("display", "block");
    $(".dvAddBranch").css("display", "none");

}

// Templates
function showTemplate(){
    $(".dvTemplate").css("display", "block");
    $(".dvClinical").css("display", "block");
    $(".dvClinical_Notes_Catalog").css("display", "none");
    $(".dvPrescriptions").css("display", "none");
    $(".dvLabTestAdvise").css("display", "none");
    $(".dvSpecialInstruction").css("display", "none");
    $(".dvReviewAfter").css("display", "none");
    $(".selectTemplates").css("display", "none");
    $(".addAllTemplate").css("display", "none");
    $(".addTemplate").css("display", "block");
}
function showPrescription(){
    $(".dvPrescriptions").css("display", "block");
    $(".dvLabTestAdvise").css("display", "none");
    $(".dvSpecialInstruction").css("display", "none");
    $(".dvReviewAfter").css("display", "none");
    $("#hidePrescriptions").css("display", "none");
    $(".dvTemplate").css("width", "1020px");
    $(".selectTemplates").css("display", "block");
    $(".addAllTemplate").css("display", "none");
    $(".addTemplate").css("display", "block");
}
function showLabTestAdvise(){
    $(".dvPrescriptions").css("display", "block");
    $(".dvLabTestAdvise").css("display", "block");
    $(".dvSpecialInstruction").css("display", "none");
    $(".dvReviewAfter").css("display", "none");
    $("#hidePrescriptions").css("display", "none");
    $("#hideLabTestAdvise").css("display", "none");
    $(".dvTemplate").css("width", "1020px");
    $(".selectTemplates").css("display", "block");
    $(".addAllTemplate").css("display", "none");
    $(".addTemplate").css("display", "block");
}
function showSpeInstruction(){
    $(".dvPrescriptions").css("display", "block");
    $(".dvLabTestAdvise").css("display", "block");
    $(".dvSpecialInstruction").css("display", "block");
    $(".dvReviewAfter").css("display", "none");
    $("#hidePrescriptions").css("display", "none");
    $("#hideLabTestAdvise").css("display", "none");
    $("#hideSpeInstruction").css("display", "none");
    $(".dvTemplate").css("width", "1020px");
    $(".selectTemplates").css("display", "block");
    $(".addAllTemplate").css("display", "none");
    $(".addTemplate").css("display", "block");
}
function showReview(){
    $(".dvPrescriptions").css("display", "block");
    $(".dvLabTestAdvise").css("display", "block");
    $(".dvSpecialInstruction").css("display", "block");
    $(".dvReviewAfter").css("display", "block");
    $("#hidePrescriptions").css("display", "none");
    $("#hideLabTestAdvise").css("display", "none");
    $("#hideSpeInstruction").css("display", "none");
    $("#hideReview").css("display", "none");
    $(".dvTemplate").css("width", "1020px");
    $(".selectTemplates").css("display", "block");
    $(".addAllTemplate").css("display", "block");
    $(".addTemplate").css("display", "none");

}
function editPrescriptions(){
    $("#hidePrescriptions").css("display", "none");
    $("#hideLabTestAdvise").css("display", "block");
    $("#hideSpeInstruction").css("display", "block");
    $("#hideReview").css("display", "block");
}
function editLabTestAdvise(){
    $("#hidePrescriptions").css("display", "none");
    $("#hideLabTestAdvise").css("display", "none");
    $("#hideSpeInstruction").css("display", "block");
    $("#hideReview").css("display", "block");
}
function editSpeInstruction(){
    $("#hidePrescriptions").css("display", "none");
    $("#hideLabTestAdvise").css("display", "none");
    $("#hideSpeInstruction").css("display", "none");
    $("#hideReview").css("display", "block");
}
function editReview(){
    $("#hidePrescriptions").css("display", "none");
    $("#hideLabTestAdvise").css("display", "none");
    $("#hideSpeInstruction").css("display", "none");
    $("#hideReview").css("display", "none");
}
function showAllTemplate(){
    $(".dvTemplate").css("display", "block");
    $(".dvClinical_Notes_Catalog").css("display", "none");
    $(".addTemplate").css("display", "none");
    $("#hidePrescriptions").css("display", "none");
    $("#hideLabTestAdvise").css("display", "none");
    $("#hideSpeInstruction").css("display", "none");
    $("#hideReview").css("display", "none");
    $(".dvTemplate").css("width", "1000px");
}

const addPrescriptions = [];
addPrescriptions.map((rout, tablets, intake, days) => {
    $("#popupPrescriptions .modal-body table").append('<tbody><tr><td>CAP</td><td>Razo-D<div><small>Domperidone (30mg) +</small></div><div><small>Rabeprazole (20mg) SR</small></div></td><td><select class="form-select" aria-label="Default select example"><option selected>' + rout + '</option><option>Oral</option><option>Oral</option><option>Oral</option></select></td><td><div class="row"><div class="col-3"> <input type="number" class="form-control input-number" value="' + tablets + '"></div><div class="col-3"> Tablet(s)</div><div class="col-4"> <button class="btn btn-outline-dark">Add Frequancy</button></div></div><div class="text-primary">Custom</div></td><td><select class="form-select" aria-label="Default select example"> <option selected>' + intake + '</option> <option>After Food</option> <option>Before Food</option></select><div class="text-primary">Add instruction</div></td><td><div class="row"><div class="col-4"><input type="number" class="form-control input-number" value="' + days + '"></div><div class="col-4">Day(s)</div><div class="col-3"><i class="fa fa-times text-danger" aria-hidden="true"></i></div></div></td></tr></tbody>');
});

$("#btnSavePres").click(function () {
    const getRout = $("#selectRout").val().trim();
    const getTablets = $("#selectTablets").val().trim();
    const getIntake = $("#selectIntake").val().trim();
    const getDays = $("#selectDays").val().trim();

    addPrescriptions.push(getRout);
    addPrescriptions.push(getTablets);
    addPrescriptions.push(getIntake);
    addPrescriptions.push(getDays);

    $(".dvPrescriptions table tbody").append('<tr><td>CAP</td><td>Razo-D<div><small>Domperidone (30mg) +</small></div><div><small>Rabeprazole (20mg) SR</small></div></td><td>' + getRout + '</td><td>' + getTablets  + `-0-` + getTablets + '</td><td>' + getIntake + '</td><td>' + getDays + ' Day(s)</td></tr>');

    $("#selectRout").val("");
    $("#selectTablets").val("");
    $("#selectIntake").val("");
    $("#selectDays").val("");
    return false;
});

const addReviewAfter = [];
addReviewAfter.map((number, weeks, cons) => {
    $("#popupReviewAfter .modal-body").append('<div class="row mb-3"><div class="col-4 d-flex justify-content-end">Schedule next visit after</div><div class="col-1"><input type="number" name="" id="selectNumber" value="' + number + '" class="form-control"></div><div class="col-2"><select class="form-select" aria-label="Default select example" id="selectWeeks"><option selected>' + weeks + '</option><option>month(s)</option><option>year(s)</option></select></div></div><div class="row mb-3"><div class="col-4 d-flex justify-content-end">for</div><div class="col-4"><select class="form-select" aria-label="Default select example" id="selectCons"><option selected>' + cons + '</option> <option>follow-up consultation</option></select></div></div>');
});

$("#btnSaveReview").click(function () {
    const getNumber = $("#selectNumber").val().trim();
    const getWeeks = $("#selectWeeks").val().trim();
    const getCons = $("#selectCons").val().trim();

    addReviewAfter.push(getNumber);
    addReviewAfter.push(getWeeks);
    addReviewAfter.push(getCons);

    $(".dvReviewAfter").append('<div class="m-3 row"><div class="col-3">Schedule next visit after</div><div class="col-1"><b>' + getNumber + '</b></div><div class="col-1"><b>' + getWeeks + '</b></div><div class="col-1">for</div><div class="col-3"><b>' + getCons + '</b></div></div>');

    $("#selectNumber").val("");
    $("#selectWeeks").val("");
    $("#selectCons").val("");
    return false;
});
const selectClinicalNotes = [];
selectClinicalNotes.map((cliNotes) => {
    $(".dvTemplate .container .row .colClinicalNotes").append('<div class="mb-3"><label for="" class="form-label">Clinical Notes</label><select class="form-select" aria-label="Default select example" id="selectClinicalNotes"><option selected>' + cliNotes + '</option><option>Diagnoses</option><option>Complaints</option><option>Observation</option></select></div>');
});

$("#selectClinicalNotes").click(function () {
    $(".dvTemplate").css("width", "1000px");
    const getCliNotes = $("#selectClinicalNotes").val().trim();

    selectClinicalNotes.push(getCliNotes);

    $(".dvTemplate .container .selectTemplates").append('<div class="row"><div class="col-6"></div><div class="col-6"><div class="mb-3 row"><label for="" class="col-sm-2 col-form-label">' + getCliNotes + '<span class="text-danger">*</span></label><div class="col-sm-9"><input type="text" class="form-control" id=""></div><div class="col-sm-1"><i class="fa fa-times text-danger deleteNotes" aria-hidden="true"></i></div><div></div></div>');

    $("#selectClinicalNotes").val("");
    return false;
});

$(document).on("click", ".deleteNotes", function () {
    $(this).parent().parent('div').remove();
});

// Code for Communication, Comm Details, Appointment Follow, Wish SMS, Emails, Notifications, Pricing Catalog, Clinical Notes Catalog @anjudewangan

// Add Branch
function clickAddBranch() {
    $("#profile-link").addClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#pricing-link").removeClass("active-li");

    $("#active-practice-profile").addClass("active");
    $("#active-branches").removeClass("active");
    $("#active-media").removeClass("active");
    $("#active-service-avalilable").removeClass("active");
    $("#active-stories").removeClass("active");
    $("#active-patient-relation").removeClass("active");
    $("#active-practice-achievment").removeClass("active");

    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddBranch").css("display", "block");
}

// Map
var position = [19.1922, 72.9864];

function initialize() {
    var latlng = new google.maps.LatLng(position[0], position[1]);
    var options = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), options);

    marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Latitude:" + position[0] +
            " | Longitude:" + position[1]
    });

    google.maps.event.addListener(map, "click", function (event) {
        var result = [event.latLng.lat(), event.latLng.lng()];
        transition(result);
    });
};

google.maps.event.addDomListener(window, "load", initialize);

var numDeltas = 100;
var delay = 5;
var i = 0;
var deltaLat;
var deltaLng;

function transition(result) {
    i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;
    moveMarker();
};

function moveMarker() {
    position[0] += deltaLat;
    position[1] += deltaLng;
    var latlng = new google.maps.LatLng(position[0], position[1]);
    marker.setTitle("Latitude:" + position[0] +
        " | Longitude:" + position[1]);
    marker.setPosition(latlng);
    if (i != numDeltas) {
        i++;
        setTimeout(moveMarker, delay);
    }
};

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

// Code for upload img in page logo @anjudewangan
imgInp.onchange = evt => {
    const [file] = imgInp.files;
    if (file) {
        pageLogo.src = URL.createObjectURL(file);
    }
}

// Code for upload img in page logo @anjudewangan


// Code for upload img in banner @anjudewangan
inputGroupFile01.onchange = evt => {
    const [file] = inputGroupFile01.files;
    if (file) {
        bannerImg.src = URL.createObjectURL(file);
    }
}
function uploadBtnHide() {
    $("label[for='inputGroupFile01']").css("display", "none");
    $("#bannerPara").css("display", "none");
    $("#banner-img-icon-1 label").css("display", "block");
    $(".banner-image img").css("width", "100%");
    $(".banner-image img").css("height", "125px");
}

inputGroupFile03.onchange = evt => {
    const [file] = inputGroupFile03.files;
    if (file) {
        bannerImg.src = URL.createObjectURL(file);
    }
}

// Code for upload img in banner @anjudewangan


// Code for upload img in About Section @anjudewangan
inputGroupFile02.onchange = evt => {
    const [file] = inputGroupFile02.files;
    if (file) {
        uploadImg.src = URL.createObjectURL(file);
    }
}

function uploadBtnHideAboutSec() {
    $("label[for='inputGroupFile02']").css("display", "none");
    $("#bannerPara").css("display", "none");
    $("#banner-img-icon-2 label").css("display", "block");
    $(".dvAbout .dvSubject-4 img").css("width", "100%");
    $(".dvAbout .dvSubject-4 img").css("height", "100%");
}

inputGroupFile04.onchange = evt => {
    const [file] = inputGroupFile04.files;
    if (file) {
        uploadImg.src = URL.createObjectURL(file);
    }
}
// Code for upload img in About Section @anjudewangan


//   Code for setting > about > statement @anjudewangan 

editor.document.designMode = "On";

function transform(option, argument) {
    editor.document.execCommand(option, true, argument);
};

//   Code for setting > about > statement @anjudewangan 