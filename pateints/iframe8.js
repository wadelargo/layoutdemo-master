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
