const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".container-1");
// const icon = hamburger.querySelector(".fa-bars")
hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

const image_input = document.querySelector("#image_input");
var uploaded_image;
var x = document.querySelector(".container_i");
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

x.onmouseover = function () {
  mouseOver();
};
x.onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  x.style.opacity = "1";
}
function mouseOut() {
  x.style.opacity = "0";
}

var modal1 = document.getElementById("modal-container");
var btn = document.getElementById("merge-btn");
var span = document.getElementsByClassName("close")[0];
var section = document.getElementById("section");
btn.onclick = function () {
  modal1.style.display = "block";
  section.style.overflow = "hidden";
};

span.onclick = function () {
  modal1.style.display = "none";
  section.style.overflow = "scroll";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    section.style.overflow = "scroll";
  }
};

const form = document.getElementById("form");
const input = document.getElementById("todo_input");
const todosUL = document.getElementById("todos");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTodo();
  }
});

function addTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;
    todosUL.appendChild(todoEl);
    input.value = "";
  }
}

// document.getElementById("add-btn").addEventListener("click", function () {
//   var text = document.getElementById("id").value;
//   JsBarcode("#barcode", text, {
//     height: 35,
//     width: 1,
//   });
// });

function onScanSuccess(qrMessage) {
  var scanResult = document.getElementById("qr-reader-results");
  scanResult.innerHTML = `Scan result ${qrMessage}`;
}

function onScanFailure(error) {
  console.warn(`QR error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: 250 },
  false
);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);

var btn = document.getElementById("scan");
const scn = document.getElementById("reader");

btn.addEventListener("click", function () {
  const reader = document.getElementById("scn_modal");
  if (reader.style.display !== "flex") {
    reader.style.display = "flex";
    section.style.overflow = "hidden";
  } else {
    reader.style.display = "none";
    section.style.overflow = "scroll";
  }
});

scn_modal.onclick = function (event) {
  if (event.target == scn_modal) {
    scn_modal.style.display = "none";
    section.style.overflow = "scroll";
  }
};

var search_btn = document.getElementById("advnc-search");
search_btn.addEventListener("click", function () {
  const modal_srch = document.getElementById("advance-srch");
  if (modal_srch.style.display !== "flex") {
    modal_srch.style.display = "flex";
  } else {
    modal_srch.style.display = "none";
  }
});

const memberValue = document.getElementById("relation");
const memberName = document.getElementById("member_name");
memberName.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    const memberli = document.createElement("li");
    const memberShow = document.getElementById("relation_info");
    memberli.innerHTML = `${memberValue.value}:${memberName.value}`;
    memberShow.style.display = "flex";
    memberShow.appendChild(memberli);
  }
});
const addNewFamily = document.getElementById("add_new");
addNewFamily.addEventListener("click", function (event) {
  event.preventDefault();
  const newInput = document.createElement("input");
  const member = document.getElementById("member");
  member.appendChild(newInput);
  newInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      event.preventDefault();
      const memberli = document.createElement("li");
      const memberShow = document.getElementById("relation_info");
      memberShow.style.display = "flex";
      memberli.innerHTML = `${memberValue.value}:${newInput.value}`;
      memberShow.appendChild(memberli);
    }
  });
});

const allergyAdd = document.getElementById("allergyadd");
allergyAdd.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    const allergy = document.getElementById("allergy");
    const allergInput = document.getElementById("allergy_info");
    const allergyli = document.createElement("li");
    allergyli.innerHTML = `${allergy.value}:${allergyAdd.value}`;
    allergInput.appendChild(allergyli);
  }
});

var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last");
const middleName = document.getElementById("middle_name");
const refer = document.getElementById("refer");
const mobileNumber = document.getElementById("mobile_number");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const bloodGroup = document.getElementById("blood_group");
const language = document.getElementById("language");
const address = document.getElementById("address");
const pin = document.getElementById("pin");
const city = document.getElementById("city");
const relation = document.getElementById("relation");
const memberNames = document.getElementById("member_name");
const insurance = document.getElementById("yes");
const insuranceProvider = document.getElementById("insurance");
const insurancePlan = document.getElementById("plan");
const policy = document.getElementById("policy");
const addBtn = document.getElementById("appt-btn");
addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(
    firstName.value,
    lastName.value,
    middleName.value,
    refer.value,
    mobileNumber.value,
    email.value,
    dob.value,
    age.value,
    gender.value,
    bloodGroup.value,
    language.value,
    address.value,
    pin.value,
    city.value,
    relation.value,
    memberNames.value,
    insurance.value,
    insuranceProvider.value,
    insurancePlan.value,
    policy.value
  );

  var barCode = firstName.value;
  JsBarcode("#barcode", barCode, {
    height: 35,
    width: 1,
  });
});

// });
