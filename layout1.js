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

$(document).ready(function(){
  $("#ListOfAnnounce").hide();

  $("#notif").click(function(){
    $("#ListOfNotif").show();
    $("#ListOfAnnounce").hide();

  })
  $("#announce").click(function(){
    $("#ListOfAnnounce").show();
    $("#ListOfNotif").hide();
  })
  $("#hideNotifBox").click(function(){
    $("#alertDetails").hide();
  })
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
    // if (document.getElementById("leftright").style.width === "95.5%" || document.getElementById("leftright").style.width === "") {
    //     document.getElementById("leftright").style.width = "83.5%"
    // } else {
    //     document.getElementById("leftright").style.width = "95.5%";
    // }
    // if (document.getElementById("navbar-fourth").style.width === "96%" || document.getElementById("navbar-fourth").style.width === "") {
    //     document.getElementById("navbar-fourth").style.width = "83.5%";
    //     console.log("83")
    // } else if (document.getElementById("navbar-fourth").style.width === "78%") {
    //     document.getElementById("navbar-fourth").style.width = "65%";
    //     console.log("65")
    // } else if (document.getElementById("navbar-fourth").style.width === "65%") {
    //     document.getElementById("navbar-fourth").style.width = "78%";
    //     console.log("78")
    // } else {
    //     document.getElementById("navbar-fourth").style.width = "96%";
    // }
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
    // if (document.getElementById("Appointment").style.marginLeft === "480px" || document.getElementById("Appointment").style.marginLeft === "") {
    //     document.getElementById("Appointment").style.marginLeft = "300px";
    // } else if (document.getElementById("Appointment").style.marginLeft === "300px") {
    //     document.getElementById("Appointment").style.marginLeft = "480px"
    // } else if (document.getElementById("Appointment").style.marginLeft === "180px") {
    //     document.getElementById("Appointment").style.marginLeft = "10px"
    // } else if (document.getElementById("Appointment").style.marginLeft === "10px") {
    //     document.getElementById("Appointment").style.marginLeft = "180px"
    // }
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
// graphs sales activty

// bar charts
let charData = {
    labels: ["2004/05", "2005/06", "2006/07", "2007/08", "2008/09"],
    datasets: [
      {
        label: "IPD",
        type: "bar",
        backgroundColor: "#3366cc",
        data: [170, 170, 170, 170, 170],
      },
      {
        label: "redone",
        type: "bar",
        backgroundColor: "#dc3912",
        data: [900, 1000, 1080, 1170, 700],
      },
      {
        label: "OPD",
        type: "bar",
        backgroundColor: "#ff9900",
        data: [500, 600, 580, 570, 700],
      },
      {
        label: "patient total",
        type: "bar",
        backgroundColor: "#109618",
        data: [980, 1200, 760, 1000, 980],
      },
      {
        label: "purpleOne",
        type: "bar",
        backgroundColor: "#990099",
        data: [100, 200, 60, 150, 280],
      },
    ],
  };
  let charData1 = {
    labels: [
      "1986",
      "1987",
      "1988",
      "1989",
      "1990",
      "1991",
      "1992",
      "1993",
      "1994",
      "1995",
      "1996",
      "1997",
      "1998",
      "1999",
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
    ],
    datasets: [
      {
        label: "line1",
        type: "line",
        borderColor: "#37afd2",
        pointRadius: 1,
        data: [
          1, 2, 5, 7, 12, 18, 21, 25, 17, 6, 4, 9, 15, 16, 20, 16, 9, 6, 4, 11,
          15, 17, 13, 6,
        ],
        fill: false,
      },
      {
        label: "line2",
        type: "line",
        borderColor: "#dc3912",
        pointRadius: 1,
        data: [
          8, 2, 5, 7, 13, 16, 13, 17, 22, 23, 20, 18, 19, 23, 17, 8, 10, 16, 14,
          11, 12, 16, 10, 6,
        ],
        fill: false,
      },
      {
        label: "line3",
        type: "line",
        borderColor: "#109618",
        pointRadius: 1,
        data: [
          1, 3, 4, 8, 10, 8, 7, 12, 15, 8, 3, 4, 2, 7, 15, 18, 12, 21, 23, 20, 21,
          17, 18, 16,
        ],
        fill: false,
      },
    ],
  };
  let ctx = document.getElementById("mixed-chart");
  let myChart;
  
  let showGraph = () => {
    myChart = new Chart(ctx, {
      type: "bar",
      data: charData,
      options: {
        legend: { display: false },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };
  showGraph();
  let showLine = () => {
    myChart.destroy();
    myChart = new Chart(ctx, {
      type: "line",
      data: charData1,
      options: {
        legend: { display: false },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };
  
  // sales activities
  var xValues1 = [
    "Active Items",
    "Low Stock Items",
    "All Item Groups",
    "All Items",
    "yellowOne",
  ];
  var yValues1 = [55, 49, 44, 24, 15];
  var barColors = ["#109618", "#DC3912", "#990099", "#3366CC", "#F5B24D"];
  
  new Chart("myChart1", {
    type: "pie",
    data: {
      labels: xValues1,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Product Details",
      },
      legend: { display: false },
    },
  });

  // graph 4
let charData2 = {
  labels: ["01 july", "03 july", "05 july", "07 july", "09 july","11 july", "13 july", "15 july", "17 july", "19 july","21 july", "23 july", "25 july", "27 july", "29 july", "31 july"],
  datasets: [
    {
      label: "Traffic",
      data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }
  ],
};
let ctr = document.getElementById("chartGraph");
let helloChart = new Chart(ctr, {
  type: "line",
  data: charData2,
  options: {
    legend: { display: false },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
              min: 0,
              max: 5000,
              stepSize: 1000
          },
        },
      ],
    },
  },
});
// notification permission once when open the browser
function showNotifPermission() {
  Notification.requestPermission().then(function(getperm) 
  { 
    console.log('Perm granted', getperm) 
  });
}

// go back from the label page box
let myHospName=document.getElementById("myHospName");
myHospName.innerText="Add Establishment";
