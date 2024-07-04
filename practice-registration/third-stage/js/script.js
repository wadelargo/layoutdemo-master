$(document).ready(function() {
    // register5
    $("#btn-address-line").click(function() {
        $("#btn-address-line").addClass('button-clicked');
    });

    // Register6
    $("#showTable-2").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $(this).parents(".inner_wrap").find("#tableHead").show();
            $(this).parents(".inner_wrap").find("#table-2").show();
            $(".dvtiming").css("height", "1000px");
            $("ul li").css("background-color", "#ffffff");
        } else {
            $(this).parents(".inner_wrap").find("#tableHead").hide();
            $(this).parents(".inner_wrap").find("#table-2").hide();
            $(".dvtiming").css("height", "435px");
            $("ul li").css("background-color", "#bfeff5");
        }
    });

    $("#addBreak-1").click(function() {
        $("#trLunch-1").show();
        $("#addBreak-1").hide();

    });
    $("#addBreak-M").click(function() {
        $("#trLunch-M").show();
        $("#addBreak-M").hide();
    });
    $("#addBreak-Tue").click(function() {
        $("#trLunch-Tue").show();
        $("#addBreak-Tue").hide();
    });
    $("#addBreak-Wed").click(function() {
        $("#trLunch-Wed").show();
        $("#addBreak-Wed").hide();
    });
    $("#addBreak-Thus").click(function() {
        $("#trLunch-Thus").show();
        $("#addBreak-Thus").hide();
    });
    $("#addBreak-F").click(function() {
        $("#trLunch-F").show();
        $("#addBreak-F").hide();
    });
    $("#addBreak-Sat").click(function() {
        $("#trLunch-Sat").show();
        $("#addBreak-Sat").hide();
    });
    $("#addBreak-Sun").click(function() {
        $("#trLunch-Sun").show();
        $("#addBreak-Sun").hide();
    });
    $("#check-M").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#monday").css("background-color", "#bfeff5");

        } else {
            $("#monday").css("background-color", "#ffffff");
        }
    });
    $("#check-Tue").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#tuesday").css("background-color", "#bfeff5");

        } else {
            $("#tuesday").css("background-color", "#ffffff");
        }
    });

    $("#check-Wed").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#wednesday").css("background-color", "#bfeff5");

        } else {
            $("#wednesday").css("background-color", "#ffffff");
        }
    });
    $("#check-Thus").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#thuesday").css("background-color", "#bfeff5");

        } else {
            $("#thuesday").css("background-color", "#ffffff");
        }

    });
    $("#check-F").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#friday").css("background-color", "#bfeff5");

        } else {
            $("#friday").css("background-color", "#ffffff");
        }
        $("#friday").css("background-color", "#bfeff5");

    });
    $("#check-Sat").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#saturday").css("background-color", "#bfeff5");

        } else {
            $("#saturday").css("background-color", "#ffffff");
        }

    });
    $("#check-Sun").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#sunday").css("background-color", "#bfeff5");

        } else {
            $("#sunday").css("background-color", "#ffffff");
        }

    });
    $("#table-2 tr").click(function() {
        $(".dvtiming").css("height", "1400px");
    });

    // Register8
    $("#yes").click(function() {
        $(".noGST").show();
        $(".org_container").css("height", "670px");
    });
    $("#no").click(function() {
        $(".noGST").hide();
        $(".org_container").css("height", "520px");
    });
    $("#panNumber").change(function() {
        var inputvalues = $(this).val();
        var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!regex.test(inputvalues)) {
            $("#panNumber").val("");
            alert("Invalid PAN number");
            return regex.test(inputvalues);
        }
    });
    $("#pan_holder_name").change(function() {
        var inputvalues = $(this).val();
        var filter = /^(?![^-]*--+)(?![0-9]+$)[a-zA-Z0-9][-a-zA-Z0-9]{3,23}[a-zA-Z0-9]$/;
        if (!filter.test(inputvalues)) {
            $("#pan_holder_name").val("");
            alert("Invalid PAN hoder name");
            return filter.test(inputvalues);
        }
    });
    $("#gst_name").change(function() {
        var inputvalues = $(this).val();
        var gstFilter = /^(?![^-]*--+)(?![0-9]+$)[a-zA-Z0-9][-a-zA-Z0-9]{3,23}[a-zA-Z0-9]$/;
        if (!gstFilter.test(inputvalues)) {
            $("#gst_name").val("");
            alert("Invalid GST name");
            return gstFilter.test(inputvalues);
        }
    });
    $("#gst_number").change(function() {
        var inputvalues = $(this).val();
        var reggst = /^([0-9]){2}([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([0-9]){1}([a-zA-Z]){1}([0-9]){1}?$/;
        if (!reggst.test(inputvalues)) {
            $("#gst_number").val("");
            alert("Invalid GST number");
            return reggst.test(inputvalues);
        }
    });
    $(function() {
        var submitButton = $(".detail_container button[type='submit']").attr("disabled", true);
        $(".inner_wrap input.required").change(function() {
            var valid = true;
            $.each($(".inner_wrap input.required"), function(index, value) {

                if (!$(value).val()) {
                    valid = false;
                }
            });
            if (valid) {
                $(submitButton).attr("disabled", false);

            } else {
                $(submitButton).attr("disabled", true);
            }
        });

    });

    $('input:radio[name="answer"][value="Yes"]')
        .attr('checked', true);

    // register9
    $("#account_holder_name").change(function() {
        var inputvalues = $(this).val();
        var accountFilter = /^(?![^-]*--+)(?![0-9]+$)[a-zA-Z0-9][-a-zA-Z0-9]{3,23}[a-zA-Z0-9]$/;
        if (!accountFilter.test(inputvalues)) {
            $("#account_holder_name").val("");
            alert("Invalid account holder name");
            return accountFilter.test(inputvalues);
        }
    });
    $("#account_number").change(function() {
        var inputvalues = $(this).val();
        var re = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
        if (!re.test(inputvalues)) {
            $("#account_number").val("");
            alert("Invalid account number");
            return re.test(inputvalues);
        }
    });
    $("#confirm_account_number").change(function() {
        var accountNumber = $("#account_number").val();
        var confirmAccountNumber = $("#confirm_account_number").val();
        if (accountNumber != confirmAccountNumber) {
            alert("Account number do not match");
            return false;
        }
        return true;
    });
    $("#bank_name").change(function() {
        var inputvalues = $(this).val();
        var breg = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

        if (!breg.test(inputvalues)) {
            $("#bank_name").val("");
            alert("Invalid bank name");
            return breg.test(inputvalues);
        }
    });
    $("#ifsc_code").change(function() {
        var inputvalues = $(this).val();
        var reg = /^[A-Za-z]{4}0[A-Z0-9]{6}$/;

        if (!reg.test(inputvalues)) {
            $("#ifsc_code").val("");
            alert("Invalid IFSC code");
            return reg.test(inputvalues);
        }
    });
    $("#branch_address").change(function() {
        var inputvalues = $(this).val();
        var areg = /^[0-9a-zA-Z]+$/;

        if (!areg.test(inputvalues)) {
            $("#branch_address").val("");
            alert("Invalid branch address");
            return areg.test(inputvalues);
        }
    });


    // register7
    const chargeOfServiceFees = [];
    chargeOfServiceFees.map((service, fees) => {
        $(".dvChargeServiceFees").append('<div class="inner_input inner_label"><div class="addtag"><label for="" class="dvServices"><span>' + service + '</span><span class="charge">' + fees + '</span></label><i class="fa fa-times-circle deleteLabel"aria-hidden="true"></i></div></div>');
    });

    function ShowServiceFees() {
        $(".dvbottom").css("display", "flex");
        $(".dvChargeServiceFees").show();
        $(".dv_services_container").css("height", "700px");

    };

    $(".service-link").click(function() {
        ShowServiceFees();
    });

    $("#btnAdd").click(function() {
        ShowServiceFees();
        $(".dvbottom").hide();

    });

    $("button[id='btnAdd']").click(function() {
        const getService = $("#service").val().trim();
        const getFees = $("#fees").val().trim();
        chargeOfServiceFees.push(getService);
        chargeOfServiceFees.push(getFees);

        $(".dvChargeServiceFees").append('<div class="inner_input inner_label"><div class="addtag"><label for="" class="dvServices"><span>' + getService + '</span><span class="charge">₹' + getFees + '</span></label><i class="fa fa-times-circle deleteLabel" aria-hidden="true"></i></div></div>');
        $("#service").val("");
        $("#fees").val("");
        return false;
    });

    $(document).on("click", ".deleteLabel", function() {
        $(this).parent('div').remove();
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

function openRegister5() {
    window.open("register5.html");
};

function openRegister6() {
    window.open("register6.html");
};

function openIndex() {
    window.open("index.html");
};

function openRegister7() {
    window.open("register7.html");
};

function openRegister5() {
    window.open("register5.html");
};

function openRegister8() {
    window.open("register8.html");
};

function openRegister6() {
    window.open("register6.html");
};

function openRegister9() {
    window.open("register9.html");
};

function openRegister7() {
    window.open("register7.html");
};

function openIndex() {
    window.open("index.html");
};

function openRegister8() {
    window.open("register8.html");
};

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

    google.maps.event.addListener(map, "click", function(event) {
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